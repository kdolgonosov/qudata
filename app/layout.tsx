import type { Metadata } from "next";
import { Wix_Madefor_Text } from "next/font/google";
import "@/app/styles/globals.css";

const wixMadeforText = Wix_Madefor_Text({
  variable: "--font-wix-madefor-text",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "qudata",
  description: "qudata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${wixMadeforText.variable} bg-background text-text-color relative z-0 antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
