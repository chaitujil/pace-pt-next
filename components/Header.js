import Link from 'next/link';
import styled from '@emotion/styled';
import React from "react";

const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 5px 20px 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: 1px thin white;
  background-color: white;
  
  @media (max-width: 900px) {
     position: relative;
  }
`;

const TopDiv = styled.div`
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

const TopItem = styled.span`
  margin-right: 50px;
  color: #666;
  padding-top: 10px;
  font-family: 'Courier New';
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  
  a {
    display: inline-block;
  }
`;

const NavDiv = styled.div`
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
  <Container>
    <TopDiv>
      <TopItem>
        Ph: <a href="tel:408-628-0447">408-628-0447</a>
      </TopItem>
      <TopItem>
        Fax: 669-201-0478
      </TopItem>
      <TopItem>
        3880 S Bascom Ave, Ste 106, San jose, CA 95124
      </TopItem>
      <TopItem>
        Care hours:M - F 8AM - 7PM, Sat 9AM - 1PM
      </TopItem>
    </TopDiv>
    <NavDiv>
      <NavItem>
        <LogoImg src="../static/pace_pt_final_no_bg.png"/>
      </NavItem>
      <NavItem>
        <Link href="/" as="/">
          <Title>
            Pace Physical Therapy
          </Title>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/appointment" as="/appointment"><a>APPOINTMENT</a></Link>
      </NavItem>
      <NavItem>
        <Link href="/contactus" as="/contactus"><a>CONTACT US</a></Link>
      </NavItem>
    </NavDiv>
  </Container>
);

export default Header;
