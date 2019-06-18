import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";


import bg from "../TrangChu/t.jpg"
import bg1 from "../TrangChu/1.png"
import lamnha from './lamnha.jpg'
import rong from './rong.jpg'

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Lamnha extends React.Component {
  state = {
    value: false,
    Nam :""
  };
 
  clicked = ()=>{
    if(this.state.value === false)
    return (<div>
      <p style = {{fontSize:"16px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>Ông bà ta có câu “Làm nhà - lấy vợ - tậu trâu ” là 3 việc quan trọng nhất cuộc đời. Chính vì thế xem tuổi làm nhà năm 2019 là việc cực kỳ quan trọng để tránh tuổi phạm và đây cũng chính là công việc trước tiên khi quý bạn tiến hành động thổ, cất nhà. Các việc này cần phải được tiến hành một cách cẩn thận, theo đúng phong tục cổ truyền và chuẩn phong thủy Việt Nam. Người xưa tin rằng, nếu muốn xây được một ngôi nhà tốt “vạn thọ trường an”, giúp gia chủ vinh hoa phú quý thì ngôi nhà cần phải được chọn ngày tốt hợp tuổi gia chủ. Còn ngược lại, nếu các công trình mà không chuẩn bị chu đáo thì dễ bị thiên tai, hỏa hoạn, gia chủ ốm đau hay gặp họa rủi ro, công trình xây xong thì cũng không có người ở. Do đó, để giúp quý gia chủ xem tuổi làm nhà 2019 thì PHONG THỦY SỐ đã mời các chuyên gia hàng đâu về phong thủy. Với công cụ xem tuổi xây nhà năm 2019 quý vị sẽ chọn được tuổi đẹp xây cất nhà cửa, khách sạn, resort, chung cư, nhà hàng, nhà bếp để mọi việc luôn hanh thông và gặp nhiêu may mắn. Sau khi chọn tuổi hợp làm nhà, cất nhà xong thì các bạn nên xem ngày tốt xây dựng, ngày hoàng đạo giờ lành tháng tốt. Chúc quý vị coi được năm tốt làm nhà hợp bản mệnh với mình.
          </p>
      <img style={{marginLeft:"40%"}} src={lamnha}></img>
    </div>)
    else return (<div>
     <p style = {{fontSize:"20px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>Bình giải tốt xấu xem tuổi làm nhà cho người sinh năm 1980 </p>
      <p style = {{fontSize:"16px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>- Trước khi làm nhà, động thổ, cải tạo, xây cất sửa sang nhà cửa thì gia chủ tuổi Canh Thân (1980) phải xem mình có phạm tuổi đại kỵ không (Tam Tai, Hoang Ốc, Kim Lâu). </p>
      <p style = {{fontSize:"20px",color:"red",marginLeft:"3%",fontWeight:"bold"}}>Bởi vì 3 tuổi đại kỵ trên nếu gia chủ mà làm nhà thì sẽ bị: </p>
      <p style = {{fontSize:"16px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>- Hạn tam tai: Nếu Gia chủ đang phân vân tuổi 1980 xây nhà năm nào và chọn đúng năm trùng với tuổi hạn Tam Tai thì gia đình sẽ gặp nhiều điều xấu và không may mắn. Vận xui sẽ đeo bám tất cả mọi người, dễ gặp các biến cố hay các tai họa không thể lường trước được.</p>
      <p style = {{fontSize:"16px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>- Hạn Kim Lâu: Nếu gia chủ tuổi Canh Thân (1980) mà làm nhà, xây cất nhà cửa vào năm Kim Lâu thì quanh năm ốm đâu bệnh tật, sức khỏe suy yếu, sinh khí giảm sút, ngay cả người thân trong nhà cũng bị lây. </p>
      <p style = {{fontSize:"16px",color:"brown",marginLeft:"3%",fontWeight:"bold"}}>- Hạn Hoang ốc: Nếu gia chủ tuổi Canh Thân (1980) mà là nhà, xây cất nhà cửa vào năm Hoang Ốc thì ngôi nhà sẽ không được tốt, lạnh lẽo hoang vắng, giảm sinh khí dễ bị ma quỷ sống cùng trong nhà.</p>

      <br />
      <Button style={{marginLeft:"3%"}} color="rose" onClick={()=>{this.setState({value:false})}}>Xem mới</Button>
    </div>)
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "0"}}>
      <p style = {{fontSize:"30px",fontWeight:"bold",color:"brown",textAlign:"center"}}>
      Xem tuổi LÀM NHÀ năm 2019 - Chọn tuổi xây cất nhà cửa hợp tuổi 
      </p>
      <br></br> 
      
      <GridContainer>
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Xem tuổi làm nhà 2019
            </div>
          </GridItem>

        </GridContainer>
        <GridContainer>
          <GridItem xs={3}>

          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "100%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem tuổi làm nhà năm 2019</p>
              <p >Nhập năm sinh âm lịch</p>
              <div>
                <br />
                <div>
                  <select onSelect={(event)=>{this.setState({Nam :event.target.value}); console.log(event.target.value)}} style={{ padding: "20px" }}>
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

                  <select style={{ marginLeft: "5%", padding: "20px" }}>
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


          </GridItem>
          <GridItem xs={3}>

          </GridItem>
          
          {this.clicked()}
          
        </GridContainer>
        <hr></hr>            
        <hr></hr>                  
      </div>
     
    );
  }
}

Lamnha.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Lamnha);
