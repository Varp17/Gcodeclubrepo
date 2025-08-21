import { ThemeProvider } from "next-themes";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TechBit Coding Club",
  description: "Join TechBit Coding Club to explore AI, Data Science, Java Microservices, and MERN Stack through projects and mentorship.",
  keywords: ["coding club", "college coding", "AI", "Data Science", "Java", "MERN"],
  openGraph: {
    title: "TechBit Coding Club",
    description: "Explore and learn with TechBit Coding Club.",
    url: "https://coding-club.example.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}