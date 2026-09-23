import React, { useState } from 'react'
import PrimaryButton from '../components/Button';

const SolutionsPanel = ({ data }) => {
    console.log("data///", data);

    const [active, setActive] = useState(data[0]);
    return (
        <div className='flex gap-20 items-start'>
            <ul className='flex flex-col gap-5 items-start'>
                {
                    data.map((item) => (
                        <li key={item.id}>
                            <button
                                onMouseEnter={() => setActive(item)}
                                onClick={() => setActive(item)}
                                className={`text-base  leading-[1.2] font-light ${active.id === item.id ? "text-blue-600" : "text-[var(--color-black)]"}`}
                            >
                                {item.title}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className='flex flex-col gap-4 items-start'>
                <p className='text-sm  leading-[1.2] font-light text-[var(--color-black)]'>{active.description}</p>
                <div className='w-full max-w-[510px]'>
                    <img src={active.image} alt={active.title} className='h-full w-full' />
                </div>
                <PrimaryButton>Explore More</PrimaryButton>
            </div>
        </div>
    )
}

export default SolutionsPanel