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




class Kethon extends React.Component {
  state = {
    value: false
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  clicked = ()=>{
    if(this.state.value === false)
    return (<div>
      
      <p style={{textAlign:"center",fontSize:"25px",color:"brown",fontWeight:"bold"}}>Xem tuổi hợp - Cách xem tuổi hợp nhau theo năm sinh chính xác nhất</p>
      <br />
      <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> Xem tuổi hợp nhau năm 2018 hợp với tuổi nào là công cụ giúp quý bạn kiểm tra xem, năm sinh của mình thì hợp những tuổi nào, kỵ tuổi nào để làm các công việc trọng đại như: Xem tuổi hợp tác làm ăn chung, xem tuổi mình và người ấy có hợp nhau không, xem tuổi hợp với bố mẹ, xem tuổi hợp tình duyên…. Vì vậy, để sử dụng công cụ một cách chuẩn xác thì mời quý bạn làm theo hướng dẫn sau</p>
        
    </div>)
    else return (<div>
      <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>1. Thông tin gia chủ sinh năm 1998 </p>
      <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>
      - Năm sinh dương lịch : 1998 - Năm sinh âm lịch : Mậu Dần <br />
      - Thuộc mệnh: Thổ (Thành đầu Thổ) - Thuộc cung: Khôn <br />
      - Niên mệnh năm sinh: Thổ Xem chi tiết tuổi 1998 hợp tuổi nào nhất </p>
      <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>2. Thông tin gia chủ sinh năm 1998 - Năm sinh dương lịch : 1998</p> 
      <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>- Năm sinh âm lịch : Mậu Dần - Thuộc mệnh: Thổ (Thành đầu Thổ) <br />
      - Thuộc cung: Tốn - Niên mệnh năm sinh: Mộc Xem tuổi 1998 hợp với tuổi nào nhất </p>
      <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>3. Luận tuổi Nam 1998 có hợp với Nữ 1998 không</p>
      <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> Dưới đây là bảng luận tuổi Nam 1998 Nữ 1998 có hợp nhau không. <br />
       Công cụ luận tuổi theo mệnh, can chi, địa chi, cung phi, niên mệnh một cách chuẩn xác.<br />
        Công cụ sẽ tính điểm tuổi 1998 và 1998 có hợp nhau không theo thang điểm 10.  <br />
        +, nếu như Nam 1998 nữ 1998 từ 8 -> 10 điểm là điểm cực tốt.  <br />
        +, Điểm từ 5 -> 7 thì Nam Mậu Dần và Nữ Mậu Dần khá là hợp nhau.  <br />
        +, Dưới 5 điểm : thì Nữ Mậu Dần có hợp với Nam Mậu Dần không, cần phải cân nhắc. <br />
        Phân tích hợp tuổi 1998 và 1998 <br />
        Thông tin	Tuổi 1998	Tuổi 1998	 Nhận xét	Điểm <br />
        Về mệnh	Dương Thổ	Dương Thổ	Bình Hòa	1 <br />
        Về thiên can	Mậu	Mậu	Bình Hòa	1 <br />
        Về địa chi	Dần	Dần	Bình Hòa	1 <br />
        Về cung	Khôn	Tốn	Lục Sát	0 <br />
        Về thiên mệnh năm sinh	<br />
        Thổ	Mộc	Tương Khắc	0 <br />
        Tổng Điểm	3 Điểm Kết luận	điểm của bạn là rất xấu!<br />
        Qua bài viết này, quý bạn đã có biết được mình hợp với những tuổi nào rồi chứ. Để công việc làm ăn, tình duyên, vợ chồng, con cái.... luôn luôn thành công, hòa hợp, mọi việc như ý thì xem Nam 1998 và Nữ 1998 có hợp nhau không là thực sự cần thiết. Chúc quý bạn tuổi Mậu Dần và tuổi Mậu Dần hợp nhau trong tất cả mọi việc, dù nhiều điều chưa được như mong muốn nhưng PHONG THỦY Việt Nam tin chắc rằng nếu cố gắng thì không có gìa là không thể.</p>

     <br />
      <Button style={{marginLeft:"3%"}} color="rose" onClick={()=>{this.setState({value:false})}}>Xem mới</Button>
    </div>)
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "0" }}>
      
        {this.clicked()}
        <GridContainer>
          <GridItem xs={3}>

          </GridItem>
          {this.state.value === false ?(<GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "90%",height:"80%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem bạn có hợp với người ấy không</p>
              <div>
                <br />
                <div>
                  <select style={{ padding: "15px" }}>
                  <option value="volvo" selected disabled hidden>Ngày</option>
                  <option value="saab">1</option>
                  <option value="mercedes">2</option>
                  <option value="audi">3</option>
                  <option value="volvo">4</option>
                  <option value="saab">5</option>
                  <option value="mercedes">6</option>
                  <option value="audi">7</option>
                  <option value="volvo">8</option>
                  <option value="saab">9</option>
                  <option value="mercedes">10</option>
                  <option value="audi">11</option>
                  <option value="saab">12</option>
                  <option value="mercedes">13</option>
                  <option value="audi">14</option>
                  <option value="volvo">15</option>
                  <option value="saab">14</option>
                  <option value="mercedes">17</option>
                  <option value="audi">18</option>
                  <option value="volvo">19</option>
                  <option value="saab">20</option>
                  <option value="mercedes">21</option>
                  <option value="audi">22</option>
                  <option value="volvo">23</option>
                  <option value="saab">24</option>
                  <option value="mercedes">25</option>
                  <option value="audi">26</option>
                  <option value="volvo">27</option>
                  <option value="saab">28</option>
                  <option value="mercedes">29</option>
                  <option value="audi">30</option>
                  </select>

                  <select style={{ marginLeft: "5%", padding: "15px" }}>
                    <option value="volvo" selected disabled hidden>Tháng</option>                   
                    <option value="saab">1</option>
                    <option value="mercedes">2</option>
                    <option value="audi">3</option>
                    <option value="volvo">4</option>
                    <option value="saab">5</option>
                    <option value="mercedes">6</option>
                    <option value="audi">7</option>
                    <option value="volvo">8</option>
                    <option value="saab">9</option>
                    <option value="mercedes">10</option>
                    <option value="audi">11</option>
                    <option value="audi">12</option>
                  </select>
                </div>
                <br></br>
                <br></br>

                <div>
                  <Button color="rose" onClick={()=>{this.setState({value:true})}}>Xem ngay</Button>
                </div>
              </div>
            </div>


          </GridItem>):<div/>}
          <GridItem xs={3}>

          </GridItem>
        </GridContainer>
        

      </div>
    
    );
  }
}

Kethon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Kethon);
