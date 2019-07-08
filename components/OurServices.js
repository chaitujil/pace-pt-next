import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px;
  font-weight: 700;
  font-size: 16px;
  color: darkgrey;
  font-family: sans-serif;
`;

const Heading = styled.div`
  padding: 20px;
  text-align: center;
  
  & > h2 {
    padding: 20px;
    color: navy;
  }
`;

const Boxes = styled.div`
  display: flex;
  just-content: space-between;
  
  @media (max-width: 900px) {
     display: block;
     margin: 5px;
  }
`;

const Box = styled.div`
  margin: 20px;
  border: 2px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  
  & > p {
    padding: 10px;
    font-size: 14px;
  }
  
  @media (max-width: 900px) {
     width: 100%;
     padding: 5px;
     margin: 5px;
  }
`;

const OurServices = () => (
  <section>
    <Container>
      <Heading>
        <h2>
          OUR SERVICES
        </h2>
      </Heading>
      <Boxes>
        <Box>
          <h1>Neck</h1>
            <p>Neck pain: More than 65-70% of the population suffers from neck pain ranging from
              slight discomfort to severe pain sometimes radiating to hands and fingers with tingling sensation.
              Usually, most of us take pain medication, heat/ice pack application or sometimes steroid injection
              which relieves the pain to some extent but not completely.
            </p>
        </Box>
        <Box>
          <h1>Back pain</h1>
          <p>It is one if the commonest pain with >80% of the population around the world suffers.
            Back pain ranges from simple localized pain to sciatic radiating pain travelling down your legs
            and sometimes to the feet with tingling sensation
          </p>
          <p>
            Most of the patients/clients tell us they feel tight. Stiff and sore and that is when I recommend
            physical therapy to address the root cause, prevent further delays to return to your desired
            activities, potentially reducing stress and work performance.
          </p>
        </Box>
        <Box>
          <h1>Knee</h1>
          <p>
            Knee is a complex structure and has several ligaments, muscles and tendons attached to it.
            Some of the common knee disorders that leads to pain are meniscal tear, ACL, MCL tear/sprain,
            patellofemoral joint pain, chondromalacia patella etc.

            Menisci and the ligaments have critical roles when it comes to knee stability and its overall
            function.
            Menisci are also known as shock absorbers which support against excessive motion and rotatory
            forces.
            Ligaments such as ACL , PCL and MCL helps in unnecessary translation of the knee during high
            performance activities or sometimes just pivoting/twisting too.
          </p>
          <p>
            If you ever feel like your knee buckling/giving away or having a spring block during squats,
            its time to get a knee evaluation to return to your desired activities and walking/running without
            fear.
          </p>
        </Box>
      </Boxes>
      <Boxes>
        <Box>
          <h1>Ankle</h1>
          <p>
            Common conditions are sprains , heel pain , Achilles tendinitis , metatarsalgia , plantar fasciitis,
            Tarsal tunnel syndrome etc..
            Ankle is a very complex and strong joint that can bear weight in very dynamic and demanding
            situations. Injuries can occur through over use or acute incidents. If you ever felt sharp pain in
            your foot while taking initial steps during walking in the morning or pain in the heel at the end of
            the day, it is the time to get detailed ankle evaluation.
          </p>
        </Box>
        <Box>
          <h1>Shoulder</h1>
          <p>
            Shoulder is the most versatile and mobile joint in the body with multiple degrees of freedom and
            that is also the reason why the shoulder tends to wear and tear and can cause impingement
            of structures like bursa or rotator cuff. Gone untreated, it can lead to rotator cuff tears,
            bursitis and chronic pain with other complications.

            The other common disorders of shoulder is frozen shoulder which tends to occur
            for individuals >45 years of age. The common signs are stiffness, restricted
            motion (especially raising your arm sideways and rubbing your back). This stiffness
            if untreated can lead to frozen shoulder with restricted shoulder motion.

            If you ever felt pain in your shoulder when you raise your hand above certain angle, sharp pain,
            stiffness,
            it is the time to get a detailed shoulder evaluation to return to your desired activities and
            movement of the shoulder without restrictions.
          </p>
        </Box>
        <Box>

          <h1>Elbow & Wrist</h1>
          <p>
            Common conditions that affect elbow are Tennis elbow/ lateral epicondylitis,
            Golfers Elbow/medial epicondylitis . One may develop these symptoms not only by playing tennis
            or golf but also by repetitive stress such as typing or any other twisting motions of elbow,
            throwing the ball in a wrong angle causes the stress on tendons of the elbow.

            Wrist : Common conditions of the wrist are carpel tunnel syndrome and aches around the wrist.
            One may develop these symptoms due to excessive typing, wrist bending activities or during
            pregnancy due to fluid accumulation.
            If you ever felt burning pain or if the pain waking you up from sleep at night, it is the time to
            get detailed evaluation done.
          </p>
        </Box>
        <Box>
          <h1>Hip</h1>
          <p>
            Bursitis , femoral acetabular impingement, arthritis, SIJ pain and replacements .
            Bursitis and impingement /pinching at the front of the hip joint are often caused by weak or tight
            muscles.
            Sometimes other serious conditions like tendinopathy can occur with the bursitis which can create
            tenderness
            in the hip area and pain when walking, standing, or lying on your side.

            In order to provide relief to the above symptoms, detailed evaluation is needed to
            gain mobility, flexibility, strength and identifying the root cause.
          </p>
        </Box>
      </Boxes>
    </Container>
  </section>
);

export default OurServices;