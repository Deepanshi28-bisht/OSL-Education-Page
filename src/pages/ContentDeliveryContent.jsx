import React from 'react'
import Heading4 from '../components/Typography/Heading4'
import Paragraph from '../components/Typography/Paragraph'

const ContentDeliveryContent = ({ icon, heading, para, classname }) => {
    console.log("🚀 ~ ContentDeliveryContent ~ para:", para)
    return (
        <div className={`w-full max-w-[373px] p-6 md:p-8 text-center flex flex-col gap-6 items-center justify-center bg-[#F8F8F8] md:bg-transparent group hover:bg-[#F8F8F8] rounded-lg ${classname}`}>
            <img src={icon} alt="icon" className='h-14 w-14' />
            <Heading4>{heading}</Heading4>
            <Paragraph classname="text-[var(--color-black)] opacity-[70%]">{para}</Paragraph>
            <button className='flex items-center justify-center gap-2 text-[#0052CC] text-base leading-[120%] font-normal md:opacity-0 transition-opacity
    duration-500
    ease-in-out md:group-hover:opacity-100'>
                <span>Learn More</span>
                <div className='h-[30px] w-[30px] rounded-full flex items-center justify-center border border-[#0052CC] transition-transform
      duration-300
      ease-out
      group-hover:scale-110
      group-hover:translate-x-1'>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </button>
        </div>
    )
}

export default ContentDeliveryContent