import styled from "@emotion/styled";
import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {css} from "emotion";
import {FaListUl} from 'react-icons/fa';
import {FaDotCircle} from "react-icons/fa";


const Container = styled.div`
  margin: 3% 10% 3% 10%;
  color: grey;
  font-weight: normal;
  font-family: sans-serif;
  
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
  color: #97680A;
  text-align: center;
  
  .services {
    color: darkorange;
  }
`;

const ContentWrapper = styled.div`
  p {
    padding: 20px 50px 20px 50px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #666;
  }
`;

const ServiceHeading = css`
  font-size: 18px;
  color: grey;
`;

function OurServices() {
    return (
      <section>
        <Container>
          <Heading>
            <h4>
              <FaListUl/> OUR <span className="services">SERVICES</span>
            </h4>
            We treat a variety of conditions
          </Heading>

          <ContentWrapper>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={ServiceHeading}><FaDotCircle/> Neck Pain</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  More than 65-70% of the population suffers from neck pain ranging from
                  slight discomfort to severe pain sometimes radiating to hands and fingers with tingling sensation.
                  Usually, most of us take pain medication, heat/ice pack application or sometimes steroid injection
                  which relieves the pain to some extent but not completely.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={ServiceHeading}><FaDotCircle/> Back pain</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  It is one if the commonest pain with > 80% of the population around the world suffers.
                  Back pain ranges from simple localized pain to sciatic radiating pain travelling down your legs
                  and sometimes to the feet with tingling sensation.

                  Most of the patients/clients tell us they feel tight. Stiff and sore and that is when I recommend
                  physical therapy to address the root cause, prevent further delays to return to your desired
                  activities, potentially reducing stress and work performance.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={ServiceHeading}><FaDotCircle/> Knee pain</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
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
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={ServiceHeading}><FaDotCircle/> Ankle pain</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Common conditions are Sprains, Heel pain, Achilles Tendinitis, Metatarsalgia, Plantar Fasciitis,
                  Tarsal Tunnel Syndrome etc.
                  Ankle is a very complex and strong joint that can bear weight in very dynamic and demanding
                  situations. Injuries can occur through over use or acute incidents. If you ever felt sharp pain in
                  your foot while taking initial steps during walking in the morning or pain in the heel at the end of
                  the day, it is the time to get detailed ankle evaluation.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={ServiceHeading}><FaDotCircle/> Shoulder pain</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
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
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={ServiceHeading}><FaDotCircle/> Elbow & Wrist pain</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Common conditions that affect elbow are Tennis elbow/ lateral epicondylitis,
                  Golfers Elbow/medial Epicondylitis . One may develop these symptoms not only by playing tennis
                  or golf but also by repetitive stress such as typing or any other twisting motions of elbow,
                  throwing the ball in a wrong angle causes the stress on tendons of the elbow.

                  Wrist : Common conditions of the wrist are carpel tunnel syndrome and aches around the wrist.
                  One may develop these symptoms due to excessive typing, wrist bending activities or during
                  pregnancy due to fluid accumulation.
                  If you ever felt burning pain or if the pain waking you up from sleep at night, it is the time to
                  get detailed evaluation done.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={ServiceHeading}><FaDotCircle/> Hip pain</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Bursitis, femoral acetabular impingement, arthritis, SIJ pain and replacements .
                  Bursitis and impingement/pinching at the front of the hip joint are often caused by weak or tight
                  muscles.
                  Sometimes other serious conditions like tendinopathy can occur with the bursitis which can create
                  tenderness
                  in the hip area and pain when walking, standing, or lying on your side.

                  In order to provide relief to the above symptoms, detailed evaluation is needed to
                  gain mobility, flexibility, strength and identifying the root cause.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ContentWrapper>
        </Container>
      </section>);
}

export default OurServices;
