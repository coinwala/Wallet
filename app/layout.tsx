import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SolanaWalletProvider } from "@/context/SolanaWalletContext";
import { WagmiWrapper } from "@/utils/wagmi/WagmiContext";
import AppWalletProvider from "@/components/AppWalletProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiWrapper>
          <AppWalletProvider>
            <SolanaWalletProvider>{children}</SolanaWalletProvider>
          </AppWalletProvider>
        </WagmiWrapper>
      </body>
    </html>
  );
}
