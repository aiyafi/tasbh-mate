# TasbhMate

A digital tasbih (prayer counter) application built with Next.js, helping users keep track of their dhikr and prayers.

## Features

- Modern UI with Tailwind CSS and Shadcn UI components
- User authentication via NextAuth
- Responsive design for all devices
- Dark/light mode support
- Prayer tracking and history

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Customizable UI components
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Utility for merging Tailwind CSS classes
- [Convex](https://www.convex.dev/) - Global state management and backend services
- [Motion](https://motion.dev/) - Animation library for React

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/tasbh-mate.git
cd tasbh-mate
```

Install the dependencies:

Since this project uses [pnpm](https://pnpm.io/), you can install the dependencies using:
```bash
pnpm install
```

Or, if you prefer using npm or yarn, you can run:
```bash
npm install
# or
yarn install
```

Set up the environment variables:

Create a `.env.local` file in the root directory and add the following environment variables or use the `.env.example` file as a template: 

```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=yout-github-client-secret
NEXTAUTH_URL=yout-nextauth-url
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Project structure:

```bash
tasbh-mate
├─ components.json              # Shadcn UI configuration
├─ eslint.config.mjs            # ESLint configuration
├─ next.config.ts               # Next.js configuration
├─ package.json                 # Dependencies and scripts
├─ pages
│  └─ api                       # API routes
│     └─ auth                   # Authentication API
│        └─ [...nextauth].ts    # NextAuth configuration
├─ public                       # Static assets
├─ src
│  ├─ app                       # App router pages and layouts
│  ├─ components                # React components
│  └─ lib                       # Utility functions and shared code
├─ tailwind.config.js           # Tailwind CSS configuration
├─ tsconfig.json                # TypeScript configuration
```

## License
