import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    padding: "5%"
  }
});

const MissionStatementDiv = styled.div`
  border: 1px thin lightgrey;
  padding: 20px;
  margin-left: 20%;
  margin-right: 20%;
  font-size: 20px;
  font-weight: bold;
  color: rgb(28, 56, 85);
  font-family: 'Montserrat';
  background-color: white;
  text-align: center;
  
  @media (max-width: 900px) {
     margin-left: 5%;
     margin-right: 5%;
  }
`;

const MissionStatement = () => {
  return (
    <MissionStatementDiv>
      <Card className={useStyles().card}>
        We Help Active Adults In The Bay Area Get Back To The Things They Love WITHOUT Medication, Multiple
        Doctor’s Visits, And Surgery.
      </Card>

    </MissionStatementDiv>
  );
};

export default MissionStatement;
