
# Ashleybrookeces Smudge Revealer

A modern, interactive SVG-based animation project that reveals background content through a "smudge" or "ink" effect. This project utilizes Vite for a fast development experience and GSAP for smooth, high-performance animations.

<img width="1572" height="980" alt="Screenshot 2026-05-07 163800" src="https://github.com/user-attachments/assets/577b8238-aafc-4e7c-bd28-45870bf8ecdb" />

## ✨ Features

- **Interactive Revealer**: Moves with the mouse or touch input to create a dynamic reveal effect.
- **SVG Gooey Filter**: Uses a combination of `feGaussianBlur` and `feColorMatrix` to create a liquid-like "gooey" effect on the smudge blobs.
- **Responsive Design**: Automatically adjusts to the viewport size.
- **High Performance**: Powered by GSAP for efficient DOM/SVG manipulation.
- **Modern Build Tool**: Integrated with Vite for lightning-fast HMR (Hot Module Replacement) and optimized builds.

## 🛠️ Technology Stack

- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Animation**: [GSAP](https://greensock.com/gsap/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Graphics**: Inline SVG with custom filters

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Thakuma07/ABCS-SVGAnimation.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ABCS
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Production

Build the project for production:
```bash
npm run build
```
The optimized files will be generated in the `dist/` directory.

## 📁 Project Structure

```text
.
├── index.html          # Main entry point
├── script.js           # Core animation logic & GSAP setup
├── styles.css          # UI styling & layout
├── vite.config.js      # Vite configuration
├── package.json        # Project metadata & dependencies
└── .gitignore          # Git exclusion rules
```

## 🎨 Animation Logic

The effect is achieved by:
1.  Tracking mouse/touch movement with a smoothed pointer.
2.  Creating SVG `circle` elements at the pointer's location.
3.  Applying a "gooey" filter to the SVG container to make overlapping circles blend like liquid.
4.  Using GSAP to animate the radius of the circles (expand then dissolve) before removing them from the DOM.

## 💡 Inspiration

This project was inspired by the interaction design found on [Ashley Brooke's website](https://ashleybrookecs.com/).

---

Created by [thakuma.dev](https://thakuma.dev)
