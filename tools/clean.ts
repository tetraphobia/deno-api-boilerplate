import paths from "./paths.ts";

const dirs = [
  paths.build,
];

for (const dir of dirs) {
  try {
    await Deno.remove(dir, { recursive: true });
    console.log(`Deleting ${dir}`);
  } catch (error) {
    // Do nothing if directory is not found.
    if (!(error instanceof Deno.errors.NotFound)) {
      throw error;
    }
  }
}
