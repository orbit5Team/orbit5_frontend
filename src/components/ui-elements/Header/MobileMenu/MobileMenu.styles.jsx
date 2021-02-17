import styled from "styled-components";
import { colors } from "../../../../colors";

export const Styles = styled.div`
.mobile-menu-area {
    background : ${colors.purple_li_gradient1};
    display: none;
    .mb-topbar {
        border-bottom: 1px solid ${colors.white};
        .topbar-item {
            p {
                font-size: 13px;
                color: ${colors.white};
                padding: 8px 0;
                margin: 0;
                i {
                    font-size: 16px;
                    color: ${colors.main_yellow};
                    vertical-align: text-top;
                    margin-right: 5px;
                }
            }
            ul {
                padding: 8px 0;
                margin: 0;
                li {
                    a {
                        font-size : 13px;
                        color : ${colors.white};
                        font-weight : 600;
                        text-transform : uppercase;
                        &:hover {
                            color : ${colors.main_yellow};
                            text-decoration: none;
                        }
                    }
                    &:nth-child(2) {
                        color : ${colors.white};
                    }
                }
            }
        }
    }

    .mb-logo-area {
        padding : 18px 0;
        .mb-logo-box {
            .hm-button {
                margin-top: 8px;
                margin-right: 35px;
                position: relative;
                &:before {
                    position: absolute;
                    content : "";
                    background : ${colors.text1};
                    width: 1px;
                    height: 25px;
                    top: -4px;
                    right: -16px;
                }
                a#mb-sidebar-btn {
                    i {
                        font-size : 20px;
                        color : ${colors.white};
                    }
                    &:hover{
                        color: ${colors.main_yellow}
                    }
                }

                @media(max-width: 480px) {
                    margin-top: 6px;
                    margin-right: 8px;
                    &:before {
                        content : none;
                    }
                }
            }
            .mb-logo {
                a {
                    img {
                        max-width: 150px;
                        @media(max-width: 480px) {
                            max-width : 120px;
                        }
                    }
                }
            }
        }

        .mb-search-box {
            form {
                width: 170px;
                position: relative;
                input {
                    width: 100%;
                    height: 35px;
                    border: 1px solid ${colors.white};
                    background: transparent;
                    color : ${colors.white};
                    border-radius: 5px;
                    padding-left: 15px;
                    &::placeholder {
                        font-size : 14px;
                        color : ${colors.white};
                    }
                    &:focus {
                        border-color : ${colors.main_yellow};
                    }

                    @media(max-width: 480px) {
                        max-width : 280px;
                    }

                    @media(max-width: 320px) {
                        display : none;
                    }
                }
                button {
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 40px;
                    background: transparent;
                    border: none;
                    font-size: 16px;
                    color: ${colors.main_yellow};
                    i {

                    }

                    @media(max-width: 320px) {
                        display : none;
                    }
                }

                @media(max-width: 480px) {
                    max-width : 130px;
                }
            }
        }
    }

    @media(max-width: 767px) {
        display : block;
    }
}

.mb-sidebar {
    background: ${colors.white};
    height: 100%;
    width: 320px;
    position: fixed;
    top : 0;
    left: -320px;
    overflow-y: auto;
    z-index: 9999;
    transition: all 400ms cubic-bezier(0.785,0.135,0.15,0.86);
    display: none;
    .mb-sidebar-heading {
        background: ${colors.purple_li_gradient1};
        padding: 25px;
        h5 {
            color: ${colors.white};
            text-transform: uppercase;
        }
        div#close-mb-sidebar {
            i {
                font-size : 22px;
                color : ${colors.white};

                &:hover{
                    color: ${colors.main_yellow};
                }
            }
        }
    }
    .mb-sidebar-menu {
        padding: 25px;
        .mb-menu-item {
            border-top: 1px solid ${colors.border1};
            &:last-child {
                border-bottom: 1px solid ${colors.border1};
            }
            button.mb-menu-button {
                border       : none;
                background   : transparent;
                display      : block;
                width        : 100%;
                padding      : 10px 0;
                text-align   : left;

                p {
                    font-size  : 14px;
                    color      : ${colors.dark_blue};
                    text-transform: uppercase;
                    font-weight: 600;
                    i {
                        font-size: 13px;
                        float: right;
                        border: 1px solid ${colors.border3};
                        border-radius: 25px;
                        padding: 3px;
                    }
                    &:hover {
                        color      : ${colors.main_yellow};
                        i {
                            border-color : ${colors.main_yellow};
                        }
                    }
                }
            }

            .mb-menu-content {
                max-height: 0;
                overflow  : hidden;
                transition: max-height 0.2s ease-in-out;

                ul {
                    li {
                        border-top: 1px solid ${colors.border1};
                        a {
                            font-size  : 13px;
                            color      : ${colors.dark_blue};
                            display    : block;
                            padding    : 10px 0;
                            padding-left: 15px;
                            font-weight: 600;
                            &:hover {
                                color      : ${colors.main_yellow};
                            }
                        }
                    }
                }
            }

            .mb-menu-content.show {
                max-height: 100%;
            }
        }
    }

    @media(max-width: 767px) {
        display : block;
    }

    @media(max-width: 480px) {
        max-width: 275px;
    }
}

.mb-sidebar.opened {
    left: 0 !important;
}

.mb-sidebar-overlay {
    position        : fixed;
    left            : 0;
    top             : 0;
    height          : 100%;
    width           : 100%;
    display         : block;
    background-color: rgba(0, 0, 0, 0.8);
    z-index         : 1111;
    visibility      : hidden;
    opacity         : 0;
    transition      : 0.3s ease;
}

.mb-sidebar-overlay.visible {
    visibility: visible;
    opacity   : 1;
}
`;