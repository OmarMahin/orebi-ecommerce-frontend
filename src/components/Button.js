import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button className='w-[120px] sm:w-[200px] py-3 sm:py-4 bg-matt text-white font-dm-sans font-bold text-xs sm:text-sm'>
            {title}
        </button>
    </div>
  )
}

export default Button