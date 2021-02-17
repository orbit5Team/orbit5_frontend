import styled from "styled-components";
import { colors } from "../../../../colors";

export const Styles = styled.div`
    .sticky-menu {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 11;
        animation: 300ms ease-in-out 0s normal none 1 fadeInDown;
        background: ${colors.white};
        height: 75px;
        padding-top: 18px;
        box-shadow: 0 0 20px -10px #222222;

        .logo {
            a {
                img {
                    @media(max-width: 1199px) {
                        max-width : 100%;
                    }
                }
            }
        }

        div.menu-box {
            ul.nav.menu-nav {
                li.nav-item {
                    position: relative;

                    a.nav-link {
                        font-size     : 14px;
                        color         : ${colors.dark_blue};
                        text-transform: uppercase;
                        font-weight   : 600;
                        padding       : 10px 10px 20px;

                        i {
                            font-size: 12px;
                        }

                        &:after {
                            content: none;
                        }

                        &:hover {
                            color: ${colors.main_yellow};
                        }

                        @media(max-width: 1199px) {
                            padding-left : 0;
                            padding-right: 8px;
                        }

                        @media(max-width: 991px) {
                            padding-right: 6px;
                        }
                    }

                    ul.dropdown {
                        position  : absolute;
                        left      : 0;
                        top       : 100%;
                        min-width : 190px;
                        background: #fff;
                        /* border    : 1px solid ${colors.border1}; */
                        text-align: left;
                        padding   : 0;
                        border-radius : 5px;
                        transition : 0.2s ease;
                        opacity         : 0;
                        transform       : scaleY(0);
                        visibility      : hidden;
                        z-index         : 999;
                        transform-origin: center top 0;

                        li.nav-item {
                            position: relative;

                            &:hover{
                                background: ${colors.purple_li_gradient1}
                            }

                            &:hover:nth-child(1), &:hover:nth-child(3){
                                border-radius : 5px;
                            }

                            a.nav-link {
                                font-size     : 13px;
                                color         : ${colors.dark_blue};
                                padding       : 10px 20px;
                                text-transform: capitalize;
                                font-weight   : 600;
                                margin-right  : 0;
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

            .apply-btn {
                margin-left: 70px;
                margin-top : -1px;

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

                @media(max-width: 1199px) {
                    margin-left: 45px;
                }

                @media(max-width: 991px) {
                    display : none;
                }
            }
        }
        @media(max-width: 767px) {
            display: none;
        }
    }
    .sticky-menu.sticky {
        display: block;
        
        @media(max-width: 767px) {
            display: none;
        }
    }
`;