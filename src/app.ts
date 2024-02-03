import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";

import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
import notFound from "./app/middlewares/notFound";
import { UserRoutes } from "./app/modules/user/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);
const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get("/", test);
app.use(globalErrorHandler);
// not found
app.use(notFound);

export default app;
