import React, { useRef } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Details from "../components/Details/Details";
import Products from "../components/Products/Products";
import ContactUs from "../components/ContactUs/ContactUs";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/Footer";
import Image from "../images/og-image.png";

const HomePage = () => {
  const heroRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAboutUs = () => {
    console.log("logged....");
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Header
        scrollToHero={scrollToHero}
        scrollToAboutUs={scrollToAboutUs}
        scrollToServices={scrollToServices}
        scrollToProducts={scrollToProducts}
        scrollToContactUs={scrollToContactUs}
      />
      <Hero ref={heroRef} scrollToAboutUs={scrollToAboutUs} />
      <AboutUs
        ref={aboutUsRef}
        scrollToProducts={scrollToProducts}
        scrollToContactUs={scrollToContactUs}
      />
      <Services ref={servicesRef} />
      <Details />
      <Products ref={productsRef} />
      <ContactUs ref={contactUsRef} />
      <Brands />
      <Footer />
    </main>
  );
};

export default HomePage;

export const Head = () => (
  <>
    <title>Sathhela International</title>
    <meta
      name="description"
      content="Apparel Manufacturers specialized in Knit Fabrics"
    />
    <meta property="og:title" content="Sathhela International" />
    <meta
      property="og:description"
      content="Apparel Manufacturers specialized in Knit Fabrics"
    />
    <meta property="og:image" content={Image} />
    <meta property="og:url" content="www.sathhela.com" />
  </>
);
