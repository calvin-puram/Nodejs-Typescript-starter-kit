import app from "./app";

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
