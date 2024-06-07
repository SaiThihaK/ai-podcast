import LayoutContainer from "@/components/shared/layout-container";
import ConvexClientProvider from "@/provider/convex-client-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "ai podcast enpowered by clerk and chatgpt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <LayoutContainer>{children}</LayoutContainer>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
