# Wings of Nwoga Ndu Foundation website

The website for Wings of Nwoga Ndu Foundation, Inc., a nonprofit that empowers underserved youth by expanding access to education, health resources, mentorship and opportunity.

> Giving Every Child the Wings to Dream.

## Status

Phase 1 is built and in review. It is a preview, not the finished site:

- The contact and interest forms validate input but do not send messages yet.
- Boxes marked "Draft" show where content from the foundation is still needed.
- Impact figures stay hidden until there are verified numbers to publish.
- Online donations are not enabled.

## Pages

| Page | File |
|---|---|
| Home | `public/index.html` |
| About | `public/about.html` |
| Programs | `public/programs.html` |
| Our Impact | `public/impact.html` |
| Get Involved | `public/get-involved.html` |
| Contact | `public/contact.html` |
| Scholarships (future program) | `public/scholarships.html` |

## Project layout

```
public/            The website. Everything in here gets published.
  css/styles.css   All styling, including brand colors and animation
  js/main.js       Mobile menu, form handling, scroll animations
  images/          Logo files and the browser tab icon
DESIGN.md          The design brief: content rules, brand, requirements, open questions
.github/workflows  Publishes public/ to GitHub Pages
```

The site is plain HTML, CSS and JavaScript. There is nothing to install and no build step.

## Preview it on your computer

With Python installed, run this from the project folder:

```
python -m http.server 8000 --directory public
```

Then open http://localhost:8000 in a browser. You can also open `public/index.html` directly.

## Making changes

- **Text:** edit the page's HTML file.
- **Colors and fonts:** change the variables at the top of `public/css/styles.css`.
- **Header and footer:** these are repeated in every page, so a change to one needs to be made in all seven files.
- **Before publishing anything new**, check it against the content rules in [DESIGN.md](DESIGN.md). In short: no unverified statistics, no program shown as active before it launches, and no photos or stories of children without consent.

## Publishing

Every push to `main` publishes the `public/` folder to GitHub Pages at https://danielonyejiekwe.com/wingsofnwogandu.org/. This requires Pages to be enabled in the repository settings, with the source set to GitHub Actions.

The long-term home is wingsofnwogandu.org, hosted on GoDaddy. To deploy there, upload the contents of `public/` to the hosting account's web root.

## Brand

| | |
|---|---|
| Colors | Forest green `#1D4134`, ivory `#FAF6EC`, burgundy `#6E1F2E`, gold `#BE9A59`, charcoal `#2B2B2B` |
| Heading font | Cormorant Garamond |
| Body font | Montserrat |

Full guidelines are in [DESIGN.md](DESIGN.md).

## Still needed from the foundation

- Official contact email and the inbox for form submissions
- Social media links
- The founder's message and the full origin story
- Photographs with permission to publish
- Completed initiatives and any verified impact figures
- Confirmation of the current tagline (the logo and the brief use different ones)
- Privacy Policy and Terms of Use

© 2026 Wings of Nwoga Ndu Foundation, Inc.
