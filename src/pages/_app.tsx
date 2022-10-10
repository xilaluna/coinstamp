import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
