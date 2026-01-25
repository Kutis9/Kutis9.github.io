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

### Terminal Usage Protocol
**Always go to the terminal with shortcut `Ctrl+`** when executing commands. Use cmd-compatible commands and avoid PowerShell-specific syntax.

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

## GitHub Issues Workflow
**IMPORTANT**: For every implementation task, create a GitHub Issue first before starting development.

### Issue Creation Guidelines
Every issue should include:
1. **Clear Title**: Concise description of the task (e.g., "Add SEO meta tags to index.html")
2. **Detailed Description**: What needs to be done and why
3. **Requirements Checklist**: Specific implementation tasks with `- [ ]` checkboxes
4. **Acceptance Criteria**: How to verify the task is complete
5. **Technical Details**: 
   - Files to modify
   - Technologies involved
   - Dependencies/blockers
6. **Labels**: feature/bug/enhancement/documentation
7. **Priority**: P0 (critical), P1 (important), P2 (nice-to-have)

### Issue Template Example
```markdown
**Title:** [Feature] Add dark mode toggle

**Description:**
Implement dark mode functionality with system preference detection and manual toggle.

**Requirements:**
- [ ] Create theme context for state management
- [ ] Add toggle button in navigation
- [ ] Design dark color palette
- [ ] Update all components for dark mode support
- [ ] Save preference to localStorage
- [ ] Detect system preference on initial load

**Acceptance Criteria:**
- Toggle switches between light/dark modes smoothly
- Preference persists across page reloads
- System preference is respected on first visit

**Technical Details:**
- Files: src/contexts/ThemeContext.tsx, src/components/Navigation.tsx, index.css
- Tech: React Context API, localStorage, CSS variables
- Estimate: 8 hours

**Dependencies:** None
```

### Implementation Approaches

#### **Option 1: Manual Implementation (with Copilot assistance)**
Use this when you want full control over the implementation:
1. Create issue on GitHub
2. Create local branch: `git checkout -b feature/issue-<number>-<short-name>`
3. Reference issue in commits: `git commit -m "feat: add dark mode toggle (#123)"`
4. Use Copilot Chat in VS Code for coding assistance
5. Push branch and create Pull Request
6. In PR description, add `Closes #123` to auto-close issue on merge
7. Request review (or self-review)
8. Merge to main

**Branch Naming Convention:**
- Features: `feature/issue-123-dark-mode`
- Bugs: `fix/issue-45-broken-link`
- Docs: `docs/issue-78-update-readme`

#### **Option 2: Copilot Coding Agent (automated implementation)**
Use this for well-defined tasks where you want automated implementation:
1. Create detailed issue on GitHub (must be very specific)
2. Assign issue to Copilot:
   - **Via GitHub UI**: Click "Assignees" → select @copilot
   - **Via Copilot Chat**: Use command `@copilot implement issue #123`
   - **Via mcp_github tool**: Use `mcp_github_assign_copilot_to_issue`
3. Copilot coding agent will:
   - Analyze the issue and codebase
   - Create a new branch automatically
   - Implement the solution following project conventions
   - Run validation checks (lint, build)
   - Create Pull Request with implementation
   - Add you as reviewer
4. Review the PR:
   - Check code quality and correctness
   - Test functionality locally: `git fetch && git checkout <branch-name>`
   - Request changes via PR comments if needed
   - Approve and merge when satisfied
5. Issue closes automatically when PR is merged

**Best Practices for Copilot Agent Issues:**
- Be very specific in requirements
- Include code examples or references
- Mention files that need changes
- List edge cases to handle
- Reference existing patterns in codebase
- Add test requirements if applicable

### Workflow Decision Guide

**Use Manual Implementation when:**
- Task requires creative problem-solving
- You want to learn/understand the implementation
- Task involves complex business logic
- Multiple approaches need evaluation
- Task is experimental or exploratory

**Use Copilot Coding Agent when:**
- Task is well-defined and straightforward
- Following established patterns
- Repetitive implementations (e.g., similar components)
- Boilerplate code generation
- Refactoring with clear objectives
- Time-sensitive tasks

### Issue Lifecycle
```
[Open] → [In Progress] → [PR Created] → [Review] → [Merged] → [Closed]
   ↓           ↓              ↓             ↓           ↓
 Create    Assign to    Agent opens    You review   Auto-close
 Issue    self/agent       PR          and merge    on merge
```

### Linking Issues and PRs
Always link PRs to issues using GitHub keywords in PR description:
- `Closes #123` - Closes issue when PR is merged
- `Fixes #123` - Same as Closes
- `Resolves #123` - Same as Closes
- `Related to #123` - Links without closing

### Project Board Integration (Optional)
If using GitHub Projects:
- Move issues through columns: To Do → In Progress → Review → Done
- Automate with GitHub Actions workflows
- Track sprint progress visually

### Example Commands for Copilot Agent

**Assign Copilot to existing issue:**
```
@copilot implement issue #123
```

**Create issue and assign in one step:**
```
@copilot create an issue to add SEO meta tags and implement it
```

**Request changes on Copilot's PR:**
```
Comment on PR: "@copilot please update the color scheme to use our brand colors from config"
```

### Integration with NEXT_STEPS.md
Before starting any task from NEXT_STEPS.md:
1. Create corresponding GitHub Issue
2. Link to NEXT_STEPS.md section (e.g., "Implements Task 1.1 from NEXT_STEPS.md")
3. Choose implementation approach (manual or agent)
4. Update NEXT_STEPS.md status when issue is closed

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