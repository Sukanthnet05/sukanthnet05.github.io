# 🚀 Tony | Personal Tech Website

A personal tech portfolio and blog website showcasing IoT projects, AI/ML research, open source contributions, articles, research papers, videos, and collaboration opportunities.

![Dark Theme](https://img.shields.io/badge/Theme-Dark-0a0e1a?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## ✨ Features

- **🏠 Hero** — Animated intro with typing effect and stats counters
- **👤 About** — Bio, skills, and tech stack badges
- **📡 IoT Projects** — Filterable project cards with status badges and GitHub links
- **🧠 AI/ML Research** — Research cards with performance metrics
- **🔓 Open Source** — Repository cards with stars, forks, and language tags
- **📝 Articles & Blog** — Blog posts with categories, read time, and featured tags
- **📄 Research Papers** — Papers with file structure tree views and download links
- **🎥 Videos** — Video grid with thumbnails and durations
- **🤝 Collaborations** — Pricing tiers and collaboration types
- **📧 Contact** — Validated contact form with inquiry types

## 🎨 Design

- Dark theme with glassmorphism effects
- Neon cyan & electric purple accent colors
- Scroll-triggered animations (Intersection Observer)
- Responsive design (mobile, tablet, desktop)
- Google Fonts: Inter + JetBrains Mono

## 🚀 Getting Started

### Run Locally

Simply open `index.html` in your browser:

```bash
# Option 1: Direct open
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux

# Option 2: Local server (recommended)
npx serve .
# or
python -m http.server 8000
```

### Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch and `/root` folder
4. Click **Save** — your site will be live at `https://yourusername.github.io/repo-name`

## 📁 Project Structure

```
PERSONAL_WEBAPPLICATION/
├── index.html          # Main single-page application
├── css/
│   └── styles.css      # Complete design system & responsive styles
├── js/
│   └── main.js         # Interactivity, animations, form validation
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## ✏️ Customization

### Update Personal Info
- Edit the **name, bio, and descriptions** in `index.html`
- Update **stats numbers** in the hero section (`data-count` attributes)
- Replace **email and social links** in the contact and footer sections

### Add Your Projects
- Copy a `card` HTML block and modify the title, description, tags, and links
- Update the `data-category` attribute for filtering

### Change Colors
- Edit CSS custom properties in `:root` in `css/styles.css`
- Key variables: `--accent-cyan`, `--accent-purple`, `--bg-primary`

### Add Real Videos
- Replace `data-video-url` attributes on `.video-card` elements with actual YouTube/Vimeo links

## 📄 License

MIT License — feel free to use, modify, and distribute.

---

**Built with ⚡ and lots of ☕**
