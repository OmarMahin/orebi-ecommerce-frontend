import React from 'react'
import Image from './Image'
import ImageBadge from './ImageBadge'
import { AiFillHeart } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'
import { TfiReload } from 'react-icons/tfi'
import Flex from './Flex'

const Product = ({ src, showBadge, title, productName, productPrice, category }) => {
    return (
        <div className='mx-5'>

            <div className='group relative overflow-y-hidden'>
                <Image className='w-full' source={src} ></Image>
                {showBadge && <ImageBadge title={title}></ImageBadge>}
                <div className=' bg-white w-full h-[40%] md:h-[50%] absolute bottom-[-70%] left-0 group-hover:bottom-0 ease-in duration-200 pr-2 flex flex-col justify-between'>
                    <Flex className={'flex gap-x-1 sm:gap-x-4 items-center justify-end mt-2 sm:mt-5 xl:mt-7'}>
                        <p className='font-dm-sans font-regular text-[10px] sm:text-sm xl:text-base text-[#6D6D6D] hover:text-matt hover:font-bold'>Add to Wish List</p>
                        <AiFillHeart className='text-[10px] sm:text-sm xl:text-xl text-matt' />
                    </Flex>
                    <Flex className={'flex gap-x-1 sm:gap-x-4 items-center justify-end '}>
                        <p className='font-dm-sans font-regular text-[10px] sm:text-sm xl:text-base text-[#6D6D6D] hover:text-matt hover:font-bold'>Compare</p>
                        <TfiReload className='text-[10px] sm:text-sm xl:text-xl text-matt' />
                    </Flex>
                    <Flex className={'flex gap-x-1 sm:gap-x-4 items-center justify-end  '}>
                        <p className='font-dm-sans font-regular text-[10px] sm:text-sm xl:text-base text-[#6D6D6D] hover:text-matt hover:font-bold '>Add to Cart</p>
                        <BsCartFill className='text-[10px] sm:text-sm xl:text-xl text-matt' />
                    </Flex>
                </div>
            </div>
            <div>
                <Flex className='flex justify-between items-center mb-4'>
                    <h3 className='font-dm-sans font-bold text-sm lg:text-xl text-matt mt-6'>{productName}</h3>
                    <p className='font-dm-sans font-regular text-xs lg:text-base text-nav-text mt-6'>{productPrice}</p>
                </Flex>
                <p className='font-dm-sans font-regular text-xs lg:text-base text-nav-text'>{category}</p>
            </div>
        </div>
    )
}

export default Product