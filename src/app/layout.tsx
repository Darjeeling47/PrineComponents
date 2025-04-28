import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { SidebarProvider, useSidebar } from "@/context/SidebarProvider";
import { AnimatePresence } from "framer-motion";
import { ModalProvider } from "@/context/ModalProvider";
import { BannerProvider } from "@/context/BannerProvider";
import { SnackbarProvider } from "@/context/SnackbarProvider";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-noto-sans-thai",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PrineComponents",
  description: "A starter code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansThai.className} antialiased`}>
        <AnimatePresence>
          <SnackbarProvider>
            <ModalProvider>
              <BannerProvider>
                <SidebarProvider>{children}</SidebarProvider>
              </BannerProvider>
            </ModalProvider>
          </SnackbarProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
