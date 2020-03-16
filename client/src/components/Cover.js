import React from 'react';
import axios from 'axios';
import {Container, Row, Col, Card, Button, Form, Alert, Popover, OverlayTrigger} from 'react-bootstrap/'
import { makeStyles } from '@material-ui/core/styles';
import {TextField, FormHelperText} from '@material-ui/core/';
import InputAdornment from '@material-ui/core/InputAdornment';
import {DateRange, Euro} from '@material-ui/icons/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faKey, faHandshake, faUmbrellaBeach, faBell, faBellSlash, faPhoneVolume, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'


class Cover extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
    };
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
    const { onSubmit, handleInputChange, controls } = this.props;

    return(
      <>
        <Container>
          <Form>
            <Card>
              <Card.Header className="cardHeaders">
                <h4>About Your Cover</h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <div className="cardContain">
                      <Row>
                        <Col sm={10}>
                          <TextField
                            id="policy_start" margin="normal" fullWidth label="Policy Start Date" helperText="DD/MM/YYYY" variant="outlined" autoComplete="on"
                            InputProps={{endAdornment:<InputAdornment position="end"><DateRange /></InputAdornment>}}
                            name="coverControls.policy_start"
                            value={controls.policy_start.value}
                            onChange={handleInputChange} 
                            touched={controls.policy_start.touched}
                            valid={controls.policy_start.valid}
                            error={!(controls.policy_start.valid)}
                          />
                          {(!controls.policy_start.valid) ?
                          <FormHelperText className="validationHelpText">
                            Please provide a valid date E.g. 24/02/2020
                          </FormHelperText>
                          : '' }
                        </Col>
                        <Col>
                          <OverlayTrigger aria-labelledby="icon" placement="top"
                            overlay={
                              <Popover >
                                <Popover.Title className="helpTextBox">Policy Start Date</Popover.Title>
                                <Popover.Content>
                                  When would you like your new policy to start?
                                </Popover.Content>
                              </Popover>
                            }>
                              <FontAwesomeIcon className="helpButton" icon={faQuestionCircle} />
                          </OverlayTrigger>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={10}>
                          <TextField
                            id="build_cover" className="inputMargin" margin="normal" fullWidth label="Building Cover" helperText="How much would it cost to rebuild your house E.g. 250,000" variant="outlined" autoComplete="on"
                            InputProps={{endAdornment:<InputAdornment position="end"><Euro /></InputAdornment>}}
                            name="coverControls.build_cover"
                            value={controls.build_cover.value}
                            onChange={handleInputChange}
                            touched={controls.build_cover.touched}
                            valid={controls.build_cover.valid}
                            error={!(controls.build_cover.valid)}
                          />
                          {(!controls.build_cover.valid) ?
                          <FormHelperText className="validationHelpText">
                            This field must be at least 6 numbers E.g. 250,000
                          </FormHelperText>
                          : '' }
                        </Col>
                        <Col>
                          <OverlayTrigger aria-labelledby="icon" placement="top"
                            overlay={
                              <Popover >
                                <Popover.Title className="helpTextBox">Building Cover</Popover.Title>
                                <Popover.Content>
                                  The full reinstatement cost of the building. This covers the main building of your home, plus fixtures and fittings. 
                                  Also covers external property, for example garages and patios.
                                </Popover.Content>
                              </Popover>
                            }>
                                <FontAwesomeIcon className="helpButton helpButtonSelect" icon={faQuestionCircle} />
                          </OverlayTrigger>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={10}>
                          <TextField
                            id="con_cover" className="inputMargin" margin="normal" fullWidth label="Contents Cover" helperText="How much would it cost to replace the entire contents of your house E.g. 25,000" variant="outlined" autoComplete="on"
                            InputProps={{endAdornment:<InputAdornment position="end"><Euro /></InputAdornment>}}
                            name="coverControls.con_cover"
                            value={controls.con_cover.value}
                            onChange={handleInputChange}
                            touched={controls.con_cover.touched}
                            valid={controls.con_cover.valid}
                            error={!(controls.con_cover.valid)}
                          />
                          {(!controls.con_cover.valid) ?
                          <FormHelperText className="validationHelpText">
                            This field must be at least 5 numbers E.g. 25,000 
                          </FormHelperText>
                          : '' }
                        </Col>
                        <Col>
                          <OverlayTrigger aria-labelledby="icon" placement="top"
                            overlay={
                              <Popover >
                                <Popover.Title className="helpTextBox">Contents Cover</Popover.Title>
                                <Popover.Content>
                                  The total cost of contents of your home that you wish to insure. This covers your household goods, e.g. furniture 
                                  and valuables within the home. These items must belong to a permanent member of the household.
                                </Popover.Content>
                              </Popover>
                            }>
                              <FontAwesomeIcon className="helpButton helpButtonSelect" icon={faQuestionCircle} />
                          </OverlayTrigger>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={10}>
                          <TextField
                            id="vol_excess" className="inputMargin" margin="normal" fullWidth label="Voluntary Excess" helperText="How much voluntary excess would you like E.g. 800" variant="outlined" autoComplete="on"
                            InputProps={{endAdornment:<InputAdornment position="end"><Euro /></InputAdornment>}}
                            name="coverControls.vol_excess"
                            value={controls.vol_excess.value}
                            onChange={handleInputChange}
                            touched={controls.vol_excess.touched}
                            valid={controls.vol_excess.valid}
                            error={!(controls.vol_excess.valid)}
                          />
                          {(!controls.vol_excess.valid) ?
                          <FormHelperText className="validationHelpText">
                            This field must be at least 3 numbers long E.g. 800 
                          </FormHelperText>
                          : '' }
                        </Col>
                        <Col>
                          <OverlayTrigger aria-labelledby="icon" placement="top"
                            overlay={
                              <Popover >
                                <Popover.Title className="helpTextBox">Contents Cover</Popover.Title>
                                <Popover.Content>
                                  On every household policy there is a standard amount which you must contribute towards the cost of a claim. 
                                  The insurer pays all the costs over this excess amount. Some insurers will allow you a discount if you are 
                                  prepared to increase the excess amount on your policy and become liable to cover costs up to this amount yourself.
                                </Popover.Content>
                              </Popover>
                            }>
                              <FontAwesomeIcon className="helpButton helpButtonSelect" icon={faQuestionCircle} />
                          </OverlayTrigger>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={5}>
                          <h6 className="ynQuestion">Would you like to include accidental damage?</h6>
                          <Button name="coverControls.acc_damage" 
                            value="Yes" 
                            className={controls.acc_damage.value === '' || controls.acc_damage.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                            onClick={e => this.handleButton('coverControls.acc_damage', 'Yes')}
                            touched={controls.acc_damage.touched}
                            valid={controls.acc_damage.valid}>
                              <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                          </Button>
                          <Button name="coverControls.acc_damage" 
                            value="No" 
                            className={controls.acc_damage.value === '' || controls.acc_damage.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                            onClick={e => this.handleButton('coverControls.acc_damage', 'No')}
                            touched={controls.acc_damage.touched}
                            valid={controls.acc_damage.valid}>
                              <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                          </Button>
                          {(!controls.acc_damage.valid) ?
                          <FormHelperText className="validationHelpText">
                            Please select an option
                          </FormHelperText>
                          : '' }
                        </Col>
                        <Col sm={5}>
                          <h6 className="ynQuestion">Have you ever previously insured this property?</h6>
                          <Button name="coverControls.pre_insured" 
                            value="Yes" 
                            className={controls.pre_insured.value === '' || controls.pre_insured.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                            onClick={e => this.handleButton('coverControls.pre_insured', 'Yes')}
                            touched={controls.pre_insured.touched}
                            valid={controls.pre_insured.valid}>
                              <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                          </Button>
                          <Button name="coverControls.pre_insured" 
                            value="No" 
                            className={controls.pre_insured.value === '' || controls.pre_insured.value === 'Yes' ? "ynButton" : "ynButtonClicked"}  
                            onClick={e => this.handleButton('coverControls.pre_insured', 'No')}
                            touched={controls.pre_insured.touched}
                            valid={controls.pre_insured.valid}>
                              <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                          </Button>
                          {(!controls.pre_insured.valid) ?
                          <FormHelperText className="validationHelpText">
                            Please select an option
                          </FormHelperText>
                          : '' }
                        </Col>
                        <Col>
                          <OverlayTrigger aria-labelledby="icon" placement="top"
                            overlay={
                              <Popover >
                                <Popover.Title className="helpTextBox">Accidental Damage</Popover.Title>
                                <Popover.Content>
                                  Accidental Damage covers an unintentional one-off incident that harms your property or its contents.
                                </Popover.Content>
                              </Popover>
                            }>
                              <FontAwesomeIcon className="helpButton helpButtonQuestions" icon={faQuestionCircle} />
                          </OverlayTrigger>
                        </Col>
                      </Row>
                      <Form.Group as={Row}>
                          <Col>
                              <Button className="continueButton continueMargin">Continue</Button>
                          </Col>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>
        </Container>
      </>
    );
  }
}


export default Cover;
