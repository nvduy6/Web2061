import { getAllCate } from "../api/product";


const Category = {
        async render() {
            const { data: categorys } = await getAllCate();
            return /*html*/ `
        <div class="hidden lg:block">
                        <div class="my-2 mb-6">
                            <h2 class="text-base font-normal leading-7 sm:text-2xl sm:truncate text-gray-900">Danh mục sản phẩm</h2>
                        </div>
                        <ul>
                            <li class="mb-6">
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" class="p-1 focus:outline-none">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                            class="w-4 h-4">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </button>
                                </span>

                                    <input type="search" name="search" class="w-full px-4 py-2 pl-12 rounded shadow outline-none" placeholder="Search...">
                                </div>
                            </li>
                            ${categorys.map((category)=> `
                                <li class=" mb-2 rounded hover:shadow hover:bg-zinc-900 hover:text-blue-600">
                                <h3 class="inline-block w-full h-full px-3 py-2 text-lg text-base font-extralight leading-7 sm:text-2xl sm:truncate text-gray-900 hover:text-white" >
                                <a href="/category/${category.id}" >
                                   ${category.title}
                                </a>
                                </h3> 

                            </li>
                                `).join("")}
                        </ul>
                    </div>
        `
    }
}
export default Category;