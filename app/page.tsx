import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import Delivery from "./components/Delivery";
import QuickOrder from "./components/QuickOrder";
import ServiceAreas from "./components/ServiceAreas";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import FloatingPhone from "./components/FloatingPhone";
import Schema from "./components/Schema";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Schema />

      <Navbar />

      <Hero />

      <Materials />

      <Delivery />

      <QuickOrder />

      <ServiceAreas />

      <Contacts />

      <Footer />

      <FloatingPhone />

      <ScrollToTop />
    </>
  );
}