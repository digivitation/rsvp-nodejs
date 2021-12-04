import Invitation from '../model/invitation.js';
import * as DataUtil from '../util/dataUtil.js';

export function getByRefNumber(req, res, next) {
    console.log('Start execute get by ref number: ' + req.params.ref_number);
    
    Invitation.findOne({
        where: {
            refNumber: req.params.ref_number
        }
    }).then(data => {
        res.json(DataUtil.buildResponse(data, 'SUCCESS')); 
    }).catch(err => {
        res.status(500).send({
            message:
              err.message || "Error when get all product!"
          });
    });
}