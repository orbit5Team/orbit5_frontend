import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import datas from "./HomeBlog.data.json";
import { Styles } from "./HomeBlog.styles"

const HomeBlog = () => {
    return (
        <Styles>
            <section className="home-blog-area">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                <h4>{datas.secTitle}</h4>
                            </div>
                        </Col>
                        {
                            datas.dataList.map(data => (
                                <Col md="6" key={data.id}>
                                    <div className="blog-post">
                                        <Row>
                                            <Col lg="6" md="12">
                                                <div className="blog-img">
                                                    <Link to={ data.postLink}><img src={`/assets/images/${data.postImg}`} alt="Blog Post" className="img-fluid" /></Link>
                                                </div>
                                            </Col>
                                            <Col lg="6" md="12">
                                                <div className="blog-content">
                                                    <div className="content-box">
                                                        <div className="top-content d-flex">
                                                            <div className="blog-date text-center">
                                                                <p>{data.postDate}</p>
                                                            </div>
                                                            <div className="blog-title">
                                                                <h6><Link to={data.postLink}>{data.postTitle}</Link></h6>
                                                            </div>
                                                        </div>
                                                        <div className="blog-desk">
                                                            <p>{data.postExcerpt}</p>
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><Link to={data.authorLink}><i className="las la-user"></i> Jhon</Link></li>
                                                                <li className="list-inline-item"><Link to={data.commentLink}><i className="las la-comment"></i> 19</Link></li>
                                                                <li className="list-inline-item"><Link to={data.likeLink}><i className="las la-thumbs-up"></i> 37</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
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

export default HomeBlog