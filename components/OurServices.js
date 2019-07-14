import styled from "@emotion/styled";
import React from "react";
import {Accordion, Card} from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% 10% 3% 10%;
  color: grey;
  font-weight: normal;
  font-family: sans-serif;
  border: 4px solid #806405;
  border-radius: 10px;
  
  @media (max-width: 900px) {
     margin: 3%;
  }
`;

const Heading = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 50px 20px 50px;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #10BEE1;
  text-align: center;
  
  .services {
    color: darkorange;
  }
`;

const AccordionWrapper = styled.div`
  .accordion {
    border-radius: 10px;
  }
  .card {
    border-radius: 0px;
  }
  .card-header {
    border-radius: 0px;
    width: 100%;
    background: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
`;

class OurServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readMoreTitle: "Read More",
      height: "300px"
    };
  }

  render() {
    return (<section>
      <Container>
        <Heading>
          <h2>
            OUR <span className="services">SERVICES</span>
          </h2>
        </Heading>
        <AccordionWrapper>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h4>Neck</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>More than 65-70% of the population suffers from neck pain ranging from
                    slight discomfort to severe pain sometimes radiating to hands and fingers with tingling sensation.
                    Usually, most of us take pain medication, heat/ice pack application or sometimes steroid injection
                    which relieves the pain to some extent but not completely.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <h4>Back pain</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body><p>It is one if the commonest pain with > 80% of the population around the world suffers.
                  Back pain ranges from simple localized pain to sciatic radiating pain travelling down your legs
                  and sometimes to the feet with tingling sensation.

                  Most of the patients/clients tell us they feel tight. Stiff and sore and that is when I recommend
                  physical therapy to address the root cause, prevent further delays to return to your desired
                  activities, potentially reducing stress and work performance.
                </p></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <h4>Knee</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
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

                    If you ever feel like your knee buckling/giving away or having a spring block during squats,
                    its time to get a knee evaluation to return to your desired activities and walking/running without
                    fear.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <h4>Ankle</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p>
                    Common conditions are sprains , heel pain , Achilles tendinitis , metatarsalgia , plantar fasciitis,
                    Tarsal tunnel syndrome etc..
                    Ankle is a very complex and strong joint that can bear weight in very dynamic and demanding
                    situations. Injuries can occur through over use or acute incidents. If you ever felt sharp pain in
                    your foot while taking initial steps during walking in the morning or pain in the heel at the end of
                    the day, it is the time to get detailed ankle evaluation.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <h4>Shoulder</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <p>
                    Shoulder is the most versatile and mobile joint in the body with multiple degrees of freedom and
                    that is also the reason why the shoulder tends to wear and tear and can cause impingement
                    of structures like bursa or rotator cuff. Gone untreated, it can lead to rotator cuff tears,
                    bursitis and chronic pain with other complications.

                    The other common disorders of shoulder is frozen shoulder which tends to occur
                    for individuals > 45 years of age. The common signs are stiffness, restricted
                    motion (especially raising your arm sideways and rubbing your back). This stiffness
                    if untreated can lead to frozen shoulder with restricted shoulder motion.

                    If you ever felt pain in your shoulder when you raise your hand above certain angle, sharp pain,
                    stiffness,
                    it is the time to get a detailed shoulder evaluation to return to your desired activities and
                    movement of the shoulder without restrictions.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <h4>Elbow & Wrist</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <h4>Hip</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <p>
                    Bursitis, femoral acetabular impingement, arthritis, SIJ pain and replacements .
                    Bursitis and impingement/pinching at the front of the hip joint are often caused by weak or tight
                    muscles.
                    Sometimes other serious conditions like tendinopathy can occur with the bursitis which can create
                    tenderness
                    in the hip area and pain when walking, standing, or lying on your side.

                    In order to provide relief to the above symptoms, detailed evaluation is needed to
                    gain mobility, flexibility, strength and identifying the root cause.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </AccordionWrapper>
      </Container>
    </section>);
  }
}

export default OurServices;