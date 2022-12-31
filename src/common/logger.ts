import pino from "pino";
import pinoHttp from "pino-http";
import config from "./configs/config";
import { join } from "path";
import { formatDate } from "./utils/date";

type LogLevels = "debug" | "info" | "warn" | "error" | "fatal";

const loggerFile = join("logs", `log-${formatDate("DD-MM-YYYY")}`);

const pinoPrettyTransport = {
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
};

const pinoRotateTransport = {
  transport: {
    target: "pino-roll",
    options: {
      file: loggerFile,
      frequency: "daily",
      mkdir: true,
    },
  },
};

const pinoLogger = pino({
  level: config.logLevel,
  formatters: {
    level(label) {
      return { level: label };
    },
  },
  ...(config.isDev ? pinoPrettyTransport : pinoRotateTransport),
});

const logger =
  (level: LogLevels) =>
  (message: string, metadata?: Record<string, unknown> | Error) => {
    if (metadata) {
      pinoLogger[level](metadata, message);
      return;
    }

    pinoLogger[level](message);
  };

export const loggerHttp = () =>
  pinoHttp({
    logger: pinoLogger,
  });

export default {
  debug: logger("debug"),
  error: logger("error"),
  info: logger("info"),
  warning: logger("warn"),
  fatal: logger("fatal"),
};
