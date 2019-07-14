import Header from './Header';
import styled from "@emotion/styled";
import Footer from "./Footer";

const Body = styled.body`
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
     padding-top: 50%;
  }
`;


const Layout = props => (
  <Body>
    <Header/>
    <Container>
      {props.children}
    </Container>
    <Footer/>
  </Body>
);

export default Layout;