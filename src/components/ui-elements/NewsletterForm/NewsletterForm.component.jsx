import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import { Styles } from "./NewsletterForm.styles"

const NewsletterForm = () => {
    return (
        <Styles>
            <section className="newsletter-form-area">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="newsletter-container">
                                <div className="newsletter-box">
                                    <div className="sec-title text-center">
                                        <h4>Get The Latest News & Updates On Your Box</h4>
                                    </div>
                                    <form id="form2" className="form">
                                        <Row>
                                            <Col md="4">
                                                <p className="form-control">
                                                    <input type="text" placeholder="Enter your Name" id="name2" required />
                                                    <span className="input-msg2"></span>
                                                </p>
                                            </Col>
                                            <Col md="4">
                                                <p className="form-control">
                                                    <input type="email" placeholder="Enter your Email" id="email2" required />
                                                    <span className="input-msg2"></span>
                                                </p>
                                            </Col>
                                            <Col md="4">
                                                <button><i className="las la-envelope"></i>Subscribe Now</button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default NewsletterForm