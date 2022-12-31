import { NextFunction, Request, Response } from "express";
import statusCodes, { StatusCodes } from "../constants/statusCodes";
import AppError from "./AppError";
import { ErrorResponse } from "./error.interfaces";
import handleError from "./handleError";
import * as OpenApiValidator from "express-openapi-validator";

export const generalErrorMiddleware = (
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  handleError(error);

  let statusCode: StatusCodes = statusCodes.internalServerError;
  if (error instanceof AppError) {
    statusCode = error.statusCode;
  }
  if (error instanceof OpenApiValidator.error.BadRequest) {
    statusCode = statusCodes.badRequest;
  }

  const { name, message } =
    error instanceof AppError ||
    error instanceof OpenApiValidator.error.BadRequest
      ? error
      : { name: "internalServerError", message: "INTERNAL SERVER ERROR" };

  const response: ErrorResponse = {
    error: {
      name,
      message,
    },
  };

  if (error instanceof OpenApiValidator.error.BadRequest) {
    response.error.details = error.errors.map((error) => ({
      name: "badRequest",
      message: error.message,
      target: error.path,
    }));
  }

  res.status(statusCode).json(response);
};

export const notFoundErrorMiddleware = (req: Request, res: Response) => {
  const response: ErrorResponse = {
    error: {
      name: "notFound",
      message: "NOT FOUND",
    },
  };

  res.status(statusCodes.notFound).json(response);
};
