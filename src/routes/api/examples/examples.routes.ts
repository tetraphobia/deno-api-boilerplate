import { Router } from "oak";
import { ExamplesController } from "../../../controllers/api/examples/examples.controller.ts";

export const ExamplesRouter = new Router();

ExamplesRouter.get("/", ExamplesController.getAll);
ExamplesRouter.get("/:id", ExamplesController.getOne);