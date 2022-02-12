import Invitation from '../model/invitation.js';
import * as ResponseUtil from '../util/responseUtil.js';

export function getByRefNumber(req, res, next) {
    console.log('Start execute get by ref number: ' + req.params.ref_number);
    
    Invitation.findOne({
        where: {
            refNumber: req.params.ref_number
        }
    }).then(data => {
        res.json(ResponseUtil.build('SUCCESS', null, data)); 
    }).catch(err => {
        res.status(400).send(ResponseUtil.build("ERROR", err.message || "Error when get invitation by ref number!", null));
    });
}