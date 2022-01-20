const Category = {
    render() {
        return /*html*/ `
        <div class="hidden lg:block">
                        <div class="my-2 mb-6">
                            <h1 class="text-2xl font-bold text-white">Danh mục sản phẩm</h1>
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
                            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                                <a href="/admin/dashboad" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
Quần áo
                                </a>
                            </li>
                            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                                <a href="/admin/NewList" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                    Túi xách
                                </a>

                            </li>
                            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                                <a href="/admin/News" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
                               Giày dép
                                </a>
                            </li>
                            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                                <a href="/admin/new/:id/edit/" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                    Phụ kiện
                                </a>
                            </li>
                            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                                <a href="/" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                 Mẹ & bé
                                </a>
                            </li>
                        </ul>
                    </div>
        `
    }
}
export default Category;