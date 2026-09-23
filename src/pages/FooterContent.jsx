import { footerNav } from '../components/data/navLink'
import Heading6 from '../components/Typography/Heading6'
const FooterContent = () => {
   return (
      <div className='flex gap-8 flex-col md:flex-row items-start  justify-start w-full'>

         {
            footerNav.map((item) => (
               <div className='w-full flex flex-col items-start gap-7'>
                  <Heading6>
                     {item.title}
                  </Heading6>
                  <ul className='flex flex-col items-start gap-7 text-sm leading-[110%] font-light text-[var(--color-black)]'>
                     {
                        item.items.map((label) => (
                           <li key={label} className='cursor-pointer flex gap-2 items-center text-nowrap transition-transform duration-300 ease-out group hover:text-[var(--color-sky)] hover:translate-x-1'>
                              <span>{label}</span>
                              <i className="fa-solid fa-arrow-right opacity-0 transition-transform duration-300 ease-out group-hover:opacity-100"></i>
                           </li>
                        ))
                     }
                  </ul>
               </div>
            ))
         }

      </div>
   )
}

export default FooterContent