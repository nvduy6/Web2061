import axios from "axios";
import { getAll } from "../../../api/category";
import { add } from "../../../api/product";
import Menudashboad from "../../../components/menudashboad";
const AddProduct = {
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
                Thêm Mới 
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
        <form action=""  id="form-add-post">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="company-website" class="block text-sm font-medium text-gray-700">
                 Tên sản phẩm
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" name="company-website" id="title-post" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tên sản phẩm">
                  </div>
                </div>
              </div>
  
              <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                 Chi tiết
                </label>
                <div class="mt-1">
                  <textarea id="desc-post" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Chi tiết..."></textarea>
                </div>
              </div>
              <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
               Giá
              </label>
              <div class="mt-1">
              <input type="number" name="company-website" id="price-post" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Giá sản phẩm">
              
              </div>
            <div>
               <label for="about" class="block text-sm font-medium text-gray-700">
                Danh mục sản phẩm
               </label>
              <div class="mt-1">
               <select name="day" id="category" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                 ${data.map((post)=> `
                
                 <option  >${post.title} </option>
                 
                 ` )}
                
             
              </select>
              </div>
            </div>
              <div class="grid grid-cols-2 gap-2">
              <div>  <img class="mt-2 h-20 w-20" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>

                  <div class="col-span-3 sm:col-span-2">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                  Hinh anh
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input type="file" name="company-website" id="img-post" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tiêu đề">
                    </div>
                  </div>
                </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                ADD
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
    afterRender() {
        const formAdd = document.querySelector('#form-add-post');
        const imgPost = document.querySelector('#img-post');
        const imgPreview = document.querySelector("#img-preview");
        let imgLink = "";
        imgPost.addEventListener('change', function(e){
          imgPreview.src = URL.createObjectURL(e.target.files[0])
      });

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/nguyenvanduy/image/upload";
        const CLOUDINARY_PRESET = "rebc7zds";

        formAdd.addEventListener('submit', async(e) => {
          e.preventDefault();

          // Lấy giá trị input file
          const file = imgPost.files[0];
          if(file){
          // append vào object formData
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', CLOUDINARY_PRESET)

          // call api cloudinary
          const {data} = await axios.post(CLOUDINARY_API, formData, {
                  headers: {
                      "Content-Type": "application/form-data"
                  }
              })
              imgLink = data.url;
            }
              // call api thêm bài viết
          add({
              "title": document.querySelector('#title-post').value,
              "img": imgLink || "",
              "desc": document.querySelector('#desc-post').value,
              "category": document.querySelector('#category').value,
              "price": document.querySelector('#price-post').value,
          }).then(document.location.href = "/admin/NewList")
          reRender(ListProduct, "#product");
      })
    },
};
export default AddProduct;