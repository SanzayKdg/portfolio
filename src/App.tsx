import * as React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ContactMe from "./Components/Contact/ContactMe";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/About/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
export const App = () => (
  <div>
    <Header />
    <Hero />
    <AboutMe />
    <Portfolio />
    <ContactMe />
    <Footer />
  </div>
);
