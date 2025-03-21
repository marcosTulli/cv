import type { Metadata } from "next";
import "@/styles/_reset.scss";
import { Providers } from "./provider";
import Footer from "@/components/footer";
import Menu from "@/components/menu";

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
          <header>
            <Menu />
          </header>
          <main className="flex-grow">{children}</main>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
