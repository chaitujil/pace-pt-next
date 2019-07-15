import styled from "@emotion/styled";

const Container = styled.div`
  padding: 30px;
  display: flex;
  margin: 40px 10% 40px 10%;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 900px) {
     flex-direction: column;
  }
`;

const ProfilePicture = styled.img`
  max-width: 100%;
  height: auto;
`;

const Description = styled.p`
  font-family: 'sans-serif';
  margin-top: 10px;
`;

const Tag = styled.p`
  font-style: italic;
  font-family: "san-serif"
`;

const Column = styled.span`
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
`;

const AboutMe = () => (
  <section>
    <Container>
      <Column>
        <ProfilePicture src="../static/vidya_pic2.JPG"/>
        <Tag>The comfort of my patients
          is my job and my reward. - Dr. Vidya.
        </Tag>
      </Column>
      <Column>
        <h3>Vidya Devarapalli, DPT</h3>
        <Description>
          Graduated from the prestigious Touro College of Health Sciences with a Doctor of
          Physical Therapy Degree, Vidya completed her Master's at Nizams Institute of Medical Sciences
          (Hyderabad, IN)
          and Bachelor's at Sanjeevani College of Physiotherapy (Hyderabad, IN). She has worked in various
          in-patient
          and out-patient facilities before opening Pace PT clinic in the Sanjose area.
        </Description>
      </Column>

    </Container>
  </section>
);

export default AboutMe;