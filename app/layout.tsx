import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";
import "@/style/globals.scss";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css"; // Core Slick styles
import "slick-carousel/slick/slick-theme.css"; // Optional theme styles
import Header from "./components/utility/Header";
import Footer from "./components/utility/Footer";
import "react-toastify/dist/ReactToastify.css";
import getUserDataHook from "@/hooks/getUserDataHook";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yousef Mostafa",
  description: `Discover the wonders of ancient Egypt with our comprehensive tour packages.
     Experience iconic landmarks, luxury accommodations,
      and expert-guided tours through historic sites like the Pyramids, Luxor
      , and the Nile River. Book your unforgettable Egyptian adventure today!`,
  icons: {
    icon: "/image/logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logic = await getUserDataHook();
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header logic={logic} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
