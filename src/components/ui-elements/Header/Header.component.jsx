import React from 'react'
import { useLocation } from "react-router-dom"

import { Styles } from "./Header.styles"
import TopBar from "./TopBar/TopBar.component"
import LogoArea from "./LogoArea/LogoArea.component"
import NavBar from "./NavBar/NavBar.component"
import StickyMenu from "./StickyMenu/StickyMenu.component"
import MobileMenu from "./MobileMenu/MobileMenu.component"

const Header = () => {
    const location = useLocation();
    return (
        <Styles>
            {/*Top Bar Starts here */}
            {
                location.pathname === "/" ? <TopBar/> : null
            }
            {/*Top Bar Ends here */}

            {/* Logo Area Middle Bar Starts here */}
            {location.pathname === "/" ? <LogoArea/> : null}
            {/* Logo Area Middle Bar Starts here */}

            {/* NavBar Starts here */}
            {location.pathname === "/" ?  <NavBar/> : null}
            {/* NavBar Starts here */}

            {/* Sticky Menu Starts here*/}
                <StickyMenu/>
            {/* Sticky Menu Ends here*/}

            {/* Mobile Menu Starts Here*/}
                <MobileMenu/>
            {/* Mobile Menu Ends Here*/}
        </Styles>
    )
}

export default Header