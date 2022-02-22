import { getCate } from "../api/product";

import Footer from "../components/footer";
import Header from "../components/header";
import "toastr/build/toastr.min.css";
import Category from "../components/category";

const DetailCategoryPage = {
        async render(id) {
            const { data } = await getCate(id);
            console.log(data);
            return /*html*/ `

            <div id="header" class="sticky top-0 w-full z-10 ">
            ${ Header.render()}   
            </div>
            <main>
                <div class="flex  mt-1">
                    <div class="px-4 py-2 bg-amber-300 lg:w-1/4">
                        ${await Category.render()}
                    </div>
                    <div class="w-full px-4 py-2 bg-gray-100 lg:w-full">
                    <h1>${data.title}</h1>
                    <div class="grid grid-cols-5 gap-8">
                    ${data.products.map(product => `
                    <div class="border-2 py-1 px-1 content-center ">
                    <a href="/#/product/${product.id}">
                        <img class="m-auto w-64 h-40 " src="${product.img}" alt="">
                    </a>
                    <h3 class="my-3">
                    <a href="/product/${product.id}" class="font-semibold text-lg text-zinc-700">${product.title}</a>
                    </h3>
                    <p class="text-base text-red-400 text-lg font-medium underline ">Gia: ${product.price} VND</p>
                </div>
                    `).join("")}</div>
                    </div>
                </div>
            </main>    
            ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender()
    }
};
export default DetailCategoryPage;