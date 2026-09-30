# Portfolio

Personal site for Sebastian Jitaru. Static HTML and CSS, no build step and no
dependencies.

## Files

- `index.html` · all content
- `script.js` · the tabs, about 40 lines
- `styles.css` · all styling
- `cv-sebastian-jitaru.pdf` · linked from the header
- `favicon.ico`

## Edit

Edit the files directly. There is nothing to install and nothing to compile.

Serve it over HTTP rather than opening `index.html` as a file, otherwise the
browser does not load `styles.css` and `script.js`:

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

GitHub Pages serves these files as they are. In Settings, Pages, set Source to
"Deploy from a branch", branch `main`, folder `/ (root)`. A push to `main` goes
live in about a minute.
