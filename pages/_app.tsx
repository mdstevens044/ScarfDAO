import '../styles/globals.css';
import "../styles/tailwind.css";
import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTwitter, faFontAwesome);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
