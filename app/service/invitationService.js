import Invitation from '../model/invitation.js';
import * as ResponseUtil from '../util/responseUtil.js';
import * as ExceptionUtil from '../util/exceptionUtil.js';

export const getByRefNumber = async(req, res, next) => {
    console.log('Start execute get by ref number: ' + req.params.ref_number);
    
    try {
        const invitation = await Invitation.findOne({
            where: {
                refNumber: req.params.ref_number
            }
        });

        if (invitation == null) {
            throw ExceptionUtil.build("DATA_NOT_FOUND", "Invitation not found!");
        }
        res.json(ResponseUtil.build('SUCCESS', null, invitation)); 
    } catch (error) {
        res.status(400).send(ResponseUtil.build(error.name || 'ERROR', error.message || 'Error when get by ref number!', null));
        return;
    }
}