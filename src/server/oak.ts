import { Application } from "oak";
import { RootRouter } from "../routes/routes.ts";

export const App = new Application();

App.use(RootRouter.routes());
