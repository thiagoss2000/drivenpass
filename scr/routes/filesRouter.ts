import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { newCard, newCredential, newNote, newWifi } from "../schemas/filesSchema.js";

const filesRouter = Router();

filesRouter.post("/new/credential", validateToken, validateSchema(newCredential), );
filesRouter.post("/new/note", validateToken, validateSchema(newNote), );
filesRouter.post("/new/card", validateToken, validateSchema(newCard), );
filesRouter.post("/new/wifi", validateToken, validateSchema(newWifi), );


export default filesRouter;