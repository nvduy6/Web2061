import Navigo from "navigo";
import Account from "./pages/account";
import Editaccount from "./pages/account_edit";
import AddCategory from "./pages/admin/category_product/add_category";
import EditCategory from "./pages/admin/category_product/edit_category";
import ListCategory from "./pages/admin/category_product/list_category";
import Dashboard from "./pages/admin/dashboard";
import ListUser from "./pages/admin/people/listUser";
import AddProduct from "./pages/admin/product/addproduct";
import EditProduct from "./pages/admin/product/editproduct";
import ListProduct from "./pages/admin/product/product";
import CartPage from "./pages/cart";
import DetailProduct from "./pages/detailProduct";
import New from "./pages/gioithieu";
import HomePages from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import DetailCategoryPage from "./pages/detail_cate"
import { data } from "jquery";
const router = new Navigo("/", { linksSelector: 'a' });
const print = async(content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before(done, match) {
        if (JSON.parse(localStorage.getItem('user'))) {
            const id = JSON.parse(localStorage.getItem('user')).id;
            if (id == 2) {
                done();
            } else {
                document.location.href = "/"
            }
        } else {
            document.location.href = "/"
        }
    }
})
router.on({
    "/": () => print(HomePages),
    "/product/:id": (value) => print(DetailProduct, value.data.id),
    "/user/:id": (value) => print(Account, value.data.id),
    "/about": () => print(New),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),
    "/signup": () => print(Signup),
    "/admin/dashoad": () => print(Dashboard),
    "/category/:id": ({ data }) => print(DetailCategoryPage, data.id),
    "/user": () => print(ListUser),
    "/category/list": () => print(ListCategory),
    "/category/add": () => print(AddCategory),
    "/category/:id/edit": ({ data }) => print(EditCategory, data.id),
    "/admin/NewList": () => print(ListProduct),
    "/admin/AddNews": () => print(AddProduct),
    "/admin/New/:id/edit": ({ data }) => print(EditProduct, data.id),
    "/user/:id/edit": ({ data }) => print(Editaccount, data.id),
    "/user/:id": ({ data }) => print(Account, data.id),

})
router.resolve();