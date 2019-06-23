
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
import LaSoTuVi from './LaSoTuVi';
import TuVi from './TuVi';
import MuaXe from "./Xemngay/MuaXe";
import KiHopDong from "./Xemngay/KiHopDong";
import HopNhau from "./Xemtuoi/HopNhau";
import LamAn from "./Xemtuoi/LamAn";
import SaoHan from "./Xemtuoi/SaoHan";

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
    path: "/xem-boi",
    name: "Xem bói",
    icon: Timeline,
    component: XemBoi,
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
        path: "/hop-nhau",
        name: "Xem tuổi hợp nhau",
        component:HopNhau,
        layout: "/admin"
      },
      {
        path: "/lam-an",
        name: "Xem tuổi làm ăn",
        component: LamAn,
        layout: "/admin"
      },
      {
        path: "/lam-nha",
        name: "Xem tuổi làm nhà",
        component: LamNha,
        layout: "/admin"
      },
      {
        path: "/sao-han",
        name: "Xem tuổi sao hạn",
        component: SaoHan,
        layout: "/admin"
      },
      {
        path: "/sinh-con",
        name: "Xem tuổi sinh con",
        component: SinhCon,
        layout: "/admin"
      }, 
      {
        path: "/vo-chong",
        name: "Xem tuổi vợ chồng",
        component: VoChong,
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
        path: "/tot-xau",
        name: "Xem ngày tốt xấu",
        component: TotXau,
        layout: "/admin"
      },
      {
        path: "/mua-nha",
        name: "Xem ngày mua nhà",
        component: MuaNha,
        layout: "/admin"
      },
      {
        path: "/ket-hon",
        name: "Xem ngày tốt kết hôn",
        component: KetHon,
        layout: "/admin"
      },
      {
        path: "/mua-xe",
        name: "Xem ngày mua xe",
        component: MuaXe,
        layout: "/admin"
      },
      {
        path: "/ki-hop-dong",
        name: "Xem ngày kí hợp đồng",
        component: KiHopDong,
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
