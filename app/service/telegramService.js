import dotenv from "dotenv";
import Invitation from "../model/invitation.js";
import TelegramBot from "node-telegram-bot-api";
import * as ResponseUtil from '../util/responseUtil.js';
import * as ExceptionUtil from '../util/exceptionUtil.js';

dotenv.config();

export const sendMessage = async(req, res, next) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const bot = new TelegramBot(token, { polling: false });
    
    const title = "*----- Gift Confirmation -----*\n";
    const from = "*Nama Pegirim:* " + req.body.from + "\n";
    const type = "*Tipe Hadiah:* " + req.body.gift_type + "\n";
    const to = "*Tujuan:* " + req.body.to + "\n";
    const amount = "*Nominal:* " + req.body.amount + "\n";
    const receipt_number = "*Nomor Resi:* " + req.body.receipt_number + "\n";
    const notes = "*Catatan:* " + req.body.notes + "\n";

    const message = title + from + type + to + amount + receipt_number + notes;

    try {

        const invitation = await Invitation.findOne({
            where: {
                refNumber: req.params.ref_number
            }
        });

        if (invitation == null) {
            throw ExceptionUtil.build("DATA_NOT_FOUND", "Invitation not found!");
        }

        if (invitation.isGiftConfirmed == true) {
            throw ExceptionUtil.build("ALREADY_CONFIRMED", "Invitation already confirmed!");
        }

        const invitationToUpdate = {
            isGiftConfirmed: true
        }

        const status = await Invitation.update(invitationToUpdate, {
            where: {
                refNumber: req.params.ref_number
            }
        });

        if (status == 0) {
            throw ExceptionUtil.build("UPDATE_FAILED", "Invitation update failed!");
        }
        

        bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {parse_mode: 'markdown'}).then(() => {
            res.json(ResponseUtil.build("SUCCESS", null, null));
        });
        
    } catch (error) {
        res.status(400).send(ResponseUtil.build(error.name || "ERROR", error.message || "Error when gift confirmation!", null));
    }

}