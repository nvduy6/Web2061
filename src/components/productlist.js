import data from "../data"

const ProductList = {
        render() {
            return /*html*/ `
        ${data.map((post)=>`
        <div class="flex items-center px-2 py-4 bg-white ">
        <div class="border-2 py-1 px-1 content-center ">
                                    <a href="/product/${post.id}">
                                        <img class="m-auto w-60 h-43 " src="${post.img}" alt="">
                                    </a>
                                    <h3 class="my-3"><a href="/product/${post.id}" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                                    <p class="text-base text-center underline ">Gia: ${post.price}</p>
                                </div>
                                </div>
        `).join("")}
        
        `;
    },
};
export default ProductList;