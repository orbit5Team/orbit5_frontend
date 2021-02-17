import styled from "styled-components";
import { colors } from "../../../colors";

export const Styles = styled.div`
    .top-bar {
        background: ${colors.purple_li_gradient1};
        .bar-left {
            height: 100%;
            ul {
                margin: 0;
                height: 100%;
                li {
                    font-size  : 13px;
                    color      : ${colors.white};
                    border-left: 1px solid ${colors.white};
                    padding    : 10px 15px;
                    margin     : 0;
                    display    : inline-block;
                    height: 100%;

                    a {
                        font-size: 13px;
                        color    : ${colors.white};

                        &:hover {
                            color: ${colors.main_yellow};
                            text-decoration: none;
                        }
                    }

                    i {
                        font-size     : 20px;
                        color         : ${colors.main_yellow};
                        vertical-align: bottom;
                        margin-right  : 5px;
                    }

                    &:last-child {
                        border-right: 1px solid ${colors.white};
                    }

                    @media(max-width: 991px) {
                        border : none;
                        padding: 10px 0px;
                        &:last-child {
                            display : none;
                        }
                    }
                }
            }
        }

        .bar-right {
            ul {
                margin: 0;
            }
            ul.bar-social {
                border-right: 1px solid ${colors.white};
                border-left : 1px solid ${colors.white};
                padding     : 10px 15px;

                li {
                    a {
                        font-size   : 14px;
                        color       : ${colors.main_yellow};
                        margin-right: 10px;

                        &:hover {
                            color: ${colors.white};
                        }
                    }

                    &:last-child {
                        a {
                            margin-right: 0;
                        }
                    }
                }

                @media(max-width: 991px) {
                    display : none;
                }
            }

            /* ul.bar-lang {
                border-right: 1px solid ${colors.border2};
                padding     : 10px 15px;

                li {
                    .dropdown {
                        a.dropdown-toggle {
                            font-size: 13px;
                            color    : ${colors.light_grey};

                            img {
                                margin-right: 5px;
                                max-width   : 21px;
                            }

                            i {
                                font-size  : 12px;
                                margin-left: 3px;
                            }

                            &::after {
                                display: none;
                            }

                            &:hover {
                                cursor: pointer;
                                color : ${colors.main_yellow};
                            }
                        }

                        ul.dropdown-menu {
                            padding: 0;
                            margin : 0;
                            border : none;
                            background: ${colors.white};
                            border-radius: 5px;
                            top       : 68% !important;
                            left      : -16px !important;
                            box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

                            li {
                                display      : block;
                                background: transparent;
                                border-bottom: 1px solid ${colors.border1};
                                padding      : 7px 15px;
                                color        : ${colors.text2};
                                cursor       : pointer;
                                overflow    : hidden;

                                img {
                                    max-width   : 21px;
                                    margin-right: 5px;
                                }

                                &:hover {
                                    color      : ${colors.dark_blue};
                                    font-weight: 500;
                                }

                                &:last-child {
                                    border-bottom: none;
                                }
                            }
                        }
                    }
                }

                @media(max-width: 991px) {
                    border-right : none;
                    padding: 10px 0px;
                }
            } */

            ul.bar-login {
                li {
                    border-right: 1px solid ${colors.white};
                    padding     : 10px 15px;
                    margin      : 0;
                    display     : inline-block;

                    a {
                        font-size: 13px;
                        color    : ${colors.white};

                        i {
                            font-size     : 20px;
                            color         : ${colors.main_yellow};
                            vertical-align: bottom;
                            margin-right  : 5px;
                        }

                        &:hover {
                            color: ${colors.main_yellow};
                            text-decoration: none;
                        }
                    }

                    @media(max-width: 991px) {
                        border-right : none;
                        padding-right: 0;
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }

    .logo-area {
        padding: 22px 0;
        .logo {
            a {
                img {
                    @media(max-width: 991px) {
                        max-width : 100%;
                        margin-top: 4px;
                    }
                }
            }
        }

        .logo-contact-box {
            .emcontact-box {
                margin-right: 45px;

                .box-icon {
                    background  : ${colors.main_yellow};
                    height      : 21px;
                    text-align  : center;
                    margin-top  : 10px;
                    margin-right: 12px;
                    position    : relative;

                    i {
                        position  : relative;
                        z-index   : 111;
                        font-size : 22px;
                        color     : ${colors.white};
                        width     : 36px;
                        display   : inline-block;
                        margin-top: -5px;
                    }

                    &:before {
                        content            : "";
                        position           : absolute;
                        border-width       : 10px 18px;
                        border-style       : solid;
                        border-top-color   : transparent;
                        border-right-color : transparent;
                        border-bottom-color: ${colors.main_yellow};
                        border-left-color  : transparent;
                        top                : -20px;
                        left               : 0;
                        z-index            : 1;
                    }

                    &:after {
                        content            : "";
                        position           : absolute;
                        border-width       : 10px 18px;
                        border-style       : solid;
                        border-top-color   : ${colors.main_yellow};
                        border-right-color : transparent;
                        border-bottom-color: transparent;
                        border-left-color  : transparent;
                        bottom             : -20px;
                        left               : 0;
                        z-index            : 1;
                    }

                    @media(max-width: 991px) {
                        display : none;
                    }
                }

                .box-content {
                    p {
                        font-size    : 13px;
                        color        : ${colors.text3};
                        margin-bottom: -2px;
                    }

                    span {
                        font-size  : 17px;
                        color      : ${colors.dark_blue};
                        font-weight: 600;
                    }
                }

                @media(max-width: 991px) {
                    margin-right : 20px;
                }
            }

            .apply-btn {
                margin-left: 40px;

                a {
                    font-size     : 13px;
                    color         : ${colors.white};
                    background    : ${colors.purple_li_gradient1};
                    display       : inline-block;
                    width         : 110px;
                    height        : 40px;
                    text-align    : center;
                    text-transform: uppercase;
                    font-weight   : 600;
                    padding       : 11px;
                    border-radius : 0 5px 5px 0;
                    position: relative;

                    i {
                        position : absolute;
                        font-size: 20px;
                        left     : -40px;
                        top      : 0;
                        padding  : 10px;
                        width    : 40px;
                        height   : 100%;
                        border-radius : 5px 0 0 5px;
                        background-color: ${colors.bright_purple};
                    }

                    &:hover {
                        background: ${colors.purple_li_gradient2};
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }

    .main-menu {
        .main-menu-box {
            position: relative;
            z-index : 111;

            .menu-box {
                position  : absolute;
                width     : 100%;
                top       : 20px;
                left      : 0;
                padding   : 0 30px;
                background: ${colors.purple_li_gradient1};
                border-radius : 5px;

                ul.nav.menu-nav {
                    li.nav-item {
                        position: relative;

                        a.nav-link {
                            font-size     : 14px;
                            color         : ${colors.white};
                            text-transform: uppercase;
                            font-weight   : 600;
                            padding       : 18px 25px 15px 0;

                            i {
                                font-size: 12px;
                            }

                            &:after {
                                content: none;
                            }

                            &:hover {
                                color: ${colors.main_yellow};
                            }

                            @media(max-width: 991px) {
                                padding-right : 10px;
                            }
                        }

                        ul.dropdown {
                            position  : absolute;
                            left      : -10px;
                            top       : 100%;
                            min-width : 190px;
                            background: #fff;
                            text-align: left;
                            padding   : 0;
                            border-radius : 0 0 5px 5px;
                            transition : 0.2s ease;
                            opacity         : 0;
                            transform       : scaleY(0);
                            visibility      : hidden;
                            z-index         : 999;
                            transform-origin: center top 0;

                            li.nav-item {
                                position: relative;

                                &:hover{
                                    background: ${colors.purple_li_gradient2};
                                }

                                &:hover:nth-last-child(1){
                                    border-radius : 0 0 5px 5px;
                                }

                                a.nav-link {
                                    font-size     : 13px;
                                    color         : ${colors.dark_blue};
                                    padding       : 10px 20px;
                                    text-transform: capitalize;
                                    margin-right  : 0;
                                    font-weight   : 600;
                                    border-bottom : 1px solid ${colors.border1};

                                    &:hover {
                                        color: ${colors.main_yellow};

                                        i {
                                            color: #fff;
                                        }
                                    }

                                    i {
                                        float     : right;
                                        margin-top: 4px;
                                    }
                                }

                                &:last-child {
                                    margin-left: 0;

                                    a.nav-link {
                                        border-bottom: none;
                                    }
                                }

                                ul.dropdown2 {
                                    position  : absolute;
                                    top       : 0;
                                    left      : 100%;
                                    min-width : 180px;
                                    background: #fff;
                                    border    : 1px solid ${colors.border1};
                                    transition : 0.2s ease;
                                    opacity         : 0;
                                    transform       : scaleY(0);
                                    visibility      : hidden;
                                    z-index         : 999;
                                    transform-origin: center top 0;
                                }

                                &:hover {
                                    ul.dropdown2 {
                                        opacity   : 1;
                                        transform : scaleY(1);
                                        visibility: visible;
                                    }
                                }
                            }
                        }

                        &:hover {
                            ul.dropdown {
                                opacity   : 1;
                                transform : scaleY(1);
                                visibility: visible;
                            }
                        }
                    }
                }

                /* ul.search-cart-bar {
                    li.search-box {
                        i.close-btn {
                            position : absolute;
                            top      : 25px;
                            right    : -12px;
                            font-size: 26px;
                            color    : ${colors.main_yellow};
                            cursor   : pointer;
                        }
                    }

                    li.cart-box {
                        a.nav-cart {
                            padding: 18px 0 0 10px;

                            i {
                                font-size: 20px;
                                color    : ${colors.border1};
                                line-height: 17px;
                            }
                        }
                    }
                } */

                @media(max-width: 991px) {
                    padding: 0 20px;
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }
`;