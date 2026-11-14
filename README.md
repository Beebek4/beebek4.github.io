# Beebek Limbu — Portfolio

Beebek’s static software engineering portfolio, built with Astro, semantic HTML, plain CSS, and small browser scripts. It features Q-Sine, RouteMapper, work experience, skills, and contact links.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to create the static site in `dist/`, or `npm run preview` to preview that build locally.

## Site files

- `src/data/portfolio.js` contains the introduction, skills, project details, experience, and contact links.
- `src/pages/index.astro` contains the page structure and theme control.
- `src/components/ProjectCard.astro` renders each project and its screenshot slideshow.
- `src/styles/global.css` contains the responsive layout and light/dark themes.
- `public/profilepic.jpg`, `public/projects/`, and `public/routemapper.mp4` contain the portrait and project media.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to `main`.

1. Create a **public** GitHub repository named `beebek4.github.io`.
2. Upload the site files and folders to the repository root, including `.github/workflows/deploy.yml`.
3. Commit and push the files to the `main` branch.
4. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
5. After the workflow completes, visit [beebek4.github.io](https://beebek4.github.io).

To publish future edits, commit them to `main` and push; GitHub Actions will rebuild and redeploy the site.
