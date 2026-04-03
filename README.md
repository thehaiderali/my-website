
# React + Tailwind + shadcn Starter Template (JavaScript Version)

A modern, production-ready starter template that combines React 19, Tailwind CSS 4, and shadcn/ui components. This template provides a solid foundation for building beautiful, responsive web applications with excellent developer experience.

## ✨ Features

- **React 19** - Latest React with improved performance and features
- **Vite** - Lightning fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework with latest features
- **shadcn/ui** - Beautifully designed, accessible components
- **JavaScript** - Pure JavaScript (no TypeScript complexity)
- **ESLint** - Code quality and consistency
- **Path Aliases** - Clean imports using `@/` prefix
- **Dark Mode** - Built-in dark mode support
- **Inter Font** - Beautiful, modern sans-serif font

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the template:
```bash
git clone <your-repo-url>
cd react-tailwind-shadcn-starter
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server with hot reload |
| `npm run build` | Creates production build in `dist` folder |
| `npm run preview` | Previews production build locally |
| `npm run lint` | Runs ESLint to check code quality |

## 🏗️ Project Structure

```
├── components/
│   └── ui/
│       └── button.jsx      # Example shadcn button component
├── lib/
│   └── utils.js            # Utility functions (cn for className merging)
├── src/
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── jsconfig.json           # Path alias configuration
└── components.json         # shadcn/ui configuration
```

## 🎨 Using shadcn/ui Components

This template comes pre-configured with shadcn/ui. To add more components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

The components will be automatically added to `components/ui/` directory.

### Example Usage

```jsx
import { Button } from "@/components/ui/button"

function MyComponent() {
  return (
    <Button variant="outline" size="lg">
      Click me
    </Button>
  )
}
```

## 🎨 Customizing Tailwind

Tailwind CSS 4 is configured in `src/index.css`. You can:

1. **Add custom colors** - Extend the theme in `index.css`
2. **Modify existing theme variables** - Update CSS variables in `:root` and `.dark`
3. **Add custom utilities** - Use `@layer utilities` directive

## 🌓 Dark Mode

Dark mode is fully configured and ready to use. The template includes:
- CSS variables for both light and dark themes
- `dark` class support
- Smooth transitions between themes

To implement theme switching:

```jsx
import { useState, useEffect } from 'react'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button onClick={() => setIsDark(!isDark)}>
      Toggle Theme
    </button>
  )
}
```

## 🔧 Path Aliases

The template uses `@/` as an alias for the root directory. This means you can import components like:

```jsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

No more relative path hell! (`../../../components/ui/button`)

## 📝 ESLint Configuration

ESLint is configured with:
- React Hooks rules
- React Refresh rules
- Custom rule for unused variables (ignores capitalized variables for React components)

## 🛠️ Customization Guide

### Changing the Title

Update the `<title>` tag in `index.html`

### Adding New Pages

1. Create new components in `src/`
2. Set up routing (you'll need to install react-router-dom):
```bash
npm install react-router-dom
```

### Adding Icons

The template includes `lucide-react` for icons:
```jsx
import { Home, User, Settings } from 'lucide-react'

function MyIcon() {
  return <Home className="w-5 h-5" />
}
```

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | 19.1.1 | UI library |
| react-dom | 19.1.1 | React DOM rendering |
| tailwindcss | 4.2.2 | CSS framework |
| @tailwindcss/vite | 4.2.2 | Tailwind Vite plugin |
| lucide-react | 1.7.0 | Icon library |
| class-variance-authority | 0.7.1 | Variant management |
| clsx | 2.1.1 | Conditional className joining |
| tailwind-merge | 3.5.0 | Tailwind className merging |
| radix-ui | 1.4.3 | Accessible UI primitives |

## 🚀 Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory. You can preview it locally:

```bash
npm run preview
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT

##  Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

## Support

If you encounter any issues or have questions:
1. Check the [shadcn/ui documentation](https://ui.shadcn.com/docs)
2. Check [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Open an issue in the repository
