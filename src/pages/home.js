import Banner from "../components/banner";
import Category from "../components/category";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductList from "../components/productlist";

const HomePages = {
    render() {
        return /*html*/ `
        ${Header.render()}
        ${Banner.render()}
        <main>
            <div class="flex  mt-2">
                <div class="px-4 py-2 bg-gray-400 bg-indigo-600 lg:w-1/4">
                    ${Category.render()}
                </div>

                <div class="w-full px-4 py-2 bg-gray-100 lg:w-full">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Sản phẩm
                        </h2>
                    </div>
                    <div class="container mx-auto mt-6">
                        <div class="grid gap-4 grid-cols-4">
                            ${ProductList.render()}
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Sản phẩm mới nhất
                        </h2>
                    </div>
                    <div class="container mx-auto mt-6">
                        <div class="grid gap-4 grid-cols-4">
                            ${ProductList.render()}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `
    }
}
export default HomePages;