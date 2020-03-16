import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/'
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap/'
import Image from 'react-bootstrap/Image'

class Footer extends Component{

    render(){
        return (

          <>
            <div className="footerLinks">
                <Container>
                    <Row>
                        <Col>
                            <h4 className="footerTitles">Our Products</h4>
                            <Nav className="flex-column">
                                <Nav.Link className="footerTextLinks">Car Insurance</Nav.Link>
                                <Nav.Link className="footerTextLinks">Home Insurance</Nav.Link>
                                <Nav.Link className="footerTextLinks">Van Insurance</Nav.Link>
                                <Nav.Link className="footerTextLinks">Life & Pensions</Nav.Link>
                                <Nav.Link className="footerTextLinks">Farm Insurance</Nav.Link>
                                <Nav.Link className="footerTextLinks">Business Insurance</Nav.Link>
                            </Nav>
                        </Col>

                        <Col>
                            <h4 className="footerTitles">News</h4>
                            <Nav className="flex-column">
                                <Nav.Link className="footerTextLinks">50 Plus Expo Tickets</Nav.Link>
                                <Nav.Link className="footerTextLinks">Win two tickets to Ireland...</Nav.Link>
                                <Nav.Link className="footerTextLinks">Robert Coll, Health...</Nav.Link>
                                <Nav.Link className="footerTextLinks">You're Invited...</Nav.Link>
                                <Nav.Link className="footerTextLinks">You could save €1,000's...</Nav.Link>
                                <Nav.Link className="footerTextLinks">Campion Dublin Office...</Nav.Link>
                            </Nav>
                        </Col>

                        <Col>
                            <h4 className="footerTitles">About Us</h4>
                            <Nav className="flex-column">
                                <Nav.Link className="footerTextLinks">About us</Nav.Link>
                                <Nav.Link className="footerTextLinks">Our Office Locations</Nav.Link>
                                <Nav.Link className="footerTextLinks">Testimonials</Nav.Link>
                                <Nav.Link className="footerTextLinks">Careers at Campion Insurance</Nav.Link>
                                <Nav.Link className="footerTextLinks">Terms of Business</Nav.Link>
                            </Nav>
                        </Col>

                      <Col>
                        <Row>
                            <Col>
                                <h4 className="footerTitles">Newsletter Sign Up</h4>
                                <form>
                                    <Form inline>
                                        <FormControl type="text" className="footerNewsLetter form-control mr-3 w-100" placeholder="Email Address"/><br/>
                                        <Button variant="secondary" className="footerNewsLetterButton footerNewsLetter">GO</Button>
                                    </Form>
                                </form>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4 className="footerTitles">Connect with Us</h4>
                                <Image src="/socialMedia.PNG"/>
                            </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                    </Row>
                </Container>
            </div>
            <div className="footerTermsCon">
                <Container>
                    <Row>
                        <Col>
                            <p className="footerTermsCenter">Campion Insurances Ltd trading as Campion Insurance, Bestquote.ie, ISME Insurance Services is regulated by the Central Bank of Ireland.</p>
                            <div className="footerTermsSmall">
                                <p style={{ float: "left"}}>Terms of Business | Privacy Policy</p>
                                <p style={{ float: "right"}}>OSD.ie © Digital Agency Ireland 2020 | Content © Campion Insurance 2020</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

          </>
        );
    }

}

export default Footer;
