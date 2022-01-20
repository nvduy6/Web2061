import Menudashboad from "../../components/menudashboad";
import data from "../../data";

const EditProduct = {
    render(id) {
        const result = data.find((post) => post.id == id);
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
        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white  space-y-6 sm:p-6 ">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="company-website" class="block text-sm font-medium text-gray-700">
                    Id
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="nunber" value="${result.id}" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập ID">
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="company-website" class="block text-sm font-medium text-gray-700">
                 Tiêu đề
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="nunber" value="${result.title} name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-800 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mời bạn nhập tiêu đề">
                  </div>
                </div>
              </div>
  
              <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                  Nội dung
                </label>
                <div class="mt-1">
                  <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nội dung...">
                  ${result.desc}
                  </textarea>
                </div>
              </div>
              <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Ảnh hiện tại
              </label>
              <div class="mt-1">
              <img src=" ${result.img}" class="w-20">
               
               
              </div>
            </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Hình ảnh
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload"  name="file-upload" type="file" class="sr-only">
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
};
export default EditProduct;