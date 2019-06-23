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

const day = new Date();


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
    console.log(day);
    console.log(day.getUTCMonth());
    if(this.state.value === false)
    return (<div>
      <p style={{textAlign:"center",fontSize:"25px",color:"brown",fontWeight:"bold"}}>Xem ngày mua xe máy, oto tháng {day.getMonth() + 1}/2019 - Chọn ngày tốt mua xe theo tuổi 
</p>
      
        <p style = {{fontSize:"14px",marginLeft:"3%",fontWeight:"bold"}}> Xem ngày mua xe là việc quan trọng không khác gì việc xem ngày tốt cưới hỏi trước khi kết hôn. Xe cộ là phương tiện đi lại của con người, và cũng là một vật không thể tách rời trong cuộc sống hàng ngày của mỗi chúng ta. Chọn được ngày đẹp mua xe hợp với tuổi thì khi tham gia giao thông sẽ được an toàn, tránh được các hiểm hỏa, tại nạn, xe tốt ít bị hư hỏng, chỉ cần lên xe là có cảm giác thoải mái. Do đó khi quyết định mua xe máy hay oto, hay bất kì phương tiện nào người ta thường xem ngày tốt mua xe. Ngoài việc coi ngày tốt mua xe theo tuổi thì việc thứ hai cần làm là màu xe có phù hợp với ngũ hành bản mệnh của mình. Đây chính là 2 yếu tố “thiên thời địa lợi” để có được một chiếc xe tốt.

        </p>
        
    </div>)
    else return (<div>
     <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}> Ngày 16/4/2019 là ngày Không xấu nhưng cũng chưa tốt cho việc Cưới hỏi, kết hôn.</p>


     <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>Tiết khí:Thanh minh ( Trong sáng )</p>
     <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>   Ngũ hành:Bạch lạp kim</p>

     <br />
      <Button style={{marginLeft:"3%"}} color="rose" onClick={()=>{this.setState({value:false})}}>Xem mới</Button>
    </div>)
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "0" }}>
      <GridContainer>
         

        </GridContainer>
        {this.clicked()}
        <GridContainer>
          <GridItem xs={3}>

          </GridItem>
          {this.state.value === false ? (<GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "90%",height:"80%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem ngày tốt để mua xe năm 2019</p>
              <div>
                <br />
                <br />
                
                <div>
                  <select style={{ padding: "13px" }}>
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

                  <select style={{ marginLeft: "5%", padding: "13px" }}>
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


          </GridItem>) : <div/>}
          
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
