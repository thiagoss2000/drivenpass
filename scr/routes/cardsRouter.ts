import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { newCredential } from "../schemas/filesSchema.js";
import * as cards from "../controllers/cardsController.js";

const cardsRouter = Router();

cardsRouter.post("/new/cards", validateToken, validateSchema(newCredential), cards.insertCard);
cardsRouter.get("/cards", validateToken, cards.getCardsAll);
cardsRouter.get("/cards/:id", validateToken, cards.getCardsId);
cardsRouter.delete("/cards/:id", validateToken, cards.deletedCardsId);

export default cardsRouter;