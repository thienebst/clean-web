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
    col1: "Giặt thảm văn phòng",
    col2: "Dưới 20m2",
    col3: "350.000 đ",
  },
  {
    col1: "Giặt thảm văn phòng",
    col2: "Dưới 40m2",
    col3: "550.000 đ",
  },
  {
    col1: "Giặt thảm văn phòng",
    col2: "Dưới 60m2",
    col3: "750.000 đ",
  },
  {
    col1: "Giặt thảm văn phòng",
    col2: "61 - 200m2",
    col3: "12.000 đ",
  },
  {
    col1: "Giặt thảm văn phòng",
    col2: "201 - 400m2",
    col3: "10.000 đ",
  },
  {
    col1: "Giặt thảm văn phòng",
    col2: "401 - 600m2",
    col3: "9.000 đ",
  },
  {
    col1: "Giặt thảm văn phòng",
    col2: "601 - 800m2",
    col3: "8.000 đ",
  },
  {
    col1: "Giặt thảm văn phòng",
    col2: "801 - 1.000m2",
    col3: "7.000 đ",
  },
  {
    col1: "Giặt thảm văn phòng",
    col2: "> 1.000m2",
    col3: "Liên hệ",
  },
];
const rows1 = [
  {
    col1: "Giặt thảm sofa",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt thảm lông",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt thảm cao su",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt thảm trang trí",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt thảm ngoại cỡ",
    col2: "Liên hệ",
    col3: "Giá tốt",
  },
];
const steps = [
  {
    label: "Hút sạch bụi trên thảm",
    description: `Hút bụi toàn bộ thảm trước khi giặt để loại bỏ phần lớn cát, bụi, đất ở trong thảm ra ngoài.`,
  },
  {
    label: "Làm sạch các điểm bẩn",
    description:
      "Phun hóa chất trước khi giặt 3-5 phút để chúng có thời gian tác dụng. ",
  },
  {
    label: "Kiểm tra chất liệu có phù hợp với giặt bằng hơi nước nóng",
    description: `Vệ sinh và khử trùng thảm bằng máy giặt thảm hơi nước nóng.. 
    `,
  },
  {
    label: "Dùng máy hơi nước nóng",
    description:
      "Dưới tác động của áp suất cao, hơi nước nóng lên lỏi vào các sợi vải và được làm sạch nhanh chóng.",
  },
  {
    label: "Sử dụng bàn chải mềm làm sạch bề mặt thảm",
    description: "Đảm bảo loại bỏ hoàn toàn vết bẩn còn lại sau khi phun dung dịch."
  },
  {
    label: "Dùng mái hút nước bẩn và bụi dơ của ghế thảm",
    description:
      "Loại bỏ hoàn toàn nước và chất cặn bã sau quá trình giặt.",
  },
  {
    label: "Dùng nước xả vải cho thảm",
    description:
      "Sử dụng nước xả vải để ghế có mùi hương thơm tự nhiên và làm mềm bề mặt vải. ",
  },
  {
    label: "Dùng máy sấy sấy thảm",
    description:
      "Sử dụng máy sấy hoặc để khô tự nhiên. Mang thảm ra nơi thoáng mát để ghế được khô một cách tự nhiên hoặc sử dụng quạt để hong khô ghế. ",
  },
];
const Tham = () => {
  return (
    <div className="mt-12">
      <p className="text-black-600 mb-4 font-semibold text-xl mt-8 text-center px-10">
      Giặt Thảm Tại Nhà - 30 Phút Có Mặt & Giá Tốt TP HCM
      </p>
      <p
        className="text-black-600 mb-4 font-semibold text-lg mt-8 text-center "
        style={{ color: "red" }}
      >
        BẢNG BÁO GIÁ GIẶT THẢM VĂN PHÒNG
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
                LOẠI THẢM
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
        BẢNG BÁO GIÁ GIẶT THẢM TRANG TRÍ
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
                LOẠI THẢM
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
            {rows1.map((row, index) => (
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
        QUY TRÌNH GIẶT THẢM HƠI NƯỚC NÓNG
      </p>
      <VerticalLinearStepper steps={steps} />
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={1} /> Giặt Thảm Văn Phòng{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          Giặt thảm văn phòng là một dịch vụ làm sạch thảm trải sàn tại các văn
          phòng, công ty, cơ quan, trường học, nhà hàng, khách sạn, bệnh viện,
          nhà xưởng, nhà máy… Giặt thảm văn phòng giúp loại bỏ bụi bẩn, vi
          khuẩn, nấm mốc, mùi hôi và các vết bẩn khác trên thảm, để thảm trở nên
          sạch sẽ, tươi mới và an toàn cho sức khỏe của người sử dụng. Giặt thảm
          văn phòng cũng giúp bảo vệ độ bền và màu sắc của thảm, tăng tính thẩm
          mỹ và chuyên nghiệp cho không gian làm việc.
        </div>
        <ImageDes src="/assets/tham2.jpg" title={"Dịch vụ vệ sinh TP HCM"} />

        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Giặt thảm bằng máy hút bụi: Đây là cách đơn giản và tiết kiệm nhất để
          giữ cho thảm luôn sạch sẽ và khô ráo. Bạn chỉ cần hút bụi toàn bộ bề
          mặt thảm trước khi giặt để loại bỏ phần lớn cát, bụi, đất ở trong thảm
          ra ngoài. Bạn có thể sử dụng máy hút bụi chuyên dụng hoặc máy hút bụi
          thông thường
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Giặt thảm bằng baking soda: Đây là cách dễ thực hiện và có hiệu quả
          đối với những vết bẩn mới, vết bẩn nhỏ trên thảm văn phòng. Bạn chỉ
          cần rắc baking soda lên vết bẩn, để từ 20 đến 30 phút rồi hút lại bằng
          máy hút bụi. Baking soda sẽ giúp khử mùi và hút ẩm trên thảm.
        </div>
        <ImageDes src="/assets/tham1.jpg" title={"Dịch vụ vệ sinh TP HCM"} />

        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Giặt thảm bằng máy xịt áp lực: Đây là cách giặt thảm văn phòng hiệu
          quả cho những loại thảm có kết cấu dày và lông dài. Bạn có thể mua
          hoặc thuê máy xịt áp lực để sử dụng tại nhà hoặc thuê...
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
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
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Thảm Trang Trí{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          Giặt thảm trang trí là một công việc cần thiết để giữ cho thảm luôn
          sạch sẽ, thơm tho và bảo vệ độ bền của thảm. Thảm trang trí có nhiều
          loại khác nhau, từ thảm lông xù, thảm len, thảm nylon, đến thảm sợi
          tổng hợp. Mỗi loại thảm cần có cách giặt phù hợp với chất liệu và mức
          độ bẩn của thảm. Bạn có thể tự giặt thảm tại nhà hoặc thuê dịch vụ
          giặt thảm chuyên nghiệp. Dưới đây là một số thông tin về cách giặt
          thảm trang trí:
          <br />{" "}
        <ImageDes src="/assets/tham3.jpg" title={"Dịch vụ vệ sinh TP HCM"} />

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
          src="/assets/des9.png"
          title={"Dịch vụ vệ sinh TP HCM"}
        />
      </div>
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Thảm Lông{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
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

export default Tham;
