import ThreeCanvas from "@/threejs/canvas";
import "../styles/globals.scss";
import type { Metadata } from "next";
import { AppProvider } from "@/context/app.context";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
          <ThreeCanvas />
        </AppProvider>
      </body>
    </html>
  );
}
