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

import GiauCo from './lt.jpg';
import GiauCo1 from './ban-tay-giau-co.jpg';
import GiacMo from './giai-ma-giac-mo.jpg';
import MatTrai from './giai-mat-trai-theo-tam-linh.jpg';
import GioMao from './gio-mao.gif';
// import TayDai from './ngon-tay-dai.jpg';
// import SinhCon from './sinh-con-nam-dinh-dau.jpg';
import TuoiTi from './tuoi-ti-4.jpg';
// import So80 from './y-nghia-con-so-80.jpg';
// import So90 from './y-nghia-so-90.jpg';
import Thang12 from './y-nghia-thang-12.jpg';
import so50 from './60.jpg';
import {chitay_1} from './data';
const share = (<div className="fb-like" 
data-href="https://web-phong-thuy.herokuapp.com/" 
data-width="" data-layout="standard" data-action="like" 
data-size="large"  data-share="true"></div>
)


class Xemboi extends React.Component {
  state = {
    value: 0,
    b:false
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "0" }}>
        {this.state.b === false ? (<div>
      <div>
          <h3 style={{backgroundColor:"#fcd462", color:"#8c0c10",textAlign:"center",borderRadius:"20px",
        fontSize:"18px !important"}}>XEM BÓI CHỈ TAY</h3>
        </div>
        < br/>
        <div style={{boxShadow:"0 0 10px #0000002e"}}>
          <div style={{textAlign:"center"}}>
            <h5 style={{fontWeight:"bold"}}>NGÓN CÁI CÓ 4 LÓNG THÌ CÓ Ý NGHĨA GÌ</h5>
            <img src={GiauCo}></img>
            <br/>
            <br/>
            <br/>
            <p style={{textAlign:"left",fontWeight:"bold",padding:"0 10px 0 10px"}}>Các nhà nhân tướng học chỉ cần dựa vào lòng bàn tay và các ngón tay cũng có thể phán đoán được tài năng và khả năng của con người. Nếu ngón tay cái có 4 lóng hay bạn có thể biết được người thân của mình có ngón tay cái có 4 lóng.</p>
            <hr />
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <Button onClick={()=>{this.setState({b:true})}} >Xem tiếp >></Button>
        </div>
        <div style={{textAlign:"right"}}>
          {share}
        </div>
        

        < br/>
        <div style={{boxShadow:"0 0 10px #0000002e"}}>
          <div style={{textAlign:"center"}}>
            <h5 style={{fontWeight:"bold"}}>XEM BÓI ĐƯỜNG CHỈ TAY GIÀU CÓ TRÊN BÀN TAY BẠN</h5>
            <img src={GiauCo1}></img>
            <br/>
            <br/>
            <br/>
            <p style={{textAlign:"left",fontWeight:"bold",padding:"0 10px 0 10px"}}>Bạn có biết đường chỉ tay giàu có là những đường nào hay không? Và bàn tay bạn có phải là tướng tay giàu có hay không? Bài viết dưới đây của Phongthuyso.vn sẽ giới thiệu tới các bạn những đường chỉ tay giàu sang theo nhân tướng học.</p>
            <hr />
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <Button onClick={()=>{this.setState({b:true})}} >Xem tiếp >></Button>
        </div>
        <div style={{textAlign:"right"}}>
          {share}
        </div>


        <div>
          <h3 style={{backgroundColor:"#fcd462", color:"#8c0c10",textAlign:"center",borderRadius:"20px",
        fontSize:"18px !important"}}>Ý NGHĨA CÁC CON SỐ</h3>
        </div>
        < br/>
        <div style={{boxShadow:"0 0 10px #0000002e"}}>
          <div style={{textAlign:"center"}}>
            <h5 style={{fontWeight:"bold"}}>BẠN SINH VÀO THÁNG MẤY, Ý NGHĨA THÁNG SINH CỦA BẠN LÀ GÌ?</h5>
            <img src={Thang12}></img>
            <br/>
            <br/>
            <br/>
            <p style={{textAlign:"left",fontWeight:"bold",padding:"0 10px 0 10px"}}>Tháng sinh của bạn có ý nghĩa gì? Bạn muốn tìm hiểu ý nghĩa tháng 1, tháng 2,.... tháng 12 là gì? Mỗi tháng sinh được tượng trưng cho một loại hoa, tháng sinh của bạn mang ý nghĩa gì? Cùng Phong thủy số tìm hiểu ý nghĩa tháng sinh của bạn?</p>
            <hr />
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <Button onClick={()=>{this.setState({b:true})}} >Xem tiếp >></Button>
        </div>
        <div style={{textAlign:"right"}}>
          {share}
        </div>


        < br/>
        <div style={{boxShadow:"0 0 10px #0000002e"}}>
          <div style={{textAlign:"center"}}>
            <h5 style={{fontWeight:"bold"}}>Ý NGHĨA CỦA NHỮNG CON SỐ 40, 41, 42, 43, 44, 45, 46, 47, 48, 49</h5>
            <img src={so50}></img>
            <br/>
            <br/>
            <br/>
            <p style={{textAlign:"left",fontWeight:"bold",padding:"0 10px 0 10px"}}>Mỗi con số đều có một ý nghĩa riêng của nó, bạn muốn biết con số bạn đang sở hữu mang ý nghĩa gì, là tốt hay xấu. Cùng Phong thủy số tìm hiểu ý nghĩa của số 40, ý nghĩa số 41, 42, 43, 44, 45, 46, 47, 48, 49.</p>
            <hr />
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <Button onClick={()=>{this.setState({b:true})}} >Xem tiếp >></Button>
        </div>
        <div style={{textAlign:"right"}}>
          {share}
        </div>


        <div>
          <h3 style={{backgroundColor:"#fcd462", color:"#8c0c10",textAlign:"center",borderRadius:"20px",
        fontSize:"18px !important"}}>ĐIỀM BÁO ,GIẤC MƠ</h3>
        </div>
        < br/>
        <div style={{boxShadow:"0 0 10px #0000002e"}}>
          <div style={{textAlign:"center"}}>
            <h5 style={{fontWeight:"bold"}}>GIỚI KHOA HỌC VÀ TÂM LINH GIẢI MÃ HIỆN TƯỢNG NHÁY MẮT NHƯ THẾ NÀO?</h5>
            <img src={MatTrai}></img>
            <br/>
            <br/>
            <br/>
            <p style={{textAlign:"left",fontWeight:"bold",padding:"0 10px 0 10px"}}>Hiện tượng nháy mắt hay giật mắt liên tục có nhiều ý nghĩa khác nhau. Có những hiện tượng có thể giải thích theo logic khoa học cũng có những hiện tượng, chúng ta thực sự phải tin vào tâm linh để hiểu được vấn đề.</p>
            <hr />
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <Button onClick={()=>{this.setState({b:true})}} >Xem tiếp >></Button>
        </div>
        <div style={{textAlign:"right"}}>
          {share}
        </div>

        
        < br/>
        <div style={{boxShadow:"0 0 10px #0000002e"}}>
          <div style={{textAlign:"center"}}>
            <h5 style={{fontWeight:"bold"}}>NGỦ MƠ THẤY SÂU, CÁ, THÚ, CHIM THÌ BÁO ĐIỀM GÌ?</h5>
            <img src={GiacMo}></img>
            <br/>
            <br/>
            <br/>
            <p style={{textAlign:"left",fontWeight:"bold",padding:"0 10px 0 10px"}}>Giải mã giấc mơ thấy có sâu, cá hay chim, thú thì báo hiệu điềm báo gì, là may hay rủi? Tìm hiểu ý nghĩa của các giấc chiêm bao, đoán điềm giải mộng khi ngủ mơ thấy cá chép, thú, chim,...</p>
            <hr />
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <Button onClick={()=>{this.setState({b:true})}} >Xem tiếp >></Button>
        </div>
        <div style={{textAlign:"right"}}>
          {share}
        </div>



        <div>
          <h3 style={{backgroundColor:"#fcd462", color:"#8c0c10",textAlign:"center",borderRadius:"20px",
        fontSize:"18px !important"}}>XEM BÓI GIỜ</h3>
        </div>
        < br/>
        <div style={{boxShadow:"0 0 10px #0000002e"}}>
          <div style={{textAlign:"center"}}>
            <h5 style={{fontWeight:"bold"}}>CHÍNH XÁC GIỜ TÝ LÀ MẤY GIỜ - GIỜ TÝ TỪ MẤY GIỜ ĐẾN MẤY GIỜ?</h5>
            <img src={TuoiTi}></img>
            <br/>
            <br/>
            <br/>
            <p style={{textAlign:"left",fontWeight:"bold",padding:"0 10px 0 10px"}}>Thực sự thì giờ Tý là Mấy Giờ, và người sinh giờ Tý số sướng hay khổ. Xem ngay để biết chính xác giờ Tý là mấy giờ và giờ Tý từ mấy giờ đến mấy giờ. Xem ngay để biết chi tiết giờ Tý (giờ chuột)</p>
            <hr />
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <Button onClick={()=>{this.setState({b:true})}} >Xem tiếp >></Button>
        </div>
        <div style={{textAlign:"right"}}>
          {share}
        </div>

        
        < br/>
        <div style={{boxShadow:"0 0 10px #0000002e"}}>
          <div style={{textAlign:"center"}}>
            <h5 style={{fontWeight:"bold"}}>GIỜ MÃO LÀ MẤY GIỜ? GIỜ MÃO TỪ MẤY GIỜ ĐẾN MẤY GIỜ?</h5>
            <img src={GioMao}></img>
            <br/>
            <br/>
            <br/>
            <p style={{textAlign:"left",fontWeight:"bold",padding:"0 10px 0 10px"}}>Giờ mão là mấy giờ? Liệu bạn có biết được chính xác giờ mão từ mấy giờ đến mấy giờ không? Dám chắc câu hỏi này sẽ làm khó khá nhiều người đặc biệt là các bạn trẻ. Để biết giờ mão là mấy giờ chúng ta hãy cùng tìm hiểu sau đây nhé.</p>
            <hr />
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <Button onClick={()=>{this.setState({b:true})}} >Xem tiếp >></Button>
        </div>
        <div style={{textAlign:"right"}}>
          {share}
        </div>
        </div>):(<div>
          <div>{chitay_1}</div>
          <br></br>
          <div style={{textAlign:"right"}}><Button onClick={()=>{this.setState({b:false})}} >Quay lại</Button></div>
          </div>)}
      </div>
    

    
    );
  }
}

Xemboi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(Xemboi);
