import React from 'react'

const ImageBadge = ({title}) => {
  return (
    <span className='bg-matt text-white font-dm-sans font-bold text-xs xl:text-sm py-1 px-4 xl:py-2 xl:px-8 absolute top-5 left-5'>{title}</span>
  )
}

export default ImageBadge