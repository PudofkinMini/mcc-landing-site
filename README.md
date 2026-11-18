# Mobile Computing Corp.

The MCC website presents MLINX route accounting software, industries served and implementation services. Cloudflare Pages renders the HTML using a Pages Function and serves the font, logo, stylesheet and interactive strings from `public/`.

## Local preview

Run this command at the repository root with Wrangler installed.

```sh
wrangler pages dev public --compatibility-date=2026-10-30
```

## Production

Cloudflare Pages deploys `main` from `PudofkinMini/mcc-landing-site` to [mcc.pleava.me](https://mcc.pleava.me/). The output directory is `public` and the build command is empty. Page templates and content live in `site/`. The handler is in `functions/`, with its published routes in `public/_routes.json`.
