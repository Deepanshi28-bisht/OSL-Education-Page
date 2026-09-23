import caseStudyImg from '../../public/assets/case-study-img.png'
import caseStudyImgMobile from '../../public/assets/case-study-img-mobile.png'
import PrimaryButton from '../components/Button'
import Container from '../components/Container/Container'
import Heading3 from '../components/Typography/Heading3'
import ParagraphSm from '../components/Typography/ParagraphSm'
const CaseStudy = () => {
  return (
  <section className='pt-15 pb-15 px-4 md:pt-30 md:pb-10 lg:px-0'>
     <Container>
        <div className='flex flex-col gap-10 items-center justify-center group'>
          <div className='flex flex-col gap-[10px] items-start justify-center w-full'>
           <span className='text-xs tracking-[6%] leading-[110%] font-bold uppercase text-[var(--color-sky)] '>Case Study</span>
           <Heading3>
            STEM Fuse Shift to Drupal 10.4.1: Seamless LMS Migration
           </Heading3>
          </div>
           <div className='flex flex-col gap-8 lg:gap-10 items-center justify-center'>
              <div className='hidden md:block overflow-hidden rounded-4xl'>
                <img src={caseStudyImg} alt="case-study-img" className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:duration-500 group-hover:scale-105' />
              </div>
              <div className='md:hidden block w-full max-w-[358px]'>
                <img src={caseStudyImgMobile} alt="case-study-img" className='h-full w-full' />
              </div>
              <div className='w-full flex items-end justify-end'>
              <div className='max-w-[650px] flex flex-col gap-6 items-start justify-center w-full'>
               <ParagraphSm>
                We executed a forensic UX makeover for AES to showcase their clean energy leadership. This transformation slashed homepage drop-offs by 54% and boosted investor engagement by 49%, turning their global portal into a high-performance growth engine.
               </ParagraphSm>
               <PrimaryButton>Read More</PrimaryButton>
              </div>
              </div>
           </div>
        </div>
     </Container>
  </section>
  )
}

export default CaseStudy