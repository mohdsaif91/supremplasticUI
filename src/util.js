import homeIcon from "./image/icon/homeIcon.png";
import productIcon from "./image/icon/adminproduct.png";

export const clientNav = [
  { text: "home", to: "/" },
  { text: "Contact", to: "/contactUs" },
  { text: "About", to: "/about" },
  { text: "Service", to: "/service" },
];

export const adminNav = [];

export const sideBarNav = [
  {
    text: "Home",
    to: "/adminHome",
    icon: <img src={homeIcon} className="nav-item-icon" />,
  },
  {
    text: "Product",
    to: "/adminProduct",
    icon: <img src={productIcon} className="nav-item-icon" />,
  },
];
