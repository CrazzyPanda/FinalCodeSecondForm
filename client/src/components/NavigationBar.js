import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/'
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap/'
import Image from 'react-bootstrap/Image'


class NavigationBar extends Component{



    render(){
        return (

            <Container>
                <Row>
                    <Col xs={4} className="campionImage">
                        <Image src="/campionLogo.PNG"/>
                    </Col>

                    <Col>
                        <Row>
                            <Col>
                                <Navbar className="justify-content-end">
                                    <Nav.Item className="mobile">
                                        <Image src="/mobile.PNG"/>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navPhone mobileNumber">1890 300 301</Nav.Link>
                                    </Nav.Item>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search..." className="navSearch form-control mr-3 w-100"/>
                                    </Form>
                                </Navbar>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Car</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Van</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Mortgages</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Life & Pensions</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Health Insurance</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Bus & Coach</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Farm</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Motor Traders</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Useful Documents</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Renew Online</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="navLinkText">Claims</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col className="navMargin">
                        <Image className="miniHouse" src="/littleHouse.PNG"/>
                        <p className="formMiniTitle">Home Insurance Quote</p>
                        <h1 className="formTitle">Home Insurance Quote</h1>
                        <div className="border border-secondary border-top-0 border-left-0 border-right-0 pb-2">
                            <Row>
                                <Col>
                                    <Button className="navButtons"><Image className="navButtonPic" src="/newQuotePic.PNG"/>New Quote</Button>
                                    <Button className="navButtons ml-1"><Image className="navButtonPic" src="/retrieveQuotePic.PNG"/>Retrieve Quote</Button>
                                </Col>
                                <Col>
                                    <Button variant=" float-right" className="navButtons"><Image className="navButtonPic" src="/phonePic.PNG"/>Call Me</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default NavigationBar;
