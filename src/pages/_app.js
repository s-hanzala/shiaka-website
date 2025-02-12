import Footer from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return <ThemeProvider><Header /><Component {...pageProps} /><Footer/></ThemeProvider>;
}
