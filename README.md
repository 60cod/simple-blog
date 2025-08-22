# Tech Blog - Next.js Homepage

A clean, minimal tech blog homepage built with Next.js 14 and TypeScript.

## Features

- Clean white design with minimal styling
- Responsive grid layout for blog posts
- TypeScript support
- Modern Next.js App Router
- Mobile-friendly responsive design
- Fast and lightweight

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PostsSection.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
├── tsconfig.json
└── next.config.js
```

## Customization

- Update blog posts in `app/components/PostsSection.tsx`
- Modify styling in `app/globals.css`
- Change site metadata in `app/layout.tsx`

## Build for Production

```bash
npm run build
npm start
```