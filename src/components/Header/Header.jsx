import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/assets/osl-logo.png";
import arrow from "../../../public/assets/right-arrow.png";
import "../../styles/variables.css";
import { Button } from "antd";
import ServicesPanel from "../../pages/ServicesPanel";
import SolutionsPanel from "../../pages/SolutionsPanel";
import { menuData } from "../data/menuData";
const Header = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-7.2rem"; /* Hide header */
        }
        prevScrollpos = currentScrollPos;
    }
    const langRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("services");
    const [lang, setLang] = useState("en");
    const [langOpen, setLangOpen] = useState(false);
    const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    useEffect(() => {
        function closeDropDown(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", closeDropDown);
        return () => {
            document.removeEventListener("mousedown", closeDropDown)
        }
    })
    useEffect(() => {
        function closeLang(e) {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false)
            }
        }
        document.addEventListener("mousedown", closeLang);
        return () => {
            document.removeEventListener("mousedown", closeLang)
        }
    }, [])
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
        } else {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        };
    }, [mobileOpen]);
    return (
        <>
            <header className="w-full sticky top-0 z-60 bg-[var(--bg-color)]" ref={menuRef}>
                <div className="py-5 px-4 lg:py-6 lg:px-14 flex justify-between items-center relative z-60 bg-[var(--bg-color)]">
                    <div className="w-full max-w-[215px]">
                        <img src={logo} alt="osl-logo" className="h-full w-full" />
                    </div>
                    <nav className="hidden lg:block">
                        <ul className="flex gap-12 items-center justify-center text-base font-normal text-[var(--color-black)] leading-[120%] cursor-pointer">

                            <li className="flex items-center gap-[6px]" onClick={() => setIsOpen(!isOpen)}>
                                <span>What we do</span>
                                <span>{isOpen ? "–" : "+"}</span>
                            </li>

                            <li>Insight</li>
                            <li>About Us</li>
                            <li>Case Studies</li>
                        </ul>
                    </nav>
                    <div className="relative hidden lg:flex gap-12 items-center justify-center text-base font-normal text-[var(--color-black)] leading-[120%]">
                        <div className="relative" ref={langRef}>
                            <div className="cursor-pointer flex items-center gap-[6px]" onClick={() => setLangOpen(!langOpen)}>
                                <span>{lang === "en" ? "En" : "De"}</span>
                                <span>{langOpen ? "–" : "+"}</span>
                            </div>
                            {
                                langOpen && (
                                    <div className="absolute top-full right-0 mt-3 bg-white rounded-2xl shadow-xl p-7">
                                        <div className="flex flex-col gap-4 items-center justify-center">
                                            <button className={`flex gap-2 text-sm items-center justify-center py-2 px-6 rounded-full  ${lang === "en" ? "text-[#0052cc] font-bold border-2 border-[#0052cc]" : "text-[var(--color-black)] border border-[#ccc]"}`} onClick={() => {
                                                setLang("en")
                                                setLangOpen(false)
                                            }}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5188_42420)"><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"></path><path d="M2.06718 3.91089C1.28167 4.93288 0.689365 6.11081 0.344482 7.39046H5.54675L2.06718 3.91089Z" fill="#0052B4"></path><path d="M19.6558 7.39042C19.3109 6.11081 18.7186 4.93288 17.9331 3.91089L14.4536 7.39042H19.6558Z" fill="#0052B4"></path><path d="M0.344482 12.6086C0.689404 13.8883 1.28171 15.0662 2.06718 16.0881L5.54663 12.6086H0.344482Z" fill="#0052B4"></path><path d="M16.0879 2.06649C15.0659 1.28098 13.888 0.688672 12.6084 0.34375V5.54598L16.0879 2.06649Z" fill="#0052B4"></path><path d="M3.91162 17.9314C4.93361 18.7169 6.11155 19.3092 7.39116 19.6541V14.4519L3.91162 17.9314Z" fill="#0052B4"></path><path d="M7.39111 0.34375C6.1115 0.688672 4.93357 1.28098 3.91162 2.06644L7.39111 5.54593V0.34375Z" fill="#0052B4"></path><path d="M12.6084 19.6541C13.888 19.3092 15.0659 18.7169 16.0879 17.9314L12.6084 14.4519V19.6541Z" fill="#0052B4"></path><path d="M14.4536 12.6086L17.9331 16.0882C18.7186 15.0662 19.3109 13.8882 19.6558 12.6086H14.4536Z" fill="#0052B4"></path><path d="M19.9154 8.69566H11.3044H11.3044V0.0846484C10.8774 0.0290625 10.4421 0 10 0C9.55785 0 9.12262 0.0290625 8.69566 0.0846484V8.69559V8.69563H0.0846484C0.0290625 9.12262 0 9.55793 0 10C0 10.4421 0.0290625 10.8774 0.0846484 11.3043H8.69559H8.69563V19.9154C9.12262 19.9709 9.55785 20 10 20C10.4421 20 10.8774 19.971 11.3043 19.9154V11.3044V11.3044H19.9154C19.9709 10.8774 20 10.4421 20 10C20 9.55793 19.9709 9.12262 19.9154 8.69566Z" fill="#D80027"></path><path d="M12.6086 12.6094L17.071 17.0718C17.2762 16.8666 17.472 16.6521 17.6588 16.4298L13.8384 12.6094H12.6086V12.6094Z" fill="#D80027"></path><path d="M7.39122 12.6094H7.39114L2.92883 17.0717C3.13399 17.2769 3.34848 17.4727 3.57083 17.6595L7.39122 13.839V12.6094Z" fill="#D80027"></path><path d="M7.3911 7.39093V7.39085L2.92876 2.92847C2.72352 3.13362 2.52774 3.34812 2.34094 3.57046L6.16137 7.39089H7.3911V7.39093Z" fill="#D80027"></path><path d="M12.6086 7.39175L17.071 2.92933C16.8659 2.72409 16.6514 2.52831 16.429 2.34155L12.6086 6.16198V7.39175V7.39175Z" fill="#D80027"></path></g><defs><clipPath id="clip0_5188_42420"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                                <span>English</span>
                                            </button>
                                            <button className={`flex gap-2 text-sm items-center justify-center py-2 px-6 rounded-full ${lang === "de" ? "text-[#0052cc] font-bold border-2 border-[#0052cc]" : "text-[var(--color-black)] border border-[#ccc]"}`} onClick={() => {
                                                setLang("de")
                                                setLangOpen(false)
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#clip0_5216_50305)"><path d="M0.621826 13.4791C2.03476 17.2871 5.70018 20.0009 9.99983 20.0009C14.2995 20.0009 17.9649 17.2871 19.3778 13.4791L9.99983 12.6096L0.621826 13.4791Z" fill="#FFDA44"></path><path d="M9.99983 0.000732422C5.70018 0.000732422 2.03476 2.71448 0.621826 6.52249L9.99983 7.39202L19.3778 6.52245C17.9649 2.71448 14.2995 0.000732422 9.99983 0.000732422Z" fill="black"></path><path d="M0.621992 6.52148C0.220039 7.6048 0 8.77652 0 9.99973C0 11.2229 0.220039 12.3946 0.621992 13.478H19.378C19.78 12.3946 20 11.2229 20 9.99973C20 8.77652 19.78 7.6048 19.378 6.52148H0.621992Z" fill="#D80027"></path></g><defs><clipPath id="clip0_5216_50305"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                                <span>Deutsch</span>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <Button
                            type="primary"
                            className="
                         group !bg-[var(--color-yellow)] !pl-6 !pr-3 !py-6 !rounded-[27px] !flex !items-center !justify-center !gap-3  !text-base !font-normal
                         !text-[var(--color-black)] !leading-[120%] transition-shadow  duration-200  hover:shadow-[0_6px_10px_rgba(0,0,0,0.15)]"
                        >
                            <span>Let's Talk</span>
                            <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                                <img
                                    src={arrow}

                                    alt="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                                />
                            </div>
                        </Button>
                    </div>

                    <div className="flex items-center gap-[6px] lg:hidden" onClick={() => {
                        setMobileOpen(!mobileOpen)
                        setIsWhatWeDoOpen(false)
                    }}>
                        <span>{mobileOpen ? "Close" : "Menu"}</span>
                        <span className="text-2xl">{mobileOpen ? "×" : "+"}</span>
                    </div>
                </div>
                {/* Mobile Drawer */}
                <div className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    onClick={() => setMobileOpen(false)}
                />
                <div className={`lg:hidden fixed z-50 left-0 right-0 py-10 px-3 top-0 bg-white rounded-b-3xl shadow-2xl transition-transform duration-300 ease-out  ${mobileOpen ? "translate-y-0" : "-translate-y-full"}`}>
                    <div className="h-[60px]"></div>
                    <div className="flex flex-col items-start justify-center gap-12  pb-5">
                        <ul className="flex flex-col items-start justify-center w-full font-light">
                            <li className={`w-full px-4 py-5 ${isWhatWeDoOpen ? "bg-[#ebf0f0] rounded-t-2xl" : ""}`}>
                                <button
                                    onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                                    className="flex justify-between items-center w-full text-[#0052cc]">
                                    <span>What we do</span>
                                    <span>{isWhatWeDoOpen ? "×" : "+"}</span>
                                </button>
                            </li>
                            {
                                isWhatWeDoOpen && (
                                    <div className="flex pl-2 gap-2 flex-col w-full">
                                        <button className="w-full flex justify-between items-center py-3 px-4 text-left text-gray-900">
                                            <span className="text-base tracking-wide">SERVICES</span>
                                            <span>→</span>
                                        </button>

                                        <button className="w-full flex justify-between items-center py-3 px-4 text-left text-[#0052cc]">
                                            <span className="text-base tracking-wide">SOLUTIONS</span>
                                            <span>→</span>
                                        </button>
                                    </div>
                                )
                            }
                            <li className="px-4 py-5">Insights</li>
                            <li className="px-4 py-5">About Us</li>
                            <li className="px-4 py-5">Case Studies</li>
                        </ul>
                        <div className="px-4 flex flex-col items-center justify-center gap-6 w-full">
                            <div className="flex gap-4 items-center justify-center w-full">
                                <button className={`w-full flex gap-2 text-base items-center justify-center py-2 px-6 rounded-full  ${lang === "en" ? "text-[#0052cc] font-bold border-2 border-[#0052cc]" : "text-[var(--color-black)] border border-[#ccc]"}`} onClick={() => setLang("en")}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5188_42420)"><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"></path><path d="M2.06718 3.91089C1.28167 4.93288 0.689365 6.11081 0.344482 7.39046H5.54675L2.06718 3.91089Z" fill="#0052B4"></path><path d="M19.6558 7.39042C19.3109 6.11081 18.7186 4.93288 17.9331 3.91089L14.4536 7.39042H19.6558Z" fill="#0052B4"></path><path d="M0.344482 12.6086C0.689404 13.8883 1.28171 15.0662 2.06718 16.0881L5.54663 12.6086H0.344482Z" fill="#0052B4"></path><path d="M16.0879 2.06649C15.0659 1.28098 13.888 0.688672 12.6084 0.34375V5.54598L16.0879 2.06649Z" fill="#0052B4"></path><path d="M3.91162 17.9314C4.93361 18.7169 6.11155 19.3092 7.39116 19.6541V14.4519L3.91162 17.9314Z" fill="#0052B4"></path><path d="M7.39111 0.34375C6.1115 0.688672 4.93357 1.28098 3.91162 2.06644L7.39111 5.54593V0.34375Z" fill="#0052B4"></path><path d="M12.6084 19.6541C13.888 19.3092 15.0659 18.7169 16.0879 17.9314L12.6084 14.4519V19.6541Z" fill="#0052B4"></path><path d="M14.4536 12.6086L17.9331 16.0882C18.7186 15.0662 19.3109 13.8882 19.6558 12.6086H14.4536Z" fill="#0052B4"></path><path d="M19.9154 8.69566H11.3044H11.3044V0.0846484C10.8774 0.0290625 10.4421 0 10 0C9.55785 0 9.12262 0.0290625 8.69566 0.0846484V8.69559V8.69563H0.0846484C0.0290625 9.12262 0 9.55793 0 10C0 10.4421 0.0290625 10.8774 0.0846484 11.3043H8.69559H8.69563V19.9154C9.12262 19.9709 9.55785 20 10 20C10.4421 20 10.8774 19.971 11.3043 19.9154V11.3044V11.3044H19.9154C19.9709 10.8774 20 10.4421 20 10C20 9.55793 19.9709 9.12262 19.9154 8.69566Z" fill="#D80027"></path><path d="M12.6086 12.6094L17.071 17.0718C17.2762 16.8666 17.472 16.6521 17.6588 16.4298L13.8384 12.6094H12.6086V12.6094Z" fill="#D80027"></path><path d="M7.39122 12.6094H7.39114L2.92883 17.0717C3.13399 17.2769 3.34848 17.4727 3.57083 17.6595L7.39122 13.839V12.6094Z" fill="#D80027"></path><path d="M7.3911 7.39093V7.39085L2.92876 2.92847C2.72352 3.13362 2.52774 3.34812 2.34094 3.57046L6.16137 7.39089H7.3911V7.39093Z" fill="#D80027"></path><path d="M12.6086 7.39175L17.071 2.92933C16.8659 2.72409 16.6514 2.52831 16.429 2.34155L12.6086 6.16198V7.39175V7.39175Z" fill="#D80027"></path></g><defs><clipPath id="clip0_5188_42420"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                    <span>English</span>
                                </button>
                                <button className={`w-full flex gap-2 text-base items-center justify-center py-2 px-6 rounded-full ${lang === "de" ? "text-[#0052cc] font-bold border-2 border-[#0052cc]" : "text-[var(--color-black)] border border-[#ccc]"}`} onClick={() => setLang("de")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#clip0_5216_50305)"><path d="M0.621826 13.4791C2.03476 17.2871 5.70018 20.0009 9.99983 20.0009C14.2995 20.0009 17.9649 17.2871 19.3778 13.4791L9.99983 12.6096L0.621826 13.4791Z" fill="#FFDA44"></path><path d="M9.99983 0.000732422C5.70018 0.000732422 2.03476 2.71448 0.621826 6.52249L9.99983 7.39202L19.3778 6.52245C17.9649 2.71448 14.2995 0.000732422 9.99983 0.000732422Z" fill="black"></path><path d="M0.621992 6.52148C0.220039 7.6048 0 8.77652 0 9.99973C0 11.2229 0.220039 12.3946 0.621992 13.478H19.378C19.78 12.3946 20 11.2229 20 9.99973C20 8.77652 19.78 7.6048 19.378 6.52148H0.621992Z" fill="#D80027"></path></g><defs><clipPath id="clip0_5216_50305"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                    <span>Deutsch</span>
                                </button>
                            </div>
                            <Button
                                type="primary"
                                className=" !w-full
                         group !bg-[var(--color-yellow)] !pl-6 !pr-3 !py-6 !rounded-[27px] !flex !items-center !justify-center !gap-3  !text-base !font-normal
                         !text-[var(--color-black)] !leading-[120%] transition-shadow  duration-200  hover:shadow-[0_6px_10px_rgba(0,0,0,0.15)]"
                            >
                                <span>Let's Talk</span>
                                <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                                    <img
                                        src={arrow}

                                        alt="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                                    />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

                {
                    isOpen && (
                        <>

                            <div className="fixed z-40 bg-black/10 backdrop-blur-sm" />
                            <div className="absolute px-14  left-1/2 -translate-x-1/2 top-full w-full bg-white z-50 overflow-hidden">
                                <div className="flex items-start justify-start gap-[70px] py-4 border-b border-[#ccc]">
                                    <button
                                        onClick={() => setActiveTab("services")}
                                        className={`text-2xl font-light tracking-wide relative ${activeTab === "services"
                                            ? "text-red-600"
                                            : "text-[var(--color-black)]"
                                            }`}
                                    >SERVICES
                                        {activeTab === "services" && (
                                            <span className="absolute bottom-[-17px] left-0 w-full h-0.5 bg-red-600"></span>
                                        )}
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("solutions")}
                                        className={`text-2xl font-light tracking-wide relative ${activeTab === "solutions"
                                            ? "text-red-600"
                                            : "text-[var(--color-black)]"
                                            }`}
                                    >SOLUTIONS
                                        {activeTab === "solutions" && (
                                            <span className="absolute bottom-[-17px] left-0 w-full h-0.5 bg-red-600"></span>
                                        )}
                                    </button>
                                </div>
                                <div className="py-14 ">
                                    {
                                        activeTab === "services" ? <ServicesPanel data={menuData.services} /> : <SolutionsPanel data={menuData.solutions} />
                                    }
                                </div>
                            </div>
                        </>
                    )
                }
            </header>
        </>
    );
};

export default Header;
