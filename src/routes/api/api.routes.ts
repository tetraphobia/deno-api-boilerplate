import { oak } from "../../../deps.ts";
import { router as examplesRouter } from "./examples/examples.routes.ts";

export const router = new oak.Router();

router.use(
  "/examples",
  examplesRouter.routes(),
  examplesRouter.allowedMethods(),
);
