# atlasworld

A small React + Vite project that displays country information and a minimal world atlas UI.

## Overview

`atlasworld` (folder `wordAtlas`) is a frontend app built with React, Vite and Tailwind CSS. It provides a searchable country directory and simple pages for country details, contact, and about information. The project loads static JSON in `src/API` for example data and demonstrates component-driven UI structure.

## Tech stack

- Framework: React 19
- Bundler / dev server: Vite
- Styling: Tailwind CSS
- HTTP client: axios
- Routing: react-router / react-router-dom
- Linting: ESLint

## Quick start

Prerequisites: Node.js (>=16), and preferably pnpm (the repo contains a pnpm lockfile). npm or yarn will also work.

1. Change to the frontend folder and install dependencies

```bash
cd wordAtlas
pnpm install
# or: npm install
```

2. Run the dev server

```bash
pnpm dev
# or: npm run dev
```

Open http://localhost:5173 in your browser (Vite's default port).

Available scripts (in `wordAtlas/package.json`):

- `dev` - start Vite dev server
- `build` - build for production
- `preview` - locally preview the production build
- `lint` - run ESLint

## Project structure (important files)

- `wordAtlas/` — main frontend app
	- `index.html` — app entry HTML
	- `src/main.jsx` — React entry
	- `src/App.jsx` — top-level app wrapper
	- `src/pages/` — route pages (Home, Country, CountryDetails, About, Contact, ErrorPage)
	- `src/Components/` — small reusable UI components (e.g., `Card.jsx`, `CountryCard.jsx`, `SearchFilter.jsx`)
	- `src/UI/` — shared UI (Footer, Headers, Loader)
	- `src/API/` — sample JSON and API helper (`countryData.json`, `footerApi.json`, `postApi.jsx`)

## Data sources

This project uses local JSON in `src/API` for demo content. If you plan to wire a real API, update `src/API/postApi.jsx` (or replace it) to point at your backend.

## Components and pages

- Home — search and list countries using `CountryCard`
- Country — search results / overview
- CountryDetails — expanded data for a single country
- Contact / About — static pages
- Components are small, focused and placed under `src/Components` and `src/UI`.

## Development notes

- Routes use `react-router-dom` v7.
- The project is configured as an ES module project (`"type": "module"` in package.json).
- Lint rules live in `eslint.config.js` at the root of `wordAtlas`.

## Contributing

1. Fork or branch from `main`.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Make changes and add tests if appropriate.
4. Run linting and the dev server to verify no regressions.
5. Open a PR describing your changes.

## License

This repository does not include a license file. Add one (for example, `MIT`) if you plan to make it public.

## Contact

If you need help or want to suggest improvements, open an issue or edit the README and create a PR.

---
Generated README (concise) — update as you add APIs, production build steps, or deploy instructions.