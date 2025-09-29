# Portfolio App - AI Coding Agent Instructions

## Project Overview
This is a **static portfolio application** built with React 19 + TypeScript + Vite, designed for deployment to **GitHub Pages**. The project uses modern tooling with strict TypeScript configuration and will integrate **Tailwind CSS 4** for styling.

## Architecture & TypeScript Configuration
```
src/
├── App.tsx          # Main application component (TSX format)
├── App.css          # Application styles
├── main.tsx         # React entry point (TSX format)
├── index.css        # Global styles
└── assets/          # Static assets (images, icons)
```

### TypeScript Setup
- **Strict mode enabled** with `noUnusedLocals`, `noUnusedParameters`
- **Modern ES2022 target** with bundler module resolution
- **JSX transform**: `react-jsx` (no need to import React in components)
- **Multiple tsconfig files**: `tsconfig.app.json` for src, `tsconfig.node.json` for build tools

## Key Development Workflows

### Development Commands
```bash
npm run dev          # Start development server with HMR
npm run build        # TypeScript compilation + Vite build for production
npm run lint         # ESLint with TypeScript-ESLint rules
npm run preview      # Preview production build locally
```

### Build Process
- **Two-stage build**: `tsc -b && vite build` (TypeScript check first, then Vite bundling)
- Build artifacts go to `dist/` directory for GitHub Pages deployment
- Vite handles asset optimization and bundling after TypeScript compilation

## Project-Specific Conventions

### Component Structure
- Use **functional components** with TypeScript interfaces
- File extension: `.tsx` for components, `.ts` for utilities
- **Strict TypeScript**: All props and state must be typed
- Import hooks explicitly: `import { useState } from 'react'`

### Planned Architecture Additions
- **Tailwind CSS 4** integration for utility-first styling
- **Slovak portfolio content** with internationalization considerations
- **Figma Make design** implementation with component-based approach
- **Context7 documentation** tool usage for development reference

## External Dependencies & Tooling

### Current Stack
- **React 19.1.1** - Latest React with concurrent features and new JSX transform
- **TypeScript 5.8.3** - Modern TypeScript with latest features
- **Vite 7.1.7** - Fast build tool optimized for modern browsers
- **ESLint 9.x** - Modern ESLint with typescript-eslint integration

### Development Tooling
- **Modern ESLint config** using flat config format in `eslint.config.js`
- **TypeScript-ESLint** with recommended rules for React development
- **Vite Plugin React** with Fast Refresh for instant HMR

## Development Notes
- **Type-first approach**: Define interfaces before implementing components
- **GitHub Pages deployment**: Configure base path in `vite.config.ts` when deploying
- **Performance focus**: Leverage React 19 concurrent features and Vite's optimization
- Use **Context7 tool** for retrieving up-to-date documentation during development
- Follow **modern React patterns** with hooks and functional components

## MCP Context7 Integration Protocol
**CRITICAL**: Always use MCP Context7 tool for documentation queries before implementing any feature or answering technical questions.

### Required Context7 Usage Pattern:
1. **Before every code implementation** - Query Context7 for relevant library documentation
2. **When encountering errors** - Use Context7 to find updated solutions and best practices
3. **For new features** - Always check latest API documentation via Context7
4. **Typography/styling questions** - Query Tailwind CSS documentation through Context7

### Example Context7 Queries:
- `react hooks typescript patterns` - for React + TS implementation guidance
- `tailwind css 4 configuration vite` - for styling setup
- `vite github pages deployment` - for build configuration
- `react 19 concurrent features` - for performance optimization

**Never assume documentation knowledge** - always verify current best practices through Context7 before providing implementation advice.