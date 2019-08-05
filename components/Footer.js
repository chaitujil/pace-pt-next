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
  background: url("../static/soc_f.png") no-repeat center;
  cursor: pointer;
  margin: 10px 10px;
  padding: 0;
  float: left;
  list-style: none outside none;
  height: 51px;
  width: 51px;
  display: block;
  
  :hover {
    background: url("../static/soc_f_h.png") no-repeat center;
  }
`;

const LinkedInIcon = styled.span`
  background: url("../static/soc_i.png") no-repeat center;
  cursor: pointer;
  margin: 10px 10px;
  padding: 0;
  float: left;
  list-style: none outside none;
  height: 51px;
  width: 51px;
  display: block;
  
  :hover {
    background: url("../static/soc_i_h.png") no-repeat center;
  }
`;

const Boxes = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  align-content: center;
  
  @media (max-width: 900px) {
     flex-direction: column;
     text-align: center;
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
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.522047034687!2d-121.94901088485408!3d37.25904594943599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e3453511d6d75%3A0xcf7e905621c72dcc!2s3880+S+Bascom+Ave+%23106%2C+San+Jose%2C+CA+95124!5e0!3m2!1sen!2sus!4v1552959714221"
  width="100%" height="500px" frameBorder="0" allowFullScreen/>
    <FooterTop>
      <Boxes>
        <a href={"https://www.facebook.com/pacephysicaltherapyinc"}><FbIcon /></a>
        <a href={"https://www.linkedin.com/in/vidyadevarapalli"}><LinkedInIcon/></a>
      </Boxes>
    </FooterTop>
    <FooterMiddle>
      <Boxes>
        <Box>
          <h4>Quick links</h4>
          <Column>
            <Box>
              <Link href="/" as="/"><a>HOME</a></Link>
            </Box>
            <Box>
              <Link href="/appointment" as="/appointment"><a>APPOINTMENT</a></Link>
            </Box>
            <Box>
              <Link href="/contactus" as="/contactus"><a>CONTACT US</a></Link>
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