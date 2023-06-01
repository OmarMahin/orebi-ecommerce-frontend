import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'

const Advertise = () => {
    return (
        <div className='mt-4 md:mt-36'>        
            <Container>
            <Flex className='flex gap-x-5 md:gap-x-10'>
                <div className='max-w-2/4'>
                    <Link to="#">
                        <Image source={'ad1.png'}></Image>
                    </Link>
                </div>
                <div className='max-w-2/4'>
                    <Link to="#" >
                        <Image source={'ad2.png'}></Image>
                    </Link>
                    <Link to="#" className='mt-2 md:mt-10 inline-block'>
                        <Image source={'ad2.png'}></Image>
                    </Link>
                </div>
                
            </Flex>
        </Container>

        </div>
        
    )
}

export default Advertise