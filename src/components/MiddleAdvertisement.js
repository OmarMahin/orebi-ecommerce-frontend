import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Image from './Image'

const MiddleAdvertisement = () => {
    return (
        <div className='mt-20 md:mt-32'>
            <Container>
                <Link to='#'>
                    <Image source={'middleAdvertisement.png'}></Image>
                </Link>
            </Container>
        </div>
    )
}

export default MiddleAdvertisement