import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Grid } from "@mui/material";
import Link from "next/link";
import Preview from "./Preview";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="  w-full py-4" id="pricing">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black-600 leading-relaxed"
            >
              Các loại dịch vụ
            </motion.h3>
          </ScrollAnimationWrapper>
          <Grid
            container
            alignContent={"center"}
            alignItems={"center"}
            className="mt-4"
            spacing={2}
          >
            <Grid item className="w-full" xs={12} md={6} lg={4}>
              <ScrollAnimationWrapper>
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4   lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="  lg:p-0   lg:mt-16">
                    <Image
                      src="/assets/sofa.jpg"
                      width={200}
                      height={165}
                      alt="Free Plan"
                    />
                  </div>
                  <p className="text-lg text-black-600 font-semibold capitalize my-2 sm:my-7">
                    Vệ sinh Sofa
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Giặt sofa da thật
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt sofa da lộn
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt sofa da simili
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt sofa ngoại cỡ
                    </li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-2 flex-none mt-2 px-2">
                    <p
                      className="text-2xl text-black-600 text-center mb-4 "
                      style={{ color: "red" }}
                    >
                      Chỉ từ 250k
                    </p>
                    <ButtonOutline>
                      <Link href={"/sofa"}>Xem ngay</Link>
                    </ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </Grid>
            <Grid item className="w-full" xs={12} md={6} lg={4}>
              <ScrollAnimationWrapper>
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl   px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/nem.jpg"
                      width={250}
                      height={165}
                      alt="Free Plan"
                    />
                  </div>
                  <p className="text-lg text-black-600 font-semibold capitalize my-2 sm:my-7">
                    Vệ sinh Nệm
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Giặt nệm kymdan
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt nệm cao su
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt nệm lò xo
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt nêm bông ép
                    </li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-6 flex-none mt-2">
                    <p
                      className="text-2xl text-black-600 text-center mb-4 "
                      style={{ color: "red" }}
                    >
                      Chỉ từ 250k
                    </p>
                    <ButtonOutline>
                      <Link href={"/nem"}>Xem ngay</Link>
                    </ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </Grid>
            <Grid item className="w-full" xs={12} md={6} lg={4}>
              <ScrollAnimationWrapper>
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl   px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/tham.jpg"
                      width={250}
                      height={165}
                      alt="Free Plan"
                    />
                  </div>
                  <p className="text-lg text-black-600 font-semibold capitalize my-2 sm:my-7">
                    Vệ sinh Thảm
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Giặt thảm văn phòng
                    </li>
                    <li className="relative check custom-list my-2">
                      Giảm thảm sofa
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt thảm lông
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt thảm trang trí
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt thảm ngoại cỡ
                    </li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-6 flex-none mt-2">
                    <p
                      className="text-2xl text-black-600 text-center mb-4 "
                      style={{ color: "red" }}
                    >
                      Chỉ từ 5m/m2
                    </p>
                    <ButtonOutline><Link href={"/tham"}>Xem ngay</Link></ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </Grid>
            <Grid item className="w-full" xs={12} md={6} lg={4}>
              <ScrollAnimationWrapper>
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl   px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/topper.jpg"
                      width={250}
                      height={165}
                      alt="Free Plan"
                    />
                  </div>
                  <p className="text-lg text-black-600 font-semibold capitalize my-2 sm:my-7">
                    Giặt TOPPER
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Giặt topper vải
                    </li>
                    <li className="relative check custom-list my-2">
                      Giảm topper lụa
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt topper coton
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt topper bông ép
                    </li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-6 flex-none mt-2">
                    <p
                      className="text-2xl text-black-600 text-center mb-4 "
                      style={{ color: "red" }}
                    >
                      Chỉ từ 250k
                    </p>
                    <ButtonOutline><Link href={"/topper"}>Xem ngay</Link></ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </Grid>
            <Grid item className="w-full" xs={12} md={6} lg={4}>
              <ScrollAnimationWrapper>
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl   px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/oto.jpg"
                      width={250}
                      height={165}
                      alt="Free Plan"
                    />
                  </div>
                  <p className="text-lg text-black-600 font-semibold capitalize my-2 sm:my-7">
                    Giặt Ghế Ô Tô
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Giặt ghế ô tô thường
                    </li>
                    <li className="relative check custom-list my-2">
                      Giảm ghế ô tô vải
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt ghế ô tô nỉ
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt ghế ô tô da
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt ghế ô tô nhung
                    </li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-6 flex-none mt-2">
                    <p
                      className="text-2xl text-black-600 text-center mb-4 "
                      style={{ color: "red" }}
                    >
                      Chỉ từ 400k
                    </p>
                    <ButtonOutline><Link href={"/car"}>Xem ngay</Link></ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </Grid>
            <Grid item className="w-full" xs={12} md={6} lg={4}>
              <ScrollAnimationWrapper>
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl   px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/vanphong.jpg"
                      width={250}
                      height={165}
                      alt="Free Plan"
                    />
                  </div>
                  <p className="text-lg text-black-600 font-semibold capitalize my-2 sm:my-7">
                    Giặt Ghế Văn Phòng
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Giặt ghế văn phòng thường
                    </li>
                    <li className="relative check custom-list my-2">
                      Giảm ghế văn phòng vải
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt ghế văn phòng nỉ
                    </li>
                    <li className="relative check custom-list my-2">
                      Giặt ghế văn phòng da
                    </li>
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-6 flex-none mt-2">
                    <p
                      className="text-2xl text-black-600 text-center mb-4 "
                      style={{ color: "red" }}
                    >
                      Chỉ từ 25k/cái
                    </p>
                    <ButtonOutline><Link href={"/office"}>Xem ngay</Link></ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </Grid>
          
          </Grid>
        </div>
        <div className="flex flex-col w-full "></div>
        <div className="flex flex-col w-full mt-10" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
              style={{color: 'red'}}
            >
              Thiết bị công nghệ vệ sinh
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
             
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full mt-10" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className=" font-semibold text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
              style={{color: 'red', fontSize: 20}}
            >
              5 Cam Kết Vàng Của Vệ Sinh Trường Vũ    
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
             
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col">
            <motion.div variants={scrollAnimation}>
            <div style={{ textAlign: 'left', marginBottom: 10, padding: '0 10px'}}><span style={{color: 'red', fontWeight: 'bold'}}>01 Tận Tụy: </span><span>Đội ngũ kĩ thuật viên Vệ Sinh Trường Vũ có kinh nghiệm, trách nhiệm và tận tâm.</span></div>
            <div style={{ textAlign: 'left', marginBottom: 10, padding: '0 10px'}}><span style={{color: 'red', fontWeight: 'bold'}}>02 Tận Tụy: </span><span>Đầy đủ thân thiện và đem lại sự hài lòng cho khách hàng.</span></div>
            <div style={{ textAlign: 'left', marginBottom: 10, padding: '0 10px'}}><span style={{color: 'red', fontWeight: 'bold'}}>03 Tận Tụy: </span><span>Giải pháp linh hoạt phù hợp cho từng công trình.</span></div>
            <div style={{ textAlign: 'left', marginBottom: 10, padding: '0 10px'}}><span style={{color: 'red', fontWeight: 'bold'}}>04 Tận Tụy: </span><span>Khoa học, nhanh chóng, tận dụng thời gian tối đa.</span></div>
              <div style={{ textAlign: 'left', marginBottom: 10, padding: '0 10px'}}><span style={{color: 'red', fontWeight: 'bold'}}>05 Tận Tụy: </span><span>Được khách hàng bình chọn vượt trội và uy tín.</span></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full mt-10" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
              style={{color: 'red'}}
            >
              Phản hồi từ khách hàng
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Chúng tôi sẽ rất vui khi đảm nhận việc thực hiện một dự án ở bất
              kỳ mức độ phức tạp nào. Chúng tôi đảm bảo chất lượng công việc và
              có nhiều năm kinh nghiệm trong lĩnh vực vệ sinh.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col">
            <motion.div variants={scrollAnimation}>
              <Preview />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
