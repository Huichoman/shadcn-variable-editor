# Contributing to React Modern Stack Template

Thank you for your interest in contributing! This document provides guidelines for contributing to this template.

## Development Setup

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/your-username/react-modern-stack-template.git
   cd react-modern-stack-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## Code Style

- **Formatting**: We use Prettier for code formatting
- **Linting**: ESLint for code quality
- **TypeScript**: Strict mode enabled

### Before committing:

```bash
# Format code
npm run format

# Check linting
npm run lint

# Type check
npm run type-check

# Build to ensure it works
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── content/            # Intlayer content declarations
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── pages/              # Page components
└── types/              # TypeScript type definitions
```

## Guidelines

### Components

- Use functional components with hooks
- Export components as default when there's only one export
- Use TypeScript interfaces for props
- Keep components small and focused

### Styling

- Use Tailwind CSS for styling
- Follow mobile-first responsive design
- Use shadcn/ui components when possible
- Use CSS variables for theming

### State Management

- Use Zustand for global state
- Keep state as local as possible
- Use React hooks for component state

### Internationalization

- Add translations to content files in `src/content/`
- Use the `useIntlayer` hook for translations
- Keep translation keys descriptive
- Follow intlayer content declaration patterns

## Pull Request Process

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the code style guidelines
   - Add/update documentation as needed
   - Test your changes

3. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **Push and create PR**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Provide a clear description of changes
   - Link any related issues
   - Ensure CI passes

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting, missing semicolons, etc.
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

## Issues

When creating issues:

- Use a clear and descriptive title
- Provide steps to reproduce (for bugs)
- Include environment information
- Use issue templates when available

## Questions?

Feel free to open a discussion or issue if you have any questions!
