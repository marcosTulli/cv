import type { Metadata } from "next";
import "@/app/styles/_reset.scss";
import { Providers } from "./provider";
import Header from "./components/header";
import Footer from "./components/footer";

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
      <Providers>
        <body
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
