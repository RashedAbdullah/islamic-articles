import Header from "@/components/header";
import "./globals.css";
import { Noto_Serif_Bengali } from "next/font/google";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const serifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400"],
});

export const metadata = {
  title: "Hmmah voice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PHT4QJ0LY4"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PHT4QJ0LY4');
            `,
          }}
        />
      </head>
      <body
        className={`${serifBengali.className} antialiased dark:bg-teal-950`}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <MobileNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
