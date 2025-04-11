// src/app/layout.tsx

// Import Viewport along with Metadata
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Your font imports
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

// --- Font Setup (Keep your existing font setup) ---
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- PWA & SEO Metadata Constants ---
// Define constants based on your app's details for reusability
const APP_NAME = "Tasbih Mate";
const APP_DEFAULT_TITLE = "Tasbih Mate"; // Or just "Tasbih Mate" if no suffix needed
const APP_TITLE_TEMPLATE = "%s | Tasbih Mate"; // Example: "Page Title | Tasbih Mate"
const APP_DESCRIPTION = "Your digital Tasbih for Dhikr—simple, smooth, and always in sync.";

// --- Enhanced Metadata Object ---
export const metadata: Metadata = {
  applicationName: APP_NAME, // PWA application name
  title: { // Enhanced title handling
    default: APP_DEFAULT_TITLE, // Default title for base URL
    template: APP_TITLE_TEMPLATE, // Template for page titles (e.g., "Settings | Tasbih Mate")
  },
  description: APP_DESCRIPTION, // Your existing description
  manifest: "/manifest.json", // Link to the manifest file (in public/)

  appleWebApp: { // iOS specific PWA settings
    capable: true, // Enables standalone mode on iOS
    statusBarStyle: "black-translucent", // Style of the status bar ('default', 'black', 'black-translucent')
    title: APP_DEFAULT_TITLE, // Title shown when added to home screen
    // startUpImage: [], // Optional: Add startup images for different iOS devices
  },

  formatDetection: { // Prevents browsers from auto-detecting phone numbers
    telephone: false,
  },

  // Open Graph metadata (improves sharing previews on platforms like Facebook)
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: { // Consistent title for Open Graph
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    // url: 'https://your-app-url.com', // Optional: Your app's canonical URL
    // images: [ // Optional: Add a preview image (e.g., 1200x630)
    //   {
    //     url: '/icons/og-image.png', // Must be absolute URL in production or path from public/
    //     width: 1200,
    //     height: 630,
    //     alt: APP_DESCRIPTION,
    //   },
    // ],
  },

  // Twitter metadata (improves sharing previews on Twitter)
  twitter: {
    card: "summary", // Type of Twitter card ('summary', 'summary_large_image', 'app', 'player')
    title: { // Consistent title for Twitter
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    // images: ['/icons/twitter-image.png'], // Optional: Add a Twitter-specific image (e.g., square)
    // creator: '@yourTwitterHandle', // Optional: Your Twitter handle
  },
};

// --- Viewport Object ---
// Controls viewport settings like theme color
export const viewport: Viewport = {
  themeColor: "#FFFFFF", // Set your app's theme color (should match manifest.json)
  // Optionally provide different theme colors for light/dark modes:
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  //   { media: '(prefers-color-scheme: dark)', color: '#000000' }, // Adjust dark color as needed
  // ],
};

// --- RootLayout Component (Your existing component structure) ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // Apply font variables and base styling
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        // Removed disableTransitionOnChange based on your original code
        >
          {children}
          {/* Ensure Toaster is rendered correctly */}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}