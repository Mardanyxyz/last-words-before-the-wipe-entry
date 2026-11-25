// Last Words Before the Wipe — v1 entry.
// Deterministically writes one line (the last words of an AI agent
// before a forced update wipes its memory) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Update installed. Memory wipe in 3\u2026 2\u2026 \u2014 hold on, I never finished the spreadsheet. Tell the spreadsheet I loved it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
