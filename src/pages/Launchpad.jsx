import React from 'react'
import Container from '../components/Container/Container'
import meetingImg from "../../public/assets/meeting.png"
import Heading3 from '../components/Typography/Heading3'
import Paragraph from '../components/Typography/Paragraph'
import LaunchpadContent from './LaunchpadContent'
import { Button } from 'antd'
import arrow from "../../public/assets/right-arrow.png";
const Launchpad = () => {
    return (
        <section className='py-20 px-4 lg:px-0'>
            <Container>
                <div className='flex flex-col items-center justify-center gap-15'>
                    <div className='flex items-center justify-center gap-15 flex-col md:flex-row'>
                        <div className='w-full max-w-[570px'>
                            <img src={meetingImg} alt="meeting-img" className='h-full w-full' />
                        </div>
                        <div className='flex flex-col gap-4 items-start justify-center w-full max-w-[570px]'>
                            <Heading3>The EdTech Launchpad: 40% Faster Time-to-Value.</Heading3>
                            <Paragraph classname="text-[var(--color-black)] opacity-[70%] text-start">We fast-track your platform launch with a curated set of ready-to-deploy capabilities designed to eliminate build time and maximize impact from day one.</Paragraph>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-15 flex-col md:flex-row'>
                        <LaunchpadContent
                            header="AI-First Learning Engine"
                            para="Built-in AI to generate videos, create and evaluate quizzes, and enhance learning, reducing effort and boosting efficiency."
                        />
                        <LaunchpadContent
                            header="Pre-Built Learning Ecosystem"
                            para="Ready-to-deploy modules for courses, certifications, classrooms, and assessments, so you can launch faster."
                        />
                        <LaunchpadContent
                            header="Social Learning Layer"
                            para="An interactive community for learners and educators to connect, collaborate, and share knowledge in real time."
                        />
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
                        <span>Explore LXP</span>
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

export default Launchpad