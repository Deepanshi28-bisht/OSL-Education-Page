import React from 'react'
import Heading6 from '../components/Typography/Heading6'
import ParagraphSm from '../components/Typography/ParagraphSm'

const LaunchpadContent = ({header,para}) => {
  return (
    <div className='flex flex-col items-start justify-center gap-4 pt-4 w-full max-w-[360px] border-t border-[#171922]'>
    <Heading6>{header}</Heading6>
    <ParagraphSm>{para}</ParagraphSm>
    </div>
  )
}

export default LaunchpadContent