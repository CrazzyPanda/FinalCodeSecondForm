import React from 'react';
import axios from 'axios';
import {Container, Row, Col, Card, Button, Form, OverlayTrigger, Popover} from 'react-bootstrap/'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import {DateRange} from '@material-ui/icons/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'


class Oldcover extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render(){
      const { onSubmit, handleInputChange, controls } = this.props;

        return(
            <>
                <Container>
                    <Form >
                        <Card>
                            <Card.Header className="cardHeaders">
                                <h4>About Your Previous Cover</h4>
                            </Card.Header>
                            <Card.Body>
                            <Row>
                              <Col >
                            <div className="cardContain">
                                <Row>
                                    <Col sm={10}>
                                        <TextField
                                            id="policy_end" margin="normal" fullWidth label="Policy End Date" helperText="DD/MM/YYYY" variant="outlined" autoComplete="on"
                                            InputProps={{endAdornment:<InputAdornment position="end"><DateRange /></InputAdornment>}}
                                            name="oldCoverControls.policy_end"
                                            value={controls.policy_end.value}
                                            onChange={handleInputChange}
                                            touched={controls.policy_end.touched}
                                            valid={controls.policy_end.valid}
                                            error={!(controls.policy_end.valid)}
                                        />
                                        {(!controls.policy_end.valid) ?
                                        <FormHelperText className="validationHelpText">
                                            Please provide a valid date E.g. 24/02/2020
                                        </FormHelperText>
                                        : '' }
                                    </Col>
                                    <Col>
                                      <OverlayTrigger aria-labelledby="icon" placement="top"
                                        overlay={
                                          <Popover >
                                            <Popover.Title className="helpTextBox">Policy End Date</Popover.Title>
                                            <Popover.Content>
                                              When does your previous insurance end?
                                            </Popover.Content>
                                          </Popover>
                                        }>
                                          <FontAwesomeIcon className="helpButton" icon={faQuestionCircle} />
                                      </OverlayTrigger>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={5}>
                                        <TextField
                                            id="pre_insurance" className="inputMargin" margin="normal" fullWidth label="Previous Insurance" helperText="E.g. Campion Insurance" variant="outlined" autoComplete="on"
                                            name="oldCoverControls.pre_insurance"
                                            value={controls.pre_insurance.value}
                                            onChange={handleInputChange}
                                            touched={controls.pre_insurance.touched}
                                            valid={controls.pre_insurance.valid}
                                            error={!(controls.pre_insurance.valid)}
                                        />
                                        {(!controls.pre_insurance.valid) ?
                                        <FormHelperText className="validationHelpText">
                                            This field must be at least 3 characters long
                                        </FormHelperText>
                                        : '' }
                                    </Col>
                                    <Col sm={5}>
                                        <TextField
                                            id="policy_num" className="inputMargin" margin="normal" fullWidth label="Policy Number" helperText="*If Known" variant="outlined" autoComplete="on"
                                            name="oldCoverControls.policy_num"
                                            value={controls.policy_num.value}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={5}>
                                        <FormControl className="inputMargin" margin="normal" fullWidth variant="outlined">
                                            <InputLabel htmlFor="outlined-native-simple">Years with Previous Insurance</InputLabel>
                                            <Select
                                                label="Years with Previous Insurance"
                                                name="oldCoverControls.years_pre_insurer"
                                                native
                                                onChange={handleInputChange}
                                                touched={controls.years_pre_insurer.touched}
                                                valid={controls.years_pre_insurer.valid}
                                                error={!(controls.years_pre_insurer.valid)}
                                                >
                                                <option value=""/>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6+">6+</option>
                                            </Select>
                                            <FormHelperText>How many years were you with your previous insurer</FormHelperText>
                                        </FormControl>
                                        {(!controls.years_pre_insurer.valid) ?
                                        <FormHelperText className="validationHelpText">
                                            Please select the number of years you were with your previous insurer
                                        </FormHelperText>
                                        : '' }
                                    </Col>
                                    <Col sm={5}>
                                        <FormControl className="inputMargin" margin="normal" fullWidth variant="outlined">
                                            <InputLabel htmlFor="outlined-native-simple">Years with No Claims</InputLabel>
                                            <Select
                                                label="Years with No Claims"
                                                name="oldCoverControls.no_claims"
                                                native
                                                onChange={handleInputChange}
                                                touched={controls.no_claims.touched}
                                                valid={controls.no_claims.valid}
                                                error={!(controls.no_claims.valid)}
                                                >
                                                <option value=""/>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6+">6+</option>
                                            </Select>
                                            <FormHelperText>How many years have you had no claims</FormHelperText>
                                        </FormControl>
                                        {(!controls.no_claims.valid) ?
                                        <FormHelperText className="validationHelpText">
                                            Please select the number of years you had no claims
                                        </FormHelperText>
                                        : '' }
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


export default Oldcover;
