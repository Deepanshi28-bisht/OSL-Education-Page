import React from 'react'

const ParagraphSm = ({ children, classname }) => {
    return (
        <p className={`w-full max-w-[650px] opacity-[70%] text-sm font-normal leading-[180%] text-[var(--color-black)] ${classname}`}>
            {children}
        </p>
    )
}

export default ParagraphSm