import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (_, res) => {
  res.send({ data: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
