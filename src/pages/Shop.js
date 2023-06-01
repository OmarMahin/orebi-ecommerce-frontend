import React, { useState, useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import Flex from '../components/Flex'
import LeftSidebar from '../components/LeftSidebar'
import Paginate from '../components/Paginate'
import SelectDropdown from '../components/SelectDropdown'
import { category, color, brands, price } from '../data/data'
import { BiArrowBack } from 'react-icons/bi'
import { FiArrowRight } from 'react-icons/fi'

const Shop = () => {

    let [showProduct, setShowProduct] = useState(12)
    let [showShopSidebar, setShowShopSidebar] = useState(true)

    useEffect(() => {
        function changeWidth() {
            if (window.innerWidth < 575) {
                setShowShopSidebar(false)
            }
            else {
                setShowShopSidebar(true)
            }
        }

        changeWidth()

        window.addEventListener('resize', changeWidth)
    }, [])


    return (
        <div>
            <Container>
                <Breadcrumb name="Products" />
                <Flex className='flex gap-x-10 relative'>

                    {!showShopSidebar && 
                    <FiArrowRight className='ml-2 mt-2 text-2xl rounded-full bg-matt text-white p-1 cursor-pointer block sm:hidden' onClick={() => (
                        setShowShopSidebar(true)
                    )} />
                    }

                    {showShopSidebar && <div className='flex justify-between absolute top-0 left-[0%] w-[100%] h-[100%] sm:w-[25%] sm-h-[0] sm:static z-20 
                    bg-[#2424246e]'>
                        <div className='bg-white w-[60%] sm:w-[100%] pr-2'>

                            <LeftSidebar categoryDropdown={false} title='Shop by Category' data={category} />
                            <LeftSidebar categoryDropdown={true} title='Shop by Color' data={color} />
                            <LeftSidebar categoryDropdown={true} title='Shop by Brand' data={brands} />
                            <LeftSidebar categoryDropdown={true} title='Shop by Price' data={price} />
                        </div>
                        <BiArrowBack className='mr-2 mt-2 text-xl rounded-full bg-matt text-white p-1 cursor-pointer block sm:hidden' onClick={() => (
                            setShowShopSidebar(false)
                        )} />

                    </div>}

                    <div className='w-full sm:w-[75%] relative'>
                        <Flex className='flex flex-wrap justify-end gap-x-5 md:gap-x-10 mb-16 gap-y-2'>


                            <SelectDropdown text={"Short-by:"} category={['Featured', 'UA', 'USA']}
                                className={"w-[139px] lg:w-[239px] h-9  border border-[#F0F0F0]  font-regular font-dm-sans text-base text-nav-text focus:border-black block py-1 pl-5"} />

                            <SelectDropdown text={"Short:"} category={[12, 21, 30]}
                                className={"w-[139px] h-9  border border-[#F0F0F0]  font-regular font-dm-sans text-base text-nav-text focus:border-black block py-1 pl-5"}
                                onChange={(e) => {
                                    setShowProduct(Number(e.target.value))

                                }} />

                        </Flex>



                        <Paginate itemsPerPage={showProduct} />
                        <div>

                        </div>
                    </div>

                </Flex>
            </Container>
        </div>
    )
}

export default Shop