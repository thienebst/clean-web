import React, { useEffect, useState } from "react";
// Import react scroll
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import ResponsiveDrawer from "./SiderBarApp";
import Link from "next/link";
import { Grid } from "@mui/material";

const Header = () => {
  const [activeLink, setActiveLink]= useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
     
      <header
        className={
          "sticky top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-0")
        }
        
      > 
      
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col  ">
        
        <div  className=" items-center flex justify-center relative">
          <div className="absolute left-0 z-10"> 
              <ResponsiveDrawer/> 
            </div>
               <div style={{width: 250}}><Image
                src="/assets/logo-main.png"
                alt="logo"
                objectFit={'contain'}
                layout="responsive"
                quality={100}
                height={140}
                width={600}
              /></div>
            </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-700  items-center font-semibold"   >
          <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={0}
              onSetActive={() => {
               
              }}
              className={
                " py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-700 hover:text-orange-500 ")
              }
            >
                <Link href={'/'}>Trang Chủ</Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={0}
              onSetActive={() => {
                
              }}
              className={
                " py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-700 hover:text-orange-500 a")
              }
             
            >
              <Link href={'/sofa'}>Giặt Sofa</Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={0}
              onSetActive={() => {
                
              }}
              className={
                " py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-500 animation-active "
                  : " text-black-700 hover:text-orange-500 ")
              }
            >
               <Link href={'/nem'}>Giặt Nệm</Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={0}
              onSetActive={() => {
                
              }}
              className={
                " py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active "
                  : " text-black-700 hover:text-orange-500 ")
              }
            >
               <Link href={'/tham'}> Giặt thảm</Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={0}
              onSetActive={() => {
               
              }}
              className={
                " py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-700 hover:text-orange-500 ")
              }
            >
                <Link href={'/topper'}>Giặt Topper</Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={0}
              onSetActive={() => {
               
              }}
              className={
                " py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-700 hover:text-orange-500 ")
              }
            >
             <Link href={'/car'}>  Giặt Ghế Ô Tô </Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={0}
              onSetActive={() => {
               
              }}
              className={
                " py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-700 hover:text-orange-500 ")
              }
            >
               <Link href={'/office'}>  Giặt Ghế Văn Phòng</Link>
            </LinkScroll>
           
          </ul>
          {/* <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Sign In
              </a>
            </Link>
            <ButtonOutline>Sign Up</ButtonOutline>
          </div> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
