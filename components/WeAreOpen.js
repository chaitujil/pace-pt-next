import styled from '@emotion/styled';

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {FaHandsHelping, FaHandPointRight} from 'react-icons/fa';

const Container = styled.div`
  width: 60%;
  padding: 20px;
  margin: 5% 20% 5% 20%;
  background-color: #DC143C;
  text-align: center;
  color: white;
  font-weight: normal;
  font-family: sans-serif;
  
  h5 {
    font-weight: bold;
    padding: 10px;
  }
  
  h6 {
    padding: 10px;
    font-weight: bold;
  }
  
  li {
    text-align: left;
  }
  
  @media (max-width: 900px) {
    font-size: 0.8rem;
    width: 100%;
    margin: 0;
  }
`;

const WeAreOpen = () => (
  <section>
    <Container>
      <h5>
        WE ARE OPEN AND TREATING PATIENTS
      </h5>
      <h6>
        Update on COVID-19 (coronavirus) for Our Patients
      </h6>
      <p>
        We are prepared and taking the appropriate measures as outlined by the Centers for Disease Control and Prevention for the protection and safety of our patients and staff.
        </p>

      <h6>Important:</h6>
      <ul>
        <li> If you’ve traveled overseas, you must stay home for 14 days after returning from travel, monitor your health, and practice social distancing.</li>
        <li> Anyone that is sick with a fever, cough, or has trouble breathing should call their primary care physician before coming into our clinic.</li>
      </ul>
    </Container>
  </section>
);

export default WeAreOpen;
