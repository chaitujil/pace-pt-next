import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/MyLayout.js';
import OurServices from "../components/OurServices";
import AboutMe from "../components/AboutMe";
import HomePageCarousel from "../components/HomePageCarousel";

const Index = props => (
  <Layout>
    <HomePageCarousel/>

    <OurServices />

    <AboutMe />
  </Layout>
);

export default Index;
