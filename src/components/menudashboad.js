const Menudashboad = {
    render() {
        return /* html */ `
        <svg xmlns="http://www.w3.org/2000/svg" class="inline w-8 h-8 text-white lg:hidden" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <div class="hidden lg:block">
    <div class="flex items-center">
    <div class="flex-shrink-0 w-10 h-10">
        <img class="w-10 h-10 rounded-full"
            src="https://source.unsplash.com/user/erondu"
            alt="admin dashboard ui">
    </div>

    <div class="ml-4">
        <div class="inline-block w-full h-full px-3 py-2 font-bold text-white">
            Nguyễn Văn Duy
        </div>
    </div>
</div>
        <ul class="mt-4">
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
                    <input type="search" name="search"
                        class="w-full px-4 py-2 pl-12 rounded shadow outline-none" placeholder="Search...">
            </li>
            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                <a href="/admin/dashoad" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                </a>
            </li>
            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                <a href="/admin/NewList" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                            clip-rule="evenodd" />
                    </svg>
                    Blogs
                </a>
                
            </li>
            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                <a href="/admin/AddNews" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Add News
                </a>
            </li>
            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                <a href="/admin/New/id/edit" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Inbox
                </a>
            </li>
            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
                <a href="/" class="inline-block w-full h-full px-3 py-2 font-bold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                  Vào Website
                </a>
            </li>
        </ul>
    </div>
        `
    }
};
export default Menudashboad;