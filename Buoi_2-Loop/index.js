// Mảng : là 1 biến có thể lưu nhiều giá trị cùng một lúc

// Cú pháp khai báo 1 mảng: let/var/const <tên_mảng> = [<giá_trị_1>, <giá_trị_2>,...]

// Vd danh sách học viên của JSA-30

let studentList = ["Thịnh", "VŨ", "Dương", "Tiến", "Nhật", "Quang Anh"]

// Lưu ý: các kiểu dữ liệu của mảng phải cùng một kiểu dữ liệu

// Chỉ số của mảng n phần tử bắt đầu từ 0, kết thức là n-1

// Truy cập phần tử của mảng

console.log("Phần tử ở vị trí số 2 là: ", studentList[2]);

// Truy cập phần tử đầu tiên của mảng
console.log("Phần tử ở vị trí đầu tiên là: ", studentList[0]);

// Tính số phần tử của mảng
console.log("Số phần tử của mảng là: ", studentList.length );

// Truy cập phần tử cuối cùng của mảng
console.log("Phần tử ở vị trí cuối cùng là: ", studentList[studentList.length -1 ] );

// Thêm một phần tử vào cuối mảng
studentList.push("Phạm Anh Tuấn");

// Vòng lặp for
// Khái niệm: Thực hiện 1 đoạn code gì đó lặp lại nhiều lần (biết trước số lần lặp)
// Ứng dụng
// Cú pháp:
    // for (Let biến_đếm, điều_kiện_dừng, bước_nhảy) {
    //  Khởi lệnh
    // }

// Toán tử Logic: >, <, >=, <=, ==
// ==> Kết quả trả về là giá trị true hoặc false (boolean)

// Vd: In ra các số từ 0 đến 50
// for (let i = 0; i <= 50; i++) {
//     console.log(i);
// }

// i ++ <=> i = i + 1

let n = 50
console.log("Check: ", n > 60);

// In ra các phần tử có trong mảng let studentList = ["Thịnh", "VŨ", "Dương", "Tiến", "Nhật", "Quang Anh"]

for (let index = 0; index < studentList.length; index ++) {
    console.log(studentList[index]);
}

// -> Duyệt mảng:
// Lần lặp đầu tiên: index = 0 => studentList[0] => "Thịnh"
// Lần lặp thứ 2: index = 1 => studentList[1] => "Vũ"
// ...


// Vòng lặp while: Chỉ thực thi đoạn code bên trong khi điều kiện trả về true
// Cú pháp :
// while (điều_kiện) {
//     Khởi lệnh
// }

// Vd:
while (18 >= 18) {
    alert("Bạn đã đủ tuổi");
    break
}
// break => Dừng vòng lặp ngay lập tức
// Tìm hiểu thêm: do while()

// Object = Đối tượng

// Cú pháp:
// let/var/const = {
//     tên_thuộc_tính_1: giá_trị
//     tên_thuộc_tính_2: giá_trị
//     ...
// }

// key - value

// Tên: "Trần Văn Tiến"
// Tuổi: 15
// Địa chỉ: "Ba Vì, Hà Nội"
// Sđt: 0867747JQK



let studient1 = {
    name: "Trần Văn Tiến",
    age: 15,
    address: "Ba Vì, Hà Nội",
    phone: "0867747JQK"
}

console.log("name của studient1 là: ", studient1.name);
console.log("age của studient1 là: ", studient1.age);
console.log("address của studient1 là: ", studient1.address);
console.log("phone của studient1 là: ", studient1.phone);



