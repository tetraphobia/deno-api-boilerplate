import { Config } from "config";
import { App } from "./server/oak.ts";

await App.listen({ port: Config.oak_port });
