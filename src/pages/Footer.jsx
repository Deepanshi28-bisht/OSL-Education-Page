import Container from '../components/Container/Container'
import footerLogo from '../../public/assets/footer-logo.png'
import FooterContent from './FooterContent'
import Caption from '../components/Typography/Caption'
const Footer = () => {
  return (
    <footer className='pt-20 pb-20 px-4 lg:px-0 lg:pt-25 lg:pb-20 bg-[#EBF0F0]'>
     <Container>
        <div className='flex flex-col gap-15 items-center justify-center w-full'>
              <div className='flex gap-20 items-start justify-center w-full flex-col lg:flex-row'>
                    <div className='flex flex-col gap-[39px] items-start justify-start'>
                      <div className='w-full max-w-[160px]'>
                       <img src={footerLogo} alt="osl-logo" className='w-full h-full' />
                      </div>
                      <div className='flex flex-col gap-6 items-start justify-center'>
                        <div className='flex gap-[7px] items-center justify-center'>
                        <span className='text-[#0052CC]'>hello@opensenselabs.com</span>
                         <img src="../../public/assets/copy.png" alt="copy-icon" />
                         <img src="../../public/assets/paste.png" alt="paste-icon" />
                        </div>
                        <div className='flex gap-4 items-start justify-center'>
                        <img src="../../public/assets/linkedin.png" alt="linkedin-icon" />
                         <img src="../../public/assets/instagram.png" alt="instagram-icon" />
                         <img src="../../public/assets/twitter.png" alt="twitter-icon" />
                        </div>
                      </div>
                      <div className='flex gap-6 items-center justify-start pt-[39px] w-full border-t border-[#171922]/10'>
                        <div className='w-full max-w-[55px] h-auto'>
                            <img src="../../public/assets/drupal-partner.png" alt="footer-logo" className='h-full w-full' />
                        </div>
                        <div className='w-full max-w-[54px] h-auto'>
                            <img src="../../public/assets/drupal-ai.png" alt="footer-logo" className='h-full w-full' />
                        </div>
                        <div className='w-full max-w-[54px] h-auto'>
                            <img src="../../public/assets/iso-logo.png" alt="footer-logo" className='h-full w-full' />
                        </div>
                        <div className='w-full max-w-[132px] h-auto'>
                            <img src="../../public/assets/clutch.png" alt="footer-logo" className='h-full w-full' />
                        </div>
                      </div>
                    </div>
                       <FooterContent/>
              </div>
              <div className='flex items-start gap-6 md:gap-0 md:justify-between w-full pt-15 border-t border-[var(--color-black)]/10 flex-col md:flex-row'>
                <Caption className="text-nowrap">
                    © 2026 OpenSense Labs. All Rights Reserved.
                </Caption>
                <div className='flex items-start md:justify-end gap-6 flex-wrap'>
                    <Caption className="hover:text-[var(--color-sky)] cursor-pointer"> Data Protection </Caption>
                    <Caption className="hover:text-[var(--color-sky)] cursor-pointer"> GDPR Compliance </Caption>
                    <Caption className="hover:text-[var(--color-sky)] cursor-pointer"> User Agreement </Caption>
                    <Caption className="hover:text-[var(--color-sky)] cursor-pointer"> Privacy Policy </Caption>
                    <Caption className="hover:text-[var(--color-sky)] cursor-pointer"> Terms of Service </Caption>
                    <Caption className="hover:text-[var(--color-sky)] cursor-pointer"> Cookie Policy </Caption>
                    <Caption className="hover:text-[var(--color-sky)] cursor-pointer"> Accessibility (WCAG 2.2) </Caption>
                    <Caption className="hover:text-[var(--color-sky)] cursor-pointer"> Impressium </Caption>
                </div>
              </div>
        </div>
     </Container>
    </footer>
  )
}

export default Footer