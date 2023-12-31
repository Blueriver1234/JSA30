// let info = {
//     name: "Tiến",
//     age: 15
// }

// let txt = "";
// for (let x in info) {
//     txt += info[x] + "";
// }

// document.getElementById("demo").innerHTML= txt;

let langs = [
    "Javascript",
    "C++",
    "Java",
    "PHP",
    "Ruby",
    "C#",
    "Python"
]

let myInfo = {
    name: "Trần Văn Tiến",
    email: "abc123@gmail.com",
    phone: "0987654JQK"
}

// Vòng lặp for bình thường
for (let index = 0; index < langs.length; index++) {
    console.log("Vị trí thứ " + index + " là phần tử " + langs[index]);
}

// For-in
// - Đối với Array (mảng): Dùng để lấy ra chỉ số của các phần tử 
// - Đối với object (đối_tượng): Dùng để lấy ra thuộc tính của object
// Cú pháp:
// for (let tên_biến in tên_mảng/tên_object) {
//     Khối lệnh
// }
for (let chi_so in langs) {
    console.log("Chỉ số: ", chi_so);
}


// Đối với object 
for (let thuoc_tinh in myInfo) {
    console.log("Thuộc tính: ", thuoc_tinh);
}

// For-of
// - Đối với Array (mảng): Dùng để lấy ra giá trị của các phần tử 
// - Đối với object (đối_tượng): Dùng để lấy ra thuộc tính của object
// Cú pháp:
// for (let tên_biến of tên_mảng/tên_object) {
//     Khối lệnh
// }

// Đối với mảng
for (let gia_tri of langs) {
    console.log("Giá trị: ", gia_tri);
}

// DDooiss với object
console.log(Object.values(myInfo)); // ==> Trả về 1 mảng
for (let gia_tri of Object.values(myInfo)) {
    console.log("Giá trị của object: ", gia_tri);
}


