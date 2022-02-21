import { reRender } from "../../utils/render";
const Header = {
        render() {
            // const { data } = await getAll();
            return /*html*/ `          
        <div class="bg-red-700 h-12 flex justify-between">
            <div>
            <img class="ml-4 h-10 pt-2 w-25" src="https://theme.hstatic.net/1000373601/1000745736/14/logo.png?v=751" alt="Workflow">
            </div>
          
            <div class="mr-4 mt-2 font-semibold text-xl text-black">
            ${localStorage.getItem('user')?`Xin chào:<a href="/user/${JSON.parse(localStorage.getItem('user')).id}">  
            <span class="font-semibold text-base text-white mr-2" id="username"></span>
            </a>  
                <span id="logout" class="text-sm cursor-pointer">Đăng xuất</span>`:`<a href="/signin">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></a>`}
        
            </div>
            </div>
            <div class="mt-1 h-10 bg-amber-300 flex justify-between">
                <ul class="relative mt-3 ml-3">
                    <li class="inline pr-5 text-lg font-medium">
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block  w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg> Trang chủ
                        </a>
                    </li>
                    <li class="inline pr-5 text-lg font-medium">
                        <a href="/about">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg> Giới thiệu
                        </a>
                    </li>
                    <li class="inline pr-5 text-lg font-medium">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        </svg> Sản phẩm
                        </a>
                    </li>
                    <li class="inline pr-5 text-lg font-medium">
                        <a href="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg> Liên hệ
                        </a>
                    </li>
                </ul>

                <ul class="mt-3">
                ${localStorage.getItem('user')?`<li class="inline pr-5">
                <a href="/cart" class="text-lg font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg> Giỏ hàng
                </a>
            </li>`:``}
            
                    
                </ul>
            </div>
        `
    },
    afterRender() {
        const username = document.querySelector("#username");
        if(username){
            username.innerHTML = JSON.parse(localStorage.getItem('user')).username;
        }
        const logout = document.querySelector("#logout");
        if(logout){
            logout.addEventListener('click', function() {
                localStorage.removeItem('user');
                reRender(Header, "#header");
            })
        }
        
    }
}
export default Header;