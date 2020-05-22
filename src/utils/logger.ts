import * as winston from "winston";
import { DEBUG } from "../constants";

const winstonLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

/**
 * Console logger used throughout the app
 * @exports
 */
export default {
  /**
   * @param {*} data - the data to be logged
   * @returns {void}
   */
  info(data: string) {
    if (DEBUG) {
      winstonLogger.info(data);
    }
  },
  /**
   * @param {*} data - the data to be logged
   * @returns {void}
   */
  error(data: string) {
    if (DEBUG) {
      winstonLogger.info(data);
    }
  },
};
