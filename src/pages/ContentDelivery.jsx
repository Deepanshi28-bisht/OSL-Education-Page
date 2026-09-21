import icon5 from "../../public/assets/bar-chart.svg"
import icon2 from "../../public/assets/interactive-space.svg"
import icon3 from "../../public/assets/interest-img.svg"
import icon4 from "../../public/assets/lang-korean.svg"
import icon1 from "../../public/assets/location.svg"
import Container from '../components/Container/Container'
import Heading3 from '../components/Typography/Heading3'
import ContentDeliveryContent from './ContentDeliveryContent'
const ContentDelivery = () => {
    return (
        <section className='py-20 px-4 lg:px-0'>
            <Container>
                <div className='flex flex-col gap-15 items-start'>
                    <Heading3>
                        Built for Real EdTech Complexity, Not Just Content Delivery.
                    </Heading3>
                    <div className='flex gap-10 justify-center items-center flex-wrap'>
                        <ContentDeliveryContent
                            icon={icon1}
                            heading="Multi-Region Platform Unification"
                            para="Consolidated multiple region-specific websites into a single scalable platform reducing operational overhead while ensuring consistent global experiences."
                        />
                        <ContentDeliveryContent
                            icon={icon2}
                            heading="Intelligent Course Discovery & Personalization"
                            para="Enabled dynamic course recommendations tailored to diverse user profiles, improving discovery and aligning content with learner intent."
                        />
                        <ContentDeliveryContent
                            icon={icon3}
                            heading="Gamified Learning Experiences"
                            para="Integrated quizzes, interactive videos, and activity streams to drive deeper engagement and foster continuous learner interaction."
                        />
                        <ContentDeliveryContent
                            icon={icon4}
                            heading="Multilingual & Global Accessibility"
                            para="Delivered multilingual experiences across regions, ensuring content accessibility and relevance for learners worldwide."
                        />
                        <ContentDeliveryContent
                            icon={icon5}
                            heading="Learner Progress & Performance Tracking"
                            para="Built systems that allow learners to track progress, resume seamlessly, and adapt to evolving curriculum structures."
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContentDelivery