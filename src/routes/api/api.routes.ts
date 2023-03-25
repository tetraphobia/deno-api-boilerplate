import { Router } from "oak";
import { ExamplesRouter } from "./examples/examples.routes.ts";

export const ApiRouter = new Router();

ApiRouter.use(
  "/examples",
  ExamplesRouter.routes(),
  ExamplesRouter.allowedMethods(),
);
