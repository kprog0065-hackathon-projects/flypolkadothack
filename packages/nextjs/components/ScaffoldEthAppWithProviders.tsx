"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MyAppFooter from "./MyAppFooter";
import MyAppHeader from "./MyAppHeader";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
// import { Footer } from "~~/components/Footer";
// import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludeFooter = pathname.startsWith("/debug") || pathname.startsWith("/blockexplorer");
  const excludeHeader = pathname.startsWith("/debug") || pathname.startsWith("/blockexplorer");

  return (
    <>
      {!excludeHeader && <MyAppHeader />}
      <div className={`flex flex-col min-h-screen `}>
        <main className="relative flex flex-col flex-1">{children}</main>
      </div>
      {!excludeFooter && <MyAppFooter />}
      <Toaster />
    </>
  );
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          avatar={BlockieAvatar}
          theme={
            mounted
              ? isDarkMode
                ? darkTheme({ accentColor: "#E6007A", accentColorForeground: "white" })
                : lightTheme({ accentColor: "#E6007A", accentColorForeground: "white" })
              : lightTheme({ accentColor: "#E6007A", accentColorForeground: "white" })
          }
        >
          <ProgressBar height="3px" color="#2299dd" />
          <ScaffoldEthApp>{children}</ScaffoldEthApp>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
