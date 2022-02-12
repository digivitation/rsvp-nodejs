import { Router } from 'express';
import invitationRoutes from './app/routes/invitationRoutes.js';
import greetingCardRoutes from './app/routes/greetingCardRoutes.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({message: 'ok'})
});

router.use('/invitation', invitationRoutes);
router.use('/greeting-card', greetingCardRoutes);

export default router;