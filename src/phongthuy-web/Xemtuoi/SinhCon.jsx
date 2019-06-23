import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";


import bg from "../TrangChu/t.jpg"
import bg1 from "../TrangChu/1.png"
import embe from './embe.jpg'
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";



class Sinhcon extends React.Component {
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
     <p style={{textAlign:"center",fontSize:"25px",color:"brown",fontWeight:"bold"}}>
      Xem tuổi sinh con hợp tuổi bố mẹ 2019 - Chọn năm sinh con trai và gái
      </p>
      <img src={embe} style={{marginLeft:"40%"}}></img>
      <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>
        Bạn đang có ý đinh xem tuổi sinh con năm 2019 hợp tuổi bố mẹ và bạn mong muốn chọn được năm tốt tháng đẹp 
        để sinh con. Với công cụ xem tuổi sinh con hợp tuổi bố mẹ 2019 hay 2020.. sẽ giúp quý bạn chọn lựa năm 
        sinh con phù hợp nhất với tuổi cha, tuổi mẹ mang đến cho con những sự khởi đầu tốt nhất. 
        Ngoài ra theo PHONG THỦY SỐ khi cha mẹ xem năm sinh con, nếu coi được năm tốt hợp tuổi làm ăn thì người con sẽ 
        mang đến tài lộc giúp cho mẹ ăn nên làm ra, gia đình đầm ấm hạnh phúc và luôn gặp thuận lợi. 
        Chính vì thế để xem tuổi sinh con hợp tuổi cha mẹ thì chỉ cần nhập đầy đủ thông tin năm sinh (Dương Lịch) của cha và của mẹ. Sau đó nhập năm dự tính sinh con năm 2019 hay 2020
        .... rồi click Xem ngay. Công cụ chọn năm
         sinh con hợp tuổi làm ăn bố mẹ sẽ căn cứ vào Ngũ hành, Niên mệnh năm sinh, Thập nhị Địa chi, 
         Cung phi bát tự rồi phân tích xem năm đó có hợp tuổi bố mẹ để sinh con không và nếu như không thì công cụ 
         Xem tuổi sinh con 2019 sẽ giúp quý vị chọn năm nào hợp để sinh con hợp tuổi cha và mẹ.  
         Chúc vợ chồng bạn sớm sinh thiên thần và gia đình luôn luôn hạnh phúc!  
      </p>
    </div>)
    else return (<div>
    <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>Chồng 1991 vợ 1991 sinh con năm 2019 có tốt không</p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>  Tiêu chí	</p>
    <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>Ngũ hành sinh khắc	</p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>- Cha mệnh Thổ </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Mẹ mệnh Thổ </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>- Con mệnh Mộc</p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Cha mệnh Thổ Tương Khắc Mộc của con </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Mẹ mệnh Thổ Tương Khắc Mộc của con </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>  Điểm	2/20</p>
    <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>Thiên can xung hợp	</p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>- Cha là Tân </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Mẹ là Tân </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Con là Kỷ </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Cha là Tân Tương Sinh Kỷ của con </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Mẹ là Tân Tương Sinh Kỷ của con </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> Điểm	6/20</p>
    <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>Địa chi Bình Giải</p>    
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Cha là Mùi </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Mẹ là Mùi </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Con là Hợi </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Cha là Mùi Tam Hợp Hợi của con </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> - Mẹ là Mùi Tam Hợp Hợi của con </p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> Điểm	6/20</p>
    <p style = {{fontSize:"14px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}> Đánh giá	</p>
 
    <p style = {{fontSize:"14px",color:"red",marginLeft:"3%",fontWeight:"bold"}}> Kết Luận	Tổng 14/20 điểm: Chồng Tân Mùi vợ Tân Mùi sinh con năm 2019 là năm rất tốt. Chúc mừng vợ chồng bạn</p>
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
              Xem tuổi sinh con
            </div>
          </GridItem> */}

        </GridContainer>
        <GridContainer>
          <GridItem xs={3}>

          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "97%",height:"80%" }}></img>
            <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "18px" }}>XEM TUỔI SINH CON HỢP VỚI BỐ MẸ</p>
              <div>
 
                  <select style={{ padding: "10px",position: "absolute",left:"-25%" }}>
                    <option value="volvo" selected disabled hidden>Năm sinh chồng</option>
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
               
               
                  <select style={{ padding: "10px",position: "absolute",left:"30%" }}>
                    <option value="volvo" selected disabled hidden>Năm sinh vợ</option>
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
                
               
                  <select style={{ padding: "10px",position: "absolute",left:"80%" }}>
                    <option value="volvo" selected disabled hidden>Năm sinh con</option>
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
                  <Button style = {{position: "absolute",top:"300%",left:"30%"}}color="rose" onClick={()=>{this.setState({value:true})}}>Xem ngay</Button>
                </div>
              </div>
            


          </GridItem>
          <GridItem xs={3}>

          </GridItem>
        </GridContainer>
      {this.clicked()}
      
      </div>
     
    );
  }
}

Sinhcon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Sinhcon);
