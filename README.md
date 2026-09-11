# Dev Aansh — Author & Poet Portfolio Website

A quiet, slow, contemplative, and editorial portfolio website for **Dev Aansh** (pen name of Devansh Awasthi) — poet, author, and entrepreneur.

Built with **React 18**, **Vite**, **Tailwind CSS**, **React Router**, and **Framer Motion**.

---

## 🎨 Aesthetic & Design Philosophy

- **Base Background:** Near-black navy (`#0A0D14`) with elevated cards (`#10141C`)
- **Accent / Gold:** Warm antique gold (`#D4A94F`) with hover state (`#C4952E`)
- **Typography:**
  - **Headings & Accents:** *Playfair Display* (Serif & Italic Serif)
  - **Body Copy:** *EB Garamond* (Literary Book Serif)
  - **Labels & Navigation:** *Inter* with letter-spacing tracking (`0.18em` – `0.22em`)
- **Mood:** Quiet, contemplative, editorial luxury — typeset like a fine clothbound book.

---

## 🗂️ Project Structure & Routes

```text
├── index.html                   # HTML entry point with Google Fonts (Playfair, Garamond, Inter)
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Custom palette and typography extensions
├── vite.config.js               # Vite configuration
└── src/
    ├── main.jsx                 # React root
    ├── App.jsx                  # Main router setup
    ├── index.css                # Tailwind directives & custom drop-cap styles
    ├── components/
    │   ├── Navbar.jsx           # Sticky nav with logo, links, and mobile menu
    │   ├── Footer.jsx           # Global quote, socials, and copyright
    │   ├── Layout.jsx           # Master layout wrapper
    │   ├── Button.jsx           # Gold, outline, and link button variants
    │   ├── BookCover.jsx        # Luxury SVG book mockup for "Along the Moving Sun"
    │   ├── PortraitCard.jsx     # Editorial author photo frame
    │   ├── Eyebrow.jsx          # Uppercase gold tracking label
    │   ├── Divider.jsx          # Decorative gold/subtle dividing rule
    │   ├── QuoteBand.jsx        # Full-width closing quote section
    │   └── ScrollToTop.jsx      # Scroll reset on navigation
    ├── pages/
    │   ├── Home.jsx             # Hero, About preview, Book preview, Journal preview, Newsletter
    │   ├── About.jsx            # Long-form bio with drop-cap & Guiding Ideas cards
    │   ├── Books.jsx            # Book details, poem excerpt, and critical reception cards
    │   ├── Journal.jsx          # Essays & fragments directory
    │   ├── JournalPost.jsx      # Individual reading layout with drop-cap and typography
    │   ├── Reviews.jsx          # Expanded reviews and press notices grid
    │   ├── Media.jsx            # Podcasts, interviews, and downloadable press kit
    │   └── Contact.jsx          # Thoughtful contact form and direct study details
    └── data/
        ├── journalData.js       # Curated essays & philosophical fragments
        ├── reviewsData.js       # Press reviews & critical acclaim
        └── mediaData.js         # Media appearances & podcast conversations
```

---

## 🚀 Running Locally

To run the development server:

```bash
npm run dev
```

The site will be live at:
`http://localhost:5173`

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ✍️ Customization Notes

- **Social Links:** Update URLs in `src/components/Footer.jsx` and `src/pages/Home.jsx`.
- **Journal Posts:** Add new essays to `src/data/journalData.js`.
- **Author Portrait:** Replace the image URL in `src/components/PortraitCard.jsx` with a custom high-resolution photo.
- **Book Links:** Change Amazon / Barnes & Noble / Goodreads purchase links in `src/pages/Books.jsx`.

---

© 2026 DEVANSH AWASTHI. ALL WORDS, QUIETLY KEPT.
