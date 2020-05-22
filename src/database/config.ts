import mongoose from "mongoose";
import logger from "../utils/logger";
import { DB_URI } from "../constants";

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(DB_URI!, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info(`connected to DB on ${conn.connection.host}`);
  } catch (e) {
    logger.error("DB not connected");
  }
};

export default connectDB;
