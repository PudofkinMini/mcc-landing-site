# MCC landing site

MCC’s static landing page for commercial laundry route accounting and inventory management. The publishable site lives in `public/`. It uses HTML, CSS, local fonts and responsive images.

## Local preview

Run the following command at the repository root and open [the preview](http://localhost:8080).

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory public
```

## Cloudflare Pages

Connect Pages directly to `PudofkinMini/mcc-landing-site`. Use the production branch `main`, select no framework preset, leave the build command empty and set the build output directory to `public`. The custom domain is [mcc.pleava.me](https://mcc.pleava.me).

## Assets and copy

The MCC mark comes from the RAS-2 internal portal. The hero is an original ink-style illustration of a linen truck and cart. The garment rail photograph comes from the previous site. Font licenses are in `licenses/`.

The customer quotation and contact information come from [MCC’s site](https://mobilecom.com/). Product details and company history are drawn from [MCC’s laundry overview](https://mobilecom.com/industries/route-accounting-for-linen-and-textile-rental-industry/) and [corporate overview](https://mobilecom.com/corporate-overview/).
