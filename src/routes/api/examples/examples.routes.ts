import { oak } from "../../../../deps.ts";
import { ExamplesController } from "../../../controllers/api/examples/examples.controller.ts";

const controller = new ExamplesController();

export const router = new oak.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
