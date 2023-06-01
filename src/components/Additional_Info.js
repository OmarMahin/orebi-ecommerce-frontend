import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { TbNumber2 } from 'react-icons/tb'
import { FaTruck } from 'react-icons/fa'
import { SlReload } from 'react-icons/sl'

const Additional_Info = () => {
    return (
        <div className='border border-solid border-[#F0F0F0] mt-[-6px] py-2 sm:py-7'>
            <Container>
                <Flex className={'flex justify-between'}>
                    <Flex className={'flex gap-x-1 sm:gap-x-4 items-center'}>
                        <TbNumber2 className='text-[10px] sm:text-2xl' />
                        <p className='font-dm-sans font-regular text-[10px] sm:text-base text-[#6D6D6D]'>Two years warranty</p>
                    </Flex>
                    <Flex className={'flex gap-x-1 sm:gap-x-4 items-center'}>
                        <FaTruck className='text-[10px] sm:text-2xl' />
                        <p className='font-dm-sans font-regular text-[10px] sm:text-base text-[#6D6D6D]'>Free shipping</p>
                    </Flex>
                    <Flex className={'flex gap-x-1 sm:gap-x-4 items-center'}>
                        <SlReload className='text-[10px] sm:text-2xl' />
                        <p className='font-dm-sans font-regular text-[10px] sm:text-base text-[#6D6D6D]'>Return policy in 30 days</p>
                    </Flex>


                </Flex>
            </Container>

        </div>

    )
}

export default Additional_Info