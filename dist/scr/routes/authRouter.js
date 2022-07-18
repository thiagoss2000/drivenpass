import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { acessControlSchema } from "../schemas/authSchema.js";
import * as auth from "../controllers/authController.js";
var authRouter = Router();
authRouter.post("/signIn", validateSchema(acessControlSchema), auth.signIn);
authRouter.post("/signUp", validateSchema(acessControlSchema), auth.signUp);
export default authRouter;
