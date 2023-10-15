// Các kiểu dữ liệu ở trong JS:


/**
 * String: Chuỗi => Tập hợp của nhiều chữ cái và số được viết liền với nhau và được để trong ""
 *       VD: "abc123", "kjnkjnkfds@#%$$^&*$@#%^", "123"
 * Number: Số => Chỉ chứa số
 *       VD: 123, 98345987, 0, -1, 1.4, ...
 * Boolean: true/false
 */


// 1. Khai báo biến: let, var, const
/**
 * Biến được bảo bởi từ let thì có thể gán cho chúng 1 giá trị mới
 */


// let my_name = "Trần Văn Tiến"

// let my_age = 15

// console.log("Tôi tên là " + my_name + " ,Năm nay tôi " + my_age + " tuổi");

// let a = 10
// let b = 2

// let plus = a + b
// let minus = a - b
// let times = a * b
// let devide = a / b
// console.log("Tổng a + b "+ " = " + plus);
// console.log("Hiệu a - b "+ " = " + minus);
// console.log("Tích a * b "+ " = " + times);
// console.log("Thương a / b "+ " = " + devide);

// // S = √p x (p – a) x (p – b) x ( p – c)
// // Dấu căn bậc 2: Math.sqrt(value)

// let x = 3
// let y = 4
// let z = 5
// let c = x + y + z
// let p = c / 2
// let m = p * (p - x) * (p - y) * (p - z)
// let s = Math.sqrt(m)
// console.log("Diện tích tam giác khi có số đo 3 cạnh lần lượt là " + x + ", " + y + ", " + z + "= " + s);
// console.log(`Diện tích tam khi có số đo 3 cạnh lần lượt là ${x}, ${y}, ${z} = ${s}`);

// 3. Hàm Alert, Prompt, Ép kiểu trong JS:
/**
 * String(value): Biến value từ kiểu giá trị nào đó -> kiểu giá trị String
 * Number(value): Biến value từ kiểu giá trị nào đó -> kiểu giá trị Number
 */

// let input_value = prompt("Enter something ?");
// input_value = Number(input_value)
// let t = input_value + 10;
// console.log(t);

// let x = prompt("Số đo cạnh x = ?");
// let y = prompt("Số đo cạnh y = ?");
// let z = prompt("Số đo cạnh z = ?");

// x = Number(x);
// y = Number(y);
// z = Number(z);

// let p = (x + y + z) / 2;
// let m = p * (p - x) * (p - y) * (p - z);
// let s = Math.sqrt(m);
// alert(`Diện tích tam khi có số đo 3 cạnh lần lượt là ${x}, ${y}, ${z} = ${s}`);

let a = 10;
let b = 10;
let check = a == b;
console.log(check);
