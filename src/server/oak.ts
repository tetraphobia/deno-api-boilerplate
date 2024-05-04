import { oak, simplelog } from "../../deps.ts";
import { rootRouter } from "../routes/routes.ts";

export const app = new oak.Application();

app.use(simplelog);
app.use(rootRouter.routes());
