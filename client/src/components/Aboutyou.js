import React from 'react';
import {Container, Row, Col, Card, Form, Alert, Button, OverlayTrigger, Popover} from 'react-bootstrap/'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {FormControl, FormHelperText} from '@material-ui/core/';
import InputAdornment from '@material-ui/core/InputAdornment';
import {MailOutline, Phone, DateRange, Work} from '@material-ui/icons/';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    }
  },
})(TextField);


class Aboutyou extends React.Component{

  constructor(props) {
    super(props);
  }

  handleButton = (name, value) => {
    this.props.handleInputChange({
      target: {
        name,
        value
      }
    })
  }

  render(){
    const { onSubmit, handleInputChange, controls, getClassList } = this.props;

    return(
      <>
        <Container>
          <Form onSubmit={onSubmit} >
            <Card>
              <Card.Header className="cardHeaders">
                <h4>About You</h4>
              </Card.Header>
              <Card.Body>
                <div className="cardContain">
                <Row>
                  <Col sm={2}>
                    <FormControl required margin="normal" fullWidth variant="outlined" >
                      <InputLabel htmlFor="outlined-age-native-simple">Title</InputLabel>
                      <Select
                        label="title *"
                        name="aboutYouControls.title"
                        native
                        onChange={handleInputChange}
                        touched={controls.title.touched}
                        valid={controls.title.valid}
                        error={!(controls.title.valid)}
                      >
                        <option value="" />
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Mrs">Miss</option>
                        <option value="Mrs">Ms</option>
                        <option value="Mrs">Dr</option>
                      </Select>
                    </FormControl>
                    {(!controls.title.valid) ?
                    <FormHelperText className="validationHelpText">
                      Please select your title 
                    </FormHelperText>
                    :
                    ''
                    }
                  </Col>
                  <Col sm={4}>
                    <TextField
                      id="first_name" fullWidth margin="normal" required  label="First Name" variant="outlined" autoComplete="on"
                      name="aboutYouControls.first_name" 
                      onChange={handleInputChange}
                      value={controls.first_name.value}
                      touched={controls.first_name.touched}
                      valid={controls.first_name.valid}
                      error={!(controls.first_name.valid)}
                    />
                    {(!controls.first_name.valid) ?
                    <FormHelperText className="validationHelpText">
                      Your name must be at least 2 characters long
                    </FormHelperText>
                    :
                    ''
                    }
                  </Col>
                  <Col sm={4}>
                    <TextField
                      id="last_name" fullWidth margin="normal" label="Surname" required variant="outlined" autoComplete="on"
                      name="aboutYouControls.last_name"
                      value={controls.last_name.value}
                      onChange={handleInputChange}
                      error={!(controls.last_name.valid)}
                    />
                    {(!controls.last_name.valid) ?
                    <FormHelperText className="validationHelpText">
                      Your name must be at least 2 characters long
                    </FormHelperText>
                    :
                    ''
                    }
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <FormControl margin="normal" fullWidth variant="outlined">
                      <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                      <Select
                        label="gender"
                        name="aboutYouControls.gender"
                        native
                        onChange={handleInputChange}
                        touched={controls.gender.touched}
                        valid={controls.gender.valid}
                        error={!(controls.gender.valid)}
                        >
                        <option value=""/>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Select>
                    </FormControl>
                    {(!controls.gender.valid) ?
                    <FormHelperText className="validationHelpText">
                      Please select a gender
                    </FormHelperText>
                    :
                    ''
                    }
                  </Col>
                  <Col sm={5}>
                    <TextField id="input-with-icon-grid" fullWidth margin="normal" required label="Date of Birth" helperText="DD/MM/YYYY" variant="outlined" autoComplete="on"
                      InputProps={{endAdornment:<InputAdornment position="end"><DateRange /></InputAdornment>}}
                      name="aboutYouControls.date_of_birth"
                      value={controls.date_of_birth.value}
                      onChange={handleInputChange}
                      touched={controls.date_of_birth.touched}
                      valid={controls.date_of_birth.valid}
                      error={!(controls.date_of_birth.valid)}
                    />
                    {(!controls.date_of_birth.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please provide a valid date E.g. 24/02/2020
                      </FormHelperText>
                    :
                    ''
                    }
                  </Col>
                </Row>
                <Row className="noMargin">
                  <Col sm={10}>
                    <FormControl  className="inputMargin" margin="normal" fullWidth variant="outlined">
                      <InputLabel htmlFor="outlined-native-simple">Marital Status</InputLabel>
                      <Select
                        label="marital_status"
                        name="aboutYouControls.marital_status"
                        native
                        onChange={handleInputChange}
                        touched={controls.marital_status.touched}
                        valid={controls.marital_status.valid}
                        error={!(controls.marital_status.valid)}
                      >
                        <option value=""/>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Separated">Separated</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Common Law Spouse">Common Law Spouse</option>
                      </Select>
                    </FormControl>
                    {(!controls.marital_status.valid) ?
                    <FormHelperText className="validationHelpText">
                     Please select your marital status
                    </FormHelperText>
                    :
                    ''
                    }
                  </Col>
                  <Col>
                    <OverlayTrigger aria-labelledby="icon" placement="top"
                      overlay={
                        <Popover>
                          <Popover.Title className="helpTextBox">Marital Status</Popover.Title>
                          <Popover.Content>
                            Depending on your marital status, you might be eligible for a discount
                          </Popover.Content>
                        </Popover>
                      }>
                        <FontAwesomeIcon className="helpButton helpButtonSelect" icon={faQuestionCircle} />
                    </OverlayTrigger>
                  </Col>
                </Row>
                
                <Row > 
                  <Col sm={10}>
                    <TextField
                      id="telephone" margin="normal" fullWidth label="Telephone" variant="outlined" autoComplete="on"
                      InputProps={{endAdornment:<InputAdornment position="end"><Phone /></InputAdornment>}}
                      name="aboutYouControls.telephone.value"
                      value={controls.telephone.value}
                      onChange={handleInputChange}
                      error={!(controls.telephone.valid)}
                    />
                    {(!controls.telephone.valid) ?
                    <FormHelperText className="validationHelpText">
                      Please provide a valid phone number
                    </FormHelperText>
                    :
                    ''
                    }
                  </Col>
                </Row>
                <Row>
                  <Col sm={10}>
                    <TextField
                      id="email" margin="normal" fullWidth label="Email" variant="outlined" autoComplete="on"
                      InputProps={{endAdornment:<InputAdornment position="end"><MailOutline /></InputAdornment>}}
                      name="aboutYouControls.email"
                      value={controls.email.value}
                      onChange={handleInputChange}
                      touched={controls.email.touched}
                      valid={controls.email.valid}
                      error={!(controls.email.valid)}
                    />
                    {(!controls.email.valid) ?
                    <FormHelperText className="validationHelpText">
                      Please provide a valid email address
                    </FormHelperText>
                    :
                    ''
                    }
                  </Col>
                </Row>
                <Row>
                <Col sm={5}>
                    <FormControl required margin="normal" fullWidth variant="outlined" >
                      <InputLabel htmlFor="outlined-age-native-simple">Employment Status</InputLabel>
                      <Select
                        label="employment status *"
                        name="aboutYouControls.employment_status"
                        native
                        onChange={handleInputChange}
                        touched={controls.employment_status.touched}
                        valid={controls.employment_status.valid}
                        error={!(controls.employment_status.valid)}
                      >
                        <option value="" />
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Retired">Retired</option>
                        <option value="Student">Student</option>
                        <option value="Voluntary Worker">Voluntary Worker</option>
                      </Select>
                    </FormControl>
                    {(!controls.employment_status.valid) ?
                    <FormHelperText className="validationHelpText">
                      Please select your employment status
                    </FormHelperText>
                    :
                    ''
                    }
                  </Col>
                  <Col sm={5}>
                    <TextField
                      id="email" margin="normal" fullWidth label="Occupation" variant="outlined" autoComplete="on"
                      InputProps={{endAdornment:<InputAdornment position="end"><Work /></InputAdornment>}}
                      name="aboutYouControls.occupation"
                      value={controls.occupation.value}
                      onChange={handleInputChange}
                      touched={controls.occupation.touched}
                      valid={controls.occupation.valid}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}>
                    <h6 className="ynQuestion">Are you a first time buyer?</h6>
                    <Button name="aboutYouControls.first_buyer"
                      value="Yes"
                      className={controls.first_buyer.value === '' || controls.first_buyer.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                      onClick={e => this.handleButton('aboutYouControls.first_buyer', 'Yes')} 
                      touched={controls.first_buyer.touched}
                      valid={controls.first_buyer.valid}
                    >
                      <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                    </Button>
                    <Button name="aboutYouControls.first_buyer"
                      value="No"
                      className={controls.first_buyer.value === '' || controls.first_buyer.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                      onClick={e => this.handleButton('aboutYouControls.first_buyer', 'No')} 
                      touched={controls.first_buyer.touched}
                      valid={controls.first_buyer.valid}
                    >
                      <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                    </Button>
                    {(!controls.first_buyer.valid) ?
                    <FormHelperText className="validationHelpText">
                      Please select an option
                    </FormHelperText>
                    : '' }
                  </Col>

                  <Col sm={5}>
                    <h6 className="ynQuestion">Do you have any non-motoring convictions?</h6>
                    <Button name="aboutYouControls.motor_convic" 
                      value="Yes" 
                      className={controls.motor_convic.value === '' || controls.motor_convic.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                      onClick={e => this.handleButton('aboutYouControls.motor_convic', 'Yes')} 
                      touched={controls.motor_convic.touched}
                      valid={controls.motor_convic.valid}
                    >
                      <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                    </Button>

                    <Button name="aboutYouControls.motor_convic" 
                      value="No" 
                      className={controls.motor_convic.value === '' || controls.motor_convic.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                      onClick={e => this.handleButton('aboutYouControls.motor_convic', 'No')} 
                      touched={controls.motor_convic.touched}
                      valid={controls.motor_convic.valid}
                    >
                      <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                    </Button>
                    {(!controls.motor_convic.valid) ?
                    <FormHelperText className="validationHelpText">
                      Please select an option
                    </FormHelperText>
                    : '' }
                  </Col>
                  <Col>
                    <OverlayTrigger aria-labelledby="icon" placement="top" 
                      overlay={
                        <Popover >
                          <Popover.Title className="helpTextBox">First Time Buyer</Popover.Title>
                            <Popover.Content >
                              Is this the first time you have bought a house?
                            </Popover.Content>
                          <Popover.Title className="helpTextBox">Non-Motoring Convictions</Popover.Title>
                            <Popover.Content>
                              Do you have any convictions not pertaining to vehicles? 
                            </Popover.Content>
                        </Popover>
                      }>
                        <FontAwesomeIcon className="helpButton helpButtonQuestions" icon={faQuestionCircle} />
                    </OverlayTrigger>
                  </Col>
                </Row>
                <Form.Group as={Row}>
                  <Col>
                    <Button className="continueButton continueMargin" >Continue</Button>
                  </Col>
                </Form.Group>
                </div>
              </Card.Body>
            </Card>
          </Form>
        </Container>
      </>
    );
  }
}


export default Aboutyou;
