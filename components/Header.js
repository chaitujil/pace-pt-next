import Link from 'next/link';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

const HeaderContainerDiv = styled.div`
  padding-top: 20px;
  width: 100vw;
  display: flex;
  color: darkblue;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
     display: block;
  }
  border: 2px thin lightgrey;
  background-color: lightblue;
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  text-align: center;
  
  @media (max-width: 900px) {
     display: block;
  }
`;

const navItemCss = css`
  font-size: 14px;
  font-family: monospace;
  text-transform: uppercase;
  margin-left: 10px;
  margin-right: 25px;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  padding: 0;
  &:active {
    text-decoration: underline;
  }
`;

const Logo = styled.li`
  ${navItemCss}
  font-size: 2em;
  font-weight: 500;
`;

const NavItem = styled.li`
  ${navItemCss}
  padding-top: 5px
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  max-width:100%;
  height:auto;
`;

const Header = () => (
  <HeaderContainerDiv>
    <nav>
      <NavItems>
        <Link href="/">
          <LogoImg src="../static/pace_pt_final_no_bg.png"/>
        </Link>
        <Link href="/">
          <Logo>
            Pace Physical Therapy
          </Logo>
        </Link>
        <Link href="/appointment"><NavItem>Appointment</NavItem></Link>
        <Link href="/contactus"><NavItem>Contact Us</NavItem></Link>
      </NavItems>
    </nav>

  </HeaderContainerDiv>
);

export default Header;
