import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { newCredential } from "../schemas/filesSchema.js";
import * as wifi from "../controllers/wifiController.js";

const wifiRouter = Router();

wifiRouter.post("/new/wifi", validateToken, validateSchema(newCredential), wifi.insertWifi);
wifiRouter.get("/wifi", validateToken, wifi.getWifisAll);
wifiRouter.get("/wifi/:id", validateToken, wifi.getWifisId);
wifiRouter.delete("/wifi/:id", validateToken, wifi.deletedWifisId);

export default wifiRouter;