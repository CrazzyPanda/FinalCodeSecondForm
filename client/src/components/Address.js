import React from 'react';
import axios from 'axios';
import Postcoder from "react-address-lookup";
import {Container, Row, Col, Card, Button, Form, Alert} from 'react-bootstrap/'
import {TextField, FormHelperText} from '@material-ui/core/';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Home} from '@material-ui/icons/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'


class Address extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            address: '',
            address_results: '',
            alter_address: '',
            address_line_1: '',
            address_line_2: '',
            town: '',
            county: '',
            term: '',
            apiAddress: [],
            noResults: false,
            isClicked: false,
            isHere: false,
            error: false
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddressClick = this.handleAddressClick.bind(this);
    }

    //handle input for the api address bar
    handleInput(event) {
        this.setState({term: event.target.value});
    }

    handleAddressClick() {
       this.setState({isClicked: true});
    }

    handleAlert() {
        this.setState({error: true});
    }

    handleAddressSelect() {
        this.setState({isHere: true});
    }

    //submit button for the api address bar with the get request for the api
    // handleSubmit(event) {
    //
    //     let apiKey = 'MUDVnQK4okGtx8YEObWI9Q24362';
    //     let postcode = this.state.term.replace(/\s/g, ''); // remove spaces from postcode
    //     event.preventDefault();
    //     axios.get(`https://api.getAddress.io/find/${postcode}?api-key=${apiKey}`)
    //         .then(response => {
    //             console.log(response);
    //             this.setState({
    //                 term: response.data
    //             })
    //         })
    //         .then(data => {
    //
    //             if(!data.ok){
    //                 this.setState({
    //                     noResults: true,
    //                     apiAddress: []
    //                 })
    //             }
    //             else {
    //                 this.setState({
    //                     noResults: false,
    //                     apiAddress: data
    //                 })
    //             }
    //         })
    //         .catch(e => console.log('error', e));
    // }

    handleSubmit(event){
        event.preventDefault();

        let apiKey = 'MUDVnQK4okGtx8YEObWI9Q24362';
        let postcode = this.state.term.replace(/\s/g, ''); // remove spaces from postcode

        console.log(postcode)

        axios.get(`https://api.getAddress.io/find/${postcode}?api-key=${apiKey}`)
        .then(res => {
            console.log("yes result");
            this.setState({
                noResults: false,
                isHere: true,
                apiAddress: res.data.addresses
            });
            console.log(this.state.apiAddress)
        })
        .catch(err => {
            console.log("no result", err);
            this.setState({
                noResults: true,
                isHere: false,
                apiAddress: []
            });
        });
    }


    handleInputChange = e => {
        const target = e.target;
        const value =  target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(`Input name ${name}. Input value ${value}.`);
        
        if(name.includes('.')) {
            // 'address.postcode'
            var names = name.slice('.');
            var objName = names[0]; // 'address' this.state.address
            var obj = this.state[objName];
            var propertyName = names[1] // 'postcode'
            obj[propertyName] = value;
            this.setState({
                [objName]: obj
            });
            return;
        }

        this.setState({
            [name]: value
        });
    }


    // onSubmit = e => {
    //     e.preventDefault();

    //     const customer = {
    //         address: this.state.address,
    //         address_results: this.state.address_results,
    //         alter_address: this.state.alter_address,
    //         address_line_1: this.state.address_line_1,
    //         address_line_2: this.state.address_line_2,
    //         town: this.state.town,
    //         county: this.state.county
    //     }

    //     console.log(customer);

    //     axios.post('http://localhost:4000/customers', customer)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log("ERROR " + err));

    //     // window.location = '/';
    // }

    // logAddress = (addr) => {
    //     console.log(addr);
    // }
    // <Postcoder
    //     apiKey="PCW45-12345-12345-1234X"
    //     // addressSelectedCallback={logAddress} PCW45-12345-12345-1234X
    // />

    render(){
        const { onSubmit, handleInputChange, controls } = this.props;

        let returnAddress = this.state.apiAddress.map(
            (addressString, i) => {
                return <option value={addressString} key={i}>{addressString}</option>;
            }
        );
        const isClicked = this.state.isClicked;

        return(
            <>
                <Container>
                    <Form >
                        <Card >
                            <Card.Header className="cardHeaders">
                                <h4>Your Address</h4>
                            </Card.Header>
                            <Card.Body>
                            <Row>
                              <Col sm={10}>
                              <div className="cardContain">
                                <Row>
                                    <Col>
                                        <Form noValidate autoComplete="on" onSubmit={this.handleSubmit}>
                                            <TextField
                                                id="address" margin="normal" fullWidth label="Address" helperText="Search your postcode" variant="outlined" autoComplete="on"
                                                InputProps={{endAdornment:<InputAdornment position="end"><Home /></InputAdornment>}}
                                                name="addressFormControls.address"
                                                value={this.state.term}
                                                onChange={this.handleInput}
                                            />
                                            <Button className="searchButton" type="submit" varient="outline-primary">Search</Button>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {
                                          this.state.noResults &&
                                          <FormHelperText className="validationHelpText">
                                            Cannot find that address, please try again or enter your address manually below.
                                          </FormHelperText>
                                        }
                                        {
                                        this.state.isHere &&
                                        <FormControl margin="normal" fullWidth variant="outlined">
                                            <InputLabel htmlFor="outlined-native-simple">Address Results</InputLabel>
                                            <Select
                                                label="addressControls.address_results"
                                                name="addressControls.address_results"
                                                native
                                                onChange={handleInputChange}
                                            >
                                                {returnAddress}
                                            </Select>
                                        </FormControl>
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h6 className="ynQuestion">Do you want to enter an alternative address?</h6>
                                        <Button className="ynButton"><FontAwesomeIcon className="ynButtonIcon" icon={faCheck} />Yes</Button>
                                        <Button className="ynButtonClicked"><FontAwesomeIcon className="ynButtonIcon" icon={faTimes} />No</Button>
                                    </Col>
                                    <Col>
                                        <h6 className="ynQuestion">Can't find your address?</h6>
                                        <Button onClick={this.handleAddressClick} className="textButton" variant="outline-primary">Enter Address Manually</Button>
                                        <Row>

                                            <Col>
                                            {isClicked ? (
                                                <Row>
                                                    <Col>
                                                        <TextField
                                                            id="address_line_1" fullWidth margin="normal" label="Address Line 1" variant="outlined" autoComplete="on"
                                                            name="addressControls.address_line_1"
                                                            value={controls.address_line_1.value}
                                                            onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="address_line_2" fullWidth margin="normal" label="Address Line 2" helperText="*Optional" variant="outlined" autoComplete="on"
                                                            name="addressControls.address_line_2"
                                                            value={controls.address_line_2.value}
                                                            onChange={handleInputChange}
                                                        />
                                                    
                                                        <TextField
                                                            id="town" fullWidth label="Town" margin="normal" variant="outlined" autoComplete="on"
                                                            name="addressControls.town"
                                                            value={controls.town.value}
                                                            onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="county" fullWidth label="County" margin="normal" variant="outlined" autoComplete="on"
                                                            name="addressControls.county"
                                                            value={controls.county.value}
                                                            onChange={handleInputChange}
                                                        />
                                                    </Col>
                                                </Row>
                                              ) : (
                                                ''
                                              )}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Form.Group as={Row}>
                                    <Col>
                                        <Button className="continueButton">Continue</Button>
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



export default Address;

