import * as OpenApiValidator from "express-openapi-validator";
import path from "path";

export const openApiValidatorMiddleware = OpenApiValidator.middleware({
  apiSpec: path.join(__dirname, "..", "docs", "openapi.json"),
  ignoreUndocumented: true,
});
