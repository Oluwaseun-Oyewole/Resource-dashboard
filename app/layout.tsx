"use client";
import { AppStore, store } from "@/lib/store";
import { ConfigProvider } from "antd";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import { Provider as Providers } from "react-redux";
import { outfit } from "./fonts";
import "./globals.css";
import Provider from "./provider/layout";
import { RootStyleRegistry } from "./rootStyleRegistry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store();
  }
  return (
    <html lang="en">
      <head>
        <title>HR</title>
        <meta name="HR" content="HR" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </head>
      <Providers store={storeRef.current}>
        <body className={`${outfit.className}`}>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: `${outfit}`,
              },
              components: {
                Table: {
                  headerBg: "#F5F5F5",
                  rowHoverBg: "rgba(0,0,0,0.02)",
                  colorText: "#000",
                  borderColor: "rgba(0,0,0,0.1)",
                  boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
                },
              },
            }}
          >
            <Provider>
              <RootStyleRegistry>{children}</RootStyleRegistry>
            </Provider>
          </ConfigProvider>
          <Toaster position="top-center" />
        </body>
      </Providers>
    </html>
  );
}
