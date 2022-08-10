import GreetingCard from "../model/greetingCard.js";
import Invitation from '../model/invitation.js';
import * as ResponseUtil from "../util/responseUtil.js";
import * as ExceptionUtil from '../util/exceptionUtil.js';
import umoji from "umoji";
import unicodecharString from "unicodechar-string";

export const create = async(req, res, next) => {
    console.log("Start execute create greeting card: " + req.params.ref_number);

    try {
        console.log("Find invitation by ref number: " + req.params.ref_number);
        const invitation = await Invitation.findOne({
            where: {
                refNumber: req.params.ref_number
            }
        });

        if (invitation == null) {
            throw ExceptionUtil.build("DATA_NOT_FOUND", "Undangan tidak tersedia.");
        }

        const greetingCardDb = await GreetingCard.findOne({
            where: {
                refNumber: req.params.ref_number
            }
        });

        if (greetingCardDb != null) {
            throw ExceptionUtil.build("DATA_ALREADY_EXIST", "Anda sudah mengisi kartu ucapan.");
        }

        let guestName = req.body.guest_name;
        if (guestName == null) {
            guestName = "Our Guest";
        }

        const greetingCard = await GreetingCard.create({
            refNumber: req.params.ref_number,
            guestName: guestName,
            message: umoji.emojiToUnicode(req.body.message)
        });

        const greetingCardResponse = {
            guest_name: greetingCard.guestName,
            message: unicodecharString(greetingCard.message)
        };
        res.json(ResponseUtil.build("SUCCESS", null, greetingCardResponse));
    } catch (error) {
        res.status(400).send(ResponseUtil.build(error.name || "ERROR", error.message || "Error when create greeting card!", null));
        return;
    }
    console.log("End execute create greeting card");
}

export const getAll = async(req, res, next) => {
    console.log("Start execute get all greeting cards");
    
    try {
        const greetingCards = await GreetingCard.findAll({
            order: [
                ['id', 'DESC']
            ]
        });
        const greetingCardsResponse = [];

        greetingCards.forEach(greetingCard => {
            greetingCardsResponse.push({
                guest_name: greetingCard.guestName,
                message: unicodecharString(greetingCard.message)
            });
        });
        res.json(ResponseUtil.build("SUCCESS", null, greetingCardsResponse));
    } catch (error) {
        res.status(400).send(ResponseUtil.build(error.name || "ERROR", error.message || "Error when get all greeting cards!", null));
        return;
    }
    console.log("End execute get all greeting cards");
}