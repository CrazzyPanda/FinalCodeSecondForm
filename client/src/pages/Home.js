import React from 'react';
import axios from 'axios';
import * as selectData from '../data.json';
import {Container, Row, Col, Card, Button, ProgressBar} from 'react-bootstrap/'
import {Checkbox, FormHelperText} from '@material-ui/core/';
import validate from '../components/Validate';
import Address from '../components/Address';
import Aboutyou from '../components/Aboutyou';
import Property from '../components/Property';
import Cover from '../components/Cover';
import Oldcover from '../components/Oldcover';


class Home extends React.Component{

  constructor(props) {
    super(props);
    this.aboutYouControls = null;
    this.setAboutYouControls = e => {
      this.aboutYouControls = e;
    }

    this.state = selectData.default;
  }

  handleInputChange = e => {
      
    const target = e.target;
    //const value =  target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    var name = target.name;
    
    console.log(`Input name ${name}. Input value ${value}.`);

    var objName, propertyName;
    // 'aboutYouControls.first_name'
    var names = name.split('.');
    objName = names[0]; // 'aboutYouControls' this.state.aboutYouControls
    propertyName = names[1] // 'first_name' this.state.aboutYouControls.first_name

    const updatedControls = this.state[objName];
    const updatedFormElement = updatedControls[propertyName]
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    // updatedFormElement.valid = validate(value, updatedFormElement.validationRules, propertyName);
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules, name)[0];

    updatedControls[propertyName] = updatedFormElement;

    this.setState({
      [objName]: updatedControls
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const customer = {
      title: this.state.title,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      gender: this.state.gender,
      date_of_birth: this.state.date_of_birth,
      marital_status: this.state.marital_status,
      employment_status: this.state.employment_status,
      occupation: this.state.occupation,
      telephone: this.state.telephone,
      email: this.state.email,
      first_buyer: this.state.first_buyer,
      motor_convic: this.state.motor_convic,

      address: this.state.address,
      address_results: this.state.address_results,
      alter_address: this.state.alter_address,
      address_line_1: this.state.address_line_1,
      address_line_2: this.state.address_line_2,
      town: this.state.town,
      county: this.state.county,

      own_prop: this.state.own_prop,
      lives_in_prop: this.state.lives_in_prop,
      holiday_home: this.state.holiday_home,
      property_type: this.state.property_type,
      year_built: this.state.year_built,
      bedrooms: this.state.bedrooms,
      bathrooms: this.state.bathrooms,
      heating: this.state.heating,
      burgler_alarm: this.state.burgler_alarm,
      smoke_alarm: this.state.smoke_alarm,
      security_locks: this.state.security_locks,
      basement: this.state.basement,
      roof_type: this.state.roof_type,
      roof_material: this.state.roof_material,
      extension: this.state.extension,
      ex_roof_type: this.state.ex_roof_type,
      ex_roof_material: this.state.ex_roof_material,
      occupied: this.state.occupied,
      smokers: this.state.smokers,
      subsidence: this.state.subsidence,
      flooding: this.state.flooding,
      neighbour: this.state.neighbour,

      policy_start: this.state.policy_start,
      build_cover: this.state.build_cover,
      con_cover: this.state.con_cover,
      vol_excess: this.state.vol_excess,
      acc_damage: this.state.acc_damage,
      pre_insured: this.state.pre_insured,

      policy_end: this.state.policy_end,
      pre_insurance: this.state.pre_insurance,
      policy_num: this.state.policy_num,
      years_pre_insurer: this.state.years_pre_insurer,
      no_claims: this.state.no_claims,

      privacy_policy: this.state.privacy_policy,
      offers: this.state.offers,
      terms: this.state.terms
    }

    // this.props.onContinue(this.state)
    console.log(customer);

    axios.post('http://localhost:4000/customers', customer)
      .then(res => console.log(res.data))
      .catch(err => console.log("ERROR " + err));
  }


  formSubmitHandler(e){
    e.preventDefault();
    for (let formSection in this.state) {
      //alert("hi");
      for(let formElement in this.state[formSection]){
        //alert("hello");
        let value = this.state[formSection][formElement].value;
        let rules = this.state[formSection][formElement].validationRules;
        this.state[formSection][formElement].valid = validate(value, rules, formElement)[0];
        
      }
    }
    this.setState(this.state);
  }
  






  render(){

    return(
      <>
        
        <Aboutyou onSubmit={this.onSubmit}
          handleInputChange={this.handleInputChange}
          controls={this.state.aboutYouControls}
          ref={this.setAboutYouControls} 
        />
        <Container>
          <ProgressBar className="progressMargin" now={20} label="20% Done"/>
        </Container>
        <Address 
          onSubmit={this.onSubmit} 
          handleInputChange={this.handleInputChange} 
          controls={this.state.addressControls} 
          ref={this.addressControls}
        />
        <Container>
          <ProgressBar className="progressMargin" now={40} label="40% Done"/>
        </Container>
        <Property onSubmit={this.onSubmit} 
          handleInputChange={this.handleInputChange} 
          controls={this.state.propertyControls} 
          ref={this.propertyControls}
        />
        <Container>
          <ProgressBar className="progressMargin" now={60} label="60% Done"/>
        </Container>
        <Cover onSubmit={this.onSubmit} 
          handleInputChange={this.handleInputChange} 
          controls={this.state.coverControls} 
          ref={this.coverControls}
        />
        <Container>
          <ProgressBar className="progressMargin" now={80} label="80% Done"/>
        </Container>
        <Oldcover onSubmit={this.onSubmit} 
          handleInputChange={this.handleInputChange} 
          controls={this.state.oldCoverControls} 
          ref={this.oldCoverControls}
        />

        <Container>
          <Card className="termsBox">
            <Card.Body>
              <Row>
                <Col className="termsDes termsConBox" sm={8}><p>I have read and I accept the Privacy Policy</p></Col>
                <Col>
                  <Checkbox name="this.state.termsControls.privacy_policy"
                    color="success" 
                    touched={this.state.termsControls.privacy_policy.touched}
                    valid={this.state.termsControls.privacy_policy.valid}
                    error={!(this.state.termsControls.privacy_policy.valid)}/>
                    {(!this.state.termsControls.privacy_policy.valid) ?
                    <FormHelperText className="validationHelpText">
                      Please accept the privacy policy 
                    </FormHelperText>
                    : '' }
                </Col>
              </Row>
              <Row>
                <Col className="termsDes termsConBox" sm={8}><p>Please tick this box if you allow us to contact you about discounts, 
                special offers <br/>and information by post, email, SMS, phone and other electronic means.</p></Col>
                <Col> 
                  <Checkbox name="this.state.termsControls.offers"
                    color="success"/>
                </Col>
              </Row>
              <Row>
                <Col className="termsDes termsConBox" sm={8}><p>Do you accept the assumptions and terms of business?</p></Col>
                <Col> 
                  <Checkbox name="this.state.termsControls.terms"
                    color="success"
                    touched={this.state.termsControls.terms.touched}
                    valid={this.state.termsControls.terms.valid}
                    error={!(this.state.termsControls.terms.valid)}/>
                    {(!this.state.termsControls.terms.valid) ?
                    <FormHelperText className="validationHelpText">
                      Please agree to the terms and conditions
                    </FormHelperText>
                    : '' }
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col>
              <Button type="submit" className="submitButton" size="lg" block onClick={(e) => this.formSubmitHandler(e)}>Get Quote</Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}


export default Home;