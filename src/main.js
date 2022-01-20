import Navigo from "navigo";
import AddProduct from "./pages/admin/addproduct";
import Dashboard from "./pages/admin/dashboard";
import EditProduct from "./pages/admin/editproduct";
import ListProduct from "./pages/admin/product";
import DetailProduct from "./pages/detailProduct";
import New from "./pages/gioithieu";
import HomePages from "./pages/home";
import Login from "./pages/login";
import Sign from "./pages/sign";
const router = new Navigo("/", { linksSelector: 'a' });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};
router.on({
    "/": () => {
        print(HomePages.render());
    },
    "/product/:id": ({ data }) => {

        print(DetailProduct.render(data.id));
    },
    "/about": () => {
        print(New.render());
    },
    "/login": () => {
        print(Login.render());
    },
    "/sign": () => {
        print(Sign.render())
    },
    "/admin/dashoad": () => {
        print(Dashboard.render());
    },
    "/admin/NewList": () => {
        print(ListProduct.render())
    },
    "/admin/AddNews": () => {
        print(AddProduct.render())
    },
    "/admin/New/:id/edit": ({ data }) => {

        print(EditProduct.render(data.id));
    },
})
router.resolve();