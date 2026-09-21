import React from 'react'
import Container from '../components/Container/Container'
import Heading3 from '../components/Typography/Heading3'
import Paragraph from '../components/Typography/Paragraph'
import arrow from "../../public/assets/right-arrow.png";
import { Button } from 'antd';
const Roadmap = () => {
    return (
        <section className='px-6 py-20 lg:py-30 lg:px-0 bg-[var(--color-black)]'>
            <Container>
                <div className='flex flex-col gap-12 items-center lg:items-start'>
                    <div className='flex flex-col gap-4 items-start'>
                      <Heading3 classname="text-[var(--color-white)]">Build Your EdTech Roadmap with OpenSense Labs.</Heading3>
                      <Paragraph classname="text-[var(--color-white)] text-start opacity-[70%]">Let’s identify the high-impact gaps in your current learning platform. Get a 30-minute infrastructure audit to identify bottlenecks in your student journey.</Paragraph>
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
                        <span>Build My EdTech Roadmap</span>
                        <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                            <img
                                src={arrow}

                                alt="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </div>
                    </Button>
                </div>
            </Container>
        </section>
    )
}

export default Roadmap