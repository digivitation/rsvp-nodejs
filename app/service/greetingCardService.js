import GreetingCard from "../model/greetingCard.js";
import * as ResponseUtil from "../util/responseUtil.js";
import umoji from "umoji";

export const create = async(req, res, next) => {
    console.log("Start execute create greeting card: " + req.body.guest_name);

    try {
        const greetingCard = await GreetingCard.create({
            guest_name: umoji.emojiToUnicode(req.body.guest_name),
            message: req.body.message
        });
        res.json(ResponseUtil.build("SUCCESS", null, greetingCard));
    } catch (error) {
        res.status(400).send(ResponseUtil.build(error.name || "ERROR", error.message || "Error when create greeting card!", null));
        return;
    }
    console.log("End execute create greeting card");
}

export const getAll = async(req, res, next) => {
    console.log("Start execute get all greeting cards");
    
    try {
        const greetingCards = await GreetingCard.findAll();
        res.json(ResponseUtil.build("SUCCESS", null, greetingCards));
    } catch (error) {
        res.status(400).send(ResponseUtil.build(error.name || "ERROR", error.message || "Error when get all greeting cards!", null));
        return;
    }
    console.log("End execute get all greeting cards");
}