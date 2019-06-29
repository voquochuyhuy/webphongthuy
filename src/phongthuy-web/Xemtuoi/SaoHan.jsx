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
      
      <p style={{textAlign:"center",fontSize:"25px",color:"brown",fontWeight:"bold"}}>XEM BẢNG SAO HẠN NĂM 2019 - XEM SAO CHIẾU MỆNH NĂM 2019 KỶ HỢI</p>


      <p style={{textAlign:"center",fontSize:"14px",color:"brown",fontWeight:"bold"}}>Tại sao phải xem sao hạn năm 2019 của mình là sao gì? Và sao chiếu mệnh năm 2019 ảnh hưởng ra sao đến cuộc sống trong năm của mình? Có lẽ nhiều người không biết trong đời người mỗi năm lại bị một ngôi sao chiếu mệnh khác nhau. Trong hệ thống Cửu Diện niên hạn có 9 sao khác nhau mỗi năm đều luân phiên xoay quanh từng người, cả nam và nữ vì thế mà vận khí của mỗi người mỗi năm lại một khác. Thái Dương, Thái Âm, Thái Bạch, Vân Hớn, Mộc Đức, Thổ Tú, Thủy Diệu, La Hầu, Kế Đô đây là 9 ngôi sao nằm trong Cửu Diệu Tinh. Trong Cửu Diệu Tinh bao gồm cả sao tốt lẫn sao xấu, có những sao mang đến vận khí rất tốt nhưng có những sao là hung tinh mang đến vận hạn lớn thay đổi cuộc đời mỗi người trong năm đó. Để xem sao hạn năm 2019 của quý bạn là sao gì? là tốt hay xấu? Cách cúng dâng sao giải hạn vào những ngày sao giáng hạ để tránh những điều xui xẻo, không may mắn và đem đến vận khí tốt cho gia chủ, những điều cần tránh trong năm và những việc nên làm thì mời quý bạn điền thông tin của mình vào bảng sao hạn năm 2019 dưới đây để tra cứu kết quả chính xác nhất.</p>
        
    </div>)
    else return (<div>
      <p style={{fontSize:"20px",color:"brown",fontWeight:"bold"}}>Thông tin chi tiết tuổi Mậu Dần </p>
      <p style={{fontSize:"14px",color:"brown",fontWeight:"bold"}}>Năm sinh âm lịch: Mậu Dần (1998) <br/>
      Giới tính: Nam <br/>
      Ngũ hành bản mệnh:Thổ (Thành đầu Thổ) <br/>
      Cung phi: Nam cung Khôn/ Nữ cung Tốn <br/>
      Năm xem sao chiếu mệnh: 2019 (Kỷ Hợi)</p><br/>

      <p style={{fontSize:"20px",color:"brown",fontWeight:"bold"}}>SAO CHIẾU MỆNH TUỔI MẬU DẦN NĂM 2019 NAM MẠNG </p>
      <p style={{fontSize:"14px",color:"brown",fontWeight:"bold"}}> Nam sinh năm 1998 sao gì 2019 chiếu mạng: Năm nay là 22 tuổi - bị sao Thái Bạch chiếu mạng    </p>
      <p style={{fontSize:"20px",color:"brown",fontWeight:"bold"}}>Tử vi tuổi Mậu Dần năm 2019 nam mạng SAO THÁI BẠCH CHIẾU MỆNH NAM GIỚI SẼ BỊ LÀM SAO? </p>
      <p style={{fontSize:"14px",color:"brown",fontWeight:"bold"}}>Nguyên nhân: Năm 2019 quý anh tuổi Mậu Dần 1998 bị Sao Thái Bạch chiếu mạng. Đây là sao Hung Tinh rất xấu với nam giới chủ về hạn nặng, mất của mất lộc, đặc biệt quý anh nào mệnh KIM, MỘC, HỎA thì năm này là năm đại kỵ thay. Chủ về gặp đại họa tai nạn, làm ăn trắc trở, dễ gặp tiểu nhân quấy phá, sức khỏe suy kiệt   </p>
      <p style={{fontSize:"20px",color:"brown",fontWeight:"bold"}}>Sao Thái Bạch năm 2019 CÁCH HÓA GIẢI VẬN HẠN KHI NAM 1998 BỊ SAO THÁI BẠCH CHIẾU MẠNG </p>
      <p style={{fontSize:"14px",color:"brown",fontWeight:"bold"}}> Giải pháp: Để cúng giải hạn Sao Thái Bạch cho tuổi Mậu Dần nam mạng thì quý bạn nên thành tâm khấn vái vào ngày mùng 15 Âm Lịch hàng tháng vì đây là thời điểm sao THÁI BẠCH hung tinh nam giới giáng hạ quý anh nên tới chùa để được giải hạn. Ngoài ra để xem cách cúng Sao Thái Bạch 2019 tại nhà thì mời quý anh xem thêm</p>

      <p style={{fontSize:"20px",color:"brown",fontWeight:"bold"}}>YẾU TỐ	CHI TIẾT VẬN HẠN 1998 NAM MẠNG </p>
      <p style={{fontSize:"14px",color:"brown",fontWeight:"bold"}}>Tam Tai	Không phạm Tam Tai 
      Kim Lâu :	Không phạm Kim Lâu <br/>
      Hoang ốc :	Gia chủ mà làm nhà tuổi này thì phúc lộc sẽ tới, thuận lợi mọi mặt. <br/>
      Kết luận :	Tuổi bạn năm nay không phạm thì có thể làm nhà, dộng thổ, cưới hỏi. <br/>
      Xem chi tiết:   <Button color="success" onClick={()=>{this.props.history.push("/admin/lam-nha")}}>Xem tuổi làm nhà</Button>   <br/>
      Xem chi tiết:    <Button color="success" onClick={()=>{this.props.history.push("/admin/ket-hon")}}>Xem tuổi kết hôn</Button>  </p>
      <br/>
      <Button color="rose" onClick={()=>{this.setState({value:false})}}>Xem mới</Button>
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
          {this.state.value === false ?(<GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "90%",height:"80%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem sao hạn theo tuổi</p>
              <div>
                <br />
                <div>
                <select onSelect={(event)=>{this.setState({Nam :event.target.value}); console.log(event.target.value)}} style={{ padding: "10px" }}>
                    <option value="volvo" selected disabled hidden>Năm sinh</option>
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

                  <select style={{ marginLeft: "5%", padding: "10px" }}>
                    <option value="volvo">Nam</option>
                    <option value="saab">Nữ</option>
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
