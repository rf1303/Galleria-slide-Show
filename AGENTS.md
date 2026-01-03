# AGENTS.md

## Build Commands
- **Development**: No build process - static HTML/CSS/JS
- **Testing**: No test framework configured
- **Linting**: No linting tools configured
- **Live server**: Use any static server (e.g., `python -m http.server`)

## Code Style Guidelines

### JavaScript/ES6
- Use ES6 modules with `import/export`
- Prefer `const` and `let` over `var`
- Use arrow functions for callbacks
- Event delegation for dynamic content
- DOM queries use `getElementById` and `querySelector`

### CSS/SCSS
- SCSS with modular structure (globals/, util/)
- CSS custom properties for theming
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- BEM-like naming for classes (e.g., `wrapper__header`)

### File Organization
- `/assets/js/` - Modular JavaScript files
- `/assets/scss/` - SCSS source files
- `/assets/css/` - Compiled CSS
- `/assets/images/` - Image assets organized by artwork
- `data.json` - Artwork data structure

### Accessibility
- Semantic HTML5 elements
- ARIA labels and attributes
- Keyboard navigation support
- `alt` attributes for all images

### Performance
- Lazy loading for images
- Efficient event delegation
- Minimal DOM manipulation