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
    col1: "Giặt topper vải",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt topper lụa",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt topper coton ",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt bông ép",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  
   
];
 
const steps = [
  {
    label: "Hút sạch bụi trên topper",
    description: `Hút bụi toàn bộ thảm trước khi giặt để loại bỏ phần lớn cát, bụi, đất ở trong thảm ra ngoài. Bạn có thể sử dụng máy hút bụi chuyên dụng hoặc máy hút bụi thông thường.`,
  },
  {
    label: "Làm sạch các điểm bẩn",
    description:
      "Phun dung dịch vệ sinh lên topper để làm sạch các vết bẩn và khử mùi. Bạn có thể sử dụng các loại dung dịch vệ sinh topper có bán trên thị trường hoặc tự pha chế từ các nguyên liệu tự nhiên như oxy già, nước rửa chén, giấm ăn.",
  },
  {
    label: "Kiểm tra chất liệu có phù hợp với giặt bằng hơi nước nóng",
    description: `Vệ sinh và khử trùng topper bằng máy giặt topper hơi nước nóng. Bạn có thể mua hoặc thuê máy giặt topper hơi nước nóng để sử dụng tại nhà hoặc thuê dịch vụ giặt topper của các công ty chuyên nghiệp . Máy giặt topper hơi nước nóng sẽ phun hơi nước nóng lên bề mặt topper và đồng thời hút lại toàn bộ nước, chất bẩn sâu bên trong`,
  },
  {
    label: "Dùng máy hơi nước nóng",
    description:
      " Phơi khô topper sau khi giặt. Bạn có thể phơi topper ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm hư hại cấu trúc lông topper. Bạn cũng cần đảo ngược mặt topper để đảm bảo cả hai mặt đều được khô ráo.",
  },
];
const Topper = () => {
  return (
    <div className="mt-12">
      <p className="text-black-600 mb-4 font-semibold text-xl mt-8 text-center px-10">
      Giặt Topper Tại Nhà - 30 Phút Có Mặt & Giá Tốt TP HCM
      </p>
      <p
        className="text-black-600 mb-4 font-semibold text-lg mt-8 text-center "
        style={{ color: "red" }}
      >
        BẢNG BÁO GIÁ GIẶT TOPPER TẠI NHÀ
      </p>
      <TableContainer component={Paper} style={{ padding: 20 }}>
        <Table aria-label="simple table" style={{border: 'solid 1px blue' }}>
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
                LOẠI TOPPER
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
        QUY TRÌNH GIẶT TOPPER HƠI NƯỚC NÓNG
      </p>
      <VerticalLinearStepper steps={steps} />
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={1} /> Topper nệm là gì ?{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
        Topper nệm là một tấm nệm mỏng được đặt trên nệm chính để tăng thêm sự thoải mái, dễ chịu và bảo vệ nệm khỏi bụi bẩn, mồ hôi, dầu mỡ và các tác nhân bên ngoài khác. Topper nệm có thể được làm từ các chất liệu khác nhau như memory foam, cao su, bông, sợi tổng hợp hoặc bông cao su
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Topper nệm có nhiều lợi ích như làm mềm nệm cứng, giảm áp lực lên cổ, hông, vai và lưng, khử mùi và kháng khuẩn cho nệmh.
        </div>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Các loại  Topper nệm hiện nay:{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Topper nệm cao su nhân tạo: Đây là loại topper được làm từ cao su nhân tạo, có độ đàn hồi vừa phải, độ bền cao và chi phí phải chăng. Topper nệm cao su nhân tạo có thể hỗ trợ cho cột sống và giảm áp lực cho các khớp xương.
        </div>
        <ImageDes src="/assets/des10.jpg" title={"Dịch vụ vệ sinh TP HCM"} />
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Topper cao su thiên nhiên: Đây là loại topper được làm từ cao su thiên nhiên, có độ đàn hồi cao, khả năng thoát ẩm và kháng khuẩn tốt. Topper cao su thiên nhiên có thể mang lại cảm giác mềm mại, thoải mái và an toàn cho sức khỏe
        </div>
        <ImageDes src="/assets/des11.jpg" title={"Dịch vụ vệ sinh TP HCM"} />
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Loại topper chần gòn: Đây là loại topper được làm từ gòn tự nhiên hoặc nhân tạo, có độ ấm cao, cảm giác êm ái và dễ chịu. Loại topper chần gòn có thể giúp giữ ấm cho cơ thể trong mùa đông và ngăn ngừa các vấn đề về da do quá khô
        </div>
        <ImageDes src="/assets/des12.jpg" title={"Dịch vụ vệ sinh TP HCM"} />
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Topper sợi nhân tạo: Đây là loại topper được làm từ sợi nhân tạo như polyester, microfiber hay visco, có độ bền cao, khả năng chống bám bụi và dễ vệ sinh. Topper sợi nhân tạo có thể mang lại cảm giác mịn màng, nhẹ nhàng và thoáng mát
        </div> 
        <ImageDes src="/assets/des13.jpg" title={"Dịch vụ vệ sinh TP HCM"} />
      </div>
    
      
    </div>
  );
};

export default Topper;
