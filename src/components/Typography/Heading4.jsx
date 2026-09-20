import React from 'react'

const Heading4 = ({children,classname}) => {
  return (
    <h4 className={`text-2xl text-[var(--color-black)] leading-[150%] font-bold ${classname}`}>{children}</h4>
  )
}

export default Heading4