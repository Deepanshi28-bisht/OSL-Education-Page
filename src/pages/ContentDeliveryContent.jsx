import React from 'react'
import Heading4 from '../components/Typography/Heading4'
import Paragraph from '../components/Typography/Paragraph'

const ContentDeliveryContent = ({ icon, heading, para, classname }) => {
    console.log("🚀 ~ ContentDeliveryContent ~ para:", para)
    return (
        <div className={`w-full max-w-[373px] p-8 text-center flex flex-col gap-6 items-center justify-center ${classname}`}>
            <img src={icon} alt="icon" className='h-14 w-14' />
            <Heading4>{heading}</Heading4>
            <Paragraph classname="text-[var(--color-black)] opacity-[70%]">{para}</Paragraph>
        </div>
    )
}

export default ContentDeliveryContent