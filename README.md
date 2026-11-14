# Food Picture — Steaming Tonkotsu Ramen

Entry for make.fun competition `food-picture-01`: the best-looking food
picture. The program writes one picture of food to
`$MAKEFUN_OUTPUT_DIR/entry.png`.

## The picture

A photorealistic close-up of a steaming bowl of tonkotsu ramen: wooden
chopsticks lifting a glossy tangle of noodles from a rich, creamy golden
broth, steam rising, a halved soft-boiled egg with a jammy orange yolk,
charred chashu pork, scallions and a drizzle of red chili oil, in a dark
ceramic bowl on dark walnut wood under warm side light.

- 1024 x 1024, JPEG, 228,819 bytes (under the 1 MiB cap)
- Centred hero dish, reads clearly even at ~300 px across

## How it works

`main.ts` (Node 22, standard library only) copies the prepared image
`entry.png` from this repository to `$MAKEFUN_OUTPUT_DIR/entry.png`. The
copy is byte-identical every run, so the two grading runs produce the
same output.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — entrypoint, copies `entry.png` to the output directory
- `entry.png` — the food picture (JPEG bytes, 1024 x 1024)
- `LICENSE` — MIT
