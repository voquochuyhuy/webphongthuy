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

import KetHonData from "../../views/Tables/KetHonData";
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
      <p style={{textAlign:"center",fontSize:"25px",color:"brown",fontWeight:"bold"}}>Xem ngày đẹp cưới hỏi theo tháng , chọn ngày tốt kết hôn theo tuổi vợ chồng 2019 </p>
        <br></br>
        
        <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}> Tại sao phải Xem Ngày Đẹp Cưới Hỏi Tháng 4 Năm 2019 hay Xem Ngày Kết Hôn Theo Tuổi Vợ Chồng? 
        </p>
        <br></br>
        <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>Từ xưa đã có câu “Lấy vợ xem tuổi đàn bà - Làm nhà xem tuổi đàn ông” vì vậy xem ngày cưới hỏi phải phụ thuộc vào tuổi của cô dâu, đây là việc trọng đại của cả một đời người. Việc xem ngày cưới hỏi năm 2019 là để chọn được ngày đẹp, giúp mọi việc diễn ra suôn sẻ và thuận lợi. Bên cạnh đó chọn ngày tốt kết hôn theo tuổi vợ chồng sẽ mang đến nhiều sự may mắn hay một cuộc sống viên mãn cho đôi vợ chồng son cùng với lương duyên bền vững, sống đến đầu bạc răng long. Việc luận giải ngày đẹp kết hôn theo tuổi vợ chồng không phải ai cũng biết. Để hôn nhân của quý bạn hạnh phúc các chuyên gia tử vi làm ra công cụ xem ngày cưới hỏi 2019 dựa trên nhiều phương pháp khác nhau như can chi, nhị thập bát tú, ngũ hành...
        </p>
    </div>)
    else return (<div>
     <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}> Ngày 1/7/2019 là ngày Không xấu nhưng cũng chưa tốt cho việc Cưới hỏi, kết hôn.</p>


     <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>Tiết khí:Thanh minh ( Trong sáng )</p>
     <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>   Ngũ hành:Bạch lạp kim</p>

     <br />
      <Button style={{marginLeft:"3%"}} color="rose" onClick={()=>{this.setState({value:false})}}>Xem mới</Button>
      <KetHonData />
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
              Xem ngày kết hôn
            </div>
          </GridItem> */}

        </GridContainer>
        {this.clicked()}
        <GridContainer>
          <GridItem xs={3}>

          </GridItem>
          {this.state.value === false ?(<GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "90%" ,height:"80%"}}></img>
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


          </GridItem>) :<div/>}
          
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
