import {css} from '@emotion/core';
import styled from '@emotion/styled';

const MissionStatementDiv = styled.div`
  border: 1px thin lightgrey;
  padding: 40px;
  font-size: 28px;
  font-weight: normal;
  color: navy;
  font-family: monospace;
  background-color: white;
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