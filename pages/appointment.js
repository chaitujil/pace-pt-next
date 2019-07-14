import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/MyLayout.js';
import styled from '@emotion/styled';
import React from "react";

const Container = styled.div`
  margin: 40px 10% 40px 10%;
  padding: 10px;
  z-index: 1;
`;

const InputWrapper = styled.span`
  .button {
    background: orange;
  }
`;

class Appointment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Container>
          <section>
            <div>
              <h2>APPOINTMENT</h2>
            </div>
          </section>
          <section>
            <form action="">
              <div className="form-group">
                <label className="col-sm-4">Name</label>
                <div className="col-sm-8">
                  <input type="text" name="cro_form_name" className="form-control"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4">Address</label>
                <div className="col-sm-8">
                  <input type="text" name="cro_form_name" className="form-control"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4">City</label>
                <div className="col-sm-8">
                  <input type="text" name="cro_form_name" className="form-control"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4">State</label>
                <div className="col-sm-8">
                  <input type="text" name="cro_form_name" className="form-control"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4">Zip Code</label>
                <div className="col-sm-8">
                  <input type="text" name="cro_form_name" className="form-control"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4">Email</label>
                <div className="col-sm-8">
                  <input type="email" name="cro_form_name" className="form-control"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4">Phone</label>
                <div className="col-sm-8">
                  <input type="text" name="cro_form_name" className="form-control"/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4">Best Time for you</label>
                <div className="col-sm-8">
                  <p>What time of the day and day of the week works best for you?</p>
                  <label><input type="checkbox" value="day_time"/> Daytime (8:00am-12pm)</label><br/>
                  <label><input type="checkbox" value="afternoons"/> Afternoons (1pm-5pm)</label><br/>
                  <label><input type="checkbox" value="evenings"/> Evenings (5-7pm) </label><br/>

                  <label><input type="checkbox" value="monday"/> Monday</label><br/>
                  <label><input type="checkbox" value="tuesday"/> Tuesday</label><br/>
                  <label><input type="checkbox" value="wednesday"/> Wednesday</label><br/>
                  <label><input type="checkbox" value="thursday"/> Thursday</label><br/>
                  <label><input type="checkbox" value="friday"/> Friday</label><br/>
                  <label><input type="checkbox" value="saturday"/> Saturday</label><br/>
                  <label><input type="checkbox" value=""/> No Preference</label><br/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4">Specific Concern</label>
                <div className="col-sm-8">
                  <p>Do you have a specific concern?</p>
                  <textarea name="cro_form_name" className="form-control"></textarea>
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4">&nbsp;</label>
                <div className="col-sm-8">
                  <p>How did you hear about us?</p>
                  <input type="text" name="cro_form_name" className="form-control"/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4">&nbsp;</label>

                <div className="col-sm-8">
                  <InputWrapper>
                  <input type="submit" className="btn button" name="submit" value="SUBMIT"/>
                  </InputWrapper>
                </div>
              </div>
            </form>
          </section>
        </Container>
      </Layout>
    )
  }
}

export default Appointment;