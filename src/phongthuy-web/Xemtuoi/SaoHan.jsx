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
      <p style={{textAlign:"center",fontSize:"14px",color:"brown",fontWeight:"bold"}}>Tại sao phải xem sao hạn năm 2019 của mình là sao gì? Và sao chiếu mệnh năm 2019 ảnh hưởng ra sao đến cuộc sống trong năm của mình? Có lẽ nhiều người không biết trong đời người mỗi năm lại bị một ngôi sao chiếu mệnh khác nhau. Trong hệ thống Cửu Diện niên hạn có 9 sao khác nhau mỗi năm đều luân phiên xoay quanh từng người, cả nam và nữ vì thế mà vận khí của mỗi người mỗi năm lại một khác. Thái Dương, Thái Âm, Thái Bạch, Vân Hớn, Mộc Đức, Thổ Tú, Thủy Diệu, La Hầu, Kế Đô đây là 9 ngôi sao nằm trong Cửu Diệu Tinh. Trong Cửu Diệu Tinh bao gồm cả sao tốt lẫn sao xấu, có những sao mang đến vận khí rất tốt nhưng có những sao là hung tinh mang đến vận hạn lớn thay đổi cuộc đời mỗi người trong năm đó. Để xem sao hạn năm 2019 của quý bạn là sao gì? là tốt hay xấu? Cách cúng dâng sao giải hạn vào những ngày sao giáng hạ để tránh những điều xui xẻo, không may mắn và đem đến vận khí tốt cho gia chủ, những điều cần tránh trong năm và những việc nên làm thì mời quý bạn điền thông tin của mình vào bảng sao hạn năm 2019 dưới đây để tra cứu kết quả chính xác nhất.

</p>
        
    </div>)
    else return (<div>
     <p style = {{fontSize:"16px",color:"red",marginLeft:"3%",fontWeight:"bold"}}> Ngày 16/4/2019 là ngày Không xấu nhưng cũng chưa tốt cho việc Cưới hỏi, kết hôn.</p>


     <p style = {{fontSize:"16px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>Tiết khí:Thanh minh ( Trong sáng )</p>
     <p style = {{fontSize:"16px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>   Ngũ hành:Bạch lạp kim</p>

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
              XEM BẢNG SAO HẠN NĂM 2019
            </div>
          </GridItem> */}

        </GridContainer>
        {this.clicked()}
        <GridContainer>
          <GridItem xs={3}>

          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "90%",height:"80%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem ngày tốt để kết hôn năm 2019</p>
              <div>
                <br />
                <div>
                  <select style={{ padding: "20px" }}>
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
                  <option value="saab">16</option>
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

                  <select style={{ marginLeft: "5%", padding: "20px" }}>
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


          </GridItem>
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
