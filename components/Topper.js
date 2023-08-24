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
      <p className="text-black-600 mb-4 font-semibold text-xl mt-8 text-center">
        Giặt Topper 
      </p>
      <p
        className="text-black-600 mb-4 font-semibold text-lg mt-8 text-center "
        style={{ color: "red" }}
      >
        BẢNG BÁO GIÁ GIẶT TOPPER TẠI NHÀ
      </p>
      <TableContainer component={Paper} style={{ padding: 10 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  maxWidth: 50,
                  backgroundColor: "#0d47a1",
                  color: "white",
                  padding: "15px 10px",
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
                  padding: "15px 10px",
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
                  padding: "15px 10px",
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
                  padding: "15px 10px",
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
                    padding: "15px 10px",
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
                    padding: "15px 10px",
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
                    padding: "15px 10px",
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
                    padding: "15px 10px",
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
          style={{ fontSize: 20, paddingBottom: 10 }}
        >
          <TitleNumber value={1} /> topper nệm là gì ?{" "}
        </div>
        <div style={{ fontSize: 20, marginTop: 10, textAlign: "justify" }}>
        Topper nệm là một tấm nệm mỏng được đặt trên nệm chính để tăng thêm sự thoải mái, dễ chịu và bảo vệ nệm khỏi bụi bẩn, mồ hôi, dầu mỡ và các tác nhân bên ngoài khác. Topper nệm có thể được làm từ các chất liệu khác nhau như memory foam, cao su, bông, sợi tổng hợp hoặc bông cao su
        </div>
        <div style={{ fontSize: 20, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Topper nệm có nhiều lợi ích như làm mềm nệm cứng, giảm áp lực lên cổ, hông, vai và lưng, khử mùi và kháng khuẩn cho nệmh.
        </div>
        <div style={{ fontSize: 20, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Giặt thảm bằng baking soda: Đây là cách dễ thực hiện và có hiệu quả
          đối với những vết bẩn mới, vết bẩn nhỏ trên thảm văn phòng. Bạn chỉ
          cần rắc baking soda lên vết bẩn, để từ 20 đến 30 phút rồi hút lại bằng
          máy hút bụi. Baking soda sẽ giúp khử mùi và hút ẩm trên thảm.
        </div>
        <div style={{ fontSize: 20, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Giặt thảm bằng máy xịt áp lực: Đây là cách giặt thảm văn phòng hiệu
          quả cho những loại thảm có kết cấu dày và lông dài. Bạn có thể mua
          hoặc thuê máy xịt áp lực để sử dụng tại nhà hoặc thuê...
        </div>
        <div style={{ fontSize: 20, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Giặt thảm bằng máy giặt thảm hơi nước nóng: Đây là cách giặt thảm văn
          phòng an toàn, tiết kiệm và khử trùng tốt nhất. Bạn có thể mua hoặc
          thuê máy giặt thảm hơi nước nóng để sử dụng tại nhà hoặc thuê dịch vụ
          của các công ty chuyên nghiệp.
        </div>
        <ImageDes src="/assets/des8.jpg" title={"Dịch vụ vệ sinh TP HCM"} />
      </div>
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 20, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Thảm Trang Trí{" "}
        </div>
        <div style={{ fontSize: 20, marginTop: 10, textAlign: "justify" }}>
          Giặt thảm trang trí là một công việc cần thiết để giữ cho thảm luôn
          sạch sẽ, thơm tho và bảo vệ độ bền của thảm. Thảm trang trí có nhiều
          loại khác nhau, từ thảm lông xù, thảm len, thảm nylon, đến thảm sợi
          tổng hợp. Mỗi loại thảm cần có cách giặt phù hợp với chất liệu và mức
          độ bẩn của thảm. Bạn có thể tự giặt thảm tại nhà hoặc thuê dịch vụ
          giặt thảm chuyên nghiệp. Dưới đây là một số thông tin về cách giặt
          thảm trang trí:
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Giặt thảm bằng baking soda: Đây là cách dễ thực hiện và có hiệu quả
          đối với những vết bẩn mới, vết bẩn nhỏ trên thảm. Bạn chỉ cần rắc
          baking soda lên vết bẩn, để từ 20 đến 30 phút rồi hút lại bằng máy hút
          bụi. Baking soda sẽ giúp khử mùi và hút ẩm trên thảm.
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Giặt thảm bằng nước rửa chén và giấm ăn: Đây là cách giặt thảm trang
          trí phù hợp cho những vết bẩn nhỏ, vết bẩn mới và cứng đầu trên thảm.
          Bạn chỉ cần pha loãng nước rửa chén và giấm ăn theo tỷ lệ 1:1 trong
          một xô nước ấm, rồi dùng một miếng vải hoặc bàn chải để lau nhẹ nhàng
          lên vết bẩn. Sau đó, bạn dùng khăn khô để lau lại cho khô
          <br />{" "}
        </div>

        <ImageDes
          src="/assets/des9.jpg"
          title={"Dịch vụ vệ sinh TP HCM"}
        />
      </div>
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 20, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Thảm Lông{" "}
        </div>
        <div style={{ fontSize: 20, marginTop: 10, textAlign: "justify" }}>
        Giặt thảm lông là một công việc cần thiết để giữ cho thảm luôn sạch sẽ, thơm tho và bảo vệ độ bền của thảm. Thảm lông có nhiều loại khác nhau, từ thảm lông xù, thảm len, thảm nylon, đến thảm sợi tổng hợp. Mỗi loại thảm cần có cách giặt phù hợp với chất liệu và mức độ bẩn của thảm. Bạn có thể tự giặt thảm tại nhà hoặc thuê dịch vụ giặt thảm chuyên nghiệp.  
        </div>

        <ImageDes
          src="/assets/des7.jpg"
          title={"Dịch vụ vệ sinh TP HCM"}
        />
      </div>
    </div>
  );
};

export default Topper;
