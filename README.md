# Carolyn Nguyen — Resume Website

A minimal, black-and-white, Notion-style personal resume site for Carolyn Nguyen, built with [Vite](https://vite.dev) and plain HTML/CSS/JS. Two columns on desktop (intro, photo, and contact links on the left; About, Education, Experience, Projects, and Skills on the right), stacked on mobile.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:43127
```

Production build and local preview:

```bash
npm run build    # outputs to dist/
npm run preview  # http://localhost:43128
```

## Edit content

- All resume content lives in `index.html`.
- Styles are in `src/style.css`.
- The portrait is `src/carolyn.jpg`.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages on every push to `main`.

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).

The Vite `base` is set to `./`, so asset paths are relative and the site works on both a project URL (`https://<user>.github.io/<repo>/`) and a custom domain.
