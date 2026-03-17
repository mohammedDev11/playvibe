// import "./globals.css";
// import LeftNavbar from "./common/LeftNavbar";
// import { Inter, Bebas_Neue } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// const bebas = Bebas_Neue({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-display",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
//       <body className="min-h-screen bg-background text-foreground font-sans">
//         <div className="min-h-screen md:flex">
//           <LeftNavbar />
//           <main className="flex-1 px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-8 pb-24 md:pb-8">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import LeftNavbar from "./common/LeftNavbar";
import { Inter, Bebas_Neue } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "PlayVibe",
  description:
    "PlayVibe brings movies and TV series to life with a powerful streaming experience. Discover blockbusters, timeless classics, and trending shows — all in one place.",

  keywords: [
    "PlayVibe",
    "movies",
    "tv series",
    "streaming",
    "watch movies",
    "watch series",
    "online cinema",
  ],

  authors: [{ name: "PlayVibe Team" }],

  creator: "PlayVibe",

  icons: {
    icon: "/favicon.ico", // put your ico file in /public
  },

  openGraph: {
    title: "PlayVibe",
    description:
      "Watch movies and TV series in one place. Discover trending and classic content.",
    url: "https://your-domain.com", // change later
    siteName: "PlayVibe",
    images: [
      {
        url: "/preview.png", // optional (put in public)
        width: 1200,
        height: 630,
        alt: "PlayVibe",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PlayVibe",
    description: "Watch movies and TV series in one place.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <div className="min-h-screen md:flex">
          <LeftNavbar />

          <main className="min-w-0 flex-1 pb-24 px-10 md:pb-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
