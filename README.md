# React Modern Stack Template

🚀 **Production-ready React template** with cutting-edge technologies and best practices built-in. Perfect for building modern web applications with enterprise-grade architecture and developer experience.

**⚡ Lightning-fast development** • **🎨 Beautiful UI components** • **🌍 Internationalization ready** • **🔧 Zero configuration** • **📱 Mobile-first responsive**

## 🚀 Tech Stack

### Core Technologies

- ⚛️ **React 18** - Latest React with concurrent features
- 🔷 **TypeScript** - Type safety and better DX
- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first CSS framework

### UI & Design

- 🧩 **shadcn/ui** - Beautiful, accessible component library
- 🌙 **next-themes** - Dark/Light theme with system detection
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Radix UI** - Unstyled, accessible UI primitives

### Developer Experience

- 🔧 **ESLint + Prettier** - Code quality and formatting
- 🏗️ **GitHub Actions** - CI/CD pipeline included
- 📝 **Path Aliases** - Clean imports with `@/` prefix
- 🎪 **Hot Module Replacement** - Instant feedback

### Features & Functionality

- 🐻 **intlayer** - Modern, type-safe internationalization
- 📝 **React Hook Form + Zod** - Type-safe form handling
- 🛣️ **React Router v6** - Modern client-side routing

### Production Ready

- 🚀 **Optimized builds** - Tree-shaking and code splitting
- 📊 **Bundle analysis** - Performance monitoring ready
- 🔒 **Security** - Updated dependencies, no vulnerabilities
- 📱 **PWA ready** - Easy to extend with service workers

## ✨ Features

- 🌍 **Internationalization** - English and Spanish support
- 🌙 **Dark/Light Theme** - Theme toggle with persistent storage
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modern UI Components** - shadcn/ui component library
- 🔗 **Client-side Routing** - React Router with nested routes
- 📝 **Type Safety** - Full TypeScript support
- 🎯 **ESLint + Prettier** - Code quality and formatting
- 🚀 **Fast Development** - Vite HMR
- 📦 **Path Aliases** - Clean imports with `@/` prefix

## � Quick Start

### Prerequisites

- Node.js 20.11.0+ (see `.nvmrc`)
- npm, yarn, or pnpm

### Installation

1. **Use this template** by clicking "Use this template" on GitHub, or clone it:

   ```bash
   git clone <repository-url>
   cd react-modern-stack-template
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## �🛠️ Installation

1. Clone or copy this project
2. Install dependencies:
   ```bash
   npm install
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

## 🌍 Internationalization

The project supports English and Spanish out of the box:

- **Type-safe translations**: All translations are strongly typed with auto-completion.
- **Modern tooling**: Uses `intlayer` for a better developer experience.
- **Content files**: Translations defined in `src/content/*.content.ts` files.
- **Language switcher**: Included in the navbar with locale persistence.
- **Automatic dictionary generation**: Intlayer automatically builds dictionaries during development.
- Add new languages by editing `intlayer.config.ts` and creating new content files.

## 🎨 Theme System

- Light/Dark theme toggle
- Persistent theme storage
- CSS variables for easy customization
- shadcn/ui theme integration

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── Navbar.tsx      # Navigation component
├── content/            # Intlayer content declarations
│   ├── navbar.content.ts   # Navbar translations
│   ├── home.content.ts     # Home page translations
│   └── about.content.ts    # About page translations
├── hooks/              # Custom React hooks
│   └── useI18n.ts      # Internationalization hook
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   └── About.tsx       # About page
├── types/              # TypeScript types
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## 🔧 Configuration Files

- `intlayer.config.ts` - Intlayer internationalization configuration
- `vite.config.ts` - Vite configuration with intlayer plugin
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `components.json` - shadcn/ui configuration

## 🚀 Using as Template

To use this project as a template for new projects:

1. **Use GitHub Template**: Click "Use this template" button on GitHub
2. **Clone your new repository**
3. **Update project information:**
   - Change `name` field in `package.json`
   - Update `title` in `index.html`
   - Delete this `README.md`
   - Rename `TEMPLATE_README.md` to `README.md` and fill it out for your project
   - Update repository URL in `package.json`
4. **Customize content:**
   - Update translations in `src/content/*.content.ts` files
   - Customize theme in `tailwind.config.js`
   - Add your routes in `src/App.tsx`
   - Create your pages in `src/pages/`
   - Update favicon and assets in `public/`
5. **Environment setup:**
   - Copy `.env.example` to `.env.local`
   - Configure your environment variables
6. **First commit:**
   ```bash
   git add .
   git commit -m "Initial commit from template"
   git push
   ```

## 🧪 Testing & Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npx tsc --noEmit

# Check dependencies for vulnerabilities
npm audit

# Check for outdated dependencies
npm outdated
```

## 📋 Dependencies Overview

### Production Dependencies

- React ecosystem (react, react-dom, react-router-dom)
- UI components (all @radix-ui components, lucide-react)
- Styling (tailwindcss, clsx, tailwind-merge)
- Internationalization (intlayer)
- Forms (react-hook-form, zod)
- State management (zustand)
- Theme (next-themes)

### Development Dependencies

- TypeScript and types
- Vite and plugins
- ESLint and TypeScript ESLint
- Build tools

## 🎯 Best Practices Implemented

- **TypeScript strict mode** for type safety
- **Path aliases** for clean imports
- **Component composition** over inheritance
- **Custom hooks** for reusable logic
- **Separation of concerns** (pages, components, hooks, types)
- **Internationalization first** approach
- **Responsive design** with Tailwind CSS
- **Accessible components** with Radix UI
- **Modern React patterns** (functional components, hooks)

## 🐛 Known Issues

- Minor ESLint warnings in shadcn/ui components (non-critical)
- CSS @tailwind warnings in editor (processed by PostCSS, not an issue)

## 🔄 Future Enhancements

- Add more languages
- Implement PWA features
- Add testing setup (Jest/Vitest)
- Add Storybook for component documentation
- Add CI/CD configuration

## 📄 License

This project is intended as a template and can be freely used and modified for your projects.
