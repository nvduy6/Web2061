import { add } from "../../../api/category";
import Menudashboad from "../../../components/menudashboad";
import ListCategory from "./list_category";

const AddCategory = {
    render() {
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
                <a href="/category/list" class="inline-block w-full h-full px-3 py-2 font-bold text-gray-900 ml-50">
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
        <form  id="form-add-category">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="company-website" class="block text-sm font-medium text-gray-700">
                 Tên danh mục
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" name="company-website" id="title_category" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tiêu đề">
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
        const formAdd = document.querySelector('#form-add-category');
        formAdd.addEventListener('submit', (e) => {
            e.preventDefault();
            add({
                    title: document.querySelector('#title_category').value,
                })
                .then(document.location.href = "/category/list")
            reRender(ListCategory, "#List_category");
        })
    }
};
export default AddCategory;