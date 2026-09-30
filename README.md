# Portfolio

Personal site for Sebastian Jitaru. One page, no backend.

## Stack

Vite, React, TypeScript, Tailwind CSS.

## Develop

```
npm install
npm run dev
```

The dev server runs on http://localhost:8080.

## Build

```
npm run build
```

Output goes to `dist/`. `vite.config.ts` sets `base: "./"`, so the build works
at a domain root and under a project path such as `/portofolio/`.

## Content

All text lives in `src/content.ts`. Edit that file to update the site. The CV
PDF and the favicon live in `static/`, which Vite copies to the build root.

## Deploy to GitLab Pages

`.gitlab-ci.yml` runs on the default branch: it builds, then renames `dist` to
`public`, which is the directory GitLab Pages publishes. Vite's own static
directory is `static/` so the two do not collide.
