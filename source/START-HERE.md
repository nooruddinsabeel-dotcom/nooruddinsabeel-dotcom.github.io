# Nooruddin Shaikh — portfolio v1

Your first portfolio includes a Keturah Resort drawing case study, four switchable drawing sheets, a zoomable viewer, original PDFs, BIM/MEP/HVAC capabilities and your project experience.

## Step 1 — Open your first website

1. Extract this ZIP to a folder on your computer, for example `Documents/Nooruddin-Portfolio`.
2. In VS Code choose **File > Open Folder** and select the extracted folder containing this file and `preview.mjs`.
3. Choose **Terminal > New Terminal**.
4. Run:

```text
node preview.mjs
```

5. Open **http://localhost:3000** in your browser. Keep the terminal open while viewing. Press **Ctrl+C** to stop.

Node.js is all you need to view this ready-made version. You do not need to install packages for this step. The website is running on your computer; it has not been published online.

## What to try

- Select **Explore my work**.
- Switch among the four drawing tabs.
- Select **Enlarge drawing**, use **+**, **−**, and **Fit**, and close with **Escape**.
- Use **View original PDF** to inspect the actual source sheet.
- Resize your browser to see the mobile layout.

## Next, send in chat

1. Your exact GitHub profile URL. “Nooruddin Shaikh” is the portfolio display name; we still need the account username from the URL.
2. The architectural basement plan for the same M11 / EV4 project. We can add the structural, interior and landscape inputs afterwards, one at a time.
3. Confirm the enlarged-view title block: the uploaded filename ends 220003, but the printed number ends 220001 and the revision is 00.

A current résumé and your preferred professional contact links will be added when supplied. They are not fabricated in this version.

## Files explained

- `out/`: the ready-made website used by the preview command.
- `app/page.tsx`: your page content and drawing viewer.
- `app/globals.css`: colours, typography and responsive layout.
- `public/work/`: the drawing images and source PDFs.
- `DRAWING-REVIEW.md`: exact drawing references and open document checks.
- `SOURCE-README.md`: instructions for rebuilding after future code edits.

## GitHub Pages, later

The site has been exported as static HTML, CSS and JavaScript for GitHub Pages. The exact publishing instructions depend on your account and repository name. We will choose that next rather than guess your URL.

References: [Next.js static export](https://nextjs.org/docs/app/guides/static-exports) and [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
