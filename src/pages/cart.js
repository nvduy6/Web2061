import { reRender } from "../../utils";
import { decreaQuantity, increaseQuantity, removeItemCart } from "../../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import $ from "jquery";
const CartPage = {
        render() {
            let cart = [];
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
            }
            return /*html*/ `
            <div id="header"  class="sticky top-0 w-full z-10 ">
            ${ Header.render()}   
            </div>
        <table id="renderCart" class="min-w-full mt-2 text-center border-collapse border border-slate-400">
        <thead>
            <tr class="bg-gray-400">
            <th>Hình ảnh
            
            </th>
                <th>Tên sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Thao tác</th>
            </tr>
        </thead>
        <tbody id="card">
            ${cart.map(item => `
            
                <tr>
                    <td><img class="w-20 h-20 m-auto"
                    src="${item.img}"
                    alt="admin dashboard ui"></td>
                        <td>${item.title}</td>
                        <td>${item.price}</td>
                  
                    <td>
                        <input type="text" value="${item.quantity}" class="border border-gray-500 w-16"/>
                        <button data-id="${item.id}" class="bg-green-500 text-white btn btn-increase mr-2 px-2">+</button>
                        <button data-id="${item.id}" class="bg-orange-500 text-white btn btn-decrease mr-2 px-2">-</button>
                    </td>
                    <td>${item.quantity * Number.parseFloat(item.price)}</td>
                    <td>
                    <button data-id="${item.id}" class="bg-red-500 text-white btn btn-remove mr-2 px-2">Xóa</button>
                    </td>
                </tr>
           
            `).join("")}
            <tr class="mt-3 border-t-2">
            <td class="text-base font-medium">Tổng tiền<td>
            <td class="text-right text-base font-medium totalPrice" id="totalPrice">150000 VND</td>
            
            </tr>
        </tbody>
    </table>
    ${Footer.render()}
        `
    },
    afterRender(){
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn =>{
            const id = btn.dataset.id;
            btn.addEventListener('click',() =>{
               if(btn.classList.contains('btn-increase')){
                   increaseQuantity(id,() =>reRender(CartPage,"#renderCart"))
               } else if(btn.classList.contains('btn-decrease')){
                   decreaQuantity(id,()=>reRender(CartPage,"#renderCart"))
               }else{
                   removeItemCart(id,()=>{
                       reRender(CartPage,"#app");
                       toastr.success("ban co muon xoa khong")
                   })
               }
            })
        })
// Tính tổng tiền
const totalPrice = document.querySelector('.totalPrice')
let total = 0;
if(JSON.parse(localStorage.getItem('cart'))){
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(item=>{
        total +=item.quantity * Number.parseFloat(item.price);
    totalPrice.innerHTML=total;
    })
}
       
        Header.afterRender()
    }
   
}
export default CartPage;