import React, { useState } from 'react'
import Flex from './Flex'
import { AiFillCaretDown, AiFillCaretUp, AiOutlineMinus } from 'react-icons/ai'
import LeftSidebarItems from './LeftSidebarItems'

const LeftSidebar = ({ categoryDropdown, title, data }) => {

    let [cDropdown, setCDropdown] = useState(categoryDropdown)
    let [show, setShow] = useState(categoryDropdown)

    return (
        <div className='mb-12 '>
            {
                cDropdown ?

                    <div onClick={() => { setShow(!show) }} className='cursor-pointer flex justify-between items-center mb-4 '>
                        <h3 className='font-dm-sans font-bold text-lg sm:text-xl text-matt'>{title}</h3>
                        {!show ?
                            <AiFillCaretDown className='text-matt' />
                            :
                            <AiFillCaretUp className='text-matt' />
                        }
                    </div>
                    :
                    <h3 className='cursor-pointer font-dm-sans font-bold text-lg sm:text-xl text-matt'>{title}</h3>

            }

            {
                data.map((items) => (
                    <>
                        {show &&
                            <>
                                {
                                    items.subCategory ?

                                        items.subCategory.map((sub_items) => (

                                            <LeftSidebarItems subCategoryDropdown={sub_items.name} title={items.name} color={items.code}>
                                                <div className='ml-5'>
                                                    <h3 className=' py-4 pl-1 border-b border-solid border-[#F0F0F0] font-dm-sans font-regular text-sm sm:text-base text-nav-text'>{sub_items.name}</h3>
                                                </div>
                                            </LeftSidebarItems>

                                        ))
                                        :
                                        <LeftSidebarItems subCategoryDropdown={false} title={items.name} color={items.code}>
                                        </LeftSidebarItems>

                                }

                            </>

                        }

                        {!cDropdown &&
                            <>
                                {
                                    items.subCategory ?

                                        items.subCategory.map((sub_items) => (

                                            <LeftSidebarItems subCategoryDropdown={sub_items.name} title={items.name} color={items.code}>
                                                <div className='ml-5'>
                                                    <h3 className=' py-4 pl-1 border-b border-solid border-[#F0F0F0] font-dm-sans font-regular text-sm sm:text-base text-nav-text'>{sub_items.name}</h3>
                                                </div>
                                            </LeftSidebarItems>

                                        ))
                                        :
                                        <LeftSidebarItems subCategoryDropdown={false} title={items.name} color={items.code}>
                                        </LeftSidebarItems>

                                }
                            </>

                        }
                    </>
                ))
            }


        </div>
    )
}

export default LeftSidebar