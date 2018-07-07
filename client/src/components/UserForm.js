import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class UserForm5 extends Component {
  send() {
    const method = "POST";
    const body = new FormData(this.form);
    fetch("/api/addUser", { method, body })
      .then(res => res.json())
      .then(data => alert(JSON.stringify(data.form, null, "\t")));
    // Redirect to survey
    window.location("/#/survey");
  }
  render() {
    return (
      <div>
      <Panel className="panel panel-default">
          <Panel.Heading>
              <Panel.Title>Before you begin ...</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
              <p>Before you can begin completing a survey with Kwiri, the application must collect non-identifiable information aligned with that collected by the Pew Reearch Center at the time of collecting data for the survey you are about to complete. This infomration is completely annonymous.</p>
              <form ref={el => (this.form = el)}>
              <div className="form-group ">
                {/* QUESTION 1 */}
                <label className="control-label" for="SEX">
                  What is your gender?
                  <span className="frmRequired">*</span>
                </label>
                <select className="select form-control" id="SEX" name="SEX">
                  <option disabled selected>Please select an option</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
              {/* QUESTION 2 */}
              <div className="form-group ">
                <label className="control-label" for="AGE">
                  Age<span className="frmRequired">*</span>
                </label>
                <input className="form-control" id="AGE" name="AGE" type="text" />
              </div>
              {/* QUESTION 3 */}
              <div className="form-group ">
                <label className="control-label" for="MARITAL">
                  What is your marital status?
                  <span className="frmRequired">*</span>
                </label>
                <select className="select form-control" id="MARITAL" name="MARITAL">
                  <option disabled selected>Please select an option</option>
                  <option value="1">Married</option>
                  <option value="2">Living with Partner</option>
                  <option value="3">Divorced</option>
                  <option value="4">Separated</option>
                  <option value="5">Widowed</option>
                  <option value="5">Never been Married</option>
                </select>
              </div>
              {/* QUESTION 4 */}
              <div className="form-group ">
                <label className="control-label" for="EDUC2">
                  What is your highest level of education?
                  <span className="frmRequired">*</span>
                </label>
                <select className="select form-control" id="EDUC2" name="EDUC2">
                  <option disabled selected>Please select an option</option>
                  <option value="1">Less Than High School</option>
                  <option value="2">High School, No Degree</option>
                  <option value="3">High School Graduate</option>
                  <option value="4">Some College, No Degree</option>
                  <option value="5">2-Year Degree</option>
                  <option value="6">4-Year Degree</option>
                  <option value="7">Some Postgraduate, No Degree</option>
                  <option value="8">Post-Graduate or Professional, Degree</option>
                </select>
              </div>
              {/* QUESTION 5 */}
              <div className="form-group ">
                <label className="control-label" for="EMPLNW">
                  What is your current employment status?
                  <span className="frmRequired">*</span>
                </label>
                <select className="select form-control" id="EMPLNW" name="EMPLNW">
                  <option disabled selected>Please select an option</option>
                  <option value="1">Full Time</option>
                  <option value="2">Part Time</option>
                  <option value="3">Retired</option>
                  <option value="4">Unemployed</option>
                  <option value="5">Self-Employed</option>
                  <option value="6">Disabled</option>
                  <option value="7">Student</option>
                  <option value="8">Other</option>
                </select>
              </div>
              {/* QUESTION 6 */}
              <div className="form-group ">
                <label className="control-label" for="HISP">
                  Are you of Hispanic, Latino, or Spanish origin?
                  <span className="frmRequired">*</span>
                </label>
                <select className="select form-control" id="HISP" name="HISP">
                  <option disabled selected>Please select an option</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </div>
              {/* QUESTION 7 */}
              <div className="form-group ">
                <label className="control-label" for="RACE">
                  Which of the following describes your race?
                  <span className="frmRequired">*</span>
                </label>
                <select className="select form-control" id="RACE" name="RACE">
                  <option disabled selected>Please select an option</option>
                  <option value="1">White</option>
                  <option value="2">Black or African-American</option>
                  <option value="3">Asian or Asian-American</option>
                  <option value="4">Other</option>
                  <option value="5">Native American</option>
                  <option value="6">Pacific Islander</option>
                  <option value="7">Hispanic/Latino</option>
                  <option value="8">Other</option>
                </select>
              </div>
              {/* QUESTION 8 */}
              <div className="form-group ">
                <label className="control-label" for="BIRTH_HISP">
                  Where is your place of birth?
                  <span className="frmRequired">*</span>
                </label>
                <select className="select form-control" id="BIRTH_HISP" name="BIRTH_HISP">
                  <option disabled selected>Please select an option</option>                  
                  <option value="1">United States</option>
                  <option value="2">Puerto Rico</option>
                  <option value="3">Other</option>
                </select>
              </div>
              {/* QUESTION 9 */}
              <div className="form-group ">
                <label className="control-label" for="HISP">
                  Please select your total family income for 2017, before taxes.
                  <span className="frmRequired">*</span>
                </label>
                <select className="select form-control" id="HISP" name="HISP">
                  <option disabled selected>Please select an option</option>
                  <option value="1">Less than $10,000</option>
                  <option value="2">$10,000 - $20,000</option>
                  <option value="3">$20,000 - $30,000</option>
                  <option value="4">$30,000 - $40,000</option>
                  <option value="5">$40,000 - $50,000</option>
                  <option value="6">$50,000 - $75,000</option>
                  <option value="7">$75,000 - $100,000</option>
                  <option value="8">$100,000 - $150,000</option>
                  <option value="9">More than $150,000</option>
                </select>
              </div>
              {/* QUESTION 10 */}
              <div className="form-group ">
                <label className="control-label" for="XYZ">
                  Do you identify as Republican, Democrat, or Independent?
                  <span className="frmRequired">*</span>
                </label>
                <select className="select form-control" id="XYZ" name="XYZ">
                  <option disabled selected>Please select an option</option>
                  <option value="1">Republican</option>
                  <option value="2">Democrat</option>
                  <option value="3">Independent</option>
                </select>
              </div>
            </form>
            {/* SUBMIT */}
            <div className="form-group">
              <div>
                <button className="btn btn-primary" onClick={() => this.send()}>
                  Submit
                </button>
              </div>
            </div>
          </Panel.Body>
      </Panel> 
      </div>
    );
  }
}

export default UserForm5;