import Footer from "../components/footer";
import Header from "../components/header";
import ProductList from "../components/productlist";
import data from "../data"

const DetailProduct = {
    render(id) {
        const result = data.find((post) => post.id == id);
        console.log(result)
        return /*html*/ `
            ${Header.render()}
        <div class="flex items-center px-2 py-4 bg-white ">
        <div class="grid gap-2 grid-cols-2 border-2 py-2 px-2 content-center ">
                                    <div >
                                    <img class="my-2" src="${result.img}" alt=""></div>
                                        
                                        <div class="my-2">
                                        <h3 class=" font-semibold text-2xl text-orange-500">
                                        <a href="">${result.title}</a></h3>
                                        <p class="text-xl  underline ">Gia: ${result.price}</p>
                                        <p class="leading-8 text-xl">${result.desc}</p>
                                        
                                        <button class="mt-2 w-60 h-10 rounded-2xl text-xl content-center  bg-red-700 hover:bg-emerald-400 text-neutral-50"> Mua Hàng</button>
                                        </div>
                                    
                                </div>
                                </div>
                             
                    <div class="flex-1 min-w-0 ">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Sản phẩm liên quan
                        </h2>
                    </div>
                    <div class="container mx-auto mt-6">
                        <div class="grid gap-4 grid-cols-4">
                            ${ProductList.render()}
                        </div>
                    </div>
                                ${Footer.render()}
        `
    }
};
export default DetailProduct;