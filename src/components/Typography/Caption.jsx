import React from 'react'

const Caption = ({children,className}) => {
  return (
   <p className={`text-xs font-normal leading-[120%] opacity-70 text-[var(--color-black)] leading-[120%] ${className}`}>{children}</p>
  )
}

export default Caption