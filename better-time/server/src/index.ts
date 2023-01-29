import express, { Express } from "express";

const app: Express = express();

app.listen(3000, () => {
  console.log("Running on port 3000");
});
