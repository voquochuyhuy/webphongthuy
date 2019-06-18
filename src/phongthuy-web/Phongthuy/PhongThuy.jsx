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
import tim from "./tim.gif";
import bg2 from "./BG_tv.png";

class Phongthuy extends React.Component {
  state = {
    value: false,
    nam : '',
    nu:"",
  };
  TenbanNam = (event)=>{
    this.setState({nam : event.target.value})
  }
  TenbanNu = (event)=>{
    this.setState({nu : event.target.value})

  }
  ketqua = ()=>{
this.setState({value : true});
window.scrollTo(400, 0);
  }
  show = ()=>{
if(this.state.value === true)
return <div>
  <p style = {{fontSize:"16px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>1. Ngũ hành: </p>
  <p style = {{marginLeft:"3%" ,fontWeight:"bolder"}}>- Ngũ hành của bạn trai là Thổ tương khắc với Thuỷ của bạn gái, không tốt. </p>
  <p style = {{marginLeft:"3%" ,fontWeight:"bolder"}}>- Số điểm: 0/2 </p>
  <p style = {{fontSize:"16px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>2. Cung mệnh: </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>- Người nam mệnh Khôn, thuộc Tây Tứ Mệnh, người nữ mệnh Tốn, thuộc Đông Tứ Mệnh, không tốt ! </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>- Số điểm: 0/2 </p>
  <p style = {{fontSize:"16px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>3. Quẻ dịch: </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>- Tên người nam là {this.state.nam}, ứng với ngoại quái là Tốn </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>- Tên người nữ là {this.state.nu}, ứng với nội quái là Tốn </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>- Kết hợp tên của hai người, được quẻ Thuần Tốn (巽 xùn) </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}> - Ký hiệu quẻ :||:|| Ý nghĩa: Thuận dã. Thuận nhập. Theo lên theo xuống, theo tới theo lui, có sự giấu diếm ở trong. Quẻ không phân định rõ cát hung, có thể chấp nhận được Quẻ số 57 Thuần Tốn (巽 xùn) </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>- Số điểm:1/2</p>
  <p style = {{fontSize:"16px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>4. Can chi: </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>Theo khoa đoán số vợ chồng của CAO LY ĐẦU HÌNH thì Nam dụng Can, Nữ dụng Chi. </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}> Theo quẻ bói này, người nam có can là Mậu nếu lấy người nữ có chi là Sửu: Thì cuộc làm ăn thường trở ngại; có lúc yên ổn, có cơn nghèo khổ, nhưng cũng chung sống đến già, song vợ chồng hay tranh cãi. </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}> Uất hận chua cay ngán ngẫm đời, </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}> Tủi hờn trĩu nặng cánh hoa mai. </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>Nhìn đời như nước trôi muôn ngã, </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>Chạnh thấy lòng ai lạnh não nề. </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}> Thôi đã phôi pha đường dĩ vãng, </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>Đây đã vườn xưa tự thuở nào. </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}> Cắn răng cam chịu mùi chua chát, </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>Để khỏi sầu vương, khỏi bẻ bàng. </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>- Số điểm: 0/2 </p>
  <p style = {{fontSize:"16px",color:"red",marginLeft:"3%",fontWeight:"bold"}}> 5. Họ tên:
  </p> 
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>Người nam tên là ádasd, người nữ tên là ádasd, quy đổi được thành số 4, </p>
  <p style = {{marginLeft:"3%",fontWeight:"bolder"}}>tương ứng có bài vịnh: </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>Tưởng rằng nguyệt nọ hoa kia </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>Ngờ ra nào có tiếc gì hỡi ai </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>Chữ tri gắn bó một hai </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>Ngày nay chờ đợi ngày mai sẽ thành </p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>- Số điểm: 0/2 Kết luận: Tổng điểm là 1/10 </p>
  <p style = {{fontSize:"16px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>Hai bạn không được hợp nhau cho lắm.Cần phải cố gắng thật nhiều. </p>
  <br />
  <Button style={{marginLeft:"3%"}} color="rose" onClick={()=>{this.setState({value:false})}}>Xem lại</Button>

</div>
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="container-fluid" style={{ marginTop: "-10px" ,backgroundImage: "url(" + bg2 + ")",marginLeft:"-20px",marginRight:"60px"}}>
      <p></p>
          <GridContainer style={{}}>
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Xem bói tình yêu
            </div>
          </GridItem>

        </GridContainer>
        <GridContainer>
          <GridItem xs={3}>
            <img src={tim} style={{width:"60%",marginLeft:"5%"}}></img>
          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "100%" }}></img>
            <div style={{ position: "absolute", top: "0", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem hai bạn có hợp nhau không</p>
            </div>  
                <br />
                <div>
                  <span style={{ position:"absolute",top:"20%",left:"30%",color:"red",fontWeight:"bolder",fontSize: "18px" }}>Tên bạn trai</span>
                  <input style={{ position:"absolute",top:"20%",left:"50%"}} onChange={(event)=>this.TenbanNam(event)}></input>
                  <br/>
                  <select style={{ padding: "10px",position:"absolute",top:"30%",left:"20%" }}>
                  <option value="volvo" selected disabled hidden>Ngày sinh</option>
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

                <select style={{ padding: "10px",position:"absolute",top:"30%",left:"40%"}}>
                  <option value="volvo" selected disabled hidden>Tháng sinh</option>
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

                <select style={{ padding: "10px" ,position:"absolute",top:"30%",left:"60%"}}>
                  <option value="volvo" selected disabled hidden>Năm sinh</option>
                  <option value="saab">1990</option>
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

                <span style={{ position:"absolute",top:"42%",left:"30%",color:"red",fontWeight:"bolder",fontSize: "18px" }}>Tên bạn gái</span>
                  <input style={{ position:"absolute",top:"42%",left:"50%"}} onChange={(event)=>this.TenbanNu(event)}></input>
                  <br/>
                  <select style={{ padding: "10px",position:"absolute",top:"50%",left:"20%" }}>
                  <option value="volvo" selected disabled hidden>Ngày sinh</option>
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

                <select style={{ padding: "10px",position:"absolute",top:"50%",left:"40%"}}>
                  <option value="volvo" selected disabled hidden>Tháng sinh</option>
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

                <select style={{ padding: "10px" ,position:"absolute",top:"50%",left:"60%"}}>
                  <option value="volvo" selected disabled hidden>Năm sinh</option>
                  <option value="saab">1990</option>
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
                  <Button style={{ position:"absolute",top:"60%",left:"40%"}} onClick={this.ketqua} color="rose">Xem ngay</Button>
                </div>
              
            


          </GridItem>
          <GridItem xs={3}>
          <img src={tim} style={{width:"60%",marginLeft:"15%"}}></img>

          </GridItem>
          {this.show()}
        </GridContainer>
        <hr></hr>
        
      </div>
    
    );
  }
}

Phongthuy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Phongthuy);
