import React,{ useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import { Styles } from "./IconBox.styles"

const IconBox = () => {
    const [boxes, setBoxes] = useState(
        [
            {
                "id": "1",
                "uniqClass": "box-icon box1",
                "boxIcon": "flaticon-thumbs-like",
                "title": "Popular Courses",
                "subTitle": "Lorem ipsum dolor sit, amet consectetur elit."
            },
            {
                "id": "2",
                "uniqClass": "box-icon box2",
                "boxIcon": "flaticon-reading",
                "title": "Modern Library",
                "subTitle": "Lorem ipsum dolor sit, amet consectetur elit."
            },
            {
                "id": "3",
                "uniqClass": "box-icon box3",
                "boxIcon": "flaticon-teacher",
                "title": "Qualified Teacher",
                "subTitle": "Lorem ipsum dolor sit, amet consectetur elit."
            }
        ]
    )

    return (
        <Styles>
            <section className="icon-box-area">
                <Container>
                    <Row>
                    {
                        boxes.map(box => (
                            <Col md="4" key={box.id}>
                                <div className="full-icon-box">
                                    <div className="icon-box d-flex">
                                        <div className={box.uniqClass}>
                                            <i className={box.boxIcon}></i>
                                        </div>
                                        <div className="box-title">
                                            <h6>{box.title}</h6>
                                            <p>{box.subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default IconBox