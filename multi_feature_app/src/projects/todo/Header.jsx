import React from 'react'

const Header = ({title}) => {
  return (
    <div className="bg-black text-white h-16 flex items-center justify-center text-2xl font-bold">
        {title}
    </div>
  )
}

export default Header