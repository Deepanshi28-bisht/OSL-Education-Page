import PrimaryButton from "../components/Button"
import Heading4 from "../components/Typography/Heading4"

const PortfolioCard = ({img,heading}) => {
  return (
    <div className='flex flex-col gap-8 items-stretch justify-center w-full max-w-[360px]'>
     <div className='w-full max-w-[360px]'>
     <img src={img} alt="card-img" />
     </div>
     <div className="flex flex-col gap-6 items-start justify-center">
        <div className="flex flex-col gap-3 items-start justify-center">
           <span className='text-xs tracking-[6%] leading-[110%] font-bold uppercase text-[var(--color-sky)]'>Case Study</span>
       <Heading4>{heading}</Heading4>
       </div>
       <PrimaryButton>
        Read More
       </PrimaryButton>
       </div>
    </div>
  )
}

export default PortfolioCard