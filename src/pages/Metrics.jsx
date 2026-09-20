import React from 'react'
import Container from '../components/Container/Container'
import Heading3 from '../components/Typography/Heading3'
import MetricsContent from './MetricsContent'

const Metrics = () => {
  return (
   <section className='py-30 bg-[#EBF0F0]'>
   <Container>
    <div className='flex flex-col gap-15 items-start justify-center'>
    <Heading3>
        Real Impact: How We Helped LMS Scale.
    </Heading3>
    <div className='flex gap-10 items-center justify-center'>
      <MetricsContent
      className="border-[#E30C12]"
      header="15000+"
      para="schools reached with integrated, scalable curriculum systems."
      />
        <MetricsContent
      className="border-[#3888FF]"
      header="90,000+"
      para="users engaged via real-time learning and collaboration tools."
      />
        <MetricsContent
      className="border-[#FCBC05]"
      header="9"
      para="regional sites consolidated to reduce complexity and operational overhead."
      />
    </div>
    </div>
   </Container>
   </section>
  )
}

export default Metrics