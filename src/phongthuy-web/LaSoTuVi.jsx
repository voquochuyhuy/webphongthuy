import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";


import bg from "./TrangChu/t.jpg"
import bg1 from "./TrangChu/1.png"
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";


// import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

export default class LaSoTuVi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked : false
    }
  }
  xemNgayLaSoTuVi = ()=>{
    this.setState({clicked : !this.state.clicked});
    
  }
  rerender = ()=>{
    if(this.state.clicked === false)
     return (<div><p style={{marginLeft:"3%",fontSize:"25px",color:"red",fontWeight:"bold"}}>
     Cách lấy lá số tử vi trọn đời
     </p>
     <p style = {{fontSize:"15px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>
     Khi xem tử vi, người ta dựa vào họ tên, ngày tháng năm sinh của nam nữ để lập. Lá số tử vi trọn đời bao gồm 12 cung là bản mệnh, phúc đức, cha mẹ, vợ chồng, công danh sự nghiệp, tiền tài, nhà cửa, con cái, anh chị em, sức khỏe, quan hệ xã hội, bạn bè - đồng nghiệp. Trong 12 cung, thì cung nào cũng có tầm quan trọng của nó, nhưng đối với phụ nữ thì cung thu thê là quan trọng hơn, ngược lại đối với đàn ông lại là cung sự nghiệp. Việc xem tử vi trọn đời không chỉ để biết về tương lai ta giàu hay nghèo, thọ hay không, mà còn biết rõ mình là ai, mối quan hệ với bạn bè đồng nghiệp, chỗ đứng của mình trong xã hội này. Muốn luận giải chính xác về lá số tử vi của mình, bạn nên khảo sát cả những lá số tử vi của những người thân để tìm được đáp án chính xác nhất.
     </p>
     <p style={{marginLeft:"3%",fontSize:"25px",color:"red",fontWeight:"bold"}}> Lá số tử vi năm 2019 của 12 con giáp
     </p>
     <p style = {{fontSize:"15px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>Lá số tử vi của 12 con giáp sẽ ra sao trong năm 2019. Năm Mậu Tuất mệnh Mộc rất thích hợp cho việc đầu tư, xây dựng liên quan đến bất động sản phát triển. Tuổi Dần, Ngọ, Tuất gặp hạn tam tai cần chú ý khi đưa ra quyết định quan trọng, tuổi Thìn gặp đôi chút khó khăn, tuổi Tỵ gặp nhiều may mắn.... 
     </p>
     <p style={{marginLeft:"3%",fontSize:"25px",color:"red",fontWeight:"bold"}}>
     Luận giải lá số tử vi trực tuyến miễn phí
     </p >
     <p style = {{fontSize:"15px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>
      Hiện nay Phong Thủy Số đã cung cấp nội dung chính xác luận giải 12 cung của lá số. Ngoài ra chúng tôi cung cấp vận hạn theo từng tuổi để quý bạn có đầy đủ thông tin tránh hạn trong năm. Việc bình giải lá số tử vi trọn đời có nhiều phương pháp, trường phái luận giải khác nhau. Mỗi phương pháp đều có tính chính xác riêng, chúng tôi xin phép không bàn luận tính đúng sai. Ngoài ra, Phong thủy số giới thiệu với bạn trọn bộ Tử vi 2019 cho 12 con giáp chi tiết nhất về Tình duyên, Gia đạo, Công danh sự nghiệp, Sức khỏe và Vận hạn trong 12 tháng của năm Mậu Tuất
      </p>
     <p style={{marginLeft:"3%",fontSize:"25px",color:"red",fontWeight:"bold"}}>Lưu ý :</p> 
     <p style = {{fontSize:"15px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>Để Lấy Lá số tử vi 2019 chính xác mời quý bạn nhập chính xác thông tin về giờ sinh, ngày tháng năm sinh dương lịch Họ và tên Không được để trống Ngày sinh Không được để trống Tháng sinh Không được để trống Giờ sinh Không được để trống Phút sinh Không được để trống
     </p> </div>)
     else return (<div>
      <p>VẬN NĂM 21 TUỔI </p> 
      <p>Phá, sẩy thai, sanh khó, sanh non, khó nuôi (Tang - Hổ - Thai) </p>
      <p>Phá, sẩy thai, sanh khó, sanh non, khó nuôi (Tang - Hổ - Thai) </p>
      <p>Tang chế, chia ly, buồn phiền, lo lắng, mất mát (Tang - Hổ) Tang chế, chia ly, buồn phiền, lo lắng, mất mát (Tang - Điếu) </p>
      <p>Buồn phiền, đau buồn, chia ly (Tang - Mã) </p>
      <p>Đau buồn, chia ly, tang chế, Tai nạn xe cộ (Khốc - Hư - Tang - Mã) </p>
      <p>Bằng cấp cao, hay được thăng chức (Phụ - Cáo) Bôn tẩu tha phương (Mã - Tuần hoặc Triệt) </p>
      <p>Té ngã, tang chế ( Tang - Điếu) Té và bị thương tích tay chân  ( Mã - Tuần/ Triệt) </p>
      <p>Thú dữ cắn (Riêu - Hổ - Hình) Chó cắn (Hổ - Khốc) Ác thú cắn, cọp ăn ( Hổ - Khốc - Riêu) </p>
      <p> Coi chừng có chuyện buồn phiền, đau yếu, hay có bệnh phổi (Tang - Hổ - Khốc - Hư) </p>
      <p>Có uy quyền, nếu có quan chức tất được cao thăng (Mã - Khốc - Khách) </p>
      <p>Coi chừng đau bệnh, mất của, tù tội hay có thể có tang ( Tang Môn) </p>
      <p>Coi chừng bị bệnh nặng hay có tang lớn. Nếu không, nên phòng ngừa tai nạn xe cộ hay té ngã từ trên cao xuống (Tang -  Điếu - Hình) </p>
      <p>Có chuyện buồn phiền, đau yếu Mưu sự trước khó sau dễ.(Thiên-Khốc)</p>
      <br />
      <Button style={{marginLeft:"3%"}} color="rose" onClick={()=>{this.setState({clicked:false})}}>Xem mới</Button>
     </div>)
      
  }
  render() {
    return (
      <div style={{ marginTop: "0" }}>
      <GridContainer>
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Xem bói tử vi
            </div>
          </GridItem>

        </GridContainer>
        <p style={{textAlign:"center",fontSize:"25px",color:"brown",fontWeight:"bolder"}}>XEM LÁ SỐ TỬ VI TRỰC TUYẾN</p>
        <GridContainer>
          <GridItem xs={3}>

          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
          <img src={bg1} style={{ width: "100%" }}></img>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold", }}>
              <p style={{ fontSize: "20px" }} >Xem lá số tử vi miễn phí</p>
              <br></br>

              <div>
                <input style={{ padding: "15px" }} placeholder="Họ và tên"></input>
              </div>
              <br></br>
              <div>
                <select style={{ padding: "10px",position:"absolute",top:"55%",left:"-40%" }}>
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
                  <option value="saab">15</option>
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

                <select style={{ padding: "10px",position:"absolute",top:"55%",left:"30%"}}>
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

                <select style={{ padding: "10px" ,position:"absolute",top:"55%",left:"100%"}}>
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
                <Button color="rose" onClick={this.xemNgayLaSoTuVi}>Xem ngay</Button>
              </div>
            </div>

          </GridItem>
          <GridItem xs={3}>

          </GridItem>
          <GridItem xs={3}>

          </GridItem>
        </GridContainer>
      {this.rerender()}  
      
            
      
      </div>
    )
  }
}
