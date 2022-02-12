import { Router } from "express";
import * as svc from "../service/greetingCardService.js";

const router = Router();

router.get("/", svc.getAll);
router.post("/", svc.create);

export default router;