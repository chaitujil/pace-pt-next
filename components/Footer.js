import Link from 'next/link';
import styled from '@emotion/styled';
import React from "react";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #97680A;
  
  a {
    color: white;
  }
`;

const FooterTop = styled.div`
  width: 100%;
  padding: 1px;
`;

const FooterMiddle = styled.div`
  width: 100%;
  padding: 5px;
`;

const FooterBottom = styled.div`
  width: 100%;
  background-color: #724E07;
  padding: 5px;
  text-align: center;
  font-size: 12px;
`;

const FbIcon = styled.span`
  padding: 2px;
  text-align: center;
`;

const LinkedInIcon = styled.span`
  padding: 2px;
  text-align: center;
`;

const Boxes = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  align-content: center;
  
  @media (max-width: 900px) {
     flex-direction: column;
  }
`;

const Box = styled.div`
  width: 100%;
  padding: 1% 5% 1% 5%;
`;

const Column = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Address = styled.span`
  font-size: 14px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterTop>
      <Boxes>
        <FbIcon>FB</FbIcon>
        <LinkedInIcon>LI</LinkedInIcon>
      </Boxes>
    </FooterTop>
    <FooterMiddle>
      <Boxes>
        <Box>
          <h4>Quick links</h4>
          <Column>
            <Box>
              <Link href="/">HOME</Link>
            </Box>
            <Box>
              <Link href="/appointment">APPOINTMENT</Link>
            </Box>
            <Box>
              <Link href="/contactus">CONTACT US</Link>
            </Box>
          </Column>
        </Box>
        <Box>
          <Column>
            <h4>Contact Us</h4>
            Phone Number : +1 408-628-0447 <br/>
            <a href="mailto:info@paceptclinic.com">Email : info@paceptclinic.com</a>
          </Column>
        </Box>
        <Box>
          <h4>Address</h4>

          <Address>
            3880 South Bascom Ave, <br/>
            Suite 106, <br/>
            Sanjose, CA 95124
          </Address>
        </Box>
      </Boxes>
    </FooterMiddle>
    <FooterBottom>
      Copyright @ 2019. All Rights Reserved
    </FooterBottom>
  </FooterContainer>
);

export default Footer;