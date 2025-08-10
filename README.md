# Dinamo - Next.js App

This is a Next.js application with a beautiful camping/travel themed interface.

## Features

- 📱 **Responsive design**: Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI**: Beautiful camping/travel themed interface
- 🚀 **Next.js 15**: Latest Next.js with App Router

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Usage

### Accessing the App
- Main app: `http://localhost:3000`

## Project Structure

```
dinamo/
├── app/                  # App directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── Components/           # Reusable components
│   ├── Navbar.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   └── ...              # Other components
├── constants/            # App constants
│   └── index.ts         # Navigation, features, footer data
├── public/               # Static assets
└── ...
```

## Configuration Files

### next.config.ts
Basic Next.js configuration without internationalization plugins.

### constants/index.ts
Contains all the text content for navigation, features, and footer sections.

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React 19**: Latest React version
