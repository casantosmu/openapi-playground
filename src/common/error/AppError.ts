import statusCodes, { StatusCodes } from "../constants/statusCodes";

class AppError extends Error {
  constructor(
    readonly name: string,
    readonly message: string,
    readonly statusCode: StatusCodes = statusCodes.internalServerError
  ) {
    super(message);
  }
}

export default AppError;
