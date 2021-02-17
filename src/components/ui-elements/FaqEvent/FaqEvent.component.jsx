import React from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap';
import datas from "./FaqEvent.data.json"

import { Styles } from "./FaqEvent.styles"

const FaqEvent = () => {
    return (
        <Styles>
            <section className="event-faq-area">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="event-area">
                                <Row>
                                    <Col md="12">
                                        <div className="sec-title">
                                            <h4>Upcoming <span>Events</span></h4>
                                        </div>
                                    </Col>
                                    <Col md="12">
                                    {
                                        datas.eventDataList.map(eventData => (
                                            <div className="event-box d-flex" key={eventData.id}>
                                                <div className="event-date text-center">
                                                    <p>{eventData.eventDate}</p>
                                                </div>
                                                <div className="event-details">
                                                    <h6><Link to={eventData.eventLink}>{eventData.eventTitle}</Link></h6>
                                                    <ul className="list-unstyled list-inline">
                                                        <li className="list-inline-item"><i className="las la-clock"></i>{eventData.eventTime}</li>
                                                        <li className="list-inline-item"><i className="las la-map-marker"></i>{eventData.eventLocation}</li>
                                                    </ul>
                                                    <p>{eventData.eventdesc}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md="6">
                            <div className="faq-area">
                                <div className="sec-title">
                                    <h4>Frequently Ask <span>Question</span></h4>
                                </div>
                                <div className="faq-box">
                                {
                                    datas.faqDataList.map(faqData => (
                                        <div className="faq-item" key={faqData.id}>
                                            <button className="accordion-button active">
                                                <div className="accordion-icon"><i className="las la-plus"></i></div>
                                                <p>{faqData.faqTitle}</p>
                                            </button>
                                            <div className="accordion-content show">
                                                <p>{faqData.faqDesc}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default FaqEvent