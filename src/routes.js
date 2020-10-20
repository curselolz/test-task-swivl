import Item from "Home/components/Profile";
import Home from "Home/components/Home";

const routes = [
  {
    path: "/item/:username/",
    name: "Item",
    component: Item,
    isExact: true,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    isExact: false,
  },
];

export default routes;
