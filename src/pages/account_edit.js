import { update } from "../api/user";
import {get } from "../api/user"
import Footer from "../components/footer";
import Header from "../components/header";
const Editaccount = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/ `
        ${Header.render()}
        <div class="grid gap-2 grid-cols-2">
        <div>
        <img class="py-12" src="https://azsolution.vn/wp-content/uploads/2020/05/ke-hoach-kinh-doanh-cua-hang-quan-ao.jpg" alt="Workflow">
        </div>
        <div>
        <h3 class="mt-12 text-center text-xl font-extrabold text-gray-900">Thay đổi thông tin</h3>
       
        <form class=" space-y-6" action="#" method="POST" id="form-edit-account">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md ">
      <div>
      <label for="about" class="block text-sm font-medium text-gray-700">
       Tên tài khoản
      </label>
          <input id="username" type="text" value="${data.username}"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name">
        </div>
        <div>
          <label for="about" class="mt-2 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input id="email" type="email" value="${data.email}"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
        <div>
        <label for="about" class="mt-2 block text-sm font-medium text-gray-700">
         Số điện thoại
        </label>
          <input id="phone" type="text" value="${data.phone}" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number">
        </div>
        <div>
        <label for="about" class="mt-2 block text-sm font-medium text-gray-700">
         Mật khẩu
        </label>
          <input id="password"  type="password" required value="${data.password}" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          
          Cập nhật
        </button>
        <a href="/user/${JSON.parse(localStorage.getItem('user')).id}" class="mt-2 underline text-cyan-600" >Quay lại...</a>
      </div>
      </div>
    </form>
    </div>
    ${Footer.render()}
        `
    },
    afterRender(id) {
        const formEdit = document.querySelector('#form-edit-account');
        formEdit.addEventListener('submit', (e) => {
            e.preventDefault();
            update({
                    id,
                    username: document.querySelector("#username").value,
                    id,
                    email: document.querySelector("#email").value,
                    id,
                    phone: document.querySelector("#phone").value,
                    // id,
                    // password: document.querySelector("password").value,
                })
                .then((result) => console.log(result.data))
                .catch((error) => console.log(error))
        })
    },
    afterRender() {
        Header.afterRender()
    }
}
export default Editaccount;