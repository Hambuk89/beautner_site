import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: {
    default: "Beautner | Luxury Facial Studio in Albany, Auckland",
    template: "%s | Beautner",
  },

  description:
    "Beautner is a premium facial studio in Albany, Auckland, offering personalised facial and skincare treatments in a calm and relaxing environment.",

  keywords: [
    "Beautner",
    "facial studio",
    "facial treatment",
    "skincare",
    "facial Auckland",
    "facial Albany",
    "skincare Albany",
    "beauty studio Auckland",
  ],

  authors: [{ name: "Beautner" }],

  creator: "Beautner",

  openGraph: {
    title: "Beautner | Luxury Facial Studio in Albany, Auckland",
    description:
      "Discover personalised facial and skincare treatments at Beautner in Albany, Auckland.",
    siteName: "Beautner",
    locale: "en_NZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Beautner | Luxury Facial Studio",
    description:
      "Personalised facial and skincare treatments in Albany, Auckland.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}