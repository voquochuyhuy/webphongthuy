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
import GiacMo from './giai-ma-giac-mo.jpg';
import MatTrai from './giai-mat-trai-theo-tam-linh.jpg';
import GioMao from './gio-mao.gif';
import TayDai from './ngon-tay-dai.jpg';
import SinhCon from './sinh-con-nam-dinh-dau.jpg';
import TuoiTi from './tuoi-ti-4.jpg';
import So80 from './y-nghia-con-so-80.jpg';
import So90 from './y-nghia-so-90.jpg';


const share = (<div class="fb-share-button" 
data-href="https://web-phong-thuy.herokuapp.com/admin/dashboard" 
data-layout="button_count" data-size="large">
  <a target="_blank" 
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" 
    class="fb-xfbml-parse-ignore">
      Chia sẻ
  </a>
</div>)


class Xemboi extends React.Component {
  state = {
    value: 0
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
          <a href="#" ><b style={{fontSize:"20px"}}>Xem tiếp >></b></a>
        </div>
        
      </div>
    
    );
  }
}

Xemboi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(Xemboi);
