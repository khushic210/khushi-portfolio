# Khushi Chaurasia — Portfolio

A React + Vite + Tailwind CSS portfolio site, animated with Framer Motion and
using Lucide icons.

## Project structure

```
khushi-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── resume.pdf        <- add your resume here
│   ├── profile.jpg        <- add your profile photo here
│   └── projects/          <- add project screenshots here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css           (design tokens + all custom styling)
    ├── data/
    │   └── content.js       (all editable text/links live here)
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── HeroGraph.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Achievements.jsx
        ├── Education.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Reveal.jsx
        ├── Eyebrow.jsx
        └── SocialRow.jsx
```

## Run it locally

1. Install [Node.js](https://nodejs.org/) 18+ if you don't already have it.
2. Open a terminal in this folder and install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open the URL it prints (usually `http://localhost:5173`) in your browser.

## Build for deployment

```
npm run build
```

This outputs a static site to the `dist/` folder, which you can deploy to
Vercel, Netlify, GitHub Pages, or any static host.

## Things to personalize before publishing

- Your latest resume is already at `public/resume.pdf` (the Download Resume button
  already points to `/resume.pdf`).
- Drop a profile photo into `public/profile.jpg` and swap the placeholder in
  `src/components/About.jsx`.
- Drop project screenshots into `public/projects/` and swap the placeholders
  in `src/components/Projects.jsx`.
- Update project GitHub/live demo links in `src/data/content.js`.
- Wire the contact form (`src/components/Contact.jsx`) to a real backend —
  e.g. [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/)
  are the fastest no-backend options.
