import ThreeCanvas from "@/threejs/canvas";
import "../styles/globals.scss";
import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
        <div className="main-wrapper">
          <Navbar />
          {children}
          <Footer />
        </div>
        <ThreeCanvas />
      </body>
    </html>
  );
}