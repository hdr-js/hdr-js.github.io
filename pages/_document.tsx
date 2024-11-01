// pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";
import { DocumentContext, DocumentInitialProps } from "next/document";

/**
 * Fetches initial document properties, useful for setting up SSR.
 * Extends the default Document properties provided by Next.js.
 *
 * @param {DocumentContext} ctx - The Next.js document context.
 * @returns {Promise<DocumentInitialProps>} Initial document properties.
 */
export async function getInitialProps(
  ctx: DocumentContext
): Promise<DocumentInitialProps> {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  return { ...initialProps };
}

/**
 * Custom Document component for Next.js.
 * Used to enhance the application's <html> and <head> tags for cross-platform support.
 * This file only renders on the server, and no client-side JavaScript is sent.
 *
 * @returns {JSX.Element} The custom document structure.
 */
export default function MyDocument(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        {/* Standard Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />

        {/* Safari Pinned Tab Icon */}
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />

        {/* Meta tags for mobile and theme colors */}
        <meta name="apple-mobile-web-app-title" content="Your Site Name" />
        <meta name="application-name" content="Your Site Name" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        {/* Additional custom meta tags can be added here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
