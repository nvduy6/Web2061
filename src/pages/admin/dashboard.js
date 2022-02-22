import { getAll } from "../../api/product";
import Menudashboad from "../../components/menudashboad";

const Dashboard = {
    async render() {
        const { data: products } = await getAll()
            // const { data: users } = await getAll()
        return /* html */ `
        <div class="flex h-screen  ">
            <div class="px-4 py-2 bg-gray-500 bg-indigo-600 ">
        ${Menudashboad.render()}
            </div>
        
            <div class="w-full px-4 py-2 bg-gray-200 lg:w-full">
            <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Thống Kê
                    </h2>
                </div>
            <div class="container mx-auto mt-12">
            <div class="grid gap-4 lg:grid-cols-3">
                <div class="flex items-center h-52 px-4 py-6 bg-white rounded-md shadow-md">
                    <div class="p-3 bg-indigo-600 rounded">
                    <a href="/user">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        </a>
                    </div>
                    <div class="mx-4">
                    <a href="/user">
                        <h4 class="text-2xl font-semibold text-gray-700">4</h4>
                        <div class="text-gray-500">Quản lý tài khoản</div>
                        </a>
                    </div>
                </div>
                <div class="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
                    <div class="p-3 bg-indigo-600 rounded">
                    <a href="/admin/NewList">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        </a>
                    </div>
                    <div class="mx-4">
                    <a href="/admin/NewList">
                        <h4 class="text-2xl font-semibold text-gray-700">${products.length}</h4>
                        <div class="text-gray-500">Quản lý sản phẩm</div>
                        </a>
                    </div>
                </div>
                <div class="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
                    <div class="p-3 bg-indigo-600 rounded">
                    <a href="/category/list">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                    </div>
                    <div class="mx-4">
                    <a href="/category/list">
                        <h4 class="text-2xl font-semibold text-gray-700">6</h4>
                        <div class="text-gray-500">Quản lý tài danh mục</div>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        `
    },
    afterRender() {
        Menudashboad.afterRender()
    }
};
export default Dashboard;