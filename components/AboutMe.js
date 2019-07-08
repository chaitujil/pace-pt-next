import styled from "@emotion/styled";

const Container = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePicture = styled.img`
  width: 200px;
  height; 200px;
  max-width: 100%;
  height: auto;
`;

const AboutMe = () => (
  <section>
    <Container>
      <div className="row">
        <div className="col-sm-3">
          <ProfilePicture src="../static/vidya_pic1.png"/>
          <p><i>The comfort of my patients
            is my job and my reward. - Dr. Vidya.</i></p>
        </div>
        <div className="col-sm-9">
          <h3>Vidya Devarapalli, DPT</h3>
          <p>Graduated from the prestigious Touro College of Health Sciences with a Doctor of
            Physical Therapy Degree, Vidya completed her Master's at Nizams Institute of Medical Sciences
            (Hyderabad, IN)
            and Bachelor's at Sanjeevani College of Physiotherapy (Hyderabad, IN). She has worked in various
            in-patient
            and out-patient facilities before opening Pace PT clinic in the Sanjose area.</p>
        </div>
      </div>
    </Container>
  </section>
);

export default AboutMe;