import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "./scr/routes/router.js";
import errorHandler from "./scr/middlewares/errorHandlerMiddleware.js"
import cors from "cors";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server on port ${port}`));