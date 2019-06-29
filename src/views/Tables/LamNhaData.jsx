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

function LamNhaData({ ...props }) {
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
            <h4 className={classes.cardIconTitle}>Những ngày tốt Ký hợp đồng làm ăn trong tháng 7 năm 2019</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[ 'Năm sinh', 'Tuổi' ,'Tam tai' ,'Hoàng ốc', 'Kim lâu']}
              tableData={[
                 
                ['1950 Canh Dần', '70', 'Tốt', 'Tốt', 'Tốt' ],
                ['1952 Nhâm Thìn', '68', 'Tốt', 'Tốt', 'Tốt' ],
                ['1959 Kỷ Hợi', '61', 'Tốt', 'Tốt', 'Tốt' ],
                ['1962 Nhâm Dần', '58','Tốt', 'Tốt', 'Tốt' ],
                ['1968 Mậu Thân', '52' ,'Tốt', 'Tốt', 'Tốt' ],
                ['1971 Tân Hợi', '49', 'Tốt', 'Tốt', 'Tốt' ],
                ['1980 Canh Thân', '40', 'Tốt', 'Tốt', 'Tốt' ],
                ['1986 Bính Dần', '34', 'Tốt', 'Tốt', 'Tốt' ],
                ['1995 Ất Hợi', '25', 'Tốt', 'Tốt', 'Tốt'],

              ]}
              coloredColls={[2]}
              colorsColls={["primary"]}
              customCellClasses={[
                classes.center,
                classes.right,
                classes.right
              ]}
              customClassesForCells={[0, 1, 2]}
              customHeadCellClasses={[
                classes.center,
                classes.right,
                classes.right
              ]}
              customHeadClassesForCells={[0, 1, 2]}
            />
          </CardBody>
        </Card>
      </GridItem> 
      
    </GridContainer>
  );
}

export default withStyles(style)(LamNhaData);
