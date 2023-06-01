import React from 'react'
import Additional_Info from '../components/Additional_Info'
import Advertise from '../components/Advertise'
import Banner from '../components/Banner'
import BestSeller from '../components/BestSeller'
import MiddleAdvertisement from '../components/MiddleAdvertisement'
import NewArraival from '../components/NewArraival'
import SpecialOffers from '../components/SpecialOffers'

const Home = () => {
  return (
    <>
    <Banner/>
    <Additional_Info/>
    <Advertise/>
    <NewArraival/>
    <BestSeller/>
    <MiddleAdvertisement/>
    <SpecialOffers/>
    </>
  )
}

export default Home