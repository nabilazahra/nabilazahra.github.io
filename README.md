# nabilazahra.github.io

My portfolio site. Plain HTML/CSS/JS, no build step.

## Editing text

All text lives in **`content.js`**. Change the words between the quotes, save, refresh.

For each experience:

| Field        | What it is                                                     |
|--------------|----------------------------------------------------------------|
| `company`    | Company name                                                   |
| `when`       | Year, e.g. `"2025"`                                            |
| `place`      | Optional city, e.g. `"Singapore"` (use `""` to leave it out)    |
| `title`      | Headline                                                       |
| `built`      | "What I built"                                                  |
| `challenges` | "Challenges"                                                    |
| `simple`     | Shorter `built` / `challenges` / `title` shown with **Simplify** |
| `ai`         | `true` = still shown with **AI experiences** on                |
| `image`      | e.g. `"images/01-danone.jpg"`, or `""` for no photo             |
| `caption`    | Optional photo caption                                         |

To hide or show the **Simplify** button, set `showSimple` to `false` or `true` under `nav` in `content.js`.

The button labels, the "What I built" / "Challenges" headings, the hero, and the closing
section are in the same file. The browser-tab title and link-preview text are at the top of
`index.html`.

## Photos and resume

Put photos in `images/` with the file names used in `content.js` (4:3 crops look best).
A missing photo just doesn't show. Put your resume at the top level as `resume.pdf`.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` here and go to
http://localhost:8000.

## Publish

1. On GitHub, create a public repository named exactly **`nabilazahra.github.io`**.
2. From this folder:
   ```sh
   git init -b main
   git add .
   git commit -m "Portfolio site"
   git remote add origin https://github.com/nabilazahra/nabilazahra.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages** and check the source is **Deploy from a branch → main → / (root)**.
4. After a minute or two the site is at https://nabilazahra.github.io.

After that, publishing a change is `git add . && git commit -m "Update" && git push`.

Shareable views: `https://nabilazahra.github.io/?ai`, `?simple`, or `?ai&simple`.
