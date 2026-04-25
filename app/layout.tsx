import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Providers from "@/app/Components/Providers";
import ProvidersTheme from "./Components/ProvidersTheme";

const inter = Inter({ subsets: ["latin"] });

/**
 * Метадані кореневого layout сайту "d.r.i.l.l.".
 * * @remarks
 * Використовуються Next.js для формування заголовка сторінки,
 * опису сайту та базової SEO-інформації.
 */
export const metadata: Metadata = {
  title: "D.R.I.L.L. - Космічний бур",
  description: "Офіційний сайт гри d.r.i.l.l.",
};

/**
 * Кореневий layout сайту "d.r.i.l.l.".
 * * @remarks
 * Формує загальну HTML-структуру застосунку, підключає глобальні стилі,
 * провайдери стану, перемикання теми та спільні компоненти інтерфейсу.
 * @param props - Властивості layout
 * @param props.children - Вміст поточної сторінки, що буде відрендерений у `<main>`
 * @returns Базова розмітка всього застосунку
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Providers>
          <ProvidersTheme>
            <Header />
            <main className="container mx-auto flex-grow p-4 md:p-8">{children}</main>
            <Footer />
          </ProvidersTheme>
        </Providers>
      </body>
    </html>
  );
}
