import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const LogoArea = () => {
    return (
        <section className="logo-area">
            <Container>
                <Row>
                    <Col md="3">
                        <div className="logo">
                            <Link to="/"><img src="" alt="Logo Image" /></Link>
                        </div>
                    </Col>
                    <Col md="9">
                        <div className="logo-contact-box d-flex justify-content-end">
                            <div className="emcontact-box d-flex">
                                <div className="box-icon">
                                    <i className="flaticon-phone-call"></i>
                                </div>
                                <div className="box-content">
                                    <p>Call Us Now</p>
                                    <span>(908) 875 7678</span>
                                </div>
                            </div>
                            <div className="emcontact-box d-flex">
                                <div className="box-icon">
                                    <i className="flaticon-envelope"></i>
                                </div>
                                <div className="box-content">
                                    <p>Enquery Us</p>
                                    <span>enquery@edulyn.com</span>
                                </div>
                            </div>
                            <div className="apply-btn">
                                    <Link to="/registration"><i className="las la-clipboard-list"></i>Apply Now</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LogoArea