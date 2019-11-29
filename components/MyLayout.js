import Header from './Header';
import styled from "@emotion/styled";
import Footer from "./Footer";
import Meta from "./Meta";

const BodyContainer = styled.div`
  background-color: white;
  color: grey;
  font-weight: 400;
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  font-family: sans-serif;
`;

const Container = styled.div`
  padding-top: 10%;
  margin: 0px;
  
  @media (max-width: 900px) {
     padding-top: 2%;
  }
`;


const Layout = props => (
  <BodyContainer>
    <Meta />
    <Header/>
    <Container>
      {props.children}
    </Container>
    <Footer/>
  </BodyContainer>
);

export default Layout;
