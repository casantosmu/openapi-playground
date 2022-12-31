import dotenv from "dotenv";
import { cleanEnv, num, str, testOnly, url } from "envalid";

dotenv.config();

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ["development", "production", "test"],
    default: "development",
  }),
  LOG_LEVEL: str({
    choices: ["debug", "info", "warn", "error", "fatal"],
    default: "info",
    devDefault: "debug",
    desc: "Specifies the level of detail of the log messages that are written to the log.",
  }),
  PORT: num({
    default: 3000,
    devDefault: testOnly(0),
    desc: "For test environments must be 0, which means that a dynamically available port will be assigned.",
  }),
  HOSTNAME: url(),
});

export default env;
