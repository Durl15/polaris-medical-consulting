# Polaris Medical Consulting Website

A modern, responsive website for Polaris Medical Consulting built with React, Vite, and Tailwind CSS.

## Features

- **Home Page** - Mission statement and key value propositions
- **About Page** - Dr. Johnson's bio and professional background with headshot
- **Services Page** - Occupational medicine services offered
- **Resources Page** - Links and resources for clients
- **In the News** - Dynamic occupational medicine news feed powered by NewsAPI with search functionality
- **Contact Page** - Professional contact form with industry dropdown
- **Responsive Design** - Mobile-friendly on all devices
- **Fast Performance** - Built with Vite for optimal load times

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **News API**: NewsAPI for occupational medicine news
- **Hosting**: Netlify

## Getting Started

See [SETUP.md](./SETUP.md) for complete setup and deployment instructions.

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/        # Reusable components (Navigation, Footer)
├── pages/            # Page components (Home, About, Services, etc.)
├── App.jsx           # Main app component with routing
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## Customization

- Update content in `src/pages/`
- Modify styles in `src/index.css` or component files
- Add your headshot to `public/images/dr-johnson.jpg`
- Configure environment variables in `.env`

## Deployment

This site is designed to deploy on Netlify. See [SETUP.md](./SETUP.md) for step-by-step deployment instructions.

## Support

For setup help, see SETUP.md. For questions about the tech stack, refer to the official documentation:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

---

Built for Polaris Medical Consulting
