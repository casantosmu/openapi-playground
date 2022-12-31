import { type NextFunction, type Request, type Response } from "express";

const asyncWrapper =
  (callback: (req: any, res: any, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (error: unknown) {
      next(error);
    }
  };

export default asyncWrapper;
