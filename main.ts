import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about a small good thing that happened today.
// Warmth: an eighty-two-year-old neighbour carrying groceries.
// Surprise: she beats me to my own door. Concrete: 7 a.m., a name,
// an age, four floors. No greeting-card phrasing.
const LINE =
  "At 7 a.m. the lift broke, so Mrs. Alvarez, eighty-two, carried my groceries up four floors \u2014 and beat me to my own door.";

function checkLine(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function writeEntry(line: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  checkLine(line);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

writeEntry(LINE);
