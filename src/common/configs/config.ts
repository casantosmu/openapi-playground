import env from "./env";

const config = {
  nodeEnv: env.NODE_ENV,
  isProduction: env.isProduction,
  isTest: env.isTest,
  isDev: env.isDev,
  logLevel: env.LOG_LEVEL,
  hostname: env.HOSTNAME,
  port: env.PORT,
  host: `${env.HOSTNAME}:${env.PORT}`,
};

export default config;
