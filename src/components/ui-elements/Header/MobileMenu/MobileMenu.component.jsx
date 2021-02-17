import React,{ useRef } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { Styles } from "./MobileMenu.styles"

const MobileMenu = () => {
    const sidebarOverlayRef = useRef();
    const menuButtonRef = useRef();
    const sidebarBodyRef = useRef();

    const handleMenuButton = (e) => {
        if(!!!menuButtonRef.current) return;
        e.preventDefault()
        menuButtonRef.current.classList.toggle("active");
        const content = menuButtonRef.current.nextElementSibling;

        if(menuButtonRef.current.classList.contains("active")) {
            content.className = "mb-menu-content show";
            content.style.maxHeight = content.scrollHeight + "px";
        }else {
            content.className = 'mb-menu-content';
            content.style.maxHeight = "0";
        }
    }

    const handleSidebarBtn = (e) => {
        if(!!!sidebarOverlayRef.current && !!!sidebarBodyRef.current) return;
        e.preventDefault();
        sidebarOverlayRef.current.classList.toggle("visible");
        sidebarOverlayRef.current.classList.toggle("opened");
        sidebarBodyRef.current.style.left = `0px`;
    }

    const handleSidebarOverlay = (e) => {
        if(!!!sidebarOverlayRef.current) return;
        e.preventDefault();
        sidebarOverlayRef.current.classList.remove("visible");
        sidebarOverlayRef.current.classList.remove("opened");
    }

    const handleSidebarExit = (e) => {
        if(!!!sidebarOverlayRef.current && !!!sidebarOverlayRef) return;
        e.preventDefault();
        sidebarOverlayRef.current.classList.remove("visible");
        sidebarOverlayRef.current.classList.remove("opened");
        sidebarBodyRef.current.style.left = `-350px`;
    }

    return (
        <Styles>
             {/* Mobile Menu Starts Here */}
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i>+1 (396) 486 4709</p>
                                </div>
                                <div className="topbar-item">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><Link to="/login">Log In</Link></li>
                                        <li className="list-inline-item">/</li>
                                        <li className="list-inline-item"><Link to="/registration">Register</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-logo-area d-flex justify-content-between">
                                <div className="mb-logo-box d-flex">
                                    <div className="hm-button">
                                        <a href="/" id="mb-sidebar-btn" onClick={handleSidebarBtn}>
                                            <i className="las la-bars"></i>
                                        </a>
                                    </div>
                                    <div className="mb-logo">
                                        <Link to="/"><img src="" alt="Logo" /></Link>
                                    </div>
                                </div>
                                <div className="mb-search-box">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search Here" />
                                        <button type="submit"><i className="las la-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Mobile Menu Ends Here */}

            {/* Mobile Menu Sidebar Starts Here*/}
                <section className="mb-sidebar" id="mb-sidebar-body" ref={sidebarBodyRef}>
                    <div className="mb-sidebar-heading d-flex justify-content-between">
                        <div><h5>Menu</h5></div>
                        <div><div href="/" id="close-mb-sidebar" onClick={handleSidebarExit}><i className="las la-times"></i></div></div>
                    </div>
                    <div className="mb-sidebar-menu">
                            <div className="mb-menu-item">
                                <button className="mb-menu-button" >
                                    <p>Home</p>
                                </button>
                            </div>
                            <div className="mb-menu-item">
                                <button className="mb-menu-button" >
                                    <p>Courses</p>
                                </button>
                            </div>
                            <div className="mb-menu-item">
                                <button className="mb-menu-button" >
                                    <p>Instructor</p>
                                </button>
                            </div>
                        <div className="mb-menu-item">
                            <button className="mb-menu-button" ref={menuButtonRef} onClick={handleMenuButton}>
                                <p>Services <i className="las la-plus"></i></p>
                            </button>
                            <div className="mb-menu-content">
                                <ul className="list-unstyled">
                                    <li><Link to="/services/onetoonecoaching">One-To-One Coaching</Link></li>
                                    <li><Link to="/">Service 2</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mb-sidebar-overlay" id="mb-sidebar-overlay" ref={sidebarOverlayRef} onClick={handleSidebarOverlay}></div>
            {/* Mobile Menu Sidebar Ends Here*/}
        </Styles>
    )
}

export default MobileMenu