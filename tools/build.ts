import paths from './paths.ts'
import { resolve } from "std/path/mod.ts";

await Deno.mkdir(paths.build, {
  recursive: true,
});

await Deno.run({
  cmd: [
    "deno",
    "compile",
    "--output",
    resolve(paths.build, "app"),
    resolve(paths.src, "app.ts"),
  ],
}).status();
