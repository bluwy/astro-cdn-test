# Astro CDN test

Uses this PR locally: https://github.com/withastro/astro/pull/6714

Site served at https://bluwy.github.io/astro-cdn-test/ (See `gh-pages` branch)

Assets are served from https://astro-cdn-test.pages.dev/_astro/ using Cloudflare Pages. Current flow is simply drag-and-dropping the `dist` (that contains only the `_astro` folder) into the deployment dashboard.

A more complex build-step would automate the above.
