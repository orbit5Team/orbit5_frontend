import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <section className="top-bar">
            <Container>
                <Row>
                    <Col lg="6" md="5">
                        <div className="bar-left">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><i className="las la-map-marker"></i>99 Vaughan Rd, Toronto, ON M6C 4A9</li>
                                <li className="list-inline-item"><Link to="/faq">Have Questions ?</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" md="5">
                        <div className="bar-right d-flex justify-content-end">
                            <ul className="list-unstyled list-inline bar-social">
                                <li className="list-inline-item"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                            <ul className="list-unstyled list-inline bar-login">
                                <li className="list-inline-item"><Link to="/login"><i className="las la-user"></i>Log In</Link></li>
                                <li className="list-inline-item"><Link to="/registration"><i className="las la-user-edit"></i>Register</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TopBar