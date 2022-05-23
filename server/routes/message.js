import { Router } from "express";
import controllers from "../controllers/messageControllers.js";

const router = Router();

router.post("/create",controllers.createMessage);

export default router;
