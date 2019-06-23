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





class Muanha extends React.Component {
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
      <p style={{textAlign:"center",fontSize:"25px",color:"brown",fontWeight:"bold"}}>Xem ngày mua nhà năm 2019 - Chọn ngày tốt mua nhà mua đất hợp tuổi 
          </p>
          <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>
          Bạn có ý định mua nhà tháng 4 năm 2019. Có nên xem ngày mua nhà ? Đây là câu hỏi mà nhiều quý bạn băn khoăn khi đã chọn được tuổi mua đất, mua nhà năm 2019   Ngôi nhà là tổ ấm của mỗi người, là nơi che chở, bảo vệ và là nơi ta về sau mỗi giờ làm việc. Theo người xưa thì ba việc lớn trong đời của mỗi người đàn ông là: ”mua nhà, lấy vợ, tâu trâu”. Mua nhà là việc quan trọng trong cuộc đời, ai ai cũng phải có một căn nhà để đi về, vì vậy việc xem ngày tốt mua nhà hay xem ngày đặt cọc mua nhà rất quan trọng. Khi tậu nhà mới, người ta thường nhờ các thầy phong thủy tư vấn rất kỹ càng trước khi quyết định có nên mua nhà không. Và ngoài việc tư vấn về góc độ phong thủy của căn nhà thì việc lựa chọn ngày tốt mua nhà cũng phải là ngày hoàng đạo, giờ cát lợi. Một khởi đầu may mắn sẽ giúp gia chủ có được cuộc sống ấm no, hạnh phúc, công việc phát đạt và yên bình trong ngôi nhà mới của mình.   Chúc quý vị mua được ngôi nhà trong mơ hợp tuổi, hợp phong thủy thông qua công cụ xem ngày mua nhà theo tuổi.
          </p>
    </div>)
    else return (<div>
     <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> Tiết khí:Thanh minh ( Trong sáng )</p>


     <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>Ngũ hành:Bạch lạp kim</p>


     <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>Ngày 14/4/2019 là ngày Tốt cho việc Mua nhà, mua đất.</p>

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
              Tử vi 2019
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
              <p style={{ fontSize: "20px" }}>Xem ngày mua nhà năm 2019</p>
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

Muanha.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Muanha);
