# Assets

All media files served from `/public/images/`.

| File | Type | Used in | Section / purpose |
|------|------|---------|-------------------|
| `images/hero-bg.jpg` | Image | `iron-zen.css` | Hero — full-bleed background photo with parallax and ember overlay |
| `images/card-dawn-stillness.jpg` | Image | `index.astro` | The Days — "05:30 · Dawn / Stillness" card |
| `images/card-iron-work.jpg` | Image | `index.astro` | The Days — "09:00 · Iron / The Work" card |
| `images/card-fire-circle.jpg` | Image | `index.astro` | The Days — "20:00 · Fire / The Circle" card |
| `images/card-activity-flow.jpg` | Image | `index.astro` | Flow & Focus — "Move, then be still" activity card |
| `images/card-activity-frisbee.jpg` | Image | `index.astro` | Brotherhood — "Ultimate Frisbee" activity card (Kostja) |
| `images/card-activity-calisthenics.jpg` | Image | `index.astro` | Brotherhood — "Calisthenics" activity card (Henrique) |
| `images/card-activity-investing.jpg` | Image | `index.astro` | Brotherhood — "Value Investing" activity card (Peter) |
| `images/facilitator-henrique.jpg` | Image | `index.astro` | Facilitator section — Henrique Saraiva's portrait card (Ironman finish line) |
| `images/facilitator-edgar.jpg` | Image | _unused_ | Former facilitator portrait (Edgar) — kept for reference |
| `images/testimonial-bg.jpg` | Image | `index.astro` | Testimonial — dark background photo behind the quote block |
| `images/gallery-retreat-1.jpg` | Image | `index.astro` | Gallery strip — first image (2×2 grid, slot 1) |
| `images/gallery-retreat-2.jpg` | Image | `index.astro` | Gallery strip — second image (2×2 grid, slot 2) |
| `images/gallery-retreat-3.jpg` | Image | `index.astro` | Gallery strip — third image (2×2 grid, slot 3) |
| `images/gallery-retreat-4.jpg` | Image | `index.astro` | Gallery strip — fourth image (2×2 grid, slot 4) |
| `images/film-retreat.mp4` | Video | `index.astro` | Film section — autoplay ambient video with scrim overlay |
| `images/dubai-hero-skyline.jpg` | Image | `gregor-dubai.css` | Dubai Era — hero background (Dubai skyline at night, Burj Khalifa) |
| `images/dubai-marina-night.jpg` | Image | `gregor-dubai.css` | Dubai Era — "Die Auswanderung" split media + CTA panel (Marina at night) |
| `images/dubai-gym-chad.jpg` | Image | `gregor-dubai.css` | Dubai Era — "Push Day" timeline card (gym training) |
| `images/dubai-seminar-stage.jpg` | Image | `gregor-dubai.css` | Dubai Era — stage timeline card + "Closer Kodex" seminar card |
| `images/dubai-desert-suv.jpg` | Image | `gregor-dubai.css` | Dubai Era — "Mindset Offensive" seminar card + gallery (desert dunes) |
| `images/dubai-yacht.jpg` | Image | `gregor-dubai.css` | Dubai Era — gallery slot 2 (Marina aerial with yachts) |
| `images/dubai-boardroom.jpg` | Image | `gregor-dubai.css` | Dubai Era — "Cash & Calisthenics" seminar card (modern office) |
| `images/dubai-chad-suit.jpg` | Image | `gregor-dubai.css` | Dubai Era — gallery slot 3 (businessman portrait) |

## Stock photography

The eight `dubai-*.jpg` files are stock photos from [Unsplash](https://unsplash.com),
used under the [Unsplash License](https://unsplash.com/license) — free for commercial
use, no attribution required.

They are referenced from `gregor-dubai.css` as **layered slots**: each `.dxb-shot`
rule lists the JPG followed by a gradient fallback, so if a file is ever missing the
page still renders its built-in gradient art instead of breaking. The hero is the same
idea in two elements — inline SVG skyline art underneath, `.dxb-hero__photo` on top.
To swap any image, drop a replacement at the same path; no code change needed.
