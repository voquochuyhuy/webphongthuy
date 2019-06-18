
import Dashboard from "./TrangChu/TrangChu";


// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import Image from "@material-ui/icons/Image";
import Timeline from "@material-ui/icons/Timeline";
import LamNha from "./Xemtuoi/LamNha";
import VoChong from "./Xemtuoi/VoChong";
import SinhCon from "./Xemtuoi/SinhCon";
import TotXau from "./Xemngay/TotXau";
import MuaNha from "./Xemngay/MuaNha";
import KetHon from "./Xemngay/KetHon";
import PhongThuy from "./Phongthuy/PhongThuy";
import XemBoi from "./Xemboi/XemBoi";
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Xem tuổi",

    icon: Image,
    state: "componentsCollapse",
    views: [
      {
        path: "/lam-nha",
        name: "Xem tuổi làm nhà",
        component:LamNha,
        layout: "/admin"
      },
      {
        path: "/vo-chong",
        name: "Xem tuổi vợ chồng",
        component: VoChong,
        layout: "/admin"
      },
      {
        path: "/sinh-con",
        name: "Xem tuổi sinh con",
        component: SinhCon,
        layout: "/admin"
      },    
    ]
  },
  {
    collapse: true,
    name: "Xem ngày",
    icon: Apps,
    state: "componentsCollapse1",
    views: [
      {
        path: "/totxau",
        name: "Xem ngày tốt xấu",
        rtlName: "وصفت",
        component: TotXau,
        layout: "/admin"
      },
      {
        path: "/muanha",
        name: "Xem ngày mua nhà",
        rtlName: "نظام الشبكة",
        component: MuaNha,
        layout: "/admin"
      },
      {
        path: "/kethon",
        name: "Xem ngày tốt kết hôn",
        rtlName: "لوحات",
        component: KetHon,
        layout: "/admin"
      },
     
    ]
  },
 
  {
    path: "/tinhyeu",
    name: "Tình Yêu",
    icon: Timeline,
    component: PhongThuy,
    layout: "/admin"
  },

];
export default dashRoutes;
