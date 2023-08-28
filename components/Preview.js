import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Preview = ({
  listTestimoni = [
    {
      name: "chị Yến",
      image: "/assets/u1.gif",
      city: "Công ty Khánh Hội",
      country: "Poland",
      rating: "4.5",
      testimoni:
      "Công ty chúng tôi được chăm sóc toàn diện bởi Vệ Sinh Trường Vũ. Đơn vị cung cấp giải pháp làm sạch và chăm sóc đồ nội thất thật sự hiệu quả, uy tín 🥰🥰",
    },
    {
      name: "anh Tiến",
      image: "/assets/u2.jpg",

      city: "Văn Phòng VPCT",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Tôi đã sử dụng dịch vụ ở đây hơn 5 năm cho văn phòng của mình và tôi cực kì tin tưởng vào chất lượng, tinh thần phục vụ của Vệ Sinh Trường Vũ.",
    },
    {
      name: "anh Minh",
      image: "/assets/u3.jpg",

      city: "Công ty Việt Á",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Rất chuyên nghiệp từ dịch vệ sinh của Vệ Sinh Trường Vũ, từ tư vấn cho đến công tác làm việc, hy vọng sẽ hợp tác và làm việc lâu dài cùng với các bạn.",
    },
    
    // {
    //   name: "iezh Robert",
    //   image: "/assets/u5.jpg",

    //   city: "Warsaw",
    //   country: "Poland",
    //   rating: "4.5",
    //   testimoni:
    //     "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    // },
    {
      name: "anh Huy",
      image: "/assets/u4.jpg",

      city: "Chung cư Đông PHương",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Tôi đã làm việc cùng với rất nhiều dịch vụ vê sinh nhưng Vệ Sinh Trường Vũ vẫn là đối tác mà tôi tin tưởng và sử dụng dịch vụ của họ.",
    },
  ],
}) => {
  const settings = {
    dots: false,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch h-80 "
    
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="  flex items-stretch p-1" key={index}  style={{ width: 280  }}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-4 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1" >
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                    style={{borderRadius: '50%'}}
                    objectFit="cover"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city} 
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  {/* <p className="text-sm">{5}</p> */}
                  <span className="flex ml-4 my-2">
                    <Stars className="h-4 w-4" />
                    <Stars className="h-4 w-4" />
                    <Stars className="h-4 w-4" />
                    <Stars className="h-4 w-4" />
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left" style={{fontStyle: 'italic', minHeight: 150}}>“{listTestimonis.testimoni}”.</p>
              
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-6">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
