import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anime Neural Lab",
  description: "Aprendendo redes neurais com TensorFlow.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
