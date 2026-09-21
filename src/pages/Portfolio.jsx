import React from 'react'
import Container from '../components/Container/Container'
import Heading3 from '../components/Typography/Heading3'
import PortfolioCard from './PortfolioCard'
import cardImg1 from "../../public/assets/portfolio-card1.png"
import cardImg2 from "../../public/assets/portfolio-card2.png"
const Portfolio = () => {
    return (
        <section className='py-20 px-4 lg:py-30 lg:px-0'>
            <Container>
                <div className='flex flex-col gap-15 items-start justify-center'>
                    <Heading3>A Portfolio Built Across EdTech.</Heading3>
                    <div className='w-full flex items-center md:items-start justify-start gap-15 flex-col md:flex-row'>
                      <PortfolioCard
                      img={cardImg1}
                      heading="Apply Once: A Decoupled Drupal 9 Education Portal"
                      />
                        <PortfolioCard
                      img={cardImg2}
                      heading="UKEAS To Intake Education: Platform Revamp"
                      />
                        <PortfolioCard
                      img={cardImg2}
                      heading="Edredo : Career Highways"
                      />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Portfolio