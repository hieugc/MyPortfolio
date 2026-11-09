import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));
const output = join(root, "dist");
const sourceFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "portfolio-data.mjs",
  "favicon.svg",
  "site.webmanifest",
  ".nojekyll"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of sourceFiles) {
  await cp(join(root, file), join(output, file));
}

console.log("Static portfolio built in dist/.");
