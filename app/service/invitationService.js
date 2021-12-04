import Invitation from '../model/invitation.js';

export function getByRefNumber(req, res, next) {
    console.log('Start execute get by ref number: ' + req.params.ref_number);
    
    Invitation.findOne({
        where: {
            ref_number: req.params.ref_number
        }
    }).then(data => {
        res.json({data: data}); 
    }).catch(err => {
        res.status(500).send({
            message:
              err.message || "Error when get all product!"
          });
    });
}