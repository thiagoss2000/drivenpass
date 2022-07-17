import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { acessControlSchema } from "../schemas/authSchema.js"
import * as auth from "../controllers/authController.js";

const authRouter = Router();

//authRouter.post("/signIn", validateSchema(acessControlSchema), auth.signIn);
authRouter.get("/signUp", auth.signUp);

export default authRouter;