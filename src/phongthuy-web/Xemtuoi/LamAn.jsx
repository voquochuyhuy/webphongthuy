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
      <p style={{textAlign:"center",fontSize:"25px",color:"brown",fontWeight:"bold"}}>Xem tuổi làm ăn năm 2019 - Xem tuổi Kinh Doanh Buôn Bán kích Tài Lộc</p>
      <br></br>
      <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> Xem tuổi làm ăn năm 2019 hay còn gọi xem tuổi hợp làm ăn chung, đây là một trong những yếu tố cần thiết và cực kỳ quan trọng để công việc làm ăn thuận buồm xuôi gió. Người ta tin rằng trước khi buôn bán, mở cửa hàng kinh doanh hoặc hợp tác làm ăn với ai thì cần phải xem tuổi làm ăn có hợp hay không. Nếu như khi làm ăn mà tìm được người hợp tuổi, hợp ý với mình thì công việc sẽ ngày một thăng tiến, còn ngược lại nếu như hợp tác người không hợp tuổi với mình và không ít thì nhiều cũng sẽ ảnh hưởng xấu tới tài vận. Do vậy, để không làm mất thời gian quý vị, phong thủy số xin gợi ý tới mọi người công cụ xem tuổi làm ăn năm 2019. Công cụ này sẽ giúp gia chủ chọn người hợp tuổi với mình một cách chính xác nhất!       </p>

    </div>)
    else return (<div>
      <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}></p>1. Luận tuổi làm ăn 1998 
      <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}></p>- Người tuổi Mậu Dần làm ăn hợp với tuổi nào 
      Năm sinh:	1998 <br/>
      Xem mệnh ngũ hành:	Thành đầu Thổ ( mệnh Thổ ) <br/>
      Thiên can:	Mậu <br/>
      Địa chi:	Dần<br/>
      Cung mệnh:	<br/>
      Khôn Cung mệnh:	Thổ <br/>
      <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}></p>2. Bình giải tốt xấu cho cả Nam và Nữ 
      a. Bảng dưới đây là nam tuổi Mậu Dần hợp làm ăn với tuổi nào. <br/>
      - Dưới đây là tất cả các tuổi hợp làm ăn với Mậu Dần Nam mạng cùng với những lời bình giải luận điểm từ các chuyên gia phong thủy về tuổi hợp làm ăn với tuổi Mậu Dần từ độ tuổi 1960 đến 2017. Hãy cùng xem tuổi hợp làm ăn với tuổi Mậu Dần Nam mạng là những tuổi nào nhé. 
      1976 <br/>
      Mệnh Thổ - Thổ => Bình Hòa  <br/> 
      Thiên Can Mậu - Bính => Tương Sinh <br/>
      Địa chi Dần - Thìn => Tứ Đức <br/>
      Hợp Cung mệnh <br/>
      Cung mệnh : Thổ - Hỏa => Tương Sinh <br/>
      Niên mệnh năm sinh Thiên mệnh năm sinh : Thổ - Hỏa => Tương Sinh<br/>
      Điểm 7 <br/>
      
      1978 <br/>
      Mệnh Thổ - Hỏa => Tương Sinh  <br/> 
      Thiên Can Mậu - Mậu => Bình Hòa <br/>
      Địa chi Dần - Ngọ => Tam Hợp Cung mệnh <br/>
      Cung mệnh : Thổ - Thổ => Bình Hòa <br/>
      Niên mệnh năm sinh Thiên mệnh năm sinh : Thổ - Thổ => Bình Hòa<br/>
      Điểm 8 <br/>
      
      1982<br/>
      Mệnh Thổ - Thủy => Tương Khắc    <br/>
      Thiên Can Mậu - Nhâm => Bình Hòa <br/>
      Địa chi Dần - Tuất => Tam Hợp Cung mệnh <br/>
      Cung mệnh : Thổ - Kim => Tương Sinh <br/>
      Niên mệnh năm sinh Thiên mệnh năm sinh : Thổ - Kim => Tương Sinh<br/> 
      Điểm 7 <br/>
     <br />
      <Button style={{marginLeft:"3%"}} color="rose" onClick={()=>{this.setState({value:false})}}>Xem mới</Button>
    </div>)
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "0" }}>
      <GridContainer>
          {/* <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Xem tuổi làm ăn
            </div>
          </GridItem> */}

        </GridContainer>
        {this.clicked()}
        <GridContainer>
          <GridItem xs={3}>

          </GridItem>
          {this.state.value === false ?(<GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "90%",height:"80%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem tuổi làm ăn năm 2019</p>
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
