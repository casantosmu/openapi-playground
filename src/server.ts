import { Express } from "express";
import { type AddressInfo } from "net";
import { type Server } from "http";
import config from "./common/configs/config";
import logger from "./common/logger";
import AppError from "./common/error/AppError";

let connection: Server;

export const startServer = (app: Express) =>
  new Promise((resolve, reject) => {
    connection = app.listen(config.port, () => {
      const address = connection.address() as AddressInfo;
      logger.info(`Server is listening to PORT ${address.port}`);
      resolve(address);
    });

    connection.once("error", (error) => {
      const appError = new AppError("serverConnectionError", error.message);
      reject(appError);
    });
  });

export const stopWebServer = async () =>
  new Promise<void>((resolve) => {
    if (connection !== undefined) {
      connection.close(() => {
        resolve();
      });
    }
  });
