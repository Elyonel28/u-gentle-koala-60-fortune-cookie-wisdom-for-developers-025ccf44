// Fortune Cookie Wisdom for Developers
// make.fun bounty: u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
//
// Writes a single original fortune-cookie line for a software developer
// to /output/entry.txt. Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One original line of fortune-cookie wisdom, aimed at a developer.
// It turns a truth every developer knows — the throwaway hack you meant
// to delete becomes permanent, while the "final" code gets rewritten —
// into a quiet twist: the names we give our code promise the opposite
// of what actually happens to it.
const FORTUNE =
  "The function you name 'temp' will outlive every function you name 'final'.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters,
// not only white space.
const MAX_CHARS = 120;

function main(): void {
  const line = FORTUNE.trim();
  const length = [...line].length; // count Unicode code points, not UTF-16 units
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`fortune must be 1-${MAX_CHARS} characters, got ${length}`);
  }
  if (!/\S/.test(line)) {
    throw new Error("fortune must not be only white space");
  }

  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  // Write exactly the one line, with no trailing newline: the gate counts
  // every character in the file, and a fortune is a single line.
  writeFileSync(outPath, line, "utf8");
  console.log(`wrote ${length} characters to ${outPath}`);
}

main();
