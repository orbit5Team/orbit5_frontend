import React,{ useRef } from 'react'

import { Styles } from "./Search.styles"

const Search = () => {
    const searchWrapRef = useRef();

    const handleSearchTrigger = (e) => {
        if(!!!searchWrapRef.current) return;
        searchWrapRef.current.classList.add("active");
    }

    const handleSearchOverlay = (e) => {
        if(!!!searchWrapRef.current) return;
        e.preventDefault();
        searchWrapRef.current.classList.remove("active");
    }

    const handleSearchExit = (e) => {
        if(!!!searchWrapRef.current) return;
        e.preventDefault();
        searchWrapRef.current.classList.remove("active");
    }

    return (
       <Styles>
        {/* Search Box */}
        <div href="/" className="nav-link nav-search" id="search-trigger" onClick={handleSearchTrigger}>
            <i className="las la-search"></i>
        </div>
        {/* Fullscreen search */}
        <div className="search-wrap" ref={searchWrapRef}>
            <div className="search-overlay custom-overlay" onClick={handleSearchOverlay}></div>
            <div className="search-inner">
                <form method="get" className="search-form">
                    <input type="search" name="search" placeholder="Type and hit enter...." />
                    <i className="las la-times close-btn" onClick={handleSearchExit}></i>
                </form>
            </div>
        </div>
       </Styles>
    )
}

export default Search