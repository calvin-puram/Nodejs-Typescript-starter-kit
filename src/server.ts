import { PORT } from "./constants/index";
import logger from "./utils/logger";
import app from "./app";

const port = PORT || 5000;

app.listen(port, () => {
  logger.info(`server listening on port ${port}`);
});
