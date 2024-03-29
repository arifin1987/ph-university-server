import express, { Application, Request, Response } from "express";
import cors from "cors";

import notFound from "./app/middlewares/notFound";

import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
import router from "./app/Routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get("/", test);
// globar error handler
app.use(globalErrorHandler);
// not found
app.use(notFound);

export default app;
