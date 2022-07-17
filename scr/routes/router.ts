import { Router } from "express";
import authRouter from "./authRouter.js";
import cardsRouter from "./cardsRouter.js";
import credentialRouter from "./credentialsRouter.js";
import noteRouter from "./notesRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();
router.use(authRouter);
router.use(credentialRouter);
router.use(noteRouter);
router.use(cardsRouter);
router.use(wifiRouter);

export default router;