import Menudashboad from "../../../components/menudashboad";
import { reRender } from "../../../../utils/render";
import { getAll, remove } from "../../../api/user";

const ListUser = {
        async render() {
            const { data } = await getAll();
            return /* html */ `

            <div class="flex h-screen">
            <div class="px-4 py-2 bg-gray-500 bg-indigo-600 lg:w-1/4">
        ${Menudashboad.render()}
            </div>
        
            <div class="w-full px-4 py-2 bg-gray-200 lg:w-full">
            <div class="flex justify-between  min-w-0">
                 <h2
                class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                >
                Danh sách tài khoản
                </h2>
                <div>
                <a href="/admin/dashoad" class="inline-block w-full h-full px-3 py-2 font-bold text-gray-900 ml-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                   Quay lại
                </a>
                </div>
            </div>
            <div class="container mx-auto mt-12">
            <div class="flex flex-col mt-8">
                        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div
                            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                                <table class="min-w-full border-collapse border border-slate-400">
                                    <thead>
                                        <tr>
                                            <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                STT</th>
                                            <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Tên tài khoản</th>
                                            <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Email</th>
                                                <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Số điện thoại</th>
                                            <th
                                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                Delete</th>
                                        </tr>
                                    </thead>

                                    <tbody class="bg-white">
                                    ${data.map((post,index)=>  `
                                    <tr>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="text-sm leading-5 text-gray-500">${index+1}</div>
                                </td>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-sm leading-5 text-gray-500">${post.username}</div>
                                        </td>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 text-gray-500">${post.email}</div>
                                            </td>
        
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-sm leading-5 text-gray-500">${post.phone}</div>
                                    </td>
                                            <td
                                            <button data-id=${post.id} class="btn btn-remove"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg></button>
                                            </td>
                                        </tr>
                                    
                                    `).join("")}
                                        

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        `
    },
    afterRender(){
        // lấy toàn bộ danh sách button có class là .btn
        const buttons = document.querySelectorAll('.btn');
        // tạo vòng lặp để lấy ra từng button
        buttons.forEach(button => {
            // sử dụng dataset để lấy id từ data-*
            const id = button.dataset.id;
            // click vào button thì xóa phần tử trong mảng
            // dựa vào ID vừa lấy được
            button.addEventListener('click', () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if(confirm){
                    remove(id).then(() =>{console.log("Bạn đã xóa thành công")
                reRender(ListUser,"#app");
                } );
                }
            })
        });
    }
};
export default ListUser;