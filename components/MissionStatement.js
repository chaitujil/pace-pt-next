import styled from '@emotion/styled';

const MissionStatementDiv = styled.div`
  border: 1px thin lightgrey;
  padding: 40px;
  margin-left: 25%;
  margin-right: 25%;
  font-size: 28px;
  font-weight: bold;
  color: rgb(28, 56, 85);
  font-family: 'Montserrat';
  background-color: white;
  
  @media (max-width: 900px) {
     margin-left: 5%;
     margin-right: 5%;
  }
`;

const MissionStatement = () => (
  <section>
    <MissionStatementDiv>
      <div className="row">
        <div className="col-sm-12">
          "We Help Active Adults In The Bay Area Get Back To The Things They Love WITHOUT Medication, Multiple
          Doctor’s Visits, And Surgery."
        </div>
      </div>
    </MissionStatementDiv>
  </section>
);

export default MissionStatement;