import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";


import bg from "../TrangChu/t.jpg"
import bg1 from "../TrangChu/1.png"
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";


import { List, ListItem } from "@material-ui/core";

const us_flag = require("assets/img/flags/US.png");
const de_flag = require("assets/img/flags/DE.png");
const au_flag = require("assets/img/flags/AU.png");
const gb_flag = require("assets/img/flags/GB.png");
const ro_flag = require("assets/img/flags/RO.png");
const br_flag = require("assets/img/flags/BR.png");

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class Xemboi extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "0" }}>
      <p>#6 Tiêu chí xem tuổi VỢ CHỒNG 2019 tốt hay xấu để Hóa Giải Xung Khắc Từ trước đến nay, ông bà ta đều quan niệm 
      "lấy vợ xem tuổi đàn bà, làm nhà xem tuổi đàn ông". Những tuổi nào thì hợp nhau, những tuổi nào thì khắc nhau? 
      Bạn muốn xem tuổi vợ chồng năm 2019 bạn có hợp nhau hay không? Xem tuổi vợ chồng tốt xấu bạn hợp nhau hay khắc nhau? 
      Nếu vợ chồng khắc nhau thì cách hóa giải ra sao? 
      Ngoài ra, bạn sẽ được luận giải tử vi vợ chồng chi tiết qua 6 yếu tố tương xung với nhau. 
      Để từ đó cải thiện duyên định của vợ chồng, giúp cho cuộc sống được Hạnh Phúc Viên Mãn hơn.

Nguồn tại: https://phongthuyso.vn/xem-tuoi-vo-chong.html

Tại sao phải xem tuổi vợ chồng theo ngày tháng năm sinh? 
Công cụ xem tuổi vợ chồng tốt xấu của Phong thủy số giới thiệu tới bạn, là công cụ được lập trên cơ sở xem bói tuổi
 hai người trên các phương diện ngày tháng năm sinh để phân tích theo sự tương hợp 2 tuổi theo mệnh, theo ngũ hành, 
 theo Can - Chi và Tứ trụ. Để kiểm tra tuổi bạn và vợ ( chồng) mình có hợp nhau hay không? 
 Việc xem bói tử vi vợ chồng theo tuổi, cung phi cung mệnh của vợ và chồng có hợp nhau hay không là hết sức quan trọng.
  Bởi vì, nếu như quý bạn biết trước đường tình duyên để rồi từ đó có những chuẩn bị trước cuộc sống hôn nhân sẽ giúp cho 
  tình cảm vợ chồng luôn gắn thiết, hóa giải được những tương xung, xem bói duyên vợ chồng theo ngày tháng năm sinh 
  để biết chính xác. #6 yếu tố quan trọng để xem tuổi vợ chồng 2019, 2020 Có thể nói, đây là 6 yếu tố quan trọng 
  nhất để luận vợ chồng, để xác định bói tình duyên của 2 người có đến được với nhau hay không. Dựa vào 6 yếu tố như: 
  Can chi, Thập nhị Địa Chi, Cung phi bát tự, Niên Mệnh năm sinh, Ngũ hành bản mệnh và lá số tử vi Vợ Chồng cao ly 
  đầu hình. Sáu yếu tố này sẽ phân tích chi tiết, với những luận giải chính xác về các thông tin mà bạn muốn biết bao gồm: 
  Xem mệnh vợ chồng có hợp nhau không Để Xem tuổi vợ chồng có hợp nhau không thì yếu tố Ngũ hành bản mệnh dựa theo quy luật
   tương sinh tương khắc. Căn cứ vào bản Mệnh của 2 vợ chồng để từ đó xem tuổi vợ chồng bạn là tương sinh hay là tương 
   khắc. Có thể nói đây là yếu tố quan trọng nhất trong 6 yếu tố trên, bởi vì bản mệnh của vợ và chồng có hợp nhau không 
   sẽ quyết định đến tính cách của 2 người, sẽ quyết định đến sự hòa hợp trong gia đình. Ngoài ra, bật mí thêm nếu 
   như Mệnh của vợ chồng là ngũ hành tương sinh thì vợ chồng mà kết hợp làm ăn (xem bói tuổi vợ chồng làm ăn 2019) 
   thì rất dễ phát tài phát lộc, ăn nên làm ra. Tuy nhiên, quý bạn cũng đừng lo vì nếu như bản mệnh của vợ và của 
   chồng là không hợp thì cũng còn cách Hóa Giải. Trong bài viết cụ thể sẽ chỉ cho quý bạn cách hóa giải tuổi vợ chồng. 
   Xem tử vi vợ chồng dựa vào Niên Mệnh Năm Sinh Niên mệnh năm sinh hay còn gọi là Thiên mệnh năm sinh. 
   Mỗi người sinh ra sẽ có một niên mệnh năm sinh khác nhau. Đây là yếu tố cũng rất quan trọng nếu như niên mệnh của 
   chồng và vợ hợp nhau thì sẽ giúp cho lá số tử vi vợ chồng được bền lâu hơn, tránh được yếu tố ngoại tình, 
   vợ hoặc chồng sống không chung thủy.  Xem tuổi vợ chồng theo cung phi bát tự Khi xem tuổi vợ chồng con cái có hợp 
   nhau không thì yếu tố cung phi không thể thiếu được, gồm 8 cung: Tốn, Ly, Khôn, Đoài, Càn, Khảm, Cấn, Chấn. 
   Dù cho vợ chồng có sinh cùng năm và sinh cùng tháng nhưng chưa chắc đã cùng cung vợ chồng với nhau. 
   Tuy nhiên 2 vợ chồng chỉ cần biết là nếu cung phi vợ chồng cùng nhóm Sinh Khí, Phục Vị, Thiên Y và Phước Đức 
   thì sẽ là rất tốt. Đây là 4 nhóm cung mang lại nhiều may mắn tới gia đình. Và Ngược lại nếu cung phi 
   vợ chồng nằm trong nhóm xấu: Lục Sát, Tuyệt Mạng, Lục Hại và Hoại Hạt thì vợ chồng gặp nhiều khó khăn trong 
   đời sống hôn nhân, con cái ốm đau, làm ăn thất bát. Cũng như đã nói ở trên, cần phải Hóa Giải để tránh kiếp 
   vợ chồng Xấu. Luận Can chi, Địa chỉ để xem tuổi vợ chồng kết hôn Can chi và Địa chi là 2 trong 6 yếu tố bắt 
   buộc phải có khi xem tuổi vợ chồng theo ngày tháng năm sinh. Bởi vì xét yếu tố can chi và địa chi giúp quý 
   bạn biết được sự tương hợp của vợ chồng khi lấy nhau là bao nhiêu. Luận lá số tử vi vợ chồng Việc luận lá 
   số tử vi vợ chồng sẽ giúp quý bạn hiểu được lá số của người vợ, lá số của người chồng có gặp bất chắc gì không. 
   Nếu có Vận Hạn trong cuộc sống thì phải tìm cách Hóa Giải ngay. Hi vọng công cụ xem bói tuổi vợ chồng 2019, 
   2020 theo cung mệnh năm sinh sẽ giúp xem vợ chồng bạn có hợp nhau hay là khắc. Để từ đó biết được và tìm cách 
   hóa giải hay còn gọi là cải thiện lá số tử vi vợ chồng, giúp cho duyên số vợ chồng được bền chặt hơn. 
   Ngoài ra, nếu như hai bạn đang có ý định sinh con thì đừng bỏ qua công cụ xem tuổi sinh con hợp tuổi bố mẹ 
   cũng như #6 cách sinh con trai con gái hợp với bố mẹ. Nếu như quý bạn chưa kết hôn mà đang có ý định kết 
   hôn thì nên xem tiện ích xem ngày cưới hỏi tại Phong Thủy Số.

Nguồn tại: https://phongthuyso.vn/xem-tuoi-vo-chong.html</p>
<GridContainer>
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Tử vi 2019
            </div>
          </GridItem>

        </GridContainer>
        <GridContainer>
          <GridItem xs={3}>

          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "100%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem TỬ VI 2019 - Giải vận hạn - Kích tài lộc</p>
              <div>
                <br />
                <div>
                  <select style={{ padding: "20px" }}>
                    <option value="volvo">1990</option>
                    <option value="saab">1991</option>
                    <option value="mercedes">1992</option>
                    <option value="audi">1993</option>
                    <option value="volvo">1994</option>
                    <option value="saab">1995</option>
                    <option value="mercedes">1996</option>
                    <option value="audi">1997</option>
                    <option value="volvo">1998</option>
                    <option value="saab">1999</option>
                    <option value="mercedes">2000</option>
                    <option value="audi">2001</option>
                  </select>

                  <select style={{ marginLeft: "5%", padding: "20px" }}>
                    <option value="volvo">Nam</option>
                    <option value="saab">Nữ</option>
                  </select>
                </div>
                <br></br>
                <br></br>

                <div>
                  <Button color="rose">Xem ngay</Button>
                </div>
              </div>
            </div>


          </GridItem>
          <GridItem xs={3}>

          </GridItem>
        </GridContainer>
        <hr></hr>
        <GridContainer>
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Lá số tử vi
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={3} >

          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "100%" }}></img>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold", }}>
              <p style={{ fontSize: "20px" }} >Xem lá số tử vi miễn phí</p>
              <br></br>

              <div>
                <input style={{ padding: "20px" }} placeholder="Họ và tên"></input>
              </div>
              <br></br>
              <div>
                <select style={{ padding: "20px" }}>
                  <option value="volvo">1990</option>
                  <option value="saab">1991</option>
                  <option value="mercedes">1992</option>
                  <option value="audi">1993</option>
                  <option value="volvo">1994</option>
                  <option value="saab">1995</option>
                  <option value="mercedes">1996</option>
                  <option value="audi">1997</option>
                  <option value="volvo">1998</option>
                  <option value="saab">1999</option>
                  <option value="mercedes">2000</option>
                  <option value="audi">2001</option>
                </select>
              </div>
              <br></br>
              <br></br>
              <div>
                <Button color="rose">Xem ngay</Button>
              </div>
            </div>

          </GridItem>
          <GridItem xs={3}>

          </GridItem>
        </GridContainer>
        <hr></hr>
        <GridContainer>
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Danh sách xem bói
            </div>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={2}>

          </GridItem>
          <GridItem xs={6}>
            <div>
              Xem tuổi làm nhà
            </div>
            <div>
              Xem tuổi vợ chồng
            </div>
            <div>
              Xem tuổi sinh con
            </div>
          </GridItem>
          <GridItem xs={4}>
            <div>
              Xem ngày tốt xấu
            </div>
            <div>
              Xem ngày mua nhà
            </div>
            <div>
              Xem ngày tốt kết hôn
            </div>
          </GridItem>          
        </GridContainer>
        <GridContainer>
            <GridItem xs={2}>
            
            </GridItem>
            <GridItem xs={6}>
            <div>
              Phong thủy
            </div>
            </GridItem>
            <GridItem xs={4}>
            <div>
              Xem bói
            </div>
            </GridItem>
          </GridContainer>
      </div>
    
    );
  }
}

Xemboi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Xemboi);
