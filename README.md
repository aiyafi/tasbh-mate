# TasbhMate

<div align="center">
  <img src="public/logo.png" alt="TasbhMate Logo" width="120" height="120" style="border-radius: 20px;">
  <h3>A digital tasbih (prayer counter) application built with React</h3>
</div>

## 📝 Description

TasbhMate is envisioned as a modern digital tasbih application designed to help Muslims keep track of their dhikr (remembrance of Allah) as an online service. The initial goal is to allow users to store their prayer counts and continue them seamlessly across different devices by leveraging Convex for backend data storage and NextAuth for authentication.

Currently, due to ongoing development and skill limitations, TasbhMate utilizes **local storage** to persist the count within the same browser. However, the long-term vision remains to provide a fully online experience with cross-device synchronization.

## ✨ Features

- **Modern UI**: Built with Tailwind CSS and Shadcn UI components for a clean and intuitive interface.
- **Simple Counter Interface**: Large, easy-to-read numbers with smooth animations.
- **Multiple Input Methods**: Click/tap the screen, use keyboard shortcuts, or buttons.
- **Keyboard Shortcuts**:
  - `Space` - Increment count
  - `-` - Decrement count
- **Current Persistence (Local Storage)**: Your count is currently saved automatically within your browser's local storage between sessions.
- **Future Persistence (Online Synchronization)**: The goal is to enable automatic saving and synchronization of your count across all your devices once the online service with Convex is implemented.
- **Dark/Light Mode**: Choose your preferred theme.
- **Responsive Design**: Works on all devices from mobile to desktop.
- **Particle Effects**: Beautiful interactive background particles.
- **Authentication (Planned)**: User accounts via NextAuth (Google, GitHub, and credentials) will be implemented to link your count to your account for cross-device access.
- **Prayer Tracking and History (Future)**: Plan to implement a feature to track and view your prayer history.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework with App Router
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Customizable UI components
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives (used by Shadcn UI)
- [NextAuth.js](https://next-auth.js.org/) - Authentication (for future online service)
- [Convex](https://www.convex.dev/) - Global state management and backend services (for future online service)
- [Motion](https://motion.dev/) - Animation library for React
- [NumberFlow](https://github.com/number-flow/react) - Animated number transitions
- [Lucide React](https://lucide.dev/) - Icon library
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Utility for merging Tailwind CSS classes

## 🚀 Future Plans

- **Implement Backend with Convex**: Integrate Convex to store user data in the cloud.
- **Integrate Authentication with NextAuth**: Enable user authentication to link their prayer counts.
- **Enable Cross-Device Synchronization**: Allow users to access and continue their counts from any device.
- **Develop Prayer Tracking and History Feature**.

## 📦 Getting Started

First, clone the repository:

```bash
git clone [https://github.com/yourusername/tasbh-mate.git](https://github.com/yourusername/tasbh-mate.git)
cd tasbh-mate
```

Install the dependencies:

Since this project uses [pnpm](https://pnpm.io/), you can install the dependencies using:

Bash

```
pnpm install

```

Or, if you prefer using npm or yarn, you can run:

Bash

```
npm install
# or
yarn install

```

Set up the environment variables:

Create a `.env.local` file in the root directory and add the following environment variables or use the `.env.example` file as a template:

Bash

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=yout-github-client-secret
NEXTAUTH_URL=yout-nextauth-url

```

Run the development server:

Bash

```
pnpm dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## 📂 Project structure:

Bash

```
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

## 🌐 Deployed Link

You can try the live version of TasbhMate at: https://tasbh-mate.yafff.tech/

## 📄 License

```
MIT License

Copyright (c) 2025 K9Fox

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```