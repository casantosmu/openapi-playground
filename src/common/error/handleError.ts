import AppError from "./AppError";
import util from "util";
import logger from "../logger";

const normalizeError = (error: unknown) => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    const normalizedError = new AppError(error.name, error.message);
    normalizedError.stack = error.stack;
    return normalizedError;
  }

  const inputType = typeof error;
  return new AppError(
    "generalError",
    `Error Handler received a none error instance with type - ${inputType}, value - ${util.inspect(
      error
    )}`
  );
};

const handleError = (error: unknown) => {
  const normalizedError = normalizeError(error);
  logger.error(normalizedError.message, normalizedError);
};

export default handleError;
