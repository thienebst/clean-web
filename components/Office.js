import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import VerticalLinearStepper from "./VerticalLinearStepper";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import TitleNumber from "./TitleNumber";
import Image from "next/image";
import ImageDes from "./ImageDes";
const rows = [
  {
    col1: "Ghế văn phòng",
    col2: "< 10 ghế ",
    col3: "350.000 đ",
  },
  {
    col1: "Ghế văn phòng",
    col2: "11-100 ghế",
    col3: "35.000 đ",
  },
  {
    col1: "Ghế văn phòng",
    col2: "101-200 ghế ",
    col3: "30.000 đ",
  },
  {
    col1: "Ghế văn phòng",
    col2: "201-300 ghế",
    col3: "27.000 đ",
  },
  {
    col1: "Ghế văn phòng",
    col2: ">400 ghế",
    col3: "Liên hệ",
  },
];
const steps = [
  {
    label: "Hút sạch bụi trên ghế",
    description: `Hút bụi sạch trên ghế bằng máy hút có đính kèm vải bọc`,
  },
  {
    label: "Làm sạch các điểm bẩn",
    description: "Làm ướt khăn lau da và nhẹ nhàng lau sạch bụi trên ghế",
  },
  {
    label: "Kiểm tra chất liệu ghế văn phòng có phù hợp với giặt bằng hơi nước nóng",
    description: `Phun dung dịch vệ sinh ghế da lên một khu vực nhỏ và không dễ thấy trên ghế để kiểm tra xem có gây phai màu hay không`,
  },
  {
    label: "Dùng máy hơi nước nóng",
    description:
      " Dùng con sơn dương để xoa đều dung dịch lên ghế theo hướng xoắn ốc. Sau đó, lau khô bằng khăn sạch",
  },
  {
    label: "Dùng nước xả vải cho ghế văn phòng",
    description:
      "Phun dầu dưỡng da lên ghế để bảo vệ và làm bóng da. Bạn nên chọn loại dầu không chứa sáp, silicone hay dầu mỏ ",
  },
  {
    label: "Dùng máy sấy sấy ghế văn phòng",
    description:
      "Đối với ghế nỉ, bạn cần chuẩn bị máy hút bụi, bình xịt, bột giặt, vải mềm hoặc bông, và bàn chải da lộn (nếu ghế làm từ vải da lộn)",
  },
];
const Office = () => {
  return (
    <div className="mt-12">
      <p className="text-black-600 mb-4 font-semibold text-xl mt-8 text-center px-10">
        Giặt Ghế Văn Phòng Tại Nhà - 30 Phút Có Mặt & Giá Tốt TP HCM
      </p>
      <p
        className="text-black-600 mb-4 font-semibold text-lg mt-8 text-center "
        style={{ color: "red" }}
      >
        BẢNG BÁO GIÁ GIẶT GHẾ VĂN PHÒNG
      </p>
      <TableContainer component={Paper} style={{ padding: 20 }}>
        <Table aria-label="simple table" style={{ border: "solid 1px blue" }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  maxWidth: 50,
                  backgroundColor: "#0d47a1",
                  color: "white",
                  padding: "7px 7px",
                }}
                className="font-semibold"
              >
                STT
              </TableCell>
              <TableCell
                align="right"
                className="font-semibold"
                style={{
                  backgroundColor: "#0d47a1",
                  color: "white",
                  padding: "7px 7px",
                  textAlign: "center",
                }}
              >
                LOẠI GHẾ
              </TableCell>
              <TableCell
                align="right"
                className="font-semibold"
                style={{
                  backgroundColor: "#0d47a1",
                  color: "white",
                  padding: "7px 7px",
                  textAlign: "center",
                }}
              >
                BỘ NHỎ
              </TableCell>
              <TableCell
                align="right"
                className="font-semibold"
                style={{
                  backgroundColor: "#0d47a1",
                  color: "white",
                  padding: "7px 7px",
                  textAlign: "center",
                }}
              >
                BỘ LỚN
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="font-semibold"
                  style={{
                    backgroundColor: index % 2 !== 0 ? "#FFD700" : "",
                    padding: "7px 7px",
                    textAlign: "center",
                  }}
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  align="right"
                  className="font-semibold"
                  style={{
                    backgroundColor: index % 2 !== 0 ? "#FFD700" : "",
                    padding: "7px 7px",
                    textAlign: "center",
                  }}
                >
                  {row.col1}
                </TableCell>
                <TableCell
                  align="right"
                  className="font-semibold"
                  style={{
                    backgroundColor: index % 2 !== 0 ? "#FFD700" : "",
                    padding: "7px 7px",
                    textAlign: "center",
                  }}
                >
                  {row.col2}
                </TableCell>
                <TableCell
                  align="right"
                  className="font-semibold"
                  style={{
                    backgroundColor: index % 2 !== 0 ? "#FFD700" : "",
                    padding: "7px 7px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  {row.col3}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <p
        className="text-black-600 mb-4 font-semibold text-lg mt-8 text-center "
        style={{ color: "red" }}
      >
        QUY TRÌNH GIẶT GHẾ VĂN PHÒNG TẠI NHÀ
      </p>
      <VerticalLinearStepper steps={steps} />
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={1} /> Giặt Ghế văn phòng Vải{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Giặt ghế văn phòng vải là một công việc quan trọng để giữ cho ghế văn phòng luôn
          sạch sẽ, đẹp mắt và bền lâu. Tuy nhiên, không phải ai cũng biết cách
          giặt ghế văn phòng vải đúng cách và hiệu quả. Trong bài viết này, tôi sẽ
          giới thiệu cho bạn một số cách giặt ghế văn phòng vải tại nhà mà bạn có thể
          thực hiện dễ dàng và nhanh chóng.
        </div>
        <ImageDes
          src="/assets/ghe1.jpg"
          title={"Dịch vụ giặt ghế văn phòng TP HCM"}
        />
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Cách giặt ghế văn phòng vải tùy thuộc vào chất liệu và ký hiệu trên nhãn
          mác của ghế. Bạn nên đọc kỹ hướng dẫn của nhà sản xuất trước khi tiến
          hành giặt ghế. Một số ký hiệu thường gặp là:
          <br /> • W: có nghĩa là bạn có thể sử dụng nước để làm sạch ghế văn phòng
          vải.
          <br />  <br />• S: có nghĩa là bạn chỉ có thể sử dụng dung môi hoặc các sản
          phẩm không chứa nước để làm sạch ghế. <br /> <br />• WS hoặc SW: có nghĩa là
          bạn có thể sử dụng bất kỳ phương pháp nào, có thể là giặt nước hoặc
          giặt khô.
        </div>
        <ImageDes
          src="/assets/des21.jpg"
          title={"Dịch vụ giặt ghế văn phòng TP HCM"}
        />
      </div>
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Ghế văn phòng Da{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          Ghế văn phòng da là một loại ghế có bọc ngoài bằng chất liệu da, có thể là
          da thật từ động vật hoặc da công nghiệp như da PU, da microfiber, da
          simili. Ghế văn phòng da có nhiều ưu điểm như:
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Mang lại vẻ sang trọng, đẳng cấp và ấm cúng cho không gian nội thất
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Dễ dàng lau chùi, vệ sinh và bảo quản, không bị ẩm mốc hay bị phai màu
          theo thời gian.
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Có độ bền cao, không bị xù lông hay rách nát như các loại vải khác
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Thoáng mát vào mùa hè và ấm áp vào mùa đông, tạo cảm giác thoải mái
          cho người sử dụng
        </div>

        <ImageDes
          src="/assets/des20.jpg"
          title={"Dịch vụ giặt ghế văn phòng TP HCM"}
        />
      </div>
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Ghế văn phòng Nhung{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          Ghế văn phòng nhung là một loại ghế có bọc ngoài bằng chất liệu nhung, một
          loại vải có bề mặt mềm mịn và lông dày. Ghế văn phòng nhung có nhiều ưu
          điểm như:
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Mang lại cảm giác sang trọng, ấm cúng và thoải mái cho không gian nội
          thất.
          <ImageDes
          src="/assets/ghe2.jpg"
          title={"Dịch vụ giặt TP HCM"}
        />
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Có độ bền cao, không bị xù lông hay phai màu theo thời gian.
          <ImageDes
          src="/assets/des18.jpg"
          title={"Dịch vụ giặt TP HCM"}
        />
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Có nhiều màu sắc và họa tiết đa dạng, phù hợp với nhiều phong cách
          trang trí khác nhau.
          <ImageDes
          src="/assets/des19.jpg"
          title={"Dịch vụ giặt TP HCM"}
        />
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Dễ dàng vệ sinh và bảo quản, không bị ẩm mốc hay bị tấn công bởi côn
          trùng.
        </div>

       
      </div>
    </div>
  );
};

export default Office;
