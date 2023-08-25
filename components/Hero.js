import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Grid } from "@mui/material";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-12 px-8 xl:px-16 mx-auto md:mt-40 lg:mt-20 relative" id="about">
       <div className="absolute" style={{top: '-20px', left: 0,width: '100%'}}> <Image
            src="/assets/hoachat.jpg"
            alt="VPN Illustrasi"
            quality={100}
            objectFit="contain"
            width={400}
            height={200}
            layout="responsive"
          /></div>
          <div   className="h-52 md:h-96"></div>
          <div   className="md:h-48"></div>
      <Grid container alignItems={"center"} alignContent={"center"} spacing={1}>
      
        <Grid item className="w-full">
           
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-black-600 leading-normal text-center" style={{color: 'red', fontSize: 18}}>
            DỊCH VỤ VỆ SINH TẠI NHÀ Ở TP.HCM
          </h2>
        </Grid>
        <Grid item className="w-full">
          <p className="font-semibold  mt-4 mb-6 text-center">
            QUÝ KHÁCH AN TÂM VỚI PHƯƠNG CHÂM
            <br />
            “CHÍNH TRỰC – HIỆU QUẢ – CHUYÊN NGHIỆP”
          </p>
        </Grid>
        {/* <Grid item className="w-full">
          <Grid container justifyContent={"center"}>
            <ButtonPrimary>Liên hệ</ButtonPrimary>
          </Grid>
        </Grid> */}
        
      </Grid>
    </div>
  );
};

export default Hero;
