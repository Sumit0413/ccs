# CCS Website

Official website for the **Code & Compute Society (CCS)** at Arka Jain University.

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) + [Lenis](https://lenis.darkroom.engineering/) (scroll animations)
- [Spline](https://spline.design/) (3D hero background)
- [Lucide React](https://lucide.dev/) (icons)
- [OGL](https://oframe.github.io/ogl/) (WebGL light rays)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── AboutCCS/
│   ├── AboutSOE/
│   ├── AboutAJU/
│   ├── Agenda/
│   ├── Highlights/
│   ├── MembersTiered/
│   ├── EventsPreview/
│   ├── GalleryPreview/
│   ├── LoginPortalPreview/
│   ├── Suggestions/
│   ├── LightRays/
│   └── Footer/
├── hooks/
│   └── useSmoothScroll.js
├── pages/
│   └── HomePage.jsx
├── App.jsx
└── main.jsx
```
