import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// import Calendar from "../Calendar/Calendar";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";


import bg from "./t.jpg"
import bg1 from "./1.png"
import batquai from './batquai.png'
import kinhdich from './kinhdich.gif'
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";



class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  xemNgayTuVi = ()=>{
    this.props.history.push('tuvi');
  }
  xemNgayLaSoTuVi = ()=>{
    this.props.history.push('lasotuvi');
  }
  lamnha = ()=>{
    this.props.history.push('lam-nha');
  }
  vochong = ()=>{
    this.props.history.push('vo-chong');
  }
  sinhcon = ()=>{
    this.props.history.push('sinh-con');
  }
  phongthuy = ()=>{
    this.props.history.push('tinhyeu');
  }
  totxau = ()=>{
    this.props.history.push('totxau');
  }
  muanha = ()=>{
    this.props.history.push('muanha');
  }
  kethon = ()=>{
    this.props.history.push('kethon');
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "0" }}>
        
      <div style={{marginLeft:"7%",textAlign:"center"}}>
      {/* <p>XEM TỬ VI CÁC TUỔI NĂM 2019</p> */}
        {/* <GridContainer>
          <GridItem xs={12}>
          <Button color="danger">Tử vi tuổi Tý</Button>
          <Button color="danger"> Tử vi tuổi Sửu</Button>
          <Button color="danger">Tử vi tuổi Dần</Button>
          <Button color="danger">Tử vi tuổi Mẹo</Button>
          <Button color="danger">Tử vi tuổi Thìn</Button>
          <Button color="danger">Tử vi tuổi Tỵ</Button>
          </GridItem>
          <GridItem xs={12}>
          <Button color="danger">Tử vi tuổi Ngọ</Button>
          <Button color="danger">Tử vi tuổi Mùi</Button>
          <Button color="danger">Tử vi tuổi Thân</Button>
          <Button color="danger">Tử vi tuổi Dậu</Button>
          <Button color="danger">Tử vi tuổi Tuất</Button>
          <Button color="danger">Tử vi tuổi Hợi</Button>
          </GridItem>
        </GridContainer> */}
        </div>
        <GridContainer>
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Tử vi 2019
            </div>
          </GridItem>

        </GridContainer>
        <GridContainer>
          <GridItem xs={3}>
            <img src ={batquai}></img>
          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "100%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem TỬ VI 2019 - Giải vận hạn - Kích tài lộc</p>
              <div>
                <br />
                <div>
                  <select style={{ padding: "15px" }}>
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

                  <select style={{ marginLeft: "5%", padding: "15px" }}>
                    <option value="volvo">Nam</option>
                    <option value="saab">Nữ</option>
                  </select>
                </div>
                <br></br>
                <br></br>

                <div>
                  <Button color="rose" onClick={this.xemNgayTuVi}>Xem ngay</Button>
                </div>
              </div>
            </div>


          </GridItem>
          <GridItem xs={3}>
          <img src ={batquai}></img>
          </GridItem>
        </GridContainer>
        <hr></hr>
        <GridContainer>
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Lá số tử vi
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={3} >
            <img style={{width:"80%",marginLeft:"5%"}} src={kinhdich}></img>
          </GridItem>
          <GridItem xs={6} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg1} style={{ width: "100%" }}></img>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold", }}>
              <p style={{ fontSize: "20px" }} >Xem lá số tử vi miễn phí</p>
              <br></br>

              <div>
                <input style={{ padding: "13px" }} placeholder="Họ và tên"></input>
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

                <select onSelect={this.Nam}  style={{ padding: "10px" ,position:"absolute",top:"55%",left:"100%"}}>
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
          <img style={{width:"80%"}} src={kinhdich}></img>
          </GridItem>
        </GridContainer>
        <hr></hr>
        <GridContainer>
          <GridItem xs={12} style={{ position: "relative", textAlign: "center" }}>
            <img src={bg} style={{ width: "100%", height: "30%" }}></img>
            <div style={{
              position: "absolute", top: "15%", left: "50%",
              transform: "translate(-50%,-50%)", color: "white", fontWeight: "bold", backgroundColor: "warning", borderRadius: "30%", fontSize: "20px"
            }}>
              Danh sách xem bói
            </div>
          </GridItem>
        </GridContainer>

        <GridContainer style={{fontSize:"16px",fontWeight:"bold",color:"brown"}}>
          <GridItem xs={2}>

          </GridItem>
          <GridItem xs={6}>
            <Button color="danger" onClick={this.lamnha}>
              Xem tuổi làm nhà
            </Button>
            <br></br>
            <Button color="danger" onClick={this.vochong}>
              Xem tuổi vợ chồng
            </Button>
            <br></br>
            <Button color="danger" onClick={this.sinhcon}>
              Xem tuổi sinh con
            </Button>
          </GridItem>
          <GridItem xs={4}>
            <Button color="danger" onClick={this.totxau}>
              Xem ngày tốt xấu
            </Button>
            <br></br>
            <Button color="danger" onClick={this.muanha}>
              Xem ngày mua nhà
            </Button>
            <br></br>
            <Button color="danger" onClick={this.kethon}>
              Xem ngày tốt kết hôn
            </Button>
          </GridItem>          
        </GridContainer>
        <GridContainer style={{fontSize:"16px",fontWeight:"bold",color:"brown"}}>
            <GridItem xs={2}>
            
            </GridItem>
            <GridItem xs={6}>
            
            <Button color="danger" onClick={this.phongthuy}>
              Phong thủy
            </Button>
            </GridItem>
            <GridItem xs={4}>
            
            </GridItem>
          </GridContainer>
      </div>
     
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
