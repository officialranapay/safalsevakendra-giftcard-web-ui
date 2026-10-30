import "./globals.css";

import { Provider } from "@/lib/store";
import Header from "@/components/Header";
import { Footer } from "@/components/Sections";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Script from "next/script";
import Providers from "./providers";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Safalsevakendra Gift Cards",
  description: "Premium gift cards delivered instantly",

  icons: {
    icon: "/Safalsevakendra1.png",
    shortcut: "/Safalsevakendra1.png",
    apple: "/Safalsevakendra1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, "font-sans")}>
      <head>
        {/* =====================================================
            GOOGLE TAG MANAGER
            GTM-MRS8N9WQ
        ====================================================== */}

        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MRS8N9WQ');
          `}
        </Script>
      </head>

      <body>
<Providers>
        {/* =====================================================
            GOOGLE TAG MANAGER NOSCRIPT
            Must be immediately after opening body
        ====================================================== */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRS8N9WQ"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* =====================================================
            GOOGLE ANALYTICS
            Measurement ID: G-SXMWPLD9XD
        ====================================================== */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SXMWPLD9XD"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-SXMWPLD9XD');
          `}
        </Script>

        {/* =====================================================
            Safalsevakendra APP
        ====================================================== */}

        <Provider>
          <Header />

          <main className="min-h-[70vh]">
            {children}
          </main>

          <Footer />
        </Provider>
</Providers>
      </body>
    </html>
  );
}