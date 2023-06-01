import React, { useState } from 'react'
import Flex from './Flex'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const LeftSidebarItems = (props) => {
    let [subCDropdown, setSubCDropdown] = useState(props.subCategoryDropdown)
    let [show, setShow] = useState(false)

    return (
        <div>
            {
                subCDropdown ?

                    <div onClick={() => { setShow(!show) }} className=' flex justify-between items-center cursor-pointer border-b border-solid border-[#F0F0F0]'>
                        {
                            props.color ?

                            <Flex className='flex items-center'>
                                <div className={`w-3 h-3 rounded-full bg-[${props.color}] mr-3`}>
                                </div>
                                <h3 className='font-dm-sans font-regular text-sm sm:text-base text-nav-text py-5'>{props.title}</h3>
                            </Flex>
                            :
                            <h3 className='font-dm-sans font-regular text-sm sm:text-base  text-nav-text py-5'>{props.title}</h3>
                        }
                        
                        {!show ?
                            <AiOutlinePlus className='text-nav-text mt-2 text-sm sm:text-base ' />
                            :
                            <AiOutlineMinus className='text-nav-text mt-2 text-sm sm:text-base ' />
                        }
                    </div>
                    :


                    props.color ?

                        <Flex className='flex items-center border-b border-solid border-[#F0F0F0]'>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-3" style={{backgroundColor: `${props.color}`}}>
                            </div>
                            <h3 className='cursor-pointer font-dm-sans font-regular text-sm sm:text-base  text-nav-text py-5 border-b border-solid border-[#F0F0F0]'>{props.title}</h3>
                        </Flex>
                        :
                        <h3 className='cursor-pointer font-dm-sans font-regular text-sm sm:text-base  text-nav-text py-5 border-b border-solid border-[#F0F0F0]'>{props.title}</h3>


            }
            {show &&
                <>
                    {props.children}
                </>

            }

        </div>
    )
}

export default LeftSidebarItems