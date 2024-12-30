import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/utility-components/navigation/Navbar";
import Footer from "@/components/utility-components/navigation/Footer";
export const metadata: Metadata = {
  title: "Surge",
  description: "Lets get fit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
