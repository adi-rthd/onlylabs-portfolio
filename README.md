# Aditya Rathod | Backend SDE-1 Portfolio & OnlyLabs Product Studio

Welcome to the official codebase of Aditya Rathod's developer portfolio. Built using **React 19**, **TypeScript**, and **Tailwind CSS v4**, this portfolio is designed to showcase production-first backend engineering skills, independent builder projects, and modern interactive aesthetics.

The site is themed around **OnlyLabs**, Aditya's personal product studio and builder identity, presenting a developer-centric interface complete with an interactive VPS bash console and custom physics effects.

---

## 🚀 Key Features

### 1. Interactive VPS Bash Console (`Hero.tsx`)
A terminal emulator that replicates a VPS shell. When loaded, it simulates booting an ASP.NET Core service on .NET 10, maps database entities via EF Core, checks Redis caching channels, and reveals an active input prompt.
* **Supported Commands**:
  - `help` - List available commands.
  - `about` - View developer biography.
  - `projects` - Inspect current OnlyLabs product registry.
  - `skills` - Print backend tech stack capabilities.
  - `antigravity` - Toggle the gravity physics engine.
  - `love` - A special Easter Egg message from the developer AI.
  - `clear` - Clear terminal lines.

### 2. Custom Zero-Gravity Physics Engine (`index.css`)
Activating the `antigravity` command in the console toggles Zero-Gravity Mode:
* **Persistent Drift**: Staggered floating animations applied to all cards, panels, and badges.
* **Elastic Spring Hovers**: Pointer hovers shift components upward (`translateY(-20px)`), scale, and rotate them using custom cubic-bezier spring curves.
* **Nebula Backdrop**: Activates floating radial gradients behind sections.

### 3. OnlyLabs Product Studio Spotlight
Highlights a dedicated section explaining Aditya's personal builder philosophy: shipping reliably, ownership of the pipeline from design to VPS hosting, and continuous experimentation.
* **OnlySplit**: Flagship C# .NET 10 expense ledger with real-time sync, Redis caches, and Android Capacitor packaging. Includes an interactive visual system architecture board.
* **Pulse**: Minimal browser diagnostic latency package.

### 4. SEO Path-Based Routing
Uses React Router `BrowserRouter` with pathnames (`/about`, `/projects`, `/onlylabs`, etc.) instead of hash tags (`/#projects`). A custom scroll observer (`ScrollToSection`) orchestrates clean URL transitions while retaining single-page scrolling dynamics.

---

## 🛠️ Technology Stack

* **Frontend Framework**: React 19 + TypeScript
* **Styling**: Tailwind CSS v4 + Framer Motion (for animations)
* **Routing**: React Router v7 (`BrowserRouter`)
* **Icons**: Lucide React + custom inline SVG exports (resolving compiling constraints)
* **Build System**: Vite

---

## 💻 Getting Started

### Prerequisites
* **Node.js** (v18+)
* **npm** or **pnpm**

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd aditya.rathod
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```
   The compiled assets will be bundled inside the `dist/` directory.

---

## 🌐 Production Deployment Guide

Since this application utilizes standard pathname routing (e.g., `/projects`) rather than hash routing, your production server (e.g., Nginx, Apache) must be configured to redirect all incoming traffic to `index.html` so that React Router can handle routing client-side.

### Nginx Configuration Example
Add the following `try_files` directive to your server block:
```nginx
server {
    listen 80;
    server_name adityarathod.com; # Replace with your domain

    root /var/web/aditya.rathod/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
