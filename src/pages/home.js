import Banner from "../components/banner";
import Category from "../components/category";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductList from "../components/productlist";

const HomePages = {
    async render() {
        return /*html*/ `  
        <div id="header" class="sticky top-0 w-full z-10 ">
        ${ Header.render()}   
        </div>
        ${Banner.render()}
        <main>
            <div class="flex  mt-1">
                <div class="px-4 py-2 bg-amber-300 lg:w-1/4">
                    ${await Category.render()}
                </div>
                <div class="w-full px-4 py-2 bg-gray-100 lg:w-full">
                    <div class="flex-1 min-w-0">
                    <h2 class="mt-2 text-base font-normal leading-7 text-gray-900 sm:text-2xl sm:truncate">
                            Sản phẩm
                        </h2>
                    </div>
                    <div class="container mx-auto mt-4">
                        <div class="grid gap-4 grid-cols-4">
                            ${await ProductList.render()}
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h2 class="mt-2 text-base font-normal leading-7 text-gray-900 sm:text-2xl sm:truncate">
                            Sản phẩm mới nhất
                        </h2>
                    </div>
                    <div class="container mx-auto mt-4">
                        <div class="grid gap-4 grid-cols-4">
                            ${await ProductList.render()}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `
    },
    afterRender() {
        Header.afterRender()
    }
}
export default HomePages;