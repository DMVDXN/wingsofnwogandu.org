# Wings of Nwoga Ndu Foundation

The official website of Wings of Nwoga Ndu Foundation, Inc.

> **Giving Every Child the Wings to Dream.**

Wings of Nwoga Ndu empowers underserved youth by expanding access to education, health resources, mentorship, and opportunities that help them build brighter futures.

## About the site

The site introduces the foundation, explains its four pillars of work (Education, Health, Opportunity and Community), and gives visitors clear ways to volunteer, partner or get in touch.

| Page | Purpose | File |
|---|---|---|
| Home | Introduces the foundation and its mission | `public/index.html` |
| About | The foundation's story, name, mission, vision and values | `public/about.html` |
| Programs | The four pillars and their areas of focus | `public/programs.html` |
| Our Impact | How the foundation measures and shares its results | `public/impact.html` |
| Get Involved | Volunteering, partnerships and ways to support | `public/get-involved.html` |
| Contact | How to reach the foundation | `public/contact.html` |
| Scholarships | Information on the upcoming scholarship program | `public/scholarships.html` |

## Built with

- Semantic HTML, CSS and vanilla JavaScript, with no frameworks and no build step
- A responsive layout for desktop, tablet and mobile
- Accessibility in mind: keyboard navigation, a skip link, labelled form fields, readable contrast, and motion that switches off for visitors who prefer reduced motion
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) and [Montserrat](https://fonts.google.com/specimen/Montserrat) from Google Fonts

## Project structure

```
public/              The website; everything here is published
  css/styles.css     Styles, brand colors and animation
  js/main.js         Navigation, forms and scroll effects
  images/            Logo files and site icon
DESIGN.md            Design brief, brand guidelines and content standards
.github/workflows/   Deployment to GitHub Pages
```

## Running locally

No installation is required. From the project folder:

```
python -m http.server 8000 --directory public
```

Then open http://localhost:8000. Opening `public/index.html` directly in a browser also works.

## Deployment

Pushing to `main` publishes the `public/` folder through GitHub Pages, using the workflow in `.github/workflows/pages.yml`.

For traditional web hosting, upload the contents of `public/` to the host's web root.

## Brand

| Element | Value |
|---|---|
| Forest green | `#1D4134` |
| Ivory | `#FAF6EC` |
| Burgundy | `#6E1F2E` |
| Gold | `#BE9A59` |
| Charcoal | `#2B2B2B` |
| Heading typeface | Cormorant Garamond |
| Body typeface | Montserrat |

Colors and typefaces are defined as variables at the top of `public/css/styles.css`. Full brand guidelines are in [DESIGN.md](DESIGN.md).

## Content standards

The foundation holds its website to a few firm rules:

- Impact figures are published only when they can be verified and documented.
- Programs are presented as active only once they have launched.
- Stories and images of young people are shared only with consent.
- Partners and sponsors are named only with their permission.

## License

© 2026 Wings of Nwoga Ndu Foundation, Inc. All rights reserved. The foundation's name, logo and brand assets may not be used without permission.
