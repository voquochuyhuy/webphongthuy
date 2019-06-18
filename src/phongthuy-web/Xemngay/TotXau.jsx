import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";


import bg from "../TrangChu/t.jpg"
import bg1 from "../TrangChu/1.png"
import batquai from './batquai.jpg'
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";





class Totxau extends React.Component {
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
        <p style={{textAlign:"center",fontSize:"25px",color:"brown",fontWeight:"bold"}}>Xem ngày tốt xấu, giờ đẹp việc tốt hôm nay, chọn ngày tốt trong tháng
        </p>
        <br></br>
        <p style = {{fontSize:"16px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>
          Dù ngày nay xã hội đã phát triển hiện đại hơn so với thời ông bà ta, nhưng phong tục xem ngày tốt xấu theo tuổi hay chọn ngày cưới hỏi, ngày tốt động thổ, coi ngày đẹp khai trương, mua xe , mua nhà… Có thể nói là các việc quan trọng thì đều được lựa chọn thật kỹ càng. Xem ngày tốt xấu năm 2018 trước khi làm các việc đại sự bây giờ đã trở thành một nét văn hóa truyền thống đẹp của người Việt Nam. Tuy nhiên thì ngày tốt ngày đẹp là ngày như thế nào, tiêu chí gì để chọn ngày tốt? Hay trong một ngày thì giờ nào được xem là giờ hoàng đạo, hướng nào tốt cho xuất hành… để công việc thuận lợi, thành công mỹ mãn. Trên đây là tổng hợp các yếu tốt chọn ngày tốt, được các chuyên gia về phân tích đúc kết lại, một cách chính xác và phù hợp với tuổi của quý gia chủ. Chúc quý bạn coi được ngày tốt, ngày đẹp với mình để các công việc luôn được làm tốt, gặp nhiều may mắn 
        </p>          
    </div>)
    else return (<div>

<p style = {{fontSize:"16px",color:"red",marginLeft:"3%",fontWeight:"bold"}}> Ngày 16/4/2019 là ngày Không xấu nhưng cũng chưa tốt cho việc những việc trọng đại</p>


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
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Xem ngày tốt xấu
            </div>
           
          </GridItem>

        </GridContainer>
        {this.clicked()}
        
        <GridContainer>
           
          <GridItem xs={3}>
            
          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "100%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem ngày tốt xấu năm 2019</p>
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
        <img src={batquai} style={{width:"50%",marginLeft:"25%"}}></img>
      </div>
    
    );
  }
}

Totxau.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Totxau);
