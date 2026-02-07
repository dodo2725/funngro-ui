# Funngro - Teenlancer Platform

A Next.js web application for Funngro, connecting talented teenagers with real companies to earn money and learn real-world skills.

## Features

- **Home Page**: Main landing page with platform overview
- **Teen Page**: Information and benefits for teenagers
- **Company Page**: Information for companies looking to hire teen talent
- **Navigation**: Connected navigation menu linking all pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
funngro/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── teen/
│   │   └── page.tsx        # Teen page
│   └── company/
│       └── page.tsx        # Company page
├── components/
│   ├── Navigation.tsx      # Navigation component
│   └── Navigation.module.css
└── package.json
```

## Navigation

The navigation menu is connected to three main pages:
- **Home** (`/`) - Main landing page
- **Teen** (`/teen`) - Page for teenagers
- **Company** (`/company`) - Page for companies

All navigation links are functional and use Next.js routing for seamless page transitions.

## Build for Production

```bash
npm run build
npm start
```



