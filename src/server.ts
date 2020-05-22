import { PORT } from "./constants/index";
import logger from "./utils/logger";
import connectDB from "./database/config";
import app from "./app";

const port = PORT || 5000;

connectDB();

app.listen(port, () => {
  logger.info(`server listening on port ${port}`);
});
