# Agentic AI Glossary for Pharmacoepidemiology

A searchable companion glossary for *Introduction to Concepts in Artificial Intelligence and Machine Learning for Pharmacoepidemiologists: Agentic AI*.

The glossary reproduces the terms, plain-language definitions, and pharmacoepidemiology context from Table 1 of the draft manuscript. It is a static site with no build step and is deployable directly to GitHub Pages.

## Local preview

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publishing

Pushes to `main` deploy through the workflow in `.github/workflows/pages.yml`. In the repository settings, Pages must use **GitHub Actions** as its source.

## Contributing

When editing `app.js` or `styles.css`, bump the `?v=` number for both static assets in `index.html` in the same commit so visitors receive the latest files instead of stale cached versions.

## Content note

The manuscript is in draft form. Glossary wording may change during peer review; synchronize `app.js` with the accepted manuscript before publication.
