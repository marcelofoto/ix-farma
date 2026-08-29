import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IX FARMA - Sistema de Farmácia Online",
  description: "Sistema de farmácia online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
