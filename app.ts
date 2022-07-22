import express, { json } from "express";
import "express-async-errors";
import router from "./scr/routes/router.js";
import errorHandler from "./scr/middlewares/errorHandlerMiddleware.js"
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

app.use(router);
app.use(errorHandler);

export default app;