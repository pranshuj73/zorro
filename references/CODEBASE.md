# Zorro Repository Documentation

## Project Overview

**Zorro** is a Next.js application built with React, TypeScript, and a comprehensive UI component library. The project uses the App Router architecture and is configured with shadcn/ui components, providing a modern, accessible, and customizable component system.

## Technology Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library (New York style)
- **Radix UI** - Headless UI primitives (used by shadcn/ui)
- **Lucide React** - Icon library
- **next-themes** - Theme management (dark mode support)
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional class name utilities

### Form Management
- **React Hook Form 7.70.0** - Form state management
- **Zod 4.3.5** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Additional Libraries
- **date-fns 4.1.0** - Date utility library
- **react-day-picker 9.13.0** - Date picker component
- **recharts 2.15.4** - Charting library
- **embla-carousel-react 8.6.0** - Carousel component
- **cmdk** - Command menu component
- **input-otp** - OTP input component
- **sonner** - Toast notifications
- **vaul** - Drawer component
- **react-resizable-panels** - Resizable panel layouts

### Development Tools
- **ESLint 9** - Code linting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing

## Repository Structure

```
zorro/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Site favicon
│
├── components/             # React components
│   └── ui/                # shadcn/ui components (see Components section)
│
├── hooks/                 # Custom React hooks
│   └── use-mobile.ts      # Mobile detection hook
│
├── lib/                   # Utility functions and helpers
│   └── utils.ts           # Common utilities (cn function for class merging)
│
├── public/                # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── components.json        # shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.mjs    # PostCSS configuration
├── eslint.config.mjs     # ESLint configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project readme
```

## Available Components

The project includes a comprehensive set of UI components from shadcn/ui. All components are located in `components/ui/` and are built on top of Radix UI primitives for accessibility and functionality.

### Layout & Navigation
- **Sidebar** (`sidebar.tsx`) - Collapsible sidebar navigation
- **Navigation Menu** (`navigation-menu.tsx`) - Navigation menu component
- **Menubar** (`menubar.tsx`) - Menu bar component
- **Breadcrumb** (`breadcrumb.tsx`) - Breadcrumb navigation
- **Separator** (`separator.tsx`) - Visual separator

### Form Components
- **Button** (`button.tsx`) - Button with multiple variants
- **Button Group** (`button-group.tsx`) - Grouped buttons
- **Input** (`input.tsx`) - Text input field
- **Input Group** (`input-group.tsx`) - Input with addons
- **Input OTP** (`input-otp.tsx`) - One-time password input
- **Textarea** (`textarea.tsx`) - Multi-line text input
- **Checkbox** (`checkbox.tsx`) - Checkbox input
- **Radio Group** (`radio-group.tsx`) - Radio button group
- **Switch** (`switch.tsx`) - Toggle switch
- **Slider** (`slider.tsx`) - Range slider
- **Select** (`select.tsx`) - Dropdown select
- **Label** (`label.tsx`) - Form label
- **Form** (`form.tsx`) - Form wrapper with validation
- **Field** (`field.tsx`) - Form field component

### Overlays & Dialogs
- **Dialog** (`dialog.tsx`) - Modal dialog
- **Alert Dialog** (`alert-dialog.tsx`) - Confirmation dialog
- **Sheet** (`sheet.tsx`) - Slide-over panel
- **Drawer** (`drawer.tsx`) - Mobile drawer
- **Popover** (`popover.tsx`) - Popover component
- **Tooltip** (`tooltip.tsx`) - Tooltip component
- **Hover Card** (`hover-card.tsx`) - Hover card component
- **Context Menu** (`context-menu.tsx`) - Right-click menu
- **Dropdown Menu** (`dropdown-menu.tsx`) - Dropdown menu

### Data Display
- **Table** (`table.tsx`) - Data table
- **Card** (`card.tsx`) - Card container
- **Avatar** (`avatar.tsx`) - User avatar
- **Badge** (`badge.tsx`) - Badge/tag component
- **Empty** (`empty.tsx`) - Empty state component
- **Skeleton** (`skeleton.tsx`) - Loading skeleton
- **Spinner** (`spinner.tsx`) - Loading spinner
- **Progress** (`progress.tsx`) - Progress bar
- **Chart** (`chart.tsx`) - Chart component wrapper

### Interactive Components
- **Accordion** (`accordion.tsx`) - Collapsible accordion
- **Collapsible** (`collapsible.tsx`) - Collapsible content
- **Tabs** (`tabs.tsx`) - Tab navigation
- **Toggle** (`toggle.tsx`) - Toggle button
- **Toggle Group** (`toggle-group.tsx`) - Grouped toggles
- **Command** (`command.tsx`) - Command palette
- **Calendar** (`calendar.tsx`) - Date picker calendar
- **Carousel** (`carousel.tsx`) - Image/content carousel
- **Pagination** (`pagination.tsx`) - Pagination controls
- **Resizable** (`resizable.tsx`) - Resizable panels

### Feedback & Alerts
- **Alert** (`alert.tsx`) - Alert message
- **Sonner** (`sonner.tsx`) - Toast notifications

### Utility Components
- **Aspect Ratio** (`aspect-ratio.tsx`) - Maintain aspect ratio
- **Scroll Area** (`scroll-area.tsx`) - Custom scrollbar
- **KBD** (`kbd.tsx`) - Keyboard key display
- **Item** (`item.tsx`) - List item component

## Key Libraries & Dependencies

### UI Foundation
- **Radix UI** - Provides accessible, unstyled UI primitives. All shadcn/ui components are built on Radix primitives, ensuring WCAG compliance and keyboard navigation.

### Styling System
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **CSS Variables** - Theme system uses CSS variables for dynamic theming
- **Class Variance Authority** - Manages component variants (e.g., button sizes, colors)

### Form Handling
- **React Hook Form** - Performant form library with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Bridges React Hook Form with Zod validation

### Date & Time
- **date-fns** - Modern JavaScript date utility library
- **react-day-picker** - Flexible date picker component

### Data Visualization
- **Recharts** - Composable charting library built on React and D3

### Notifications
- **Sonner** - Beautiful toast notification system

## Configuration Files

### `components.json`
shadcn/ui configuration file specifying:
- Style: New York
- React Server Components: Enabled
- TypeScript: Enabled
- Tailwind CSS variables: Enabled
- Icon library: Lucide
- Path aliases for components, utils, and hooks

### `tsconfig.json`
TypeScript configuration with:
- Strict mode enabled
- Path aliases (`@/*` maps to root)
- Next.js plugin integration
- ES2017 target

### `next.config.ts`
Next.js configuration (currently minimal, ready for customization)

### `postcss.config.mjs`
PostCSS configuration for Tailwind CSS processing

### `eslint.config.mjs`
ESLint configuration with Next.js preset

## Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/hooks` → `./hooks`
- `@/components/ui` → `./components/ui`

Example usage:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
```

## Utility Functions

### `cn()` Function
Located in `lib/utils.ts`, this function merges Tailwind CSS classes intelligently:

```typescript
import { cn } from "@/lib/utils"

// Combines clsx and tailwind-merge for conditional classes
cn("base-class", condition && "conditional-class")
```

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Theme System

The project supports dark mode through:
- **next-themes** - Theme provider
- **CSS Variables** - Dynamic theming via CSS custom properties
- **Tailwind Dark Mode** - Automatic dark mode class handling

## Component Architecture

All UI components follow the shadcn/ui pattern:
1. Built on Radix UI primitives for accessibility
2. Styled with Tailwind CSS
3. Variants managed with class-variance-authority
4. Fully customizable via props and CSS variables
5. TypeScript-first with full type safety

## Font System

The project uses Next.js font optimization:
- **Geist Sans** - Primary font (variable: `--font-geist-sans`)
- **Geist Mono** - Monospace font (variable: `--font-geist-mono`)

Fonts are automatically optimized and loaded via `next/font/google`.

## Browser Support

- Modern browsers with ES2017+ support
- Full TypeScript support
- CSS Grid and Flexbox required
- CSS Variables support required for theming

## Next Steps

To extend this project:
1. Add new pages in the `app/` directory
2. Create custom components in `components/`
3. Add utilities in `lib/`
4. Create custom hooks in `hooks/`
5. Install additional shadcn/ui components as needed using the CLI

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com)
- [Zod Documentation](https://zod.dev)

