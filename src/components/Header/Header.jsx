import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/assets/osl-logo.png";
import arrow from "../../../public/assets/right-arrow.png";
import "../../styles/variables.css";
import { Button } from "antd";
import ServicesPanel from "../../pages/ServicesPanel";
import SolutionsPanel from "../../pages/SolutionsPanel";
import { menuData } from "../data/menuData";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("services");
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

    return (
        <>
            <header className="w-full sticky top-0 z-[60] bg-[var(--bg-color)]" ref={menuRef}>
                <div className="py-5 px-4 lg:py-6 lg:px-14 flex justify-between items-center relative">
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
                    <div className="hidden lg:flex gap-12 items-center justify-center text-base font-normal text-[var(--color-black)] leading-[120%]">
                        <div className="flex items-center gap-[6px]">
                            <span>En</span>
                            <span>+</span>
                        </div>
                        <Button
                            type="primary"
                            className="
                         group
    !bg-[var(--color-yellow)]
    !pl-6
    !pr-3
    !py-6
    !rounded-[27px]
    !flex
    !items-center
    !justify-center
    !gap-3
    !text-base
    !font-normal
    !text-[var(--color-black)]
    !leading-[120%]
    transition-shadow
  duration-200
  hover:shadow-[0_6px_10px_rgba(0,0,0,0.15)]
  "
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

                    <div className="flex items-center gap-[6px] lg:hidden">
                        <span>Menu</span>
                        <span>+</span>
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
