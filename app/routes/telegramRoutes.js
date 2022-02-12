import { Router } from "express";
import * as svc from "../service/telegramService.js";

const router = Router();
router.post("/send", svc.sendMessage);

export default router;