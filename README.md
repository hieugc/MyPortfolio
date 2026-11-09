# Pham Minh Hieu — Engineering Portfolio

A responsive, bilingual (English/Vietnamese) portfolio focused on production software, platform engineering, applied AI and developer tools.

## Design direction

The visual identity takes cues from engineering workspaces and technical field notes:
- Mineral grey-green surfaces, deep petroleum ink, oxidized teal and copper accents.
- Space Grotesk for display typography and DM Sans for reading.
- A custom workflow diagram in the hero instead of generic gradient metrics.
- Editorial project rows and a single featured case study rather than repeated SaaS cards.

## Run locally

Open index.html directly, or run the existing local server:

~~~bash
npm install
npm run dev
# http://localhost:4173
~~~

## Verify and build

Node.js 22+ is required. No runtime framework or build dependency is needed.

~~~bash
npm test
npm run build
~~~

The build writes the deployable static site to dist/.

## Deployment

GitHub Actions verifies the project and deploys dist/ to GitHub Pages when changes reach main. Pull requests run the verification job but do not deploy. Before the first deployment, enable Pages once in repository Settings → Pages → Build and deployment → Source → GitHub Actions. The workflow uses the standard GITHUB_TOKEN and does not attempt to change repository-level Pages settings.

## Content notes

- Public repository links are shown only for public projects.
- Private and client projects are described by scope; their source code is not linked.
- The Press Q&A system links to its public live service.
- The CV and portrait are served from the existing hieugc/hieugc repository.
- Phone number and date of birth are intentionally omitted from the public portfolio.

Update portfolio-data.mjs for project content and app.js for rendering behavior.
