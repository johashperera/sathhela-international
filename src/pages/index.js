import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Details from "../components/Details/Details";
import Products from "../components/Products/Products";
import ContactUs from "../components/ContactUs/ContactUs";

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
    </main>
  );
};

export default index;
