import Header from './Header';
import styled from "@emotion/styled";

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
  margin: 0px;
`;


const Layout = props => (
  <Body>
    <Header/>
    <Container>
      {props.children}
    </Container>
    <Header/>
  </Body>
);

export default Layout;