/** Local storage (Local và global)
 * Là nơi lưu trữ dữ liệu cục bộ (Lưu trên trình duyệt của máy)
 * Lưu lượng: 5mb
 */

// Lưu dữ liệu vào LocalStorage
// CÚ pháp: LocalStorage.setitem("<key>", value)
let name = "Trần Văn Tiến"
localStorage.setItem("name", name);

// Lấy dữ liệu vào LocalStorage ra ngoài:
// Cú pháp: localStarge,getItem("<key>")
let nameInLs = localStorage.getItem("name")
console.log("Lấy tên từ LS ra: ", nameInLs);

const productList = [
    {
      id: 1,
      name: 'Nike AF1 07',
      description: 'Bestseller',
      price: 500
    },
    {
      id: 2,
      name: 'Nike Air Jordan 1 Mid',
      description: 'Trending 2023',
      price: 300
    },
    {
      id: 1,
      name: 'Nike Air Max 90 GORE-TEX',
      description: 'Trending 2023',
      price: 350
    },
    {
      id: 1,
      name: 'Nike Zion 3PF',
      description: 'Trending 2023',
      price: 700
    },
    {
      id: 1,
      name: 'Nike Full Force Low',
      description: 'Trending 2023',
      price: 1000
    },
]

// ______________________________
// ===> Lưu Ý: Dữ liệu ở trong LocalStorage lưu ở dạng JSON.
// Do đó trước khi lưu dữ liệu vào LS, thì mình chuyển đổi dữ liệu từ JS thành JSON
// Các chuyển dữ liệu từ JS thành JSON: JSON>stringify(<tên_biến>)
// Các chuyển dữ liệu từ JSON thành JS: JSON>stringify(<tên_biến>)

// ______________________________


// Lưu mảng dữ liệu productList vào LS (product-list)
localStorage.setItem("product-list", JSON.stringify(productList));

// Lấy mảng dữ liệu productList ra JS (product-list)
let productListInLS = JSON.parse(localStorage.getItem("product-list"));

console.log("DS sản phẩm trong LS: ", productListInLS);
console.log("DS sản phẩm trong JS: ", productList);

// DOM

let myInfo = {
  name: "Trần Văn Tiến",
  age: 15,
  email: "vietcanta1@gmail.com"
}

localStorage.setItem("my-info", JSON.stringify(myInfo));

let myInfosaved = JSON.parse(localStorage.getItem("my-info"));

const nameHTML = document.getElementById("name"); // DOM

nameHTML.innerText = myInfosaved.name
  













