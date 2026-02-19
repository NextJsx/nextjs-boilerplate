# Next.js Boilerplate

A simple Next.js App Router starter that now includes a **dashboard-style home page preview** with a left sidebar, metric cards, and a recent activity panel.

## Home Page Preview

The root route (`app/page.tsx`) currently renders:
- a responsive app shell with sidebar navigation
- a top content header with a primary action button
- overview metric cards
- a recent activity section

This is intended as a visual starting point for building a product dashboard UI.

## Getting Started

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run lint` — run ESLint checks

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Notes

In restricted environments, Next.js may warn about downloading Google Fonts from `next/font`. The app will fall back to system fonts automatically.
