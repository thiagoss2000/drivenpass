import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { newNote } from "../schemas/filesSchema.js";
import * as notes from "../controllers/notesController.js";

const noteRouter = Router();

noteRouter.post("/new/note", validateToken, validateSchema(newNote), notes.insertNote);
noteRouter.get("/note", validateToken, notes.getNotesAll);
noteRouter.get("/note/:id", validateToken, notes.getNotesId);
noteRouter.delete("/note/:id", validateToken, notes.deletedNotesId);

export default noteRouter;