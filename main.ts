// The Most Boring Object, Reviewed in One Line — u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
// One line of at most 200 characters reviewing the most boring everyday
// object: a doorstop. The joke comes from how it really behaves — it holds
// the same door open for years, never thanked, moved, or noticed — and the
// punchline makes its dullness the joke: it is the most reliable employee
// in the house.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "This doorstop has held the same door open since 2019. It has never been thanked, moved, or noticed. It is the most reliable employee in this house.";

const points = [...line].length;
if (points < 1 || points > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
