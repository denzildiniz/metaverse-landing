# Metaverse Landing Page

A modern, responsive landing page for a metaverse investment platform built with Next.js 14, featuring animated components, interactive elements, and a beautiful gradient design.

##  Installation ##

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/denzildiniz/metaverse-landing.git

# Navigate to the project directory
cd metaverse-landing

use the main branch
```

### 2. Install Dependencies

# Install all required packages
npm install


### Development Server

# Start the development server
npm run dev

# Alternative commands
yarn dev
pnpm dev
bun dev


Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.


## 📋 Table of Contents

- [Installation](#-installation)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Styling & Animations](#-styling--animations)
- [Responsive Design](#-responsive-design)


## ✨ Features

- **Modern UI/UX**: Clean, gradient-based design with smooth animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, animated particles, and rotating circles
- **Investment Plans**: Dynamic plan cards with detailed information
- **Real-time Statistics**: Animated counters and live data display
- **Particle Effects**: Background particle animations for enhanced visual appeal
- **Smooth Scrolling**: Optimized scroll behavior and animations
- **Mobile-First**: Responsive breakpoints with mobile-optimized layouts

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript (optional)

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styling
- **Custom CSS** - Advanced animations and effects

### Icons & Graphics
- **React Icons** - Icon library (Font Awesome, Bootstrap, etc.)
- **Next.js Image** - Optimized image loading
- **SVG Graphics** - Scalable vector graphics

### Animation Libraries
- **CSS Animations** - Custom keyframe animations
- **React Hooks** - useState, useEffect for interactions
- **Scroll Animations** - Custom scroll-based effects


## 📁 Project Structure

```
metaverse-landing/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.js                # Root layout component
│   ├── page.js                  # Home page
│   └── data.js/                 # Data files
│       ├── feature.js           # Feature data
│       └── plans.js             # Investment plans data
├── components/                   # React components
│   ├── HeroSection.jsx          # Hero section with animations
│   ├── Navbar.js                # Navigation component
│   ├── Feature.jsx              # Features section
│   ├── Plans.jsx                # Investment plans section
│   ├── About.jsx                # About section
│   └── ParticlesComponent.js    # Particle effects
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   ├── *.svg                    # SVG icons and graphics
│   └── favicon.ico              # Site favicon
├── styles/                      # Additional stylesheets
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json                 # Project dependencies
└── README.md                    # Project documentation
```

## 🧩 Components Overview

### HeroSection.jsx
- **Purpose**: Main landing section with animated statistics
- **Features**: Particle background, animated counters, gradient cards
- **Animations**: Scroll-based opacity and transform effects

### Plans.jsx
- **Purpose**: Investment plans display with interactive elements
- **Features**: Rotating circles, hover effects, responsive cards
- **Responsive**: Desktop circular layout, mobile card grid

### Navbar.js
- **Purpose**: Site navigation with responsive design
- **Features**: Mobile menu, smooth scrolling, brand logo

### ParticlesComponent.js
- **Purpose**: Background particle animation system
- **Features**: Configurable particle behavior, performance optimized

### About.jsx
- **Purpose**: Company information and branding
- **Features**: Gradient text, floating moon animation, company details

## 🎨 Styling & Animations

### CSS Architecture
- **Global Styles**: `app/globals.css` contains CSS variables and global styles
- **Component Styles**: Tailwind classes with custom CSS for complex animations
- **Responsive Design**: Mobile-first approach with custom breakpoints

### Key Animations
- **Gradient Text**: Animated color transitions
- **Rotating Circles**: CSS keyframe animations
- **Particle Effects**: JavaScript-based particle system
- **Hover Effects**: Inset shadows and cursor changes
- **Scroll Animations**: Opacity and transform based on scroll position

### Color Scheme
```css
:root {
  --bg-primary: #0f1419;
  --bg-secondary: #1a2332;
  --text-primary: #ffffff;
  --text-accent: #4fc3f7;
  --color-pink: #e0398b;
  --color-violet: #6778c8;
  --color-purple: #8b3e9c;
}
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 830px - Card-based layout
- **Tablet**: 830px - 1024px - Hybrid layout
- **Desktop**: > 1024px - Full circular layout

### Mobile Optimizations
- Simplified navigation menu
- Card-based plan display
- Optimized image sizes
- Touch-friendly interactions

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- React Icons for the comprehensive icon library
- All contributors and testers
