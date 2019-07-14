import Link from 'next/link';
import styled from '@emotion/styled';

const HeaderContainerDiv = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
     flex-direction: column;
  }
  border: 1px thin white;
  background-color: white;
`;

const NavItem = styled.span`
  margin-right: 50px;
  color: #666;
  padding-top: 10px;
  font-family: 'Courier New';
  cursor: pointer;
  text-decoration: none;
  
  a {
    color: #666;
    text-decoration: none;
  }
`;

const Title = styled.span`
  color: darkorange;
  font-size: 2em;
  font-weight: 700;
  font-family: georgia;
`;

const LogoImg = styled.img`
  width: 80px;
  height: 80px;
  max-width:100%;
  height:auto;
`;

const Header = () => (
  <HeaderContainerDiv>
    <NavItem>
      <LogoImg src="../static/pace_pt_final_no_bg.png"/>
    </NavItem>
    <NavItem>
      <Link href="/">
        <Title>
          Pace Physical Therapy
        </Title>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/appointment"><a>APPOINTMENT</a></Link>
    </NavItem>
    <NavItem>
      <Link href="/contactus"><a>CONTACT US</a></Link>
    </NavItem>
  </HeaderContainerDiv>
);

export default Header;
