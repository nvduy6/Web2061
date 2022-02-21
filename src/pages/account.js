import {get } from "../api/user";
import Footer from "../components/footer";
import Header from "../components/header";
const Account = {
        async render(id) {
            const { data } = await get(id);
            return /*html*/ `
            ${Header.render()}
        <div class="items-center px-2 py-4 bg-white ">
        <div class="flex content-between border-2 ">
                                    <div class="">
                                    <svg class="w-52 h-52 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                   </div>
                              
                                   <table class="flex-1">
                                   <thead class="bg-gray-50 dark:bg-gray-700">
                                       <tr>
                                           <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                               Name
                                           </th>
                                           <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                               Color
                                           </th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <!-- Product 1 -->
                                       <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                       <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                           Tên tài khoản
                                           </td>
                                           <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                               ${data.username}
                                           </td>
                                       </tr>
                                       <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                       <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                           Email
                                           </td>
                                       <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                           ${data.email}
                                           </td>
                                       </tr>
                                       <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                       <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                           Số điện thoại
                                           </td>
                                       <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                           ${data.phone}
                                           </td>
                                       </tr>
                                       <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                       <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                           Mật khẩu
                                           </td>
                                       <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                           ${data.password}
                                           </td>
                                       </tr>
                                       <td class="flex bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                       <button class="font-semibold text-sm text-black bg-cyan-500 rounded-2xl mt-2 mb-3 px-2 py-3 h-10 leading-3">   <a href="/user/${data.id}/edit">Thay đổi thông tin </a></button>
                                       <div class=" bg-cyan-500 rounded-2xl ml-2 mt-2 mb-3 px-2 py-3 h-10 leading-3">
                                       ${JSON.parse(localStorage.getItem('user')).id ===2?`<button class="font-semibold text-sm text-black"><a href="/admin/dashoad">Quản lí website </a></button>`:``}
                                   
                                       </div>
                                       </td>
                                       </table>
                                       
                                </div>
                                </div>
                             
                    <div class="flex-1 min-w-0 ">
                                ${Footer.render()}
        `
    },
    afterRender() {
        Header.afterRender()
    }
};
export default Account;