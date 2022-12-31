import express from "express";
import helmet from "helmet";
import {
  generalErrorMiddleware,
  notFoundErrorMiddleware,
} from "./common/error/error.middlewares";
import { loggerHttp } from "./common/logger";
import { openApiValidatorMiddleware } from "./common/validator/validator.middlewares";
import router from "./router";

const app = express();

app.use(loggerHttp());
app.use(helmet());
app.use(express.json());

app.use(openApiValidatorMiddleware);
app.use(router);

app.use(notFoundErrorMiddleware);
app.use(generalErrorMiddleware);

export default app;
