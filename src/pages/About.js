import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

const About = () => {
  return (
    <div>
      <Container>
        <Breadcrumb></Breadcrumb>
        <Flex className='flex gap-y-5 sm:gap-x-10 mt-32 flex-wrap sm:flex-nowrap'>
          <div className='w-full sm:w-2/4 '>
            <Image source='About_Image_button.png'></Image>
          </div>
          <div className='w-full sm:w-2/4 '>
            <Image source='About_Image_button2.png'></Image>
          </div>
        </Flex>

        <h3 className='font-dm-sans text-xl sm:text-[32px] text-matt mt-20 sm:mt-32'>
          Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
        </h3>

        <Flex className='flex mt-16 sm:mt-28 gap-x-10 flex-wrap sm:flex-nowrap gap-y-10'>

          <div className='w-full sm:w-1/3'>
            <h4 className='font-dm-sans font-bold text-[20px] sm:text-[25px] text-matt'>Our Vision</h4>
            <p className='font-dm-sans text-nav-text mt-3 text-sm sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          <div className='w-full sm:w-1/3'>
            <h4 className='font-dm-sans font-bold text-[20px] sm:text-[25px] text-matt'>Our Story</h4>
            <p className='font-dm-sans text-nav-text mt-3 text-sm sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
          </div>

          <div className='w-full sm:w-1/3'>
            <h4 className='font-dm-sans font-bold text-[20px] sm:text-[25px] text-matt'>Our Brands</h4>
            <p className='font-dm-sans text-nav-text mt-3 text-sm sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          </div>

        </Flex>

      </Container>
    </div>
  )
}

export default About