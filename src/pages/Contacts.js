import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import InputBox from '../components/InputBox'
import Flex from '../components/Flex'
import Button from '../components/Button'

const Contacts = () => {
  return (
    <div>
        <Container>
            <Breadcrumb></Breadcrumb>
            <h3 className='font-dm-sans font-bold text-[30px] sm:text-[39px] text-matt'>Fill up a Form</h3>
            <Flex className='flex flex-col gap-y-6 mt-10 mb-8'>

            <InputBox title='Name' text = 'Your name here' type = 'input' className = 'w-[80%]'></InputBox>

            <InputBox title='Email' text = 'Your email here' type = 'email' className = 'w-[80%]'></InputBox>

            <InputBox title='Message' text = 'Your message here' type = 'textarea' className = 'w-[80%]'></InputBox>

            </Flex>
            
            <Button title={'Post'}></Button>
            
        </Container>
    </div>
  )
}

export default Contacts