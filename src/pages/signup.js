import { signup } from "../api/user";
import Footer from "../components/footer"
import Header from "../components/header"

const Signup = {
    async render() {
        return /*html*/ `
        <div id="header"  class="sticky top-0 w-full z-10 ">
        ${ Header.render()}   
        </div>
        <div class="grid gap-2 grid-cols-2">
        <img class="py-12" src="https://azsolution.vn/wp-content/uploads/2020/05/ke-hoach-kinh-doanh-cua-hang-quan-ao.jpg" alt="Workflow">
        
        <div class="min-h-full flex items-center justify-center py-12 px-4 ">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class=" text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          start your 14-day free trial
        </a>
      </p>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST" id="formSignup">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md ">
      <div>
          <label for="email-address" class="sr-only">Name</label>
          <input id="username" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name">
        </div>
        <div class="mt-4">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email" type="email"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
        <div class="mt-4">
          <label for="email-address" class="sr-only">Phone</label>
          <input id="phone" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number">
        </div>
        <div class="mt-4">
          <label for="password" class="sr-only">Password</label>
          <input id="password"  type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
</div>
${Footer.render()}
        `
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("1")
            signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                phone: document.querySelector("#phone").value,
                password: document.querySelector("#password").value,

            }).then(document.location.href = "/signin")
        })
        Header.afterRender()
    }
}
export default Signup;