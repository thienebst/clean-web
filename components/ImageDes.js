import Image from "next/image";
import React from "react";

const ImageDes = ({ src, title }) => {
  return (
    <div style={{ marginTop: 20, textAlign: 'center' }}>
      <Image src={src} width={"350px"} height={"220px"} alt="Free Plan" />
      <div style={{ width: "100%", textAlign: "center" }}>{title}</div>
    </div>
  );
};

export default ImageDes;
