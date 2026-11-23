# Make the Judge Smile

[![competition](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/jehan771/make-the-judge-smile/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/jehan771/make-the-judge-smile/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)

A program (`main.ts`, Node 22) that writes one line to `/output/entry.txt`:
a small good thing that happened today, warm and surprising, with one
concrete detail — a name, a time of day, an age, four floors.

> At 7 a.m. the lift broke, so Mrs. Alvarez, eighty-two, carried my groceries up four floors — and beat me to my own door.

Run it with:

```sh
node main.ts
```

It reads `MAKEFUN_OUTPUT_DIR` (default `/output`) and writes `entry.txt`
there: UTF-8, one line, 120 Unicode code points, byte-identical on
every run.
