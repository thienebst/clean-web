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
    col1: "Giặt nệm kyndan",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt nệm cao su",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt nệm lò xo",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt nệm bông ép",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
  {
    col1: "Giặt nệm liên á",
    col2: "250.000 đ",
    col3: "300.000 đ",
  },
];
const steps = [
  {
    label: "Hút sạch bụi trên nệm",
    description: `Hút bụi trên bề mặt nệm bằng máy hút bụi hoặc khăn ẩm.`,
  },
  {
    label: "Làm sạch các điểm bẩn",
    description:
      "Pha loãng dung dịch tẩy rửa chuyên dụng cho nệm nhung với nước theo tỉ lệ 1:10.",
  },
  {
    label: "Kiểm tra chất liệu nệm có phù hợp với giặt bằng hơi nước nóng",
    description: `Nhúng khăn mềm vào dung dịch tẩy rửa và vắt khô. Sau đó lau nhẹ nhàng theo chiều của sợi nhung trên nệm.`,
  },
  {
    label: "Dùng máy hơi nước nóng",
    description:
      "Dưới tác động của áp suất cao, hơi nước nóng lên lỏi vào các sợi vải và được làm sạch nhanh chóng.",
  },
  {
    label: "Sử dụng bàn chải mềm làm sạch bề mặt nệm",
    description: "Đảm bảo loại bỏ hoàn toàn vết bẩn còn lại sau khi phun dung dịch."
  },
  {
    label: "Dùng mái hút nước bẩn và bụi dơ của nệm",
    description:
      "Loại bỏ hoàn toàn nước và chất cặn bã sau quá trình giặt.",
  },
  {
    label: "Dùng nước xả vải cho nệm",
    description:
      "Sử dụng nước xả vải để nệm có mùi hương thơm tự nhiên và làm mềm bề mặt vải. ",
  },
  {
    label: "Dùng máy sấy sấy nệm",
    description:
      "Sử dụng máy sấy hoặc để khô tự nhiên. Mang nệm ra nơi thoáng mát để nệm được khô một cách tự nhiên hoặc sử dụng quạt để hong khô nệm. ",
  },
];
const Nem = () => {
  return (
    <div className="mt-12">
      <p className="text-black-600 mb-4 font-semibold text-xl mt-8 text-center px-10">
      Giặt Nệm Tại Nhà - 30 Phút Có Mặt & Giá Tốt TP HCM
      </p>
      <p
        className="text-black-600 mb-4 font-semibold text-lg mt-8 text-center "
        style={{ color: "red" }}
      >
        BẢNG BÁO GIÁ GIẶT NỆM TẠI NHÀ
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
                LOẠI NỆM
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
      <ImageDes src="/assets/nem1.jpg" title={"Dịch vụ giặt nệm TP HCM"} />

      <p
        className="text-black-600 mb-4 font-semibold text-lg mt-8 text-center "
        style={{ color: "red" }}
      >
        QUY TRÌNH GIẶT NỆM HƠI NƯỚC NÓNG
      </p>
      <VerticalLinearStepper steps={steps} />
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={1} /> Giặt Nệm Cao Su{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          Giặt nệm cao su là một công việc quan trọng để giữ cho nệm luôn sạch
          sẽ, thoáng mát và bền lâu. Nệm cao su là một loại nệm có bọc ngoài
          bằng chất liệu cao su, có thể là cao su tự nhiên hoặc cao su nhân tạo.
          Nệm cao su có nhiều ưu điểm như:
        </div> <br />{" "}
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Có độ đàn hồi cao, ôm sát cơ thể và hỗ trợ tốt cho xương khớp.
        </div>
        <ImageDes src="/assets/nemcaosu.jpg" title={"Dịch vụ giặt nệm TP HCM"} />
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Có khả năng thông thoáng, chống ẩm mốc và chống bụi bẩn.
        </div> <br />{" "}
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Có khả năng kháng khuẩn, chống dị ứng và chống viêm da.
        </div> <br />{" "}
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          <LightbulbCircleIcon style={{ color: "#FFD700", marginRight: 5 }} />
          Có độ bền cao, không bị biến dạng hay xẹp lún theo thời gian.
        </div>
        <ImageDes src="/assets/nem2.jpg" title={"Dịch vụ giặt nệm TP HCM"} />
      </div>
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Nệm Lò Xo{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          Giặt nệm lò xo là một công việc quan trọng để duy trì vệ sinh và sức
          khỏe cho bạn và gia đình. Tuy nhiên, giặt nệm lò xo không phải là một
          việc đơn giản, vì nệm lò xo có kích thước lớn, cồng kềnh và chứa nhiều
          bụi bẩn, vi khuẩn, nấm mốc. Để giặt nệm lò xo hiệu quả, bạn cần thực
          hiện theo các bước sau:
          <ImageDes src="/assets/nemm.jpg" title={"Dịch vụ giặt nệm TP HCM"} />
          <br />{" "}
          
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Tháo vỏ bọc nệm lò xo ra khỏi hệ thống lò xo. Bạn có thể giặt vỏ bọc
          nệm lò xo bằng máy giặt hoặc tay như giặt quần áo thông thường. Bạn
          nên ngâm vỏ bọc nệm trong nước ấm có pha loãng bột giặt để loại bỏ bụi
          bẩn và khử khuẩn
          <br />{" "} <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Sử dụng máy hút bụi chuyên dụng để hút sạch các bụi bẩn ra khỏi các lỗ
          trên bề mặt nệm.
          <br />{" "} <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Làm sạch toàn bộ nệm. Bạn có thể dùng một miếng vải ẩm đã được ngâm
          trong dung dịch nước và xà phòng hoặc nước giặt để lau nhẹ nhàng trên
          toàn bộ mặt nệm. Bạn cũng có thể sử dụng máy xịt áp lực để xịt sạch
          các chất bẩn trên nệm.
          <ImageDes src="/assets/des28.jpg" title={"Dịch vụ giặt nệm TP HCM"} />
          <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Phơi nệm. Sau khi làm sạch, bạn cần phơi nệm ở nơi thoáng mát, tránh
          ánh nắng trực tiếp để không làm hư hại cấu trúc lò xo. Bạn cũng cần
          đảo ngược mặt nệm để đảm bảo cả hai mặt đều được khô ráo.
        </div>

        <ImageDes
          src="/assets/des5.png"
          title={"Dịch vụ vệ sinh TP HCM"}
        />
      </div>
      <div style={{ padding: 15 }}>
        <div
          className="font-semibold"
          style={{ fontSize: 18, paddingBottom: 10 }}
        >
          <TitleNumber value={2} /> Giặt Nệm Kymdan{" "}
        </div>
        <div style={{ fontSize: 18, marginTop: 10, textAlign: "justify" }}>
          Cách giặt nệm Kymdan tại nhà: Theo khuyến cáo của nhà sản xuất, bạn
          không nên giặt nệm Kymdan bằng phương pháp thông thường, vì sẽ ảnh
          hưởng đến bề mặt và chất lượng của nệm. Bạn chỉ nên giặt khô bằng các
          bước sau:
          <br />{" "} <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Tháo vỏ bọc nệm và giặt cùng với chăn gối bằng máy giặt hoặc tay.
          <br />{" "} <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Làm sạch các vết bẩn trên nệm bằng cách dùng khăn ẩm đã ngâm trong
          dung dịch nước và xà phòng hoặc nước giặt để lau nhẹ nhàng. Không sử
          dụng chất tẩy mạnh hay dung môi để làm sạch vết bẩn.
          <br />{" "} <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Rắc baking soda lên bề mặt nệm để khử mùi và hút ẩm. Để trong khoảng
          15 phút rồi hút lại bằng máy hút bụi.
          <br />{" "} <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Phơi nệm ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm hư
          hại cấu trúc lò xo. Đảo ngược mặt nệm để đảm bảo cả hai mặt đều được
          khô ráo.
          <br />{" "} <br />{" "}
          <LightbulbCircleIcon
            style={{ color: "#FFD700", marginRight: 5 }}
          />{" "}
          Bao lại vỏ nệm sau khi đã hong khô.
        </div>

        <ImageDes
          src="/assets/des6.png"
          title={"Dịch vụ vệ sinh TP HCM"}
        />
      </div>
    </div>
  );
};

export default Nem;
