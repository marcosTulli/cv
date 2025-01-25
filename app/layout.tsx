import type { Metadata } from "next";
import "@/app/styles/_reset.scss";
import { Providers } from "./provider";
import Header from "./components/header";
import Footer from "./components/footer";
import NavBar from "./components/menu/components/navbar";
import Menu from "./components/menu";

export const metadata: Metadata = {
  title: "Marcos Tulli",
  description: "Marcos Tulli CV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <Menu />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
