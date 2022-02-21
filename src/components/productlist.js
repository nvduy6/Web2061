// import data from "../data"

import { getAll } from "../api/product";
const ProductList = {
        async render() {
            const { data } = await getAll()
            console.log(data)
            return /*html*/ `
        ${data.map((post)=>`
        <div class="flex items-center px-2 py-4 bg-white ">
        <div class="border-2 py-1 px-1 content-center ">
                                    <a href="/#/product/${post.id}">
                                        <img class="m-auto w-64 h-40 " src="${post.img}" alt="">
                                    </a>
                                    <h3 class="my-3">
                                    <a href="/product/${post.id}" class="font-semibold text-lg text-zinc-700">${post.title}</a>
                                    </h3>
                                    <p class="text-base text-red-400 text-lg font-medium underline ">Gia: ${post.price} VND</p>
                                </div>
                                </div>
        `).join("")}
        
        `;
    },
};
export default ProductList;