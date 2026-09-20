import caseStudyImg from '../../public/assets/case-study-img.png'
import PrimaryButton from '../components/Button'
import Container from '../components/Container/Container'
import Heading3 from '../components/Typography/Heading3'
import ParagraphSm from '../components/Typography/ParagraphSm'
const CaseStudy = () => {
  return (
  <section className='pt-15 pb-15 px-4 lg:pt-30 lg:pb-10 lg:px-0'>
     <Container>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex flex-col gap-[10px] items-start justify-center w-full'>
           <span className='text-xs tracking-[6%] leading-[110%] font-bold uppercase text-[var(--color-sky)] '>Case Study</span>
           <Heading3>
            STEM Fuse Shift to Drupal 10.4.1: Seamless LMS Migration
           </Heading3>
          </div>
           <div className='flex flex-col gap-10 items-center justify-center'>
              <div>
                <img src={caseStudyImg} alt="case-study-img" className='h-full w-full' />
              </div>
              <div className='w-full flex items-end justify-end'>
              <div className='max-w-[650px] flex flex-col gap-6 items-start justify-center w-full'>
               <ParagraphSm>
                We executed a forensic UX makeover for AES to showcase their clean energy leadership. This transformation slashed homepage drop-offs by 54% and boosted investor engagement by 49%, turning their global portal into a high-performance growth engine.
               </ParagraphSm>
               <PrimaryButton/>
              </div>
              </div>
           </div>
        </div>
     </Container>
  </section>
  )
}

export default CaseStudy