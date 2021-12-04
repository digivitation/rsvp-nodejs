import { Router } from 'express';
import * as svc from '../service/invitationService.js';

const router = Router();

router.get('/:ref_number', svc.getByRefNumber);

export default router;