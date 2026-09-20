import React from 'react'

const Heading5 = ({children, classname}) => {
  return (
   <h5 className={`text-xl font-bold leading-[160%] text-[var(--color-black)] ${classname}`}>{children}</h5>
  )
}

export default Heading5