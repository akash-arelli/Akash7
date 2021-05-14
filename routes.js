/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import ComputerIcon from '@material-ui/icons/Computer';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MailIcon from '@material-ui/icons/Mail';


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: HomeIcon,

    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "About",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,

    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Experience",
    rtlName: "قائمة الجدول",
    icon: LibraryBooks,

    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Portfolio",
    rtlName: "طباعة",
    icon: "content_paste",

    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Skills and Tools",
    rtlName: "الرموز",
    icon: ComputerIcon,

    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Certificates",
    rtlName: "خرائط",
    icon: ReceiptIcon,

    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Contact",
    rtlName: "إخطارات",
    icon: MailIcon,

    layout: "/admin",
  }
];

export default dashboardRoutes;
