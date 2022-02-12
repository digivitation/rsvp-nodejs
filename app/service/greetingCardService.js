import GreetingCard from "../model/greetingCard.js";
import * as ResponseUtil from "../util/responseUtil.js";
import umoji from "umoji";

export function create(req, res, next) {
    console.log("Start execute create greeting card: " + req.body.guest_name);

    GreetingCard.create({
        guest_name: umoji.emojiToUnicode(req.body.guest_name),
        message: req.body.message
    }).then(data => {
        res.json(ResponseUtil.build("SUCCESS", null, data));
    }).catch(err => {
        res.status(400).send(ResponseUtil.build("ERROR", err.message || "Error when create greeting card!", null));
    });
}

export function getAll(req, res, next) {
    console.log("Start execute get all greeting cards");

    GreetingCard.findAll().then(data => {
        res.json(ResponseUtil.build("SUCCESS", null, data));
    }).catch(err => {
        res.status(400).send(ResponseUtil.build("ERROR", err.message || "Error when get all greeting cards!", null));
    });
}