import Download from "./components/Download/Download";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import NewsLetter from "./components/Newsletter/Newsletter";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <NewsLetter />
      <Footer />
      <Modal />
    </>
  );
}
