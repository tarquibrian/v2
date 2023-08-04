import ThreeCanvas from "@/threejs/canvas";
import "../styles/globals.scss";
import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "DARVY - Digital Freelancer",
  description:
    "I am a design and development enthusiast and keep up with the latest trends in web design and user experience. This allows me to implement innovative solutions in my projects.",
  openGraph: {
    url: "https://www.zonustech.com/",
    type: "website",
    title: "DARVY - Digital Freelancer",
    siteName: "zonustech.com",
    images: [{ url: "https://zonustech.com/og.png", alt: "Zonustech OG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DARVY - Digital Freelancer",
    description:
      "I am a design and development enthusiast and keep up with the latest trends in web design and user experience. This allows me to implement innovative solutions in my projects.",
    images: ["https://zonustech.com/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
