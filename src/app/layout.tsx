import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@radix-ui/themes/styles.css";
// import "@radix-ui/themes/layout.css"; // TODO: Check if this is actualy required
import "@/app/ui/global.css";
import Header from "./header";
import Footer from "./footer";
import Container from "react-bootstrap/Container";

export const metadata: Metadata = {
  title: "XRPSCAN Console",
  description: "Search transactions, ledgers, accounts with XRPSCAN search service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="indigo" appearance="inherit" radius="small" scaling="95%">
          <Container className="py-3">
          <Header/>
          {children}
          {/* <ThemePanel/> */}
          <Footer/>
          </Container>
        </Theme>
      </body>
    </html>
  );
}
