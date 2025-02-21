# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and TailwindCSS. Features a dark/light mode toggle, smooth animations, and sections for projects, skills, and contact information.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode toggle
- ⚡ Built with Vite for fast development
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 💅 Styled with TailwindCSS and ShadcnUI
- 🎯 Interactive project cards
- 📝 Contact form
- 🔄 Animated text typing effect
- 📄 Downloadable resume

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- ShadcnUI Components
- Lucide Icons

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # ShadcnUI components
│   ├── AboutSection    # About section with skills
│   ├── AnimatedText    # Typing animation component
│   ├── ContactSection  # Contact form and info
│   ├── HeroSection    # Main landing section
│   ├── Navbar         # Navigation bar
│   └── ProjectsSection # Projects showcase
├── lib/                # Utility functions
└── types/              # TypeScript types
```

## Customization

1. **Personal Information**
   - Update hero section in `src/components/HeroSection.tsx`
   - Modify about text in `src/components/AboutSection.tsx`
   - Change contact details in `src/components/ContactSection.tsx`

2. **Projects**
   - Edit projects array in `src/components/ProjectsSection.tsx`
   - Add your own project images, descriptions, and links

3. **Resume**
   - Replace `/public/resume.pdf` with your own resume

4. **Styling**
   - Theme colors can be modified in `src/index.css`
   - Component styles use Tailwind classes

## Development

- Run development server: `npm run dev`
- Type checking: `npm run typecheck`
- Build: `npm run build`
- Preview build: `npm run preview`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
