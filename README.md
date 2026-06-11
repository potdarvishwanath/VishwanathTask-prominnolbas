# Task: Modern Corporate Landing Page

A highly polished, responsive, and animated corporate landing page built with modern web technologies. This project focuses on high-end aesthetics, smooth scroll-based animations, and meticulous responsive design across all devices.

## 🚀 Technologies Used

- **Framework**: [React](https://reactjs.org/) powered by [Vite](https://vitejs.dev/) for lightning-fast HMR and building.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first, rapid UI development.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for complex, staggered, and scroll-triggered animations.
- **Icons**: SVG paths integrated directly for performance.

## 🎨 Design System

### Color Palette
The design relies on a premium, modern dark/light contrast with vibrant purple accents.
- **Primary Brand Color**: Violet `#8a5cff` (Used for buttons, hover states, and gradient accents).
- **Dark Elements**: `#111111` and `gray-800` (`#1f2937`) (Used for the Navbar, Footer, and dark section backgrounds).
- **Light Backgrounds**: `white` and a very faint violet `#f8f6fc` (Used to separate alternating sections).
- **Preloader**: Warm light gray `#f6f0ec`.

### Typography
- **Headings**: `font-bold` and `uppercase`.
- **Primary Gradient Titles**: Section titles use a signature text gradient: `bg-gradient-to-r from-[#4b2885] via-[#8a5cff] to-violet-600` with `bg-clip-text`.
- **Responsive Title Scale**: `text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-[4rem]`. This scale is strictly applied to all standard section headers (Why Us, Blog, Testimonials, Partners, FAQ) for maximum consistency.
- **Body Text**: `font-normal` (specifically chosen over light/thin weights for better readability on mobile screens) with `text-black/80` or `text-[#a0a0a0]` on dark backgrounds.

## 🧩 Architectural Flow & Patterns

1. **Preloader (`Preloader.jsx`)**
   - A smooth initial loading animation that blocks the UI while assets are preparing.
2. **Sticky Navbar (`Navbar.jsx`)**
   - Implements a scroll listener. It starts as a transparent/white header and transitions smoothly to a sleek dark header (`bg-gray-800`) with a drop shadow when the user scrolls down.
3. **Hero Section (`HeroSection.jsx`)**
   - Features highly dynamic entry animations and a structured line-break layout optimized specifically for desktop vs mobile readability.
4. **Dynamic Sections (Blog & Testimonials)**
   - Built with a simulated data-fetching pattern.
   - Includes stateful **Skeleton Loaders** that display for 2.5 seconds to indicate background processing before revealing the actual interactive carousel/grid data.
5. **Responsive Grid Architecture**
   - Complex sections (like the Footer) utilize precise 12-column CSS Grid layouts (`lg:grid-cols-12`, `md:grid-cols-6`) to allow perfect component distribution without relying purely on Flexbox wrapping. 
6. **Micro-Interactions**
   - Widespread use of subtle hover effects across buttons, social icons, and cards (e.g., `hover:-translate-y-1`, `hover:shadow-[0_8px_25px_rgba(138,92,255,0.4)]`) to make the interface feel alive and tactile.

## 📱 Mobile Responsiveness
Extreme care was taken to ensure the layout degrades gracefully:
- Horizontal scrolling carousels on mobile for blogs and testimonials to save vertical space.
- Font weights slightly increased and gaps tightened to prevent layout breaking.
- Complex desktop masonry image grids adapt into simple, stacked hero images on smaller devices.

## ⚙️ How to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```
2. **Start the Development Server**
   ```bash
   npm run dev
   ```
3. **Build for Production**
   ```bash
   npm run build
   ```
