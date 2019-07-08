import styled from '@emotion/styled';

const Container = styled.div`
  border: 1px thin lightgrey;
  padding: 20px;
  background: none;
  color: grey;
  font-weight: normal;
  font-family: sans-serif;
`;

const Boxes = styled.div`
  display: flex;
  just-content: space-between;
  
  @media (max-width: 900px) {
     display: block;
     padding: 5px;
     margin: 5px;
  }
`;

const Box = styled.div`
  margin: 20px;
  border: 2px solid lightgrey;
  border-radius: 5px;
  padding: 20px;
  
  & > h4 {
    padding: 20px;
  }
  
  @media (max-width: 900px) {
     width: 100%;
     padding: 5px;
     margin: 5px;
  }
`;

const Intro = styled.div`
  padding-bottom: 30px;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: navy;
  text-align: center;
  
  & > p {
    padding-top: 15px;
    color: grey;
  }
`;

const Content = styled.div`
  align: center;
  display: block;
  padding: 0 10px;
  font-size: 14px;
`;

const HowCanWeHelp = () => (
  <section>
    <Container>
      <Intro>
        <h2>How Can We Help You?</h2>

        <p>When it comes to your family’s health, you need the best. We pride ourselves on offering the best
          possible physical therapy available and going above and beyond for our
          patients. </p>
      </Intro>

      <Boxes>
        <Box>
          <h4>Find The ROOT Cause Of Your Aches & Pains: </h4>
          <Content>
            We assess the body as a whole. Often times the cause of pain or an injury extends
            far beyond just the body part or muscle hurting. Without taking a comprehensive look at
            your entire self, we would be doing you a disservice in fully helping you heal
            and preventing future limitations.
          </Content>
        </Box>

        <Box>
          <h4>Fix YOUR Areas Of Limitation</h4>
          <Content>
            Not all diagnoses are created equal. One person with low back pain may
            have completely different limitations than the next person. Your recovery program needs
            to be specific to what YOUR body needs and not just the typical exercise program that
            you can find online to band-aid the real issue.
          </Content>
        </Box>


        <Box>
          <h4>Focus On Function At An Optimal ​Level</h4>
          <Content>
            We get you back to living your best life. Just because your pain decreases
            or you can walk longer doesn't mean that is enough to get you functioning at the level
            you want to be. While this often signifies the end of care at your typical PT clinic,
            we don't stop providing guidance until we help you successfully meet every goal you set
            for yourself with us on day one.
          </Content>
        </Box>
      </Boxes>
    </Container>
  </section>
);

export default HowCanWeHelp;