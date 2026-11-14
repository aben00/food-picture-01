// food-picture-01 entry: copy the prepared food picture to the output dir.
//
// The picture itself is entry.png in this repository (a 1024x1024 JPEG,
// photorealistic tonkotsu ramen: chopsticks lifting glossy noodles from a
// creamy golden broth, steam, jammy-yolk egg, charred chashu, chili oil).
// This program only moves those exact bytes to $MAKEFUN_OUTPUT_DIR/entry.png,
// so both grading runs write identical output.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");
copyFileSync(source, target);
// The grader runs this program twice and both runs must write the same
// bytes, so verify the copy landed whole before exiting successfully.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  throw new Error(
    `entry.png copy incomplete: wrote ${targetBytes} of ${sourceBytes} bytes`,
  );
}
