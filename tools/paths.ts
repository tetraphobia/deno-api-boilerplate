import { path } from "../deps.ts";

const project = path.resolve(
  path.dirname(path.fromFileUrl(Deno.mainModule)),
  "..",
);

const build = path.resolve(
  project,
  "build",
);

const src = path.resolve(
  project,
  "src",
);

export default {
  build,
  src,
};
