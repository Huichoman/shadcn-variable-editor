# Smart Variable Editor

A modern rich text editor with dynamic variable support, built with **React**, **TypeScript**, **TailwindCSS**, and **shadcn/ui**. This project demonstrates advanced editor capabilities using Tiptap, featuring atomic variable nodes, intelligent autocomplete, and interactive variable management.

## ✨ Features

### Core Functionality

- **Dynamic Variables:** Insert variables that render as styled badges within the text
- **Smart Autocomplete:** Type `{` to trigger an intelligent variable suggestion menu
- **Interactive Variables:** Click any variable to open a contextual popover with actions
- **Toolbar Integration:** Manual variable insertion via categorized dropdown menu
- **Real-time JSON Preview:** Live view of the editor's document structure

### Variable Management

- **Atomic Nodes:** Variables are treated as single, unbreakable units
- **Copy to Clipboard:** Quick copy of variable syntax
- **Delete Action:** Remove variables with a single click
- **Categories:** Variables organized by User, Date, Company, and Order
- **Descriptions:** Each variable includes helpful tooltips and descriptions

### User Experience

- **Internationalization:** Full i18n support (English/Spanish) using Intlayer
- **Dark Mode Support:** Seamless theme switching via next-themes
- **Responsive Design:** Mobile-friendly interface
- **Accessibility:** Built with Radix UI primitives for full a11y compliance
- **Type Safety:** 100% TypeScript implementation with strict mode

## 🛠️ Technology Stack

- **Framework:** React 18.3.1 + Vite 6.1.0
- **Editor:** Tiptap 3.12.0 (ProseMirror-based)
- **Language:** TypeScript 5.7.2
- **Styling:** TailwindCSS 3.4.17
- **UI Components:** shadcn/ui (Radix UI + Tailwind)
- **Icons:** Lucide React
- **i18n:** Intlayer
- **State Management:** Zustand

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Huichoman/shadcn-variable-editor.git

# Navigate to project directory
cd shadcn-variable-editor

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📖 Usage

### Inserting Variables

**Method 1: Autocomplete**

1. Type `{` in the editor
2. Select a variable from the suggestion menu
3. Press Enter or click to insert

**Method 2: Toolbar**

1. Click the "Insert Variable" button
2. Browse variables by category
3. Click to insert at cursor position

### Managing Variables

Click any variable badge to:

- **Copy:** Copy the variable syntax to clipboard
- **Delete:** Remove the variable from the document

### Available Variables

- **User:** `user.name`, `user.email`, `user.firstName`, `user.lastName`
- **Date:** `date.today`, `date.now`
- **Company:** `company.name`, `company.address`
- **Order:** `order.number`, `order.total`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── editor/
│   │   ├── VariableEditor.tsx       # Main editor component
│   │   ├── EditorToolbar.tsx        # Toolbar with insert button
│   │   ├── VariableNodeView.tsx     # Interactive variable component
│   │   └── VariableSuggestionList.tsx # Autocomplete menu
│   └── ui/                          # shadcn/ui components
├── extensions/
│   ├── VariableNode.ts              # Tiptap custom node definition
│   └── VariableSuggestion.ts        # Mention extension config
├── data/
│   └── variables.ts                 # Available variables data
├── content/
│   ├── variable-editor.content.ts   # i18n translations
│   └── home.content.ts              # Page translations
└── pages/
    └── Home.tsx                     # Demo page
```

## 🎨 Customization

### Adding New Variables

Edit `src/data/variables.ts`:

```typescript
export const AVAILABLE_VARIABLES: Variable[] = [
  {
    id: 'custom.variable',
    label: 'custom.variable',
    descriptionKey: 'customDescription',
    categoryKey: 'categoryCustom',
  },
];
```

Add translations in `src/content/variable-editor.content.ts`:

```typescript
customDescription: t({
  en: 'Description in English',
  es: 'Descripción en Español',
}),
```

### Styling Variables

Modify badge styles in `src/extensions/VariableNode.ts`:

```typescript
class: 'inline-flex items-center rounded-md bg-primary/10 px-2 py-1 ...'
```

## 🧪 Development

```bash
# Run development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## 👤 Author

**Jose S.**

- GitHub: [@Huichoman](https://github.com/Huichoman)

## 🙏 Acknowledgments

- [Tiptap](https://tiptap.dev/) - Headless editor framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
