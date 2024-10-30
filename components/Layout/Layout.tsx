import React, { ReactNode, FC } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../Header";

type LayoutProps = {
  /** Content to be displayed within the layout */
  children?: ReactNode;
  /** Page title to be displayed in the browser tab */
  title?: string;
};

/**
 * Layout component that wraps pages with a consistent structure.
 * Includes a header with navigation, a customizable title, and responsive meta tags.
 *
 * @param {LayoutProps} props - Properties to configure the layout
 * @param {ReactNode} props.children - Page content to render within the layout
 * @param {string} [props.title="This is the default title"] - Title for the browser tab
 */
const Layout: FC<LayoutProps> = ({
  children,
  title = "This is the default title",
}: LayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header />
    <main>{children}</main>
    <footer />
  </div>
);

export default Layout;
