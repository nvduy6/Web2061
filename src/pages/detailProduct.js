import { addToCart } from "../../utils/cart";
import {get } from "../api/product";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductList from "../components/productlist";
import "toastr/build/toastr.min.css";
import toastr from "toastr";

const DetailProduct = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/ `

            <div id="header"  class="sticky top-0 w-full z-10 ">
        ${ Header.render()}   
        </div>
        <div class="flex items-center px-2 py-4 bg-white ">
        <div class="grid gap-2 grid-cols-2 border-2 py-2 px-2 content-center ">
                                    <div >
                                    <img class="my-2 w-9/12 h-96 " src="${data.img}" alt=""></div>
                                        <div class="my-2">
                                        <h3 class=" font-semibold text-2xl text-orange-500">
                                        <a href="">${data.title}</a></h3>
                                        <p class="text-xl  underline ">Gia: ${data.price} VND</p>
                                        <p class="leading-8 text-xl">${data.desc}</p>
                                        <input type="number" id="inputValue" class="border border-black" value="1" />
                                        <button id="btnAddTocart" class="mt-2 w-60 h-10 rounded-2xl text-xl content-center  bg-red-700 hover:bg-emerald-400 text-neutral-50"> Mua Hàng</button>
                                        </div>
                                    
                                </div>
                                </div>
                             
                    <div class="flex-1 min-w-0 ">
                        <h2 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Sản phẩm liên quan
                        </h2>
                    </div>
                    <div class="container mx-auto mt-3">
                        <div class="grid gap-5 grid-cols-5">
                            ${await ProductList.render()}
                        </div>
                    </div>
                                ${Footer.render()}
        `
    },
    afterRender(id) {
        const btnAddTocart = document.querySelector("#btnAddTocart");
        const inputValue = document.querySelector("#inputValue");
        btnAddTocart.addEventListener('click', async() => {
            const { data } = await get(id);
            addToCart({...data, quantity: inputValue.value ? +inputValue.value : 1 }, function() {
                toastr.success("Them moi gio hang thanh cong")
            })
        })
        Header.afterRender()
    }
};
export default DetailProduct;