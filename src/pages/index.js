import React from "react";
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

const index = () => {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Details />
      <Products />
      <ContactUs />
      <Brands />
      <Footer />
    </main>
  );
};

export default index;

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
