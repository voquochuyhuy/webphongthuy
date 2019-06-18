
import Dashboard from "./TrangChu/TrangChu.jsx";


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
import LaSoTuVi from './LaSoTuVi'
import TuVi from './TuVi'
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Xem tuổi",
    rtlName: "صفحات",
    icon: Image,
    state: "componentsCollapse",
    views: [
      {
        path: "/lam-nha",
        name: "Xem tuổi làm nhà",
        rtlName: "عالتسعير",
        mini: "PP",
        rtlMini: "ع",
        // component: PricingPage,
        component:LamNha,
        layout: "/admin"
      },
      {
        path: "/vo-chong",
        name: "Xem tuổi vợ chồng",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: VoChong,
        layout: "/admin"
      },
      {
        path: "/sinh-con",
        name: "Xem tuổi sinh con",
        rtlName: "تيالجدول الزمني",
        mini: "T",
        rtlMini: "تي",
        component: SinhCon,
        layout: "/admin"
      },    
    ]
  },
  {
    collapse: true,
    name: "Xem ngày",
    rtlName: "المكونات",
    icon: Apps,
    state: "componentsCollapse1",
    views: [
      {
        path: "/totxau",
        name: "Xem ngày tốt xấu",
        rtlName: "وصفت",
        mini: "B",
        rtlMini: "ب",
        component: TotXau,
        layout: "/admin"
      },
      {
        path: "/muanha",
        name: "Xem ngày mua nhà",
        rtlName: "نظام الشبكة",
        mini: "GS",
        rtlMini: "زو",
        component: MuaNha,
        layout: "/admin"
      },
      {
        path: "/kethon",
        name: "Xem ngày tốt kết hôn",
        rtlName: "لوحات",
        mini: "P",
        rtlMini: "ع",
        component: KetHon,
        layout: "/admin"
      },
     
    ]
  },
 
  {
    path: "/tinhyeu",
    name: "Tình yêu",
    rtlName: "الرسوم البيانية",
    icon: Timeline,
    component: PhongThuy,
    layout: "/admin"
  },
  {
    path: "/xemboi",
    name: "Xem bói",
    rtlName: "التقويم",
    icon: DateRange,
    component: XemBoi,
    layout: "/admin"
  },
  {
    path: "/tuvi",
    name: "Xem bói",   
    icon: DateRange,
    component: TuVi,
    layout: "/admin"
  },
  {
    path: "/lasotuvi",
    name: "Xem bói",   
    icon: DateRange,
    component: LaSoTuVi,
    layout: "/admin"
  },
 
];
export default dashRoutes;
