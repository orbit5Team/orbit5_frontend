import React,{ useRef } from 'react'
import { Link } from "react-router-dom"

import { Styles } from "./Sidebar.styles"

const Sidebar = () => {
    const sidebarOverlayRef = useRef();
    const sidebarBodyRef = useRef();

    const handleSidebarBtn = (e) => {
        if(!!!sidebarOverlayRef.current && !!!sidebarBodyRef.current) return;
        e.preventDefault();
        sidebarOverlayRef.current.classList.add("visible");
        sidebarBodyRef.current.classList.add("opened");
    }

    const handleSidebarOverlay = (e) => {
        if(!!!sidebarOverlayRef.current && !!!sidebarBodyRef.current) return;
        e.preventDefault();
        sidebarOverlayRef.current.classList.remove("visible");
        sidebarBodyRef.current.classList.remove("opened");
    }

    const handleSidebarExit = (e) => {
        if(!!!sidebarOverlayRef.current && !!!sidebarBodyRef.current) return;
        e.preventDefault();
        sidebarOverlayRef.current.classList.remove("visible");
        sidebarBodyRef.current.classList.remove("opened");
    }

    return (
        <Styles>
            <div className="nav-link nav-sidebar" id="sidebar-btn" onClick={handleSidebarBtn}>
                <i className="las la-bars"></i>
            </div>

            <div className="sidebar" id="sidebar-body" ref={sidebarBodyRef}>
                <div className="side-logo d-flex justify-content-between">
                    <div><Link to="/"><img src="" alt="Logo" /></Link></div>
                    <div><div id="close-sidebar" onClick={handleSidebarExit}><i className="las la-times"></i></div></div>
                </div>
                <div className="side-content">
                    <h5>About Us</h5>
                    <p>Lorem ipsum dolor sit amet, consecte adipisicing elit. Mollitia modi, nostru rem sapiente. Excepturi
                        molestiae soluta quisquam officiis iure sunt.</p>
                </div>
                <div className="side-post">
                    <h5>Recent Post</h5>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src="" alt="Post 1" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2020</span>
                        </div>
                    </div>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src="" alt="Post 2" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2020</span>
                        </div>
                    </div>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src="" alt="Post 2" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2020</span>
                        </div>
                    </div>
                </div>
                <div className="side-gallery">
                    <h5>Gallery</h5>
                    <img src="" alt="Gallery Image 1" />
                    <img src="" alt="Gallery Image 2" />
                    <img src="" alt="Gallery Image 3" />
                    <img src="" alt="Gallery Image 4" />
                    <img src="" alt="Gallery Image 5" />
                    <img src="" alt="Gallery Image 6" />
                </div>
                <div className="side-contact">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <li><i className="las la-map-marker"></i>795 South Park Avenue, New York, NY USA 94107</li>
                        <li><i className="las la-phone"></i>+1 (396) 486 4709</li>
                        <li><i className="las la-envelope"></i>enquery@edulyb.com</li>
                    </ul>
                </div>
                <div className="side-social">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href="/"><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="/"><i className="fab fa-google"></i></a></li>
                        <li className="list-inline-item"><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                        <li className="list-inline-item"><a href="/"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-overlay" id="sidebar-overlay" ref={sidebarOverlayRef} onClick={handleSidebarOverlay}></div>
        </Styles>
    )
}

export default Sidebar