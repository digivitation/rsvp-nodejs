import { Router } from 'express';
import invitationRoutes from './app/routes/invitationRoutes.js';
import greetingCardRoutes from './app/routes/greetingCardRoutes.js';
import telegramRoutes from './app/routes/telegramRoutes.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({message: 'ok'})
});

router.use('/invitation', invitationRoutes);
router.use('/greeting-card', greetingCardRoutes);
router.use('/telegram', telegramRoutes);

export default router;