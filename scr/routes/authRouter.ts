import { Router } from "express";
import * as auth from "./../controllers/authController.js";

const authRouter = Router();

authRouter.post("/", auth.login);
authRouter.post("/", auth.signUp);

export default authRouter;