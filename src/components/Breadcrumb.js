import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <div className='mt-28 mb-20'>
            <h1 className='font-dm-sans font-bold text-5xl text-matt '>{window.location.pathname.split('/')[1].charAt(0).toUpperCase() + window.location.pathname.split('/')[1].slice(1)}</h1>
            <p className='flex items-center font-dm-sans font-regular text-sm text-nav-text mt-3 gap-x-2'>
                
                <Link to = '/'>Home</Link>
                 <FaAngleRight/> {window.location.pathname.split('/')[1]}  
            </p>
        </div>
    )
}

export default Breadcrumb