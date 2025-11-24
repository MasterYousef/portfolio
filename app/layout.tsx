import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";
import "@/style/globals.scss";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./components/utility/Header";
import Footer from "./components/utility/Footer";
import "react-toastify/dist/ReactToastify.css";
import getUserDataHook from "@/hooks/getUserDataHook";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yousef Mostafa",
  description: `Full-Stack Developer with expertise in React.js, Next.js, Node.js, Express.js, and NestJS. Passionate about building scalable and
 high-performance web applications with a strong focus on backend development, API design, and secure payment integrations.
 Experienced in using MongoDB, Redis, and Redux Toolkit to create efficient and maintainable systems. Always eager to learn,
 solve real-world problems, and contribute to innovative projects`,
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
