import React from "react";
import logo from "../../../public/assets/osl-logo.png";
import arrow from "../../../public/assets/right-arrow.png";
import "../../styles/variables.css";
import { Button } from "antd";
const Header = () => {
    return (
        <header className="w-full sticky top-0 z-50 bg-[var(--bg-color)]">
            <div className="py-5 px-4 lg:py-6 lg:px-14 flex justify-between items-center">
                <div className="w-full max-w-[215px]">
                    <img src={logo} alt="osl-logo" className="h-full w-full" />
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-12 items-center justify-center text-base font-normal text-[var(--color-black)] leading-[120%] cursor-pointer">
                        <li className="flex items-center gap-[6px]">
                            <span>What we do</span>
                            <span>+</span>
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
        </header>
    );
};

export default Header;
