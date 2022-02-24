import axios from "axios";
// import { getAll } from "../../../api/category";
import {get, update } from "../../../api/product";
import Menudashboad from "../../../components/menudashboad";
import ListProduct from "./product";
const EditProduct = {
    async render(id) {
        // const { data: cateList } = await getAll()
        const { data } = await get(id);
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
 Cập nhật
                </h2>
                <div>
                <a href="/admin/NewList" class="inline-block w-full h-full px-3 py-2 font-bold text-gray-900 ml-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                   Quay lại
                </a>
                </div>
            </div>
        <div class=" mt-5 md:mt-0 md:col-span-2">
        <form  id="form-edit-post">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white  space-y-6 sm:p-6 ">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="company-website" class="block text-sm font-medium text-gray-700">
                 Tiêu đề
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="nunber" value="${data.title}" name="company-website" id="title-post" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tiêu đề">
                  </div>
                </div>
              </div>
  
              <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                  Nội dung
                </label>
                <div class="mt-1">
                  <textarea id="desc-post" name="desc" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nội dung...">
                  ${data.desc}
                  </textarea>
                </div>
              </div>
              <div>
               <label for="about" class="block text-sm font-medium text-gray-700">
                Danh mục sản phẩm
               </label>
              <div class="mt-1">
               <select name="day" id="category" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
               <option value="">-- Chọn danh mục sản phẩm --</option> 
              </select>
              </div>
            </div>
              <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
               Giá
              </label>
              <div class="mt-1">
              <input type="number" value="${data.price}" name="company-website" id="price-post" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Giá sản phẩm">
              
              </div>
            </div>
            
            <div>
              <div class="mt-1">
              <img class="w-20 h-20" src="${data.img}" id="previewImage"  alt="admin dashboard ui">
              </div>
            </div>
              <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                   Hinh anh
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input type="file" value="${data.img}" name="company-website" id="img-post" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập link anh">
                    </div>
                   </div>
                </div>
            </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
        </div>
  </div>
</div>
        `
    },
    afterRender(id) {
        const formAdd = document.querySelector('#form-edit-post');
        const imgPost = document.querySelector('#img-post');
        const imgPreview = document.querySelector("#img-preview");
        let imguploadLink = "";
        imgPost.addEventListener('change', function(e) {
            imgPreview.src = URL.createObjectURL(e.target.files[0])
        });

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/nguyenvanduy/image/upload";
        const CLOUDINARY_PRESET = "rebc7zds";

        formAdd.addEventListener('submit', async(e) => {
            e.preventDefault();

            // Lấy giá trị input file
            const file = imgPost.files[0];
            if (file) {
                // append vào object formData
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET)

                // call api cloudinary
                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                })
                imguploadLink = data.url;
            }
            // call api thêm bài viết
            update({
                id,
                title: document.querySelector('#title-post').value,
                img: imguploadLink ? imguploadLink : imgPreview.src,
                id,
                desc: document.querySelector('#desc-post').value,
                id,
                category: document.querySelector('#desc-post').value,
                id,
                price: document.querySelector('#price-post').value,
            }).then(document.location.href = "/admin/NewList")
            reRender(ListProduct, "#product");
        })
    },
};
export default EditProduct;