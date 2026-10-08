import express, { Router, type Express } from "express";
import router from "./routes";

const PORT = 3001;
const app: Express = express();

app.use(express.json());
app.use("/", router);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    if (err) console.error(err);
    res.status(500).json({
      error: "Internal server error",
    });
  },
);
app.listen(PORT, () => {
  console.log(`Backend running on port: ${PORT}`);
});
