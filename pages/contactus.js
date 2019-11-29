import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/MyLayout.js';
import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  padding: 10px;
  margin: 3% 10% 3% 10%;
  
  @media (max-width: 900px) {
     margin: 0;
  }
`;

const Heading = styled.h2`
  padding: 5px;
  margin: 5px;
`;

const Boxes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 5px;
  
  @media (max-width: 900px) {
     flex-direction: column;
  }
`;

const Box = styled.div`
  padding: 5px;
  margin: 5px;
`;

class ContactUs extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Heading>CONTACT US</Heading>
          <Boxes>
            <Box>
              <h3>Pace Physical Therapy Office</h3>

              <p>3880 South Bascom Ave, Suite 106, <br/>
                Sanjose, CA 95124<br/>
                Phone: +1 408-628-0447<br/>
                Fax: 669-201-0478<br/>
                Email: info@paceptclinic.com</p>

              <p> Pace Physical Therapy is located at Suite 106 inside Chantel Building on Bascom Avenue at
                the
                intersection of Route 85 and Highway 17.
                It is at a walking distance from Good Samaritan Hospital, Sanjose campus.
                Free Parking inside Chantel Building and also on the street in-front.</p>

              <h4>Office Hours</h4>
              <p>Monday to Friday 8:00AM to 7:00PM <br/>Saturday 9:00AM to 1:00PM</p>
            </Box>
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12702.08890474116!2d-121.9468222!3d37.2590417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8b9bded7b3a58b2!2sPace%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1574991988503!5m2!1sen!2sus"
                width="500" height="450" frameBorder="0" allowFullScreen/>
            </Box>
          </Boxes>
        </Container>
      </Layout>
    );
  }
}

export default ContactUs;
