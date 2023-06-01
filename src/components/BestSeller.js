
import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Product from './Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'

const BestSeller = () => {


    function PrevArrowIcon(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    position: 'absolute',
                    top: '35%',
                    left: '0',
                    zIndex: '2',
                    transform: 'TranslateY(-50%)'
                }}
                onClick={onClick}
            >
                <div className='px-3 py-3 lg:px-7 lg:py-7 bg-[#979797] rounded-full'>
                    <HiArrowNarrowLeft className='text-white' />

                </div>

            </div>
        );
    }

    function NextArrowIcon(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    position: 'absolute',
                    top: '35%',
                    right: '0',
                    zIndex: '2',
                    transform: 'TranslateY(-50%)'
                }}
                onClick={onClick}
            >
                <div className='px-3 py-3 lg:px-7 lg:py-7 bg-[#979797] rounded-full'>
                    <HiArrowNarrowRight className='text-white' />

                </div>

            </div>
        );
    }

    const settings = {
        arrows: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrowIcon />,
        nextArrow: <NextArrowIcon />,
        mobileFirst: true,


        responsive: [
            {
                breakpoint: 481,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },

            {
                breakpoint: 769,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,


                }
            },

            {
                breakpoint: 1025,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 1,


                }
            },
        ]

    }



    return (
        <div className='mt-32'>
            <Container>
                <Heading title='Best Sellers'></Heading>

            </Container>
            <div className='mx-auto px-2.5'><Slider {...settings}>
                <div className='max-w-[370px]'>
                    <Product src='p1.png' showBadge={true} title='New' productName='Basic Crew Neck Tee' productPrice='$44.00' category='Black'></Product>
                </div>
                <div className='max-w-[370px]'>
                    <Product src='p1.png' showBadge={true} title='New' productName='Basic Crew Neck Tee' productPrice='$44.00' category='Black'></Product>
                </div>
                <div className='max-w-[370px]'>
                    <Product src='p1.png' showBadge={false} title='New' productName='Basic Crew Neck Tee' productPrice='$44.00' category='Black'></Product>
                </div>
                <div className='max-w-[370px]'>
                    <Product src='p1.png' showBadge={false} title='New' productName='Basic Crew Neck Tee' productPrice='$44.00' category='Black'></Product>
                </div>
            </Slider></div>
            
        </div>
    )
}

export default BestSeller