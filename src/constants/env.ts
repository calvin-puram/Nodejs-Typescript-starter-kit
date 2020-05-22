import { resolve } from "path";
import { config } from "dotenv";
config({ path: resolve(__dirname, "../../.env") });

import { EnvironmentName } from "../types/index";

const NODE_ENV = process.env.NODE_ENV || EnvironmentName.DEVELOPMENT;
const DEBUG = process.env.DEBUG === "true";

const {
  PORT,
  DB_URI,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_NAME,
  TEST_DB_USER,
  TEST_DB_PASS,
  TEST_DB_NAME,
  TEST_DB_HOST,
  TEST_DB_PORT,
  SALT_ROUNDS,
  TOKEN_EXPIRTY_TIME,
  JWT_SECRET,
} = process.env;

export {
  NODE_ENV,
  DEBUG,
  PORT,
  DB_URI,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_NAME,
  TEST_DB_USER,
  TEST_DB_PASS,
  TEST_DB_NAME,
  TEST_DB_HOST,
  TEST_DB_PORT,
  SALT_ROUNDS,
  TOKEN_EXPIRTY_TIME,
  JWT_SECRET,
};
