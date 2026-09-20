import Container from '../components/Container/Container'
import heroImage from "/assets/hero-bg.jpg";
import Heading2 from '../components/Typography/heading2';
import Paragraph from '../components/Typography/Paragraph';
import logo1 from "/assets/hero-logo1.png";
import logo2 from "/assets/hero-logo2.png";
import logo3 from "/assets/hero-logo3.png";
const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[834px] py-20 px-4 lg:px-0 lg:py-25"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black/50" />
            <Container>
                <div className='relative z-10 flex flex-col gap-10 items-center justify-center'>
                    <span className='text-xs tracking-[2px] leading-[110%] font-bold uppercase text-[var(--color-yellow)] '>Education & EdTech</span>
                    <div className='flex flex-col gap-6 items-center justify-center'>
                        <Heading2>
                            Empower Learners Through High-Performance EdTech Solutions.
                        </Heading2>
                        <Paragraph>
                            Bridge the gap between pedagogy and technology. From seamless Drupal migrations to AI-driven learning platforms, we build scalable digital ecosystems that engage students and simplify administration.
                        </Paragraph>
                    </div>
                    <button className='py-3 px-6 flex items-center justify-center gap-2 border border-[var(--bg-color)] text-[var(--bg-color)] text-base font-normal leading-[120%] rounded-3xl'>
                    <span>Modernize Your Learning Platform</span>
                    <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-full max-w-[212px]'>
                            <img src={logo1} alt="hero-logo" className='h-full w-full' />
                        </div>
                         <div className='w-full max-w-[212px]'>
                            <img src={logo2} alt="hero-logo" className='h-full w-full' />
                        </div>
                         <div className='w-full max-w-[212px]'>
                            <img src={logo3} alt="hero-logo" className='h-full w-full' />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero