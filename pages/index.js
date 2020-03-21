import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/MyLayout.js';
import OurServices from "../components/OurServices";
import AboutMe from "../components/AboutMe";
import HomePageCarousel from "../components/HomePageCarousel";
import HowCanWeHelp from "../components/HowCanWeHelp";
import React from "react";
import WeAreOpen from "../components/WeAreOpen";

const Index = props => (
  <Layout>
    <HomePageCarousel/>

    <WeAreOpen/>

    <HowCanWeHelp/>

    <OurServices />

    <AboutMe />
  </Layout>
);

export default Index;
