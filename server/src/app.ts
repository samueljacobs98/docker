import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const port = process.env.SERVER_PORT || 3000;

app.get("/", async (_, res) => {
  const timeout = setTimeout(() => {
    res.send({ data: "Hello, World!" });
  }, 3000);

  return () => clearTimeout(timeout);
});

app.get("/ping", (_, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
