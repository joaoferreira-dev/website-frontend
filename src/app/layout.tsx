import './globals.css'
import { Footer, Header } from "@/app/components";
import { baseURL, font } from "@/app/resources/config";
import { home } from "@/app/resources/content";

import { Meta } from "@/app/modules";
import classNames from 'classnames';

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={classNames(
      font.primary.variable,
      font.secondary.variable,
      font.tertiary.variable,
      font.code.variable,
    )}>
      <head></head>
      <body>
        <div className="hero-background">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <div className='hero-background-2 fixed w-full'></div>
      </body>
    </html>
  );
}