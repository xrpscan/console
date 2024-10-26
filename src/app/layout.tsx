import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@radix-ui/themes/styles.css";
import "@/app/ui/global.css";
import "@/app/ui/text.css";
import Header from "./header";
import Footer from "./footer";
import Container from "react-bootstrap/Container";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "XRPSCAN Console",
  description: "Search transactions, ledgers, accounts with XRPSCAN search service",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <link rel="icon" href="https://xrpscan.com/xrpscan-favicon.svg" />
      <body>
        <NextIntlClientProvider messages={messages}>
        <Theme accentColor="indigo" appearance="inherit" radius="small" scaling="95%">
          <Container className="py-3">
          <Header/>
          {children}
          {/* <ThemePanel/> */}
          <Footer/>
          </Container>
        </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
