import React from 'react'
import Heading6 from '../components/Typography/Heading6';

const ServicesPanel = ({data}) => {
    console.log("data",data);
    
  return (
    <div className='grid grid-cols-4 gap-12'>
      <div>
        <Heading6 className="mb-6">DISCOVER</Heading6>
        <ul className='flex flex-col gap-5 items-start'>
        {
            data.discover.map((item)=>(
                <li key={item}>
                    <a
                href="#"
                className="text-base text-[var(--color-black)] leading-[1.2] font-normal"
              >
                {item}
              </a>
                </li>
            ))
        }
    </ul>
      </div>
       <div>
        <Heading6 className="mb-6">BUILD</Heading6>
        <ul className='flex flex-col gap-5 items-start'>
        {
            data.build.map((item)=>(
                <li key={item}>
                    <a
                href="#"
                className="text-base text-[var(--color-black)] leading-[1.2] font-normal"
              >
                {item}
              </a>
                </li>
            ))
        }
    </ul>
      </div>
       <div>
        <Heading6 className="mb-6">TRANSFORM</Heading6>
        <ul className='flex flex-col gap-5 items-start'>
        {
            data.transform.map((item)=>(
                <li key={item}>
                    <a
                href="#"
                className="text-base text-[var(--color-black)] leading-[1.2] font-normal"
              >
                {item}
              </a>
                </li>
            ))
        }
    </ul>
      </div>
       <div>
        <Heading6 className="mb-6">BY INDUSTRY</Heading6>
        <ul className='flex flex-col gap-5 items-start'>
        {
            data.byIndustry.map((item)=>(
                <li key={item.id}>
                    <a
                href="#"
                className="text-base text-[var(--color-black)] leading-[1.2] font-normal flex gap-3 items-center"
              >
              <i class="fa-brands fa-leanpub text-4xl"></i>
              <span>{item.name}</span>
              </a>
                </li>
            ))
        }
    </ul>
      </div>
    </div>
  )
}

export default ServicesPanel