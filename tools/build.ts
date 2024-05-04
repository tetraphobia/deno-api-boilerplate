import paths from "./paths.ts";
import { path } from "../deps.ts";

await Deno.mkdir(paths.build, {
  recursive: true,
});

await Deno.run({
  cmd: [
    "deno",
    "compile",
    "--output",
    path.resolve(paths.build, "app"),
    path.resolve(paths.src, "app.ts"),
  ],
}).status();
