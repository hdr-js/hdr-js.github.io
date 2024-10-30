// pages/_app.tsx

import "../styles/globals.scss"; // Import global styles

import { AppProps } from "next/app";

/**
 * Custom App component to initialize pages.
 *
 * This component wraps all pages in the Next.js application,
 * allowing you to add global styles, layouts, or providers.
 *
 * @param {AppProps} props - The properties passed to the App component, including:
 *   - Component: The active page component
 *   - pageProps: The initial props preloaded for the active page
 * @returns {JSX.Element} The rendered component
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
