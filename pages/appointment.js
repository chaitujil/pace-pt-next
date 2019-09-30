import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/MyLayout.js';
import styled from '@emotion/styled';
import React from "react";
import {Formik, Field} from "formik";
import * as yup from 'yup';
import {css} from "emotion";
import * as axios from "axios";

const Container = styled.div`
  margin: 40px 10% 40px 10%;
  padding: 10px;
  z-index: 1;
`;

const formClass = css`
  display: flex;
  flex-direction: column;
  background: white;
  outline: none;
  border: none;
`;

const formField = css`
  border: 1px solid darkgrey;
  margin: 20px 20px 20px 10px;
  border-radius: 5px;
  padding: 5px;
  width: 400px;
  color: #666
  outline: none;
  
  @media (max-width: 900px) {
    margin: 20px 20px 20px -10px;
  }
`;

const specificConcernField = css`
  color: #666;
  border: 1px solid darkgrey;
  border-radius: 5px;
  margin: 20px 20px 20px 10px;
  padding: 5px;
  width: 400px;
  height: 200px;
  max-height: 200px;
  outline: none;
  
  @media (max-width: 900px) {
    margin: 20px 20px 20px -10px;
  }
`;


const errorMessage = css`
  color: red;
  margin-left: 2%;
  padding: 5px;
  width: 50%;
  font-style: italic;
`;

const submitButton = css`
  margin: 2% 0 0 2%;
  width: 10%;
  border: none;
  outline: none;
  border-radius: 10px;
  color: white;
  background-color: darkorange;
  justify-content: flex-end;
  align-items: right;
  cursor: pointer;
  height: 40px;
  
  :hover {
    color: darkorange;
    background-color: green;
  }
  
  @media (max-width: 900px) {
     width: 40%;
     margin: 2% 0 0 -2%;
  }
`;

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  email: "",
  phone: "",
  best_time: "",
  specific_concern: "",
  referred_by: ""
};

const userSchema = yup.object().shape({
  name: yup.string().required(),
  //address: yup.string().required(),
  //city: yup.string().required(),
  //state: yup.string().required(),
  //zipcode: yup.number().required(),
  email: yup
    .string()
    .email()
    .required(),
  phone: yup
    .number()
    .required(),
  //best_time: yup.string().required(),
  specific_concern: yup.string().required(),
  //referred_by: yup.string().required()
});

function Appointment(props) {
  const onSubmit = (values, {resetForm}) => {
    console.log(JSON.stringify(values));

    axios.post('/api/contact', values)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        resetForm(initialState);
      } else {
        console.log("Failed");
      }
    })
  };

  return (
    <Layout>
      <Container>
        <section>
          <div>
            <h2>APPOINTMENT</h2>
          </div>
        </section>
        <section>
          <React.Fragment>
            <Formik
              initialValues={initialState}
              onSubmit={onSubmit}
              validationSchema={userSchema}
            >
              {props => (
                <form onSubmit={props.handleSubmit} className={formClass}>
                  <Field
                    type="name"
                    placeholder="Enter name"
                    onChange={props.handleChange}
                    name="name"
                    value={props.values.name}
                    className={formField}
                  />
                  {props.errors.name && props.touched.name ? (
                    <span className={errorMessage}>{props.errors.name}</span>
                  ) : (
                    ""
                  )}
                  <Field
                    type="address"
                    placeholder="Enter address"
                    onChange={props.handleChange}
                    name="address"
                    value={props.values.address}
                    className={formField}
                  />
                  {props.errors.address && props.touched.address ? (
                    <span className={errorMessage}>{props.errors.address}</span>
                  ) : (
                    ""
                  )}
                  <Field
                    type="city"
                    placeholder="Enter city"
                    onChange={props.handleChange}
                    name="city"
                    value={props.values.city}
                    className={formField}
                  />
                  {props.errors.city && props.touched.city ? (
                    <span className={errorMessage}>{props.errors.city}</span>
                  ) : (
                    ""
                  )}
                  <Field
                    type="state"
                    placeholder="Enter state"
                    onChange={props.handleChange}
                    name="state"
                    value={props.values.state}
                    className={formField}
                  />
                  {props.errors.state && props.touched.state ? (
                    <span className={errorMessage}>{props.errors.state}</span>
                  ) : (
                    ""
                  )}
                  <Field
                    type="zipcode"
                    placeholder="Enter zipcode"
                    onChange={props.handleChange}
                    name="zipcode"
                    value={props.values.zipcode}
                    className={formField}
                  />
                  {props.errors.zipcode && props.touched.zipcode ? (
                    <span className={errorMessage}>{props.errors.zipcode}</span>
                  ) : (
                    ""
                  )}
                  <Field
                    type="email"
                    onChange={props.handleChange}
                    name="email"
                    value={props.values.email}
                    placeholder="Email"
                    className={formField}
                  />
                  {props.errors.email && props.touched.email ? (
                    <span className={errorMessage}>{props.errors.email}</span>
                  ) : (
                    ""
                  )}
                  <Field
                    name="phone"
                    onChange={props.handleChange}
                    value={props.values.phone}
                    type="number"
                    placeholder="Phone"
                    className={formField}
                  />
                  {props.errors.phone && props.touched.phone ? (
                    <span className={errorMessage}>{props.errors.phone}</span>
                  ) : (
                    ""
                  )}
                  <Field
                    name="best_time"
                    onChange={props.handleChange}
                    value={props.values.best_time}
                    type="text"
                    placeholder="Best Time To Call"
                    className={formField}
                  />
                  {props.errors.best_time && props.touched.best_time ? (
                    <span className={errorMessage}>{props.errors.best_time}</span>
                  ) : (
                    ""
                  )}
                  <Field
                    name="specific_concern"
                    onChange={props.handleChange}
                    value={props.values.specific_concern}
                    component="textarea"
                    placeholder="Specific Concern"
                    className={specificConcernField}
                  />
                  {props.errors.specific_concern && props.touched.specific_concern ? (
                    <span className={errorMessage}>{props.errors.specific_concern}</span>
                  ) : (
                    ""
                  )}
                  <Field
                    name="referred_by"
                    onChange={props.handleChange}
                    value={props.values.referred_by}
                    type="text"
                    placeholder="How did you hear about us?"
                    className={formField}
                  />
                  {props.errors.referred_by && props.touched.referred_by ? (
                    <span className={errorMessage}>{props.errors.referred_by}</span>
                  ) : (
                    ""
                  )}
                  <button
                    type="submit"
                    disabled={!props.dirty && !props.isSubmitting}
                    className={submitButton}
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </React.Fragment>
        </section>
      </Container>
    </Layout>
  )
}

export default Appointment;