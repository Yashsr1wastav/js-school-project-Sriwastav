# Timeline App

A progressive web application built through 6 incremental development tasks, focusing on modern web development practices, accessibility, and clean architecture.

## Project Goal

Create a semantic, accessible, and interactive timeline application that demonstrates:
- Progressive enhancement from static HTML to dynamic React app
- Accessibility-first design principles
- Modern JavaScript/TypeScript development practices
- Responsive design and clean UI/UX

## Current Progress

### ✅ Task 1: Semantic HTML Foundation
**Branch:** `feature/task-1`
- [x] Semantic HTML structure with proper landmarks
- [x] Header with logo and theme toggle placeholder
- [x] Timeline skeleton with markers and modal placeholders
- [x] Basic accessibility foundations (alt text, roles, labels)
- [x] Clean, semantic markup ready for styling

### ✅ Task 2: CSS & Responsive Design
**Branch:** `feature/task-2`
- [x] Responsive layout using Flexbox/Grid
- [x] Base typography and color scheme
- [x] Mobile-first responsive design
- [x] Accessibility improvements (contrast, focus states)
- [x] Static prototype ready for interactivity

## Upcoming Tasks

### 🔄 Task 3: JavaScript Fundamentals
**Branch:** `feature/task-3`
- [ ] DOM manipulation and event handling
- [ ] ES Modules for code organization
- [ ] Simple state management with arrays/objects
- [ ] Optional localStorage/sessionStorage persistence
- [ ] Basic form validation and error handling

### 📋 Task 4: TypeScript Integration
**Branch:** `feature/task-4`
- [ ] TypeScript configuration (strict mode)
- [ ] Type definitions for data models and functions
- [ ] Refactor existing JavaScript to TypeScript
- [ ] Build and transpile scripts setup

### ⚛️ Task 5: React Migration
**Branch:** `feature/task-5`
- [ ] Bootstrap with Vite (React + TypeScript)
- [ ] Component architecture with props and hooks
- [ ] State management (useState, useEffect)
- [ ] Optional routing with React Router
- [ ] Integration of existing TypeScript logic

### ♿ Task 6: Accessibility Audit
**Branch:** `feature/task-6`
- [ ] Comprehensive accessibility audit
- [ ] ARIA attributes and focus management
- [ ] Keyboard navigation support
- [ ] Screen reader testing and improvements
- [ ] Accessibility report documentation

## Development Guidelines

### Branch Naming
- `feature/task-1` - Semantic HTML Foundation
- `feature/task-2` - CSS & Responsive Design
- `feature/task-3` - JavaScript Fundamentals
- `feature/task-4` - TypeScript Integration
- `feature/task-5` - React Migration
- `feature/task-6` - Accessibility Audit

### Pull Request Template
```
## Goal / Scope
Brief description of what this task accomplishes

## Main Changes
- Key changes made
- New features added
- Refactoring done

## How to Test
Steps to test the changes locally
```

### Commit Message Convention
- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code refactoring
- `docs:` - Documentation updates
- `style:` - Code style changes
- `accessibility:` - Accessibility improvements

## Getting Started

1. Clone the repository
2. Switch to the desired branch: `git checkout feature/task-X`
3. Open `index.html` in your browser (for tasks 1-3)
4. For later tasks, follow the specific setup instructions in each branch

## Project Structure
```
├── index.html          # Main HTML file
├── styles/
│   ├── main.css       # Main stylesheet
│   └── components/    # Component-specific styles
├── scripts/
│   ├── main.js        # Main JavaScript file
│   └── modules/       # ES Modules
├── assets/
│   ├── images/        # Images and icons
│   └── fonts/         # Custom fonts
└── docs/
    ├── README.md      # This file
    └── ACCESSIBILITY.md # Accessibility documentation
```

## Technologies Used

- **Task 1-2:** Semantic HTML5, CSS3 (Flexbox/Grid)
- **Task 3:** Vanilla JavaScript (ES6+), ES Modules
- **Task 4:** TypeScript, Build tools
- **Task 5:** React, Vite, React Router
- **Task 6:** ARIA, WCAG guidelines, Accessibility testing tools

## License

This project is created for educational purposes as part of a JavaScript learning curriculum.