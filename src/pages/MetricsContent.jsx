import React from 'react'
import Heading2 from '../components/Typography/heading2'
import Paragraph from '../components/Typography/Paragraph'

const MetricsContent = ({className,header,para}) => {
  return (
    <div className={`w-full max-w-[373px] flex flex-col items-start justify-start gap-1 pt-4 border-t ${className}`}>
     <Heading2 classname="text-[var(--color-black)] text-start">{header}</Heading2>
     <Paragraph classname="text-[var(--color-black)] opacity-[70%] text-start">{para}</Paragraph>
    </div>
  )
}

export default MetricsContent