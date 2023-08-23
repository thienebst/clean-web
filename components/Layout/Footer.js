import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";
import { Grid } from "@mui/material";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44   px-4">
      <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
        <Grid container justifyContent={"center"}>
          <div
            className="  w-full lg:w-1/2 justify-center"
            style={{ maxWidth: 400 }}
          >
            <Image
              src="/assets/logo-gray.png"
              alt="logo"
              objectFit="contain"
              layout="responsive"
              quality={100}
              height={"60%"}
              width={"100%"}
            />
          </div>
        </Grid>
        <p className="mb-4">
          <strong className="font-medium"> Vệ Sinh Trường Vũ </strong>
          là một công ty chuyên cung cấp các dịch vụ vệ sinh chất lượng cao cho
          các hộ gia đình, doanh nghiệp và cơ quan nhà nước. Chúng tôi có đội
          ngũ nhân viên được đào tạo bài bản, nhiệt tình và trách nhiệm. Chúng
          tôi sử dụng các thiết bị hiện đại và các hóa chất an toàn cho sức khỏe
          và môi trường. Công ty TNHH Dịch Vụ Vệ Sinh Trường Vũ - Đối tác tin
          cậy của bạn trong lĩnh vực vệ sinh.
        </p>
      </div>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container justifyContent={"left"}>
            <div>
              
              <p className="text-black-600 mb-4 font-semibold text-xl mt-8">
                Về Chúng tôi
              </p>
              <ul className="text-black-500 ">
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Tại sao chọn Vệ Sinh Trường Vũ?
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Đạo đức kinh doanh
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Tiêu chí bán hàng
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Cam kết dịch vụ
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Chính sách bảo hành
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Phản ánh yêu cầu
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Tuyển dụng nhân sự
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container justifyContent={"left"}>
            <div>
            
              <p className="text-black-600 mb-4 font-semibold text-lg">
                Hỗ trợ khách hàng
              </p>
              <ul className="text-black-500">
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Đánh giá về Vệ Sinh Trường Vũ
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Mức giảm giá niêm yết
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Hướng dẫn đặt lịch
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Chính sách giao nhân
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Hướng dẫn thanh toán
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Bảo mật thông tin
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container justifyContent={"left"}>
            <div>
              <p className="text-black-600 mb-4 font-semibold text-lg">
                Kết nối với chúng tôi
              </p>
              <ul className="text-black-500">
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Điện thoại: 0933.487.304
                </li>
                <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                  Địa chỉ: 34 Tô ký - Tân Chánh Hiệp - Quân 12
                </li>
                <li>
                  <Grid container justifyContent={"center"}>
                    <div> 
                      <div className="flex w-full mt-2 mb-8  ">
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                          <Facebook className="h-6 w-6" />
                        </div>
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                          <Twitter className="h-6 w-6" />
                        </div>
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                          <Instagram className="h-6 w-6" />
                        </div>
                      </div>{" "}
                    </div>
                  </Grid>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
