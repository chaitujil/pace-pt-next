import styled from '@emotion/styled';

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {FaHandsHelping, FaHandPointRight} from 'react-icons/fa';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    margin: "1rem"
  },
  media: {
    height: 200,
  },
});

const Container = styled.div`
  padding: 20px;
  margin: 2% 5% 2% 5%;
  background: none;
  color: grey;
  font-weight: normal;
  font-family: sans-serif;
  
  @media (max-width: 900px) {
     margin: 0;
  }
`;

const Heading = styled.div`
  text-align: center;
  
  h2,h3,h4 {
    color: #97680A;
  }
`;

const Boxes = styled.div`
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 900px) {
     display: block;
     margin: 2rem;
  }
`;

const HowCanWeHelp = () => (
  <section>
    <Container>
      <Heading>
        <Typography gutterBottom variant="h5" component="h4">
          <FaHandsHelping/> How Can We Help You?
        </Typography>
        <Typography gutterBottom variant="body2" component="p">
          When it comes to your family’s health, you need the best. We pride ourselves on offering the best
          possible physical therapy available and going above and beyond for our
          patients.
        </Typography>
      </Heading>

      <Boxes>
        <Card className={useStyles().card}>
          <CardActionArea>
            <CardMedia
              className={useStyles().media}
              image="../static/slider_image2.jpg"
              title="Find The ROOT Cause Of Your Aches & Pains"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <FaHandPointRight/> Find The ROOT Cause Of Your Aches & Pains
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                We assess the body as a whole. Often times the cause of pain or an injury extends
                far beyond just the body part or muscle hurting. Without taking a comprehensive look at
                your entire self, we would be doing you a disservice in fully helping you heal
                and preventing future limitations.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={useStyles().card}>
          <CardActionArea>
            <CardMedia
              className={useStyles().media}
              image="../static/slider_image3.jpeg"
              title="Fix YOUR Areas Of Limitation"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <FaHandPointRight/> Fix YOUR Areas Of Limitation
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Not all diagnoses are created equal. One person with low back pain may
                have completely different limitations than the next person. Your recovery program needs
                to be specific to what YOUR body needs and not just the typical exercise program that
                you can find online to band-aid the real issue.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={useStyles().card}>
          <CardActionArea>
            <CardMedia
              className={useStyles().media}
              image="../static/slider_image4.jpg"
              title="Focus On Function At An Optimal ​Level"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <FaHandPointRight/> Focus On Function At An Optimal ​Level
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                We get you back to living your best life. Just because your pain decreases
                or you can walk longer doesn't mean that is enough to get you functioning at the level
                you want to be. While this often signifies the end of care at your typical PT clinic,
                we don't stop providing guidance until we help you successfully meet every goal you set
                for yourself with us on day one.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Boxes>
    </Container>
  </section>
);

export default HowCanWeHelp;
