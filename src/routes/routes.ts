import { oak } from "../../deps.ts";
import { router } from "./api/api.routes.ts";

export const rootRouter = new oak.Router();

rootRouter.use("/api", router.routes(), router.allowedMethods());
