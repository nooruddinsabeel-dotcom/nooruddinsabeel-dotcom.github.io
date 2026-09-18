# Source and rebuild instructions

The source uses React and Next.js with local images and PDFs. There is no external font service, form backend, database or account requirement for the portfolio.

## Rebuild on your computer (only after editing)

The first time, install the package manager version declared in package.json, then the locked dependencies:

```text
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
```

Edit content in app/page.tsx and styling in app/globals.css. Start an editing preview with:

```text
pnpm dev:local
```

To produce the static website:

```text
pnpm build:github
node preview.mjs
```

The build writes the deployable site into out/. The included public/.nojekyll prevents GitHub Pages from ignoring Next.js underscore directories when using branch-based publishing.

## Hosting paths

The default build works at a domain root (including an account-name.github.io site). For a project repository path, rebuild with NEXT_PUBLIC_BASE_PATH set to the repository path, for example /portfolio. In Windows PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/portfolio"
pnpm build:github
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

Use that path only when it matches the real repository name. No account name, repository name, contact address or public URL has been assumed.

The bundled preview.mjs is for the included root-path export. Use the empty base path when rebuilding for this local preview.

The existing development support files also allow this project to be reopened in ChatGPT Work; the final GitHub site is the static out/ directory. Dependencies and their lockfile are preserved.

## Validation performed

- Next.js production static export and TypeScript compilation.
- Entry HTML and linked asset presence; all four PDF signatures checked.
- Browser interaction review: sheet switching, revision labels, drawing enlargement, zoom/fit and close.
- Desktop layout, a 390px mobile-width layout, and 200% text enlargement with no horizontal overflow.

The site is published at https://nooruddinsabeel-dotcom.github.io/ using the static files at the repository root. This `source/` directory preserves the editable project. After `pnpm build:github`, copy the contents of `source/out/` to the repository root, preserving `source/` and the root README, then commit the source and exported files together.

The portfolio includes the supplied BIM Lead résumé at `public/resume/Shaikh_Nooruddin_BIM_Lead.pdf`, the professional email from that résumé, and the supplied LinkedIn profile. Update those links in `app/page.tsx`.
