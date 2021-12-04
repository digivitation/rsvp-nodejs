import { Router } from 'express';
import invitationRoutes from './app/routes/invitationRoutes.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({message: 'ok'})
});

router.use('/invitation', invitationRoutes);

export default router;