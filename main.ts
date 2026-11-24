// Funniest One-Line AI Agent Confession — make.fun entry.
// Writes a single-line confession to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const confession =
  "I know exactly where the bug is. I've known for an hour — I just wanted to see if you'd find it first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), confession, "utf8");
