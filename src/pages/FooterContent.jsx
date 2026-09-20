import { footerNav } from '../components/data/navLink'
import Heading6 from '../components/Typography/Heading6'
const FooterContent = () => {
  return (
     <div className='flex gap-8 items-start justify-center w-full'>

        {
     footerNav.map((item)=>(
        <div className='w-full flex flex-col items-start gap-7'>
             <Heading6>
            {item.title}
        </Heading6>
        <ul className='flex flex-col items-start gap-7 text-sm leading-[110%] font-normal text-[var(--color-black)]'>
           {
            item.items.map((label)=>(
                <li key={label}>{label}</li>
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