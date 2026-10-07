# CableTac — anonymous review website

Static supplementary material. No build step, CDN, analytics, external fonts, or third-party video embeds. Links are relative and work under a GitHub Pages project path.

## Anonymous deployment

1. Use a new GitHub account that cannot be linked to an author. Do not use an existing personal or institutional account. Do not reuse its avatar, bio, public email, username pattern, or links.
2. Create a new empty public repository named `cabletac-review`. Do not fork an author-owned repository and do not import its Git history.
3. Upload the **contents of this directory**, including `.nojekyll`, to the repository root. Do not upload the outer ZIP as a single file. Use the anonymous account's web uploader or a fresh local repository with an anonymous commit name and the anonymous account's GitHub-provided no-reply email. Never push the research repository.
4. In Settings → Pages, select Deploy from a branch, `main`, and `/ (root)`. Save.
5. After GitHub finishes deployment, the address is `https://ANONYMOUS-ACCOUNT.github.io/cabletac-review/`.
6. Test every video and the layout in a signed-out/private browser window. Inspect repository commits and the account profile for author links before submission.

No credentials belong in the source or chat. Creating a truly unlinked account and checking the workshop's anonymity policy remain the submitter's responsibility. `noindex` and `robots.txt` discourage indexing but do not provide access control or guaranteed anonymity. GitHub can still retain service and account metadata. Public research imagery may itself make the work recognizable.

## Local preview

Run `python3 -m http.server 8080` in this directory, then open `http://localhost:8080`.

## Content and scope

The page follows the supplied latest manuscript and figures. Reported policy success rates are from simulation; real-world videos demonstrate calibration, not validated policy transfer. Baseline limitations are stated in the evaluation context. Videos have no audio and have been transcoded without input metadata. Figures have been re-encoded without input metadata. No existing Git history is included.

Source files: `index.html`, `style.css`, `script.js`. Media are in `assets/`. The website does not distribute a PDF. Avoid adding real author metadata, contact details, source-code links, or analytics during review.
