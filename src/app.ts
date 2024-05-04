import { config } from "./config/config.ts";
import { app } from "./server/oak.ts";

await app.listen({ port: config.OAK_PORT });
