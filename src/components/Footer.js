import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";
import {FiInstagram} from "react-icons/fi"
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa"
import { Link } from "react-router-dom";
import FooterItems from "./FooterItems";

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex flex-wrap gap-y-10">
          <div className="w-[33%] md:w-[13%]">
            <h4 className="mb-4 font-dm text-sm lg:text-base font-bold">MENU</h4>
            <List>
              <FooterItems name='Home' link='#'/>
              <FooterItems name='Shop' link='#'/>
              <FooterItems name='About' link='#'/>
              <FooterItems name='Contact' link='#'/>
              <FooterItems name='Journal1' link='#'/>
            </List>
          </div>
          <div className="w-[33%] md:w-[13%]">
            <h4 className="mb-4 font-dm text-sm lg:text-base font-bold">SHOP</h4>
            <List>
            <FooterItems name='Category1' link='#'/>
              <FooterItems name='Category2' link='#'/>
              <FooterItems name='Category3' link='#'/>
              <FooterItems name='Category4' link='#'/>
              <FooterItems name='Category5' link='#'/>
            </List>
          </div>
          <div className="w-[33%] md:w-[13%]">
            <h4 className="mb-4 font-dm text-sm lg:text-base font-bold">HELP</h4>
            <List>
            <FooterItems name='Privacy Policy' link='#'/>
              <FooterItems name='Terms & Conditions' link='#'/>
              <FooterItems name='Special E-shop' link='#'/>
              <FooterItems name='Shipping' link='#'/>
              <FooterItems name='Secure Payments' link='#'/>
            </List>
          </div>
          <div className="flex w-1/2 md:w-[30%] justify-center">
            <div>
              <h4 className="mb-4 font-dm text-sm lg:text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-xs lg:text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-1/4 md:w-[30%] ml-10 md:ml-0">
            <Image source="logo.png" className='md:w-28' />
          </div>
        </Flex>
        <Flex className='flex justify-between items-center mt-16'>
            <div>
                <Flex className='flex'>
                    <Link to='#'>
                    <FaFacebookF className="text-base text-matt mr-4 md:mr-6"/>
                    </Link>
                    <Link to='#'>
                    <FaLinkedinIn className="text-base text-matt mr-4 md:mr-6"/>
                    </Link>
                    <Link to='#'>
                    <FiInstagram className="text-base text-matt mr-6"/>
                    </Link>
                    
                    
                </Flex>
            </div>
            <div>
                <p className="font-dm-sans font-regular text-sm text-nav-text">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;