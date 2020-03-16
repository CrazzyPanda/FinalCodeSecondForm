import React from 'react';
import axios from 'axios';
import {Container, Row, Col, Card, Button, Form, Alert, Popover, OverlayTrigger, Image} from 'react-bootstrap/'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import{ FormControl, FormHelperText} from '@material-ui/core/';
import InputAdornment from '@material-ui/core/InputAdornment';
import {DateRange} from '@material-ui/icons/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faKey, faHandshake, faUmbrellaBeach, faBell, faBellSlash, faPhoneVolume, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


class Property extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
    };
    this.handleOwnPropClick = this.handleOwnPropClick.bind(this);
    this.handleLiveInClick = this.handleLiveInClick.bind(this);
    this.handleExtensionClick = this.handleExtensionClick.bind(this);
  }

  handleOwnPropClick() {
    this.setState({isClicked: true});
  }
  handleLiveInClick() {
    this.setState({isPicked: true});
  }
  handleExtensionClick() {
    this.setState({isChosen: true});
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
    const isClicked = this.state.isClicked;
    const isPicked = this.state.isPicked;
    const isChosen = this.state.isChosen;

    return(
      <>
        <Container>
          <Form >
            <Card>
              <Card.Header className="cardHeaders">
                <h4>About Your Property</h4>
              </Card.Header>
              <Card.Body>
                <div className="cardContain">
                  <Row>
                    <Col sm={10}>
                      <h6 className="ynQuestion">Do you own or rent the property?</h6>
                      <Button name="propertyControls.own_prop" 
                        value="Owner" 
                        className={controls.own_prop.value === '' || controls.own_prop.value === 'Renter' ? "textButton" : "textButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.own_prop', 'Owner')}
                        touched={controls.own_prop.touched}
                        valid={controls.own_prop.valid}
                        onMouseDown={this.handleOwnPropClick}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faKey} />Owner
                      </Button>
                      <Button name="propertyControls.own_prop" 
                        value="Renter" 
                        className={controls.own_prop.value === '' || controls.own_prop.value === 'Owner' ? "textButton" : "textButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.own_prop', 'Renter')}
                        touched={controls.own_prop.touched}
                        valid={controls.own_prop.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faHandshake} />Renter
                      </Button>
                      {(!controls.own_prop.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                    </Col>
                  </Row>
                  {isClicked ? (
                    <Row>
                      <Col>
                        <h6 className="ynQuestion">Who lives in the property?</h6>
                        <Button name="propertyControls.lives_in_prop"
                          value="Owner lives in property"  
                          className={controls.lives_in_prop.value === '' || controls.lives_in_prop.value === 'Owner rents out property' || controls.lives_in_prop.value === 'Holiday home' ? "textButton" : "textButtonClicked"} 
                          onClick={e => this.handleButton('propertyControls.lives_in_prop', 'Owner lives in property')}
                          touched={controls.lives_in_prop.touched}
                          valid={controls.lives_in_prop.valid}>
                            <FontAwesomeIcon className="ynButtonIcon" icon={faKey} />I Live in it
                        </Button>
                        <Button name="propertyControls.lives_in_prop"
                          value="Owner rents out property" 
                          className={controls.lives_in_prop.value === '' || controls.lives_in_prop.value === 'Owner lives in property' || controls.lives_in_prop.value === 'Holiday home' ? "textButton" : "textButtonClicked"} 
                          onClick={e => this.handleButton('propertyControls.lives_in_prop', 'Owner rents out property')}
                          touched={controls.lives_in_prop.touched}
                          valid={controls.lives_in_prop.valid}>
                            <FontAwesomeIcon className="ynButtonIcon" icon={faHandshake} />I Rent it out
                        </Button>
                        <Button name="propertyControls.lives_in_prop"
                          value="Holiday home"  
                          className={controls.lives_in_prop.value === '' || controls.lives_in_prop.value === 'Owner lives in property' || controls.lives_in_prop.value === 'Owner rents out property' ? "textButton" : "textButtonClicked"} 
                          onClick={e => this.handleButton('propertyControls.lives_in_prop', 'Holiday home')}
                          touched={controls.lives_in_prop.touched}
                          valid={controls.lives_in_prop.valid}
                          onMouseDown={this.handleLiveInClick}>
                            <FontAwesomeIcon className="ynButtonIcon" icon={faUmbrellaBeach} />It's a Holiday Home
                        </Button>
                        {(!controls.lives_in_prop.valid) ?
                        <FormHelperText className="validationHelpText">
                          Please select an option
                        </FormHelperText>
                        : '' }
                      </Col>
                    </Row>
                  ):( '' )}
                  {isPicked ? (
                    <Row>
                      <Col>
                        <h6 className="ynQuestion">Is the holiday home rented out?</h6>
                        <Button name="propertyControls.holiday_home"
                          value="Yes"
                          className={controls.holiday_home.value === '' || controls.holiday_home.value === 'No' ? "textButton" : "textButtonClicked"} 
                          onClick={e => this.handleButton('propertyControls.holiday_home', 'Yes')}>
                            <FontAwesomeIcon className="ynButtonIcon" icon={faCheck}/>Yes
                        </Button>
                        <Button name="propertyControls.holiday_home"
                          value="No"  
                          className={controls.holiday_home.value === '' || controls.holiday_home.value === 'Yes' ? "textButton" : "textButtonClicked"} 
                          onClick={e => this.handleButton('propertyControls.holiday_home', 'No')}>
                            <FontAwesomeIcon className="ynButtonIcon" icon={faTimes}/>No
                        </Button>
                      </Col>
                    </Row>
                  ):( '' )}
                  <Row className="selectMargin">
                    <Col sm={5}>
                      <FormControl margin="normal" fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-native-simple">What Type of Property is it</InputLabel>
                        <Select
                          label="What Type of Property is it"
                          name="propertyControls.property_type"
                          native
                          onChange={handleInputChange}
                          touched={controls.property_type.touched}
                          valid={controls.property_type.valid}
                          error={!(controls.property_type.valid)}
                        >
                          <option value=""/>
                          <option value="Bungalow">Bungalow</option>
                          <option value="Country Mansion">Country Mansion</option>
                          <option value="Detached House">Detached House</option>
                          <option value="Farm House">Farm House</option>
                          <option value="Flat">Flat</option>
                          <option value="Maisonette">Maisonette</option>
                          <option value="Purpose Built Apartment">Purpose Built Apartment</option>
                          <option value="Semi Detached House">Semi Detached House</option>
                          <option value="Terraced House">Terraced House</option>
                        </Select>
                      </FormControl>
                      {(!controls.property_type.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select the type of property
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col sm={5}>
                      <TextField
                        id="year_built" margin="normal" fullWidth label="What Year was it Built" helperText="E.g. 1995" variant="outlined" autoComplete="on"
                        InputProps={{endAdornment:<InputAdornment position="end"><DateRange /></InputAdornment>}}
                        name="propertyControls.year_built"
                        value={controls.year_built.value}
                        onChange={handleInputChange}
                        touched={controls.year_built.touched}
                        valid={controls.year_built.valid}
                        error={!(controls.year_built.valid)}
                      />
                      {(!controls.year_built.valid) ?
                      <FormHelperText className="validationHelpText">
                        This field must be 4 numbers long E.g. 2020
                      </FormHelperText>
                      :
                      ''
                      }
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <FormControl className="inputMargin" margin="normal" fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-native-simple">How many Bedrooms are there</InputLabel>
                        <Select
                          label="How many Bedrooms are there"
                          name="propertyControls.bedrooms"
                          native
                          onChange={handleInputChange}
                          touched={controls.bedrooms.touched}
                          valid={controls.bedrooms.valid}
                          error={!(controls.bedrooms.valid)}
                        >
                          <option value=""/>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6+">6+</option>
                        </Select>
                      </FormControl>
                      {(!controls.bedrooms.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select the number of bedrooms
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col sm={5}>
                      <FormControl className="inputMargin" margin="normal" fullWidth variant="outlined" >
                        <InputLabel htmlFor="outlined-native-simple">How many Bathrooms are there</InputLabel>
                        <Select
                          fullWidth
                          label="How many Bathrooms are there"
                          name="propertyControls.bathrooms"
                          native
                          onChange={handleInputChange}
                          touched={controls.bathrooms.touched}
                          valid={controls.bathrooms.valid}
                          error={!(controls.bathrooms.valid)}
                        >
                          <option value=""/>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6+">6+</option>
                        </Select>
                      </FormControl>
                      {(!controls.bathrooms.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select the number of bathrooms
                      </FormHelperText>
                      : '' }
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={10}>
                      <FormControl margin="normal" fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-native-simple">What is the main Heating system</InputLabel>
                        <Select
                          label="What is the main Heating system"
                          name="propertyControls.heating"
                          native
                          onChange={handleInputChange}
                          touched={controls.heating.touched}
                          valid={controls.heating.valid}
                          error={!(controls.heating.valid)}
                        >
                          <option value=""/>
                          <option value="Electric">Electric</option>
                          <option value="Gas">Gas</option>
                          <option value="Oil">Oil</option>
                          <option value="Mixture inc. Oil">Mixture inc. Oil</option>
                          <option value="Solar/Wind">Solar/Wind</option>
                          <option value="Solid Fuel">Solid Fuel</option>
                          <option value="Woodchip">Woodchip</option>
                          <option value="Unknown">Unknown</option>
                        </Select>
                      </FormControl>
                      {(!controls.heating.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select the heating system
                      </FormHelperText>
                      : '' }
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <h6 className="ynQuestion">Does the property have an Alarm?</h6>
                      <Button name="propertyControls.burgler_alarm"
                        value="No Alarm" 
                        className={controls.burgler_alarm.value === '' || controls.burgler_alarm.value === 'Standalone Alarm' || controls.burgler_alarm.value === 'Monitored Alarm' ? "textButton" : "textButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.burgler_alarm', 'No Alarm')}
                        touched={controls.burgler_alarm.touched}
                        valid={controls.burgler_alarm.valid}>
                          <FontAwesomeIcon className="ynButtonIcon" size="sm" icon={faBellSlash} />No Alarm
                      </Button>
                      <Button name="propertyControls.burgler_alarm"
                        value="Standalone Alarm" 
                        className={controls.burgler_alarm.value === '' || controls.burgler_alarm.value === 'No Alarm' || controls.burgler_alarm.value === 'Monitored Alarm' ? "textButton" : "textButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.burgler_alarm', 'Standalone Alarm')}
                        touched={controls.burgler_alarm.touched}
                        valid={controls.burgler_alarm.valid}>
                          <FontAwesomeIcon className="ynButtonIcon" size="sm" icon={faBell} />Standalone
                      </Button>
                      <Button name="propertyControls.burgler_alarm"
                        value="Monitored Alarm" 
                        className={controls.burgler_alarm.value === '' || controls.burgler_alarm.value === 'No Alarm' || controls.burgler_alarm.value === 'Standalone Alarm' ? "textButton" : "textButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.burgler_alarm', 'Monitored Alarm')}
                        touched={controls.burgler_alarm.touched}
                        valid={controls.burgler_alarm.valid}>
                          <FontAwesomeIcon className="ynButtonIcon" icon={faPhoneVolume} />Monitored
                      </Button>
                      {(!controls.burgler_alarm.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col sm={5}>
                      <h6 className="ynQuestion">Does the property have two or more Smoke Alarms?</h6>
                      <Button name="propertyControls.smoke_alarm" 
                        value="Yes" 
                        className={controls.smoke_alarm.value === '' || controls.smoke_alarm.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.smoke_alarm', 'Yes')} 
                        touched={controls.smoke_alarm.touched}
                        valid={controls.smoke_alarm.valid}
                      >
                        <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                      </Button>
                      <Button name="propertyControls.smoke_alarm" 
                        value="No" 
                        className={controls.smoke_alarm.value === '' || controls.smoke_alarm.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.smoke_alarm', 'No')}
                        touched={controls.smoke_alarm.touched}
                        valid={controls.smoke_alarm.valid}
                      >
                        <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                      </Button>
                      {(!controls.smoke_alarm.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col>
                      <OverlayTrigger aria-labelledby="icon" placement="top"
                        overlay={
                          <Popover>
                            <Popover.Title className="helpTextBox">Burgler Alarm</Popover.Title>
                            <Popover.Content>
                              Do you have a burgler alarm? <br/>
                              Monitored security systems are systems that are actively monitored by a professional home security company. When the 
                              system detects a break-in, fire, or other emergency, it notifies the security team and, in some cases, emergency responders.<br/>
                              <p/>
                              Standalone or self-monitored security systems can include motion sensors, silent alarms, sirens, door sensors, and security 
                              cameras and in some cases, they are smartphone compatible, so you can monitor the system remotely.
                            </Popover.Content>
                            <Popover.Title className="helpTextBox">Smoke Alarm</Popover.Title>
                            <Popover.Content>
                              By having two or more smoke alarms, you may be eligible for discounts.
                            </Popover.Content>
                          </Popover>
                        }>
                          <FontAwesomeIcon className="helpButton helpButtonQuestions" icon={faQuestionCircle} />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <h6 className="ynQuestion">Does the property have Security Locks?</h6>
                      <Button name="propertyControls.security_locks"
                        value="Yes" 
                        className={controls.security_locks.value === '' || controls.security_locks.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.security_locks', 'Yes')}
                        touched={controls.security_locks.touched}
                        valid={controls.security_locks.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                      </Button>
                      <Button name="propertyControls.security_locks"
                        value="No" 
                        className={controls.security_locks.value === '' || controls.security_locks.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.security_locks', 'No')}
                        touched={controls.security_locks.touched}
                        valid={controls.security_locks.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                      </Button>
                      {(!controls.security_locks.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col sm={5}>
                      <h6 className="ynQuestion">Does the property have a Basement?</h6>
                      <Button name="propertyControls.basement" 
                        value="Yes" 
                        className={controls.basement.value === '' || controls.basement.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.basement', 'Yes')}
                        touched={controls.basement.touched}
                        valid={controls.basement.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                      </Button>
                      <Button name="propertyControls.basement" 
                        value="No" 
                        className={controls.basement.value === '' || controls.basement.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.basement', 'No')}
                        touched={controls.basement.touched}
                        valid={controls.basement.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                      </Button>
                      {(!controls.basement.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col>
                      <OverlayTrigger aria-labelledby="icon" placement="top"
                        overlay={
                          <Popover >
                            <Popover.Title className="helpTextBox">Security Locks</Popover.Title>
                            <Popover.Content>
                              All external doors are fitted with a rim lock with deadlock bolt action or a 5 lever mortise deadlock 
                              or if the door is UPVC or double glazed a multi point locking system with either a lever or built-in 
                              deadlocking cylinder. <br/>
                              Patio or French doors must be secured by a multi-point locking system with a 
                              lever of cylinder deadlock or other key-operated vertical security bolts fitted internally at the top and bottom.
                            </Popover.Content>
                            <Popover.Title className="helpTextBox">Basements</Popover.Title>
                            <Popover.Content>
                              Depending on where your property is located, you may require additional flood insurance if your basement is prone to flooding.
                            </Popover.Content>
                          </Popover>
                        }>
                          <FontAwesomeIcon className="helpButton helpButtonQuestions" icon={faQuestionCircle} />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                  <Row className="selectMargin">
                    <Col sm={10}>
                      <FormControl margin="normal" fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-native-simple">What type of Roof does your property have</InputLabel>
                        <Select
                          label="What type of Roof does your property have"
                          name="propertyControls.roof_type"
                          native
                          onChange={handleInputChange}
                          touched={controls.roof_type.touched}
                          valid={controls.roof_type.valid}
                          error={!(controls.roof_type.valid)}
                        >
                          <option value=""/>
                          <option value="Gable Roof">Gable Roof</option>
                          <option value="Hip Roof">Hip Roof</option>
                          <option value="Gambrel Roof">Gambrel Roof</option>
                          <option value="Mansard Roof">Mansard Roof</option>
                          <option value="Butterfly Roof">Butterfly Roof</option>
                          <option value="Shed Roof">Shed Roof</option>
                          <option value="Intersecting Roof">Intersecting Roof</option>
                        </Select>
                      </FormControl>
                      {(!controls.roof_type.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select the type of roof
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col>
                      <OverlayTrigger aria-labelledby="icon" placement="top"
                        overlay={
                          <Popover className="popoverSize">
                            <Popover.Title className="helpTextBox">Roof Types</Popover.Title>
                            <Popover.Content>
                              <Image src="/types-roof-designs.jpg" height="400" width="400" />
                            </Popover.Content>
                          </Popover>
                        }>
                          <FontAwesomeIcon className="helpButton" icon={faQuestionCircle} />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={10}>
                      <FormControl margin="normal" fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-native-simple">What Material is the roof made of</InputLabel>
                        <Select
                          label="What Material is the roof made of"
                          name="propertyControls.roof_material"
                          native
                          onChange={handleInputChange}
                          touched={controls.roof_material.touched}
                          valid={controls.roof_material.valid}
                          error={!(controls.roof_material.valid)}
                        >
                          <option value=""/>
                          <option value="Asbestos">Asbestos</option>
                          <option value="Asphalt">Asphalt</option>
                          <option value="Corrugated Iron">Corrugated Iron</option>
                          <option value="Felt on Timber">Felt on Timber</option>
                          <option value="Fibre Glasss">Fibre Glasss</option>
                          <option value="Glass">Glass</option>
                          <option value="Metal">Metal</option>
                          <option value="Plastic">Plastic</option>
                          <option value="Shingle">Shingle</option>
                          <option value="Slates">Slates</option>
                          <option value="Stramit">Stramit</option>
                          <option value="Thatch Fibre">Thatch Fibre</option>
                          <option value="Thatch Reed">Thatch Reed</option>
                          <option value="Timber">Timber</option>
                          <option value="Turnerised">Turnerised</option>
                          <option value="Woodwork Construction">Woodwork Construction</option>
                          <option value="Not Listed">Not Listed</option>
                      </Select>
                      </FormControl>
                      {(!controls.roof_material.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select the roof material
                      </FormHelperText>
                      : '' }
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <h6 className="ynQuestion">Does the property have an Extension?</h6>
                      <Button 
                        name="propertyControls.extension"
                        value="Yes" 
                        className={controls.extension.value === '' || controls.extension.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.extension', 'Yes')}
                        touched={controls.extension.touched}
                        valid={controls.extension.valid}
                        onMouseDown={this.handleExtensionClick}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                      </Button>
                      <Button name="propertyControls.extension" 
                        value="Yes" 
                        className={controls.extension.value === '' || controls.extension.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.extension', 'No')}
                        touched={controls.extension.touched}
                        valid={controls.extension.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                      </Button>
                      {(!controls.extension.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                      {isChosen ? (
                      <>
                        <Row>
                          <Col>
                            <FormControl margin="normal" fullWidth variant="outlined">
                              <InputLabel htmlFor="outlined-native-simple">What type of Roof does your extension have</InputLabel>
                              <Select
                                label="What type of Roof does your extension have"
                                name="propertyControls.ex_roof_type"
                                native
                                onChange={handleInputChange}
                              >
                                <option value=""/>
                                <option value="Edwardian">Edwardian</option>
                                <option value="Victorian">Victorian</option>
                                <option value="Gable">Gable</option>
                                <option value="Lean To">Lean To</option>
                                <option value="Flat">Flat</option>
                                <option value="Lantern">Lantern</option>
                                <option value="P Shape">P Shape</option>
                              </Select>
                            </FormControl>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormControl margin="normal" fullWidth variant="outlined">
                              <InputLabel htmlFor="outlined-native-simple">What Material is the extenstion roof made of</InputLabel>
                              <Select
                                label="What Material is the extenstion roof made of"
                                name="propertyControls.ex_roof_material"
                                native
                                onChange={handleInputChange}
                              >
                                <option value=""/>
                                <option value="Asbestos">Asbestos</option>
                                <option value="Asphalt">Asphalt</option>
                                <option value="Corrugated Iron">Corrugated Iron</option>
                                <option value="Felt on Timber">Felt on Timber</option>
                                <option value="Fibre Glasss">Fibre Glasss</option>
                                <option value="Glass">Glass</option>
                                <option value="Metal">Metal</option>
                                <option value="Plastic">Plastic</option>
                                <option value="Shingle">Shingle</option>
                                <option value="Slates">Slates</option>
                                <option value="Stramit">Stramit</option>
                                <option value="Thatch Fibre">Thatch Fibre</option>
                                <option value="Thatch Reed">Thatch Reed</option>
                                <option value="Timber">Timber</option>
                                <option value="Turnerised">Turnerised</option>
                                <option value="Woodwork Construction">Woodwork Construction</option>
                                <option value="Not Listed">Not Listed</option>
                              </Select>
                            </FormControl>
                          </Col>
                        </Row>
                      </>
                      ):( '' )}
                    </Col>         
                    <Col sm={5}>
                      <h6 className="ynQuestion">Does the area have a history of Subsidence?</h6>
                      <Button name="propertyControls.subsidence" 
                        value="Yes" 
                        className={controls.subsidence.value === '' || controls.subsidence.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.subsidence', 'Yes')}
                        touched={controls.subsidence.touched}
                        valid={controls.subsidence.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                      </Button>
                      <Button name="propertyControls.subsidence" 
                        value="Yes" 
                        className={controls.subsidence.value === '' || controls.subsidence.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.subsidence', 'No')}
                        touched={controls.subsidence.touched}
                        valid={controls.subsidence.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                      </Button>
                      {(!controls.subsidence.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col>
                      <OverlayTrigger aria-labelledby="icon" placement="top"
                        overlay={
                          <Popover className="popoverSize">
                            <Popover.Title className="helpTextBox">Extension Types</Popover.Title>
                            <Popover.Content>
                              <Image src="/conserRoof.jpg" height="400" width="400" />
                            </Popover.Content>
                            <Popover.Title className="helpTextBox">Subsidence</Popover.Title>
                            <Popover.Content>
                              Subsidence is the downward movement of the site on which a building stands, where the soil beneath the building's foundations is unstable.
                            </Popover.Content>
                          </Popover>
                        }>
                          <FontAwesomeIcon className="helpButton helpButtonQuestions" icon={faQuestionCircle} />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <h6 className="ynQuestion">Is the property Occupied during the day?</h6>
                      <Button name="propertyControls.occupied" 
                        value="Yes" 
                        className={controls.occupied.value === '' || controls.occupied.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.occupied', 'Yes')}
                        touched={controls.occupied.touched}
                        valid={controls.occupied.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                      </Button>
                      <Button name="propertyControls.occupied" 
                        value="No" 
                        className={controls.occupied.value === '' || controls.occupied.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.occupied', 'No')}
                        touched={controls.occupied.touched}
                        valid={controls.occupied.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                      </Button>
                      {(!controls.occupied.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col sm={5}>
                      <h6 className="ynQuestion">Is there a history of Flooding in the area?</h6>
                      <Button name="propertyControls.flooding" 
                        value="Yes" 
                        className={controls.flooding.value === '' || controls.flooding.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.flooding', 'Yes')}
                        touched={controls.flooding.touched}
                        valid={controls.flooding.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                      </Button>
                      <Button name="propertyControls.flooding" 
                        value="No" 
                        className={controls.flooding.value === '' || controls.flooding.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.flooding', 'No')}
                        touched={controls.flooding.touched}
                        valid={controls.flooding.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                      </Button>
                      {(!controls.flooding.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col>
                      <OverlayTrigger aria-labelledby="icon" placement="top"
                        overlay={
                          <Popover >
                            <Popover.Title className="helpTextBox">Occupied during the day</Popover.Title>
                            <Popover.Content>
                              If the property is normally unoccupied during the day e.g. residents at work, this counts as unoccupied.
                            </Popover.Content>
                          </Popover>
                        }>
                            <FontAwesomeIcon className="helpButton helpButtonQuestions" icon={faQuestionCircle} />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <h6 className="ynQuestion">Are there any Smokers living on the property?</h6>
                      <Button name="propertyControls.smokers" 
                        value="Yes" 
                        className={controls.smokers.value === '' || controls.smokers.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.smokers', 'Yes')}
                        touched={controls.smokers.touched}
                        valid={controls.smokers.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                      </Button>
                      <Button name="propertyControls.smokers" 
                        value="No" 
                        className={controls.smokers.value === '' || controls.smokers.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.smokers', 'No')}
                        touched={controls.smokers.touched}
                        valid={controls.smokers.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                      </Button>
                      {(!controls.smokers.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
                      </FormHelperText>
                      : '' }
                    </Col>
                    <Col sm={5}>
                      <h6 className="ynQuestion">Does the area have a Neighbourhood Watch?</h6>
                      <Button name="propertyControls.neighbour" 
                        value="Yes" 
                        className={controls.neighbour.value === '' || controls.neighbour.value === 'No' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.neighbour', 'Yes')}
                        touched={controls.neighbour.touched}
                        valid={controls.neighbour.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes
                      </Button>
                      <Button name="propertyControls.neighbour" 
                        value="Yes" 
                        className={controls.neighbour.value === '' || controls.neighbour.value === 'Yes' ? "ynButton" : "ynButtonClicked"} 
                        onClick={e => this.handleButton('propertyControls.neighbour', 'No')}
                        touched={controls.neighbour.touched}
                        valid={controls.neighbour.valid}>
                        <FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No
                      </Button>
                      {(!controls.neighbour.valid) ?
                      <FormHelperText className="validationHelpText">
                        Please select an option
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
              </Card.Body>
            </Card>
          </Form>
        </Container>
      </>
    );
  }
}


export default Property;
