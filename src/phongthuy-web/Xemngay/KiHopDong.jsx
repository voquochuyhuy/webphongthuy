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
import RegularTable from "../../views/Tables/RegularTables";
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
  clicked = () => {
    console.log(day);
    console.log(day.getUTCMonth());
    if (this.state.value === false)
      return (<div>
        <p style={{ textAlign: "center", fontSize: "25px", color: "brown", fontWeight: "bold" }}>Xem ngày ký hợp đồng - Chọn ngày tốt ký hợp đồng mua bán làm ăn hợp tuổi</p>

        <p style={{ fontSize: "14px", marginLeft: "3%", fontWeight: "bold" }}>
          Những ai làm kinh doanh thì mới hiểu được tầm quan trọng của việc ký kết các hợp đồng kinh tế hay hợp đồng mua bán nhà cửa,..quan trọng như thế nào. Nhưng không phải ai cũng để ý xem ngày ký hợp đồng. Hợp đồng kinh doanh là bản giao ước giữa các đối tác làm ăn với nhau, nó có giá trị pháp lí trước pháp luật. Trong hoạt động kinh doanh, mọi người đều muốn kí kết được những hợp đồng có giá trị kinh tế cao, có nhiều lợi ích cho mình, cũng như gặp được đối tác tin cậy, tạo được mối quan hệ làm ăn lâu dài. Vì vậy, việc chọn ngày tốt kí kết hợp đồng rất quan trọng, nếu chọn được ngày đẹp, giờ tốt thì việc ký kết diễn ra nhanh chóng, thuận lợi.  Ngoài ra công cụ cung cấp cho quý bạn ngày tốt ký hợp đồng trong tháng 6 năm 2019 để thuận tiện và chủ động hơn trong công việc
  
        </p>

      </div>)
    else return (<div>
      <p style={{ fontSize: "14px", color: "red", marginLeft: "3%", fontWeight: "bold" }}> Ngày 1/7/2019 là ngày Không xấu nhưng cũng chưa tốt cho việc Kí hợp đồng.</p>


      <p style={{ fontSize: "14px", color: "brown", marginLeft: "3%", fontWeight: "bold" }}>Tiết khí:Thanh minh ( Trong sáng )</p>
      <p style={{ fontSize: "14px", color: "brown", marginLeft: "3%", fontWeight: "bold" }}>   Ngũ hành:Bạch lạp kim</p>

      <br />
      <Button onClick={() => { this.setState({ value: false }) }}>Xem mới</Button>
      <RegularTable />

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
            <img src={bg1} style={{ width: "90%", height: "80%" }}></img>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", color: "red", fontWeight: "bold" }}>
              <p style={{ fontSize: "20px" }}>Xem ngày tốt để kí hợp đồng</p>
              <div>
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
                <div>
                  <Button color="rose" onClick={() => { this.setState({ value: true }) }}>Xem ngay</Button>
                </div>
              </div>
            </div>


          </GridItem>) : <div />}

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
