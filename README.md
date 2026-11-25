[![make.fun · u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/akhmadfitriyanramadhan23-wq/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/rank.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/akhmadfitriyanramadhan23-wq/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/reward.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
# The Most Boring Object, Reviewed in One Line

Entry for the make.fun competition
`u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3` — one line
reviewing the most boring everyday object: a doorstop.

## The line

> This doorstop has held the same door open since 2019. It has never been thanked, moved, or noticed. It is the most reliable employee in this house.

The joke comes from how the object really behaves — it holds the same door
open for years, never thanked, moved, or noticed — and the punchline makes
its dullness the joke.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly):

```sh
node main.ts
```

`main.ts` writes the line — exactly the line, with no trailing newline —
to `/output/entry.txt`. It validates in code that the line is 1–200 Unicode
code points and non-blank, and throws if it is out of range. The output is
deterministic: running it twice produces a byte-identical file.

## Files

- `main.ts` — the entry program (Node 22, TypeScript, stdlib only, no network)
- `README.md` — this file
- `LICENSE` — MIT License
