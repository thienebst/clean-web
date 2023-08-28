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
    col1: "Ghế sofa vải",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Ghế sofa nỉ",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Ghế sofa nhung",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Ghế ngoại cỡ",
    col2: "Liên hệ",
    col3: "Giá tốt",
  },
];
const rows1 = [
  {
    col1: "Ghế sofa da thật",
    col2: "300.000 đ",
    col3: "400.000 đ",
  },
  {
    col1: "Ghế sofa da lộn",
    col2: "300.000 đ",
    col3: "400.000 đ",
  },
  {
    col1: "Ghế sofa da simili",
    col2: "300.000 đ",
    col3: "400.000 đ",
  },
  {
    col1: "Ghế ngoại cỡ",
    col2: "Liên hệ",
    col3: "Giá tốt",
  },
];
const steps = [
  {
    label: "Hút sạch bụi ghế sofa",
    description: `Dọn rác và hút bụi trên ghế sofa bằng máy hút có đính kèm vải bọc`,
  },
  {
    label: "Làm sạch các điểm bẩn",
    description:
      "Tẩy điểm các vết bẩn cứng đầu bằng hóa chất tẩy rửa chuyên dụng hoặc dung dịch vệ sinh ghế sofa",
  },
  {
    label: "Kiểm tra chất liệu sofa có phù hợp với giặt bằng hơi nước nóng",
    description: `Chà sạch vết bẩn bằng bàn chải kết hợp hơi nước nóng. Sử dụng máy phun hút hơi nước nóng để phun hơi nước có nhiệt độ cao lên các vết bẩn trên ghế`,
  },
  {
    label: "Phun dung dịch làm sạch chuyên dụng lên ghế sofa",
    description: "Dụng dịch giúp tăng hiệu quả làm sạch, loại bỏ vết bẩn và mùi hôi"
  },
  {
    label: "Phun dung hơi nước nóng chứa Ion++ diệt khuẩn sofa",
    description: "Hơi nước giúp diệt khuẩn, làm sạch sâu và khử mùi."
  },
  {
    label: "Dùng máy hơi nước nóng",
    description:
      "Dưới tác động của áp suất cao, hơi nước nóng lên lỏi vào các sợi vải và được làm sạch nhanh chóng.",
  },
  {
    label: "Sử dụng bàn chải mềm làm sạch bề mặt sofa",
    description: "Đảm bảo loại bỏ hoàn toàn vết bẩn còn lại sau khi phun dung dịch."
  },
  {
    label: "Dùng mái hút nước bẩn và bụi dơ của ghế sofa",
    description:
      "Loại bỏ hoàn toàn nước và chất cặn bã sau quá trình giặt.",
  },
  {
    label: "Dùng nước xả vải cho ghế sofa",
    description:
      "Sử dụng nước xả vải để ghế có mùi hương thơm tự nhiên và làm mềm bề mặt vải. ",
  },
  {
    label: "Dùng máy sấy sấy ghế sofa",
    description:
      "Sử dụng máy sấy hoặc để khô tự nhiên. Mang sofa ra nơi thoáng mát để ghế được khô một cách tự nhiên hoặc sử dụng quạt để hong khô ghế. ",
  },
];
const Sofa = () => {
  return (
    <div className="mt-12">
      <h1
        className="text-black-600 mb-4 font-semibold text-xl mt-8 text-center px-4"
        style={{ fontSize: "22px !important" }}
      >
        Giặt Ghế Sofa Tại Nhà - 30 Phút Có Mặt & Giá Tốt TP HCM
      </h1>
      <p
        className="text-black-600 mb-4 font-bold text-lg mt-8 text-center "
        style={{ color: "red" }}
      >
        BẢNG BÁO GIÁ GIẶT GHẾ SOFA VẢI
      </p>
      <TableContainer component={Paper} style={{ padding: 16 }}>
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
                LOẠI SOFA
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
        BẢNG BÁO GIÁ GIẶT GHẾ SOFA DA
      </p>
      <TableContainer component={Paper} style={{ padding: 16 }}>
        <Table aria-label="simple table" style={{ border: "solid 1px blue" }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  maxWidth: 50,
                  backgroundColor: "#0d47a1",
                  color: "white",
                  padding: "7px 7px",
                  textAlign: "center",
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
                LOẠI SOFA
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
                    minWidth: 100,
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
                    minWidth: 100,
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
      <ImageDes
          src="/assets/sofa1.jpg"
          title={"Dịch vụ giặt ghế sofa TP HCM"}
        />
      <p
        className="text-black-600 mb-4 font-semibold text-lg mt-8 text-center "
        style={{ color: "red" }}
      >
        QUY TRÌNH GIẶT GHẾ SOFA HƠI NƯỚC NÓNG
      </p>
      <VerticalLinearStepper steps={steps} />
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={1} /> Giặt Ghế Sofa Vải{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          
          Giặt ghế sofa vải là một công việc quan trọng để giữ cho ghế sofa luôn
          sạch sẽ, đẹp mắt và bền lâu. Tuy nhiên, không phải ai cũng biết cách
          giặt ghế sofa vải đúng cách và hiệu quả. Trong bài viết này, tôi sẽ
          giới thiệu cho bạn một số cách giặt ghế sofa vải tại nhà mà bạn có thể
          thực hiện dễ dàng và nhanh chóng.
        </div>
        <ImageDes
          src="/assets/des24.jpg"
          title={"Dịch vụ giặt ghế sofa TP HCM"}
        />
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          
          Cách giặt ghế sofa vải tùy thuộc vào chất liệu và ký hiệu trên nhãn
          mác của ghế. Bạn nên đọc kỹ hướng dẫn của nhà sản xuất trước khi tiến
          hành giặt ghế. Một số ký hiệu thường gặp là:
          <br />
          <br />
           <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} /> W: có nghĩa là bạn có thể sử dụng nước để làm sạch ghế sofa
          vải.
          <br />
          <br />
           <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} /> S: có nghĩa là bạn chỉ có thể sử dụng dung môi hoặc các sản
          phẩm không chứa nước để làm sạch ghế. <br />• WS hoặc SW: có nghĩa là
          bạn có thể sử dụng bất kỳ phương pháp nào, có thể là giặt nước hoặc
          giặt khô.
        </div>
        <ImageDes
          src="/assets/des1.jpg"
          title={"Dịch vụ giặt ghế sofa TP HCM"}
        />
      </div>
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Ghế Sofa Da{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          Ghế sofa da là một loại ghế có bọc ngoài bằng chất liệu da, có thể là
          da thật từ động vật hoặc da công nghiệp như da PU, da microfiber, da
          simili. Ghế sofa da có nhiều ưu điểm như:
          <br />{" "}
          <br />
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Mang lại vẻ sang trọng, đẳng cấp và ấm cúng cho không gian nội thất
          <ImageDes
            src="/assets/des25.jpg"
            title={"Dịch vụ giặt ghế sofa TP HCM"}
          />
          <br />{" "}<br />
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />{" "}
          Dễ dàng lau chùi, vệ sinh và bảo quản, không bị ẩm mốc hay bị phai màu
          theo thời gian.
          <br />{" "}<br />
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Có độ bền cao, không bị xù lông hay rách nát như các loại vải khác
          <br />{" "}<br />
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Thoáng mát vào mùa hè và ấm áp vào mùa đông, tạo cảm giác thoải mái
          cho người sử dụng
        </div>

        <ImageDes
          src="/assets/des2.png"
          title={"Dịch vụ giặt ghế sofa TP HCM"}
        />
      </div>
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Ghế Sofa Nhung{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          Ghế sofa nhung là một loại ghế có bọc ngoài bằng chất liệu nhung, một
          loại vải có bề mặt mềm mịn và lông dày. Ghế sofa nhung có nhiều ưu
          điểm như:
          <br />{" "}<br />
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Mang lại cảm giác sang trọng, ấm cúng và thoải mái cho không gian nội
          thất.
          <ImageDes
            src="/assets/des26.jpg"
            title={"Dịch vụ giặt ghế sofa TP HCM"}
          />
          <br />{" "}<br />
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />{" "}
          Có độ bền cao, không bị xù lông hay phai màu theo thời gian.
          <br />{" "}<br />
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Có nhiều màu sắc và họa tiết đa dạng, phù hợp với nhiều phong cách
          trang trí khác nhau.
          <br />{" "}<br />
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Dễ dàng vệ sinh và bảo quản, không bị ẩm mốc hay bị tấn công bởi côn
          trùng.
        </div>

        <ImageDes
          src="/assets/des3.png"
          title={"Dịch vụ giặt ghế sofa TP HCM"}
        />
      </div>
    </div>
  );
};

export default Sofa;
