import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/MyLayout.js';
import MissionStatement from "../components/MissionStatement";
import HowCanWeHelp from "../components/HowCanWeHelp";
import OurServices from "../components/OurServices";
import AboutMe from "../components/AboutMe";
import Meta from "../components/Meta";

const Index = props => (
  <Meta />
  <Layout>
    <MissionStatement/>

    <HowCanWeHelp />

    <OurServices />

    <AboutMe />
  </Layout>
);

export default Index;
