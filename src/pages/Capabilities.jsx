import React from 'react'
import Container from '../components/Container/Container'
import Heading3 from '../components/Typography/Heading3'
import CapabilitiesContent from './CapabilitiesContent'
import edtechImg from "../../public/assets/edtech-img.png"
const Capabilities = () => {
    return (
        <section className='py-20'>
            <Container>
                <div className='flex flex-col gap-15 items-start justify-center'>
                    <Heading3>
                        Building for an Intelligent Learning Future.
                    </Heading3>
                    <div className='flex justify-between items-start w-full'>
                        <div className='flex flex-col gap-8 items-start w-full'>
                            <CapabilitiesContent
                                heading="Modular & Scalable Foundations"
                                description="Open source enables modular architectures, API-first integrations, and scalable infrastructure, giving institutions full control over evolving digital ecosystems."
                            />
                            <CapabilitiesContent
                                heading="AI-Driven Personalization"
                                description="AI drives personalization at scale through data-driven insights, adaptive content delivery, and automated learning workflows."
                            />
                            <CapabilitiesContent
                                heading="Future-Ready Learning Ecosystems"
                                description="Together, they power resilient, future-ready platforms designed for continuous innovation and global scale."
                                className='border-none'
                            />
                        </div>
                        <div className='w-full max-w-[520px]'>
                            <img src={edtechImg} alt="edtech-img" className='h-full w-full' />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Capabilities