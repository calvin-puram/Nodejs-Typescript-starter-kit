import { PORT } from "./constants/index";
import app from "./app";

const port = PORT || 5000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
