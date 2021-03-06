import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { newCredential } from "../schemas/filesSchema.js";
import * as credentials from "../controllers/credentialsController.js";

const credentialRouter = Router();

credentialRouter.post("/new/credential", validateToken, validateSchema(newCredential), credentials.insertCredential);
credentialRouter.get("/credential", validateToken, credentials.getCredentialsAll);
credentialRouter.get("/credential/:id", validateToken, credentials.getCredentialsId);
credentialRouter.delete("/credential/:id", validateToken, credentials.deletedCredentialsId);

export default credentialRouter;