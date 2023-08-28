import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";
import { Grid } from "@mui/material";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import { useMemo } from "react";
import ButtonPrimary from "../misc/ButtonPrimary";
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      {" "}
      <div style={{ backgroundColor: "white", padding: 10 }}>
        <ScrollAnimationWrapper className="relative w-full mt-4 mb-6">
          <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
            <div className="  w-full">
              <p className="text-black-600 mb-4 font-semibold text-xl  text-center">
                Thông tin liên hệ
              </p>
              <p className="text-center w-full mb-4">
                Công TY TNHH THƯƠNG MẠI DỊCH VỤ VỆ SINH TRƯỜNG VŨ
              </p>
            </div>
            <Grid container justifyContent={"center"}>
              <ButtonPrimary>0933.487.304</ButtonPrimary>
            </Grid>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
        <Grid container justifyContent={"center"}>
          <div
            className="  w-full lg:w-1/2 justify-center"
            style={{ maxWidth: 400 }}
          >
            <Image
              src="/assets/logo-main.png"
              alt="logo"
              objectFit="contain"
              layout="responsive"
              quality={100}
              height={"30%"}
              width={"100%"}
            />
          </div>
        </Grid>
        <p className="mb-12 px-4" style={{ textAlign: "justify" }}>
          <strong className="font-medium"> Vệ Sinh Trường Vũ </strong>
          là một công ty chuyên cung cấp các dịch vụ vệ sinh chất lượng cao cho
          các hộ gia đình, doanh nghiệp và cơ quan nhà nước. Chúng tôi có đội
          ngũ nhân viên được đào tạo bài bản, nhiệt tình và trách nhiệm. Chúng
          tôi sử dụng các thiết bị hiện đại và các hóa chất an toàn cho sức khỏe
          và môi trường. Công ty TNHH Dịch Vụ Vệ Sinh Trường Vũ - Đối tác tin
          cậy của bạn trong lĩnh vực vệ sinh.
        </p>
      </div>
      <Grid
        container
        spacing={2}
        style={{
          padding: "0 10px 80px",
          backgroundColor: "green",
        }}
      >
        <Grid item xs={12} md={6}>
          <div style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            {" "}
            Chi nhánh 1
          </div>
          <div>Địa chỉ: 34 Tô ký - Tân Chánh Hiệp - Quân 12</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            {" "}
            Chi nhánh 2
          </div>
          <div>Địa chỉ: 230 Cộng Hòa - Tân Bình - TP Hồ Chí Minh</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            {" "}
            Chi nhánh 3
          </div>
          <div>Địa chỉ: 1256 Kha Vạn Cân - Linh Tây - TP Thủ Đức</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            {" "}
            Chi nhánh 4
          </div>
          <div>
            Địa chỉ: 25 Lê Quang Định - Phường 6 - Bình Thạnh - TP Hồ Chí Minh
          </div>
        </Grid>
      </Grid>
      <div
        className="bg-white-300   px-4"
        style={{ backgroundColor: "black", color: "white !important" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container justifyContent={"left"}>
              <div>
                <p
                  className="  mb-4 font-semibold text-xl"
                  style={{ color: "white" }}
                >
                  VỀ CHÚNG TÔI
                </p>
                <ul className="text-black-500 ">
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Tại sao chọn Vệ Sinh Trường Vũ?
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Đạo đức kinh doanh
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Tiêu chí bán hàng
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Cam kết dịch vụ
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Chính sách bảo hành
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Phản ánh yêu cầu
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Tuyển dụng nhân sự
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container justifyContent={"left"}>
              <div>
                <p
                  className="text-black-600 mb-4 font-semibold text-lg"
                  style={{ color: "white" }}
                >
                  HỖ TRỢ KHÁCH HÀNG
                </p>
                <ul className="text-black-500">
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Đánh giá về Vệ Sinh Trường Vũ
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Mức giảm giá niêm yết
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Hướng dẫn đặt lịch
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Chính sách giao nhân
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Hướng dẫn thanh toán
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Bảo mật thông tin
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container justifyContent={"left"}>
              <div>
                <p
                  className="text-black-600 mb-2 font-semibold text-lg"
                  style={{ color: "white" }}
                >
                  KẾT NỐI VỚI CHÚNG TÔI
                </p>
                <ul className="text-black-500">
                <li>
                    <Grid container >
                      <div>
                        <div className="flex w-full mt-1 mb-4  ">
                          <div className="mx-1 bg-white-500 rounded-full items-center justify-center flex p-1 shadow-md">
                            <Facebook className="h-6 w-6" />
                          </div>
                          <div className="mx-1 bg-white-500 rounded-full items-center justify-center flex p-1 shadow-md">
                            <Twitter className="h-6 w-6" />
                          </div>
                          <div className="mx-1 bg-white-500 rounded-full items-center justify-center flex p-1 shadow-md">
                            <Instagram className="h-6 w-6" />
                          </div>
                          <div className="mx-1 bg-white-500 rounded-full items-center justify-center flex p-1 shadow-md">
                            <YouTubeIcon style={{color: 'red'}} />
                          </div>
                        </div>{" "}
                      </div>
                    </Grid>
                  </li>
                  
                  <li>
                    <p
                      className="text-black-600  font-semibold text-lg"
                      style={{ color: "white", fontSize: 15 }}
                    >
                      CHẤP NHẬN THANH TOÁN
                    </p>
                    <Grid container  >
                      <div>
                        <div className="flex w-full mt-2 mb-4  ">
                          <div className="mx-2   rounded-full items-center justify-center flex   shadow-md">
                            <div style={{ width: 50, height: 40 }}>
                              <Image
                                src="/assets/visa.png"
                                alt="logo"
                                objectFit="contain"
                                layout="responsive"
                                quality={100}
                                height={40}
                                width={50}
                              />
                            </div>
                          </div>
                          <div className="    rounded-full items-center justify-center flex  shadow-md">
                          <div style={{ width: 50, height: 40 }}>
                              <Image
                                src="/assets/bank-transfer.png"
                                alt="logo"
                                objectFit="contain"
                                layout="responsive"
                                quality={100}
                                height={40}
                                width={50}
                              />
                            </div>
                          </div>
                          <div className="mx-1   rounded-full items-center justify-center flex   shadow-md">
                          <div style={{ width: 50, height: 40 }}>
                              <Image
                                src="/assets/card.png"
                                alt="logo"
                                objectFit="contain"
                                layout="responsive"
                                quality={100}
                                height={40}
                                width={50}
                              />
                            </div>
                          </div>
                          <div className="mx-1   rounded-full items-center justify-center flex   shadow-md">
                          <div style={{ width: 50, height: 40 }}>
                              <Image
                                src="/assets/paypal.png"
                                alt="logo"
                                objectFit="contain"
                                layout="responsive"
                                quality={100}
                                height={40}
                                width={50}
                              />
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </Grid>
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Điện thoại: 0933.487.304
                  </li>
                  <li
                    className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                    style={{ color: "white" }}
                  >
                    Địa chỉ: 34 Tô ký - Tân Chánh Hiệp - Quân 12
                  </li>
                  
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
