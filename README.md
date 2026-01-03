# Galleria Slideshow Site

A responsive art gallery slideshow website featuring 15 masterpieces from renowned artists. Built with vanilla JavaScript, HTML5, and SCSS, this project showcases an interactive gallery experience with slideshow functionality.

## Features

- **Interactive Gallery Grid**: Browse 15 famous artworks in a responsive grid layout
- **Detailed Artwork View**: Click any artwork to see detailed information including:
  - High-resolution hero images with responsive loading
  - Artist information and portrait
  - Artwork description and historical context
  - Year of creation and Wikipedia source links
- **Slideshow Mode**: Automated slideshow with play/pause controls
- **Navigation Controls**: Previous/next buttons for manual artwork navigation
- **Modal View**: Full-screen image viewing capability
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: ARIA labels, semantic HTML5, and keyboard navigation support
- **Performance**: Lazy loading images and efficient DOM manipulation

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **SCSS**: Modular CSS with variables, mixins, and responsive design
- **JavaScript (ES6+)**: Modern JavaScript with modules and event delegation
- **CSS Grid & Flexbox**: Modern layout techniques
- **Web Components**: Native HTML elements like `<picture>` and `<dialog>`

## Project Structure

```
├── assets/
│   ├── css/           # Compiled CSS files
│   ├── js/            # Modular JavaScript files
│   ├── scss/          # SCSS source files
│   ├── images/        # Artwork images organized by piece
│   └── fonts/         # Custom fonts (Libre Baskerville)
├── data.json          # Artwork data structure
├── index.html         # Main HTML file
└── README.md          # This file
```

## Artworks Featured

The gallery includes 15 masterpieces such as:

- **Starry Night** (1889) - Vincent Van Gogh
- **Girl with a Pearl Earring** (1665) - Johannes Vermeer
- **Guernica** (1937) - Pablo Picasso
- **Mona Lisa** (1503) - Leonardo da Vinci
- **The Great Wave off Kanagawa** (1831) - Hokusai
- And 10 more renowned artworks

## Getting Started

Since this is a static website, no build process is required:

1. Clone the repository
2. Open `index.html` in your browser
3. Or use a static server for development:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

## Data Structure

Artwork information is stored in `data.json` with the following structure:

```json
{
  "name": "Artwork Title",
  "year": 1889,
  "description": "Artwork description...",
  "source": "Wikipedia URL",
  "artist": {
    "image": "path/to/artist/portrait.jpg",
    "name": "Artist Name"
  },
  "images": {
    "thumbnail": "path/to/thumbnail.jpg",
    "hero": {
      "small": "path/to/hero-small.jpg",
      "large": "path/to/hero-large.jpg"
    },
    "gallery": "path/to/gallery.jpg"
  }
}
```

## Code Style

- **JavaScript**: ES6+ modules, arrow functions, event delegation
- **CSS/SCSS**: BEM-like naming, mobile-first approach, CSS custom properties
- **HTML5**: Semantic elements, accessibility attributes
- **Performance**: Lazy loading, minimal DOM manipulation

### Screenshot

![](./screenshot01.png)
![](./screenshot02.png)
![](./screenshot03.png)
![](./screenshot04.png)
![](./screenshot05.png)
![](./screenshot06.png)


## Browser Support

- Modern browsers supporting ES6+, CSS Grid, and HTML5 features
- Responsive design works on all screen sizes
- Accessibility features compatible with screen readers

