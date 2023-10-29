// B1: Dùng vòng lặp for để in ra các số chẵn từ 1 đến 60
// B2: Tạo ra một đối tượng myInfo chứa các thông tin cá nhân: fullName, age, gender, email, phone, address.
//     In ra màn hình các thông tin trên màn hình console

// => Câu lệnh kiểm tra điều kiện: chỉ chạy khối lệnh bên trong khi điều kiện trả về true
// if (điều_kiện) {
//     Khối lệnh
// }

// B1
for (let number = 1; number < 61; number++) {
    if (number % 2 == 0) {
        console.log(number);
    }   
}

// B2

// Khởi tạo đối tượng myInfo
let myInfo = {
    name: "Tiến",
    email: "abc@gmail.com"
}

console.log(myInfo.name);
console.log(myInfo.email);


// ==> Cập nhật code lên git khi đã khởi tạo dự án thành công
// B1: Chạy lệnh: git add để thêm những file vừa cập nhật
// B2: git commit -m "Giải thích cho những thay đôi vừa rồi"
// B3: git push




