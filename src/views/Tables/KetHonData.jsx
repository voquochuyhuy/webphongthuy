import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";

const style = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

function RegularTables({ ...props }) {
  const { classes } = props;
  return (
    <GridContainer>
      {/* <p>Những ngày tốt Ký hợp đồng làm ăn trong tháng 7 năm 2019</p> */}
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Những ngày tốt Kết hôn , Cưới hỏi trong tháng 7 năm 2019</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Thứ", "Dương lịch", "Âm lịch"]}
              tableData={[
                ['Thứ năm',	'4/7/2019',	'2/6/2019' ],
                ['Thứ sáu',	'5/7/2019',	'3/6/2019' ],
                ['Thứ bảy',	'6/7/2019',	'4/6/2019' ],
                ['Chủ nhật',	'7/7/2019',	'5/6/2019' ],
                ['Thứ tư',    '10/7/2019',	'8/6/2019' ],
                ['Thứ năm',	'11/7/2019',	'9/6/2019' ],
                ['Thứ sáu',	'12/7/2019',	'10/6/2019' ],
                ['Thứ tư',	    '17/7/2019',	'15/6/2019' ],
                ['Thứ năm',	'18/7/2019',	'16/6/2019 '],
                ['Thứ hai',	'22/7/2019',	'20/6/2019' ],
                ['Thứ ba',	    '23/7/2019',	'21/6/2019' ],
                ['Thứ tư',	    '24/7/2019',	'22/6/2019' ],
                ['Chủ nhật',	'28/7/2019',	'26/6/2019' ],
                ['Thứ hai',	'29/7/2019',	'27/6/2019' ],
                ['Thứ ba',	    '30/7/2019',	'28/6/2019'],
               
              ]}
              coloredColls={[2]}
              colorsColls={["primary"]}
              customCellClasses={[
                classes.right,
                classes.right,
                classes.right
              ]}
              customClassesForCells={[0, 1, 2]}
              customHeadCellClasses={[
                classes.right,
                classes.right,
                classes.right
              ]}
              customHeadClassesForCells={[0, 1, 2]}
            />
          </CardBody>
        </Card>
      </GridItem> 

       

       <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Những ngày xấu nên tránh Kết hôn , Cưới hỏi trong tháng 7 năm 2019</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Thứ", "Dương lịch", "Âm lịch"]}
              tableData={[
                ['Thứ tư'	  ,  '3/7/2019',	'1/6/2019'],
                ['Thứ bảy',	'13/7/2019',	'11/6/2019' ],
                ['Thứ hai','15/7/2019',	'13/6/2019' ],
                ['Thứ năm',	'25/7/2019',	'23/6/2019' ],
                ['Thứ bảy',	'27/7/2019',	'25/6/2019'],

              ]}
              coloredColls={[2]}
              colorsColls={["primary"]}
              customCellClasses={[
                classes.center,
                classes.center,
                classes.center
              ]}
              customClassesForCells={[0, 1, 2]}
              customHeadCellClasses={[
                classes.center,
                classes.center,
                classes.center
              ]}
              customHeadClassesForCells={[0, 1, 2]}
            />
          </CardBody>
        </Card>
      </GridItem>

      
    </GridContainer>
  );
}

export default withStyles(style)(RegularTables);
