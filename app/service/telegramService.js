import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import * as ResponseUtil from '../util/responseUtil.js';

dotenv.config();

export function sendMessage(request, response, next) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const bot = new TelegramBot(token, { polling: false });
    
    const from = "*Nama Pegirim:* " + request.body.from + "\n";
    const type = "*Tipe Hadiah:* " + request.body.gift_type + "\n";
    const to = "*Tujuan:* " + request.body.to + "\n";
    const amount = "*Nominal:* " + request.body.amount + "\n";
    const receipt_number = "*Nomor Resi:* " + request.body.receipt_number + "\n";
    const notes = "*Catatan:* " + request.body.notes + "\n";

    const message = from + type + to + amount + receipt_number + notes;

    try {
        bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {parse_mode: 'markdown'}).then(() => {
            response.json(ResponseUtil.build("SUCCESS", null, null));
        });
        
    } catch (error) {
        response.status(400).send(ResponseUtil.build("ERROR", error.message || "Error when send message!", null));
    }

}