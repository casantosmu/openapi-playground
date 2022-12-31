import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { Router } from "express";

const router = Router();

const openApiDocument = JSON.parse(
  fs.readFileSync(path.join(__dirname, "openapi.json"), "utf-8")
);

router.use(swaggerUi.serve, swaggerUi.setup(openApiDocument));

export default router;
