import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Welcome!!!",
  });
});

export default app;
