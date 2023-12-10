
// DOM
const fullNameInput = document.querySelector("#full-name")
const dateOfBirthInput = document.querySelector("#date-of-birth")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone") 
const passwordInput = document.querySelector("#password") 
const passwordRepeatInput = document.querySelector("#password-repeat") 
const signUpForm = document.querySelector("#sign-up-form")

// Lấy ra danh sách các account đã lưu
// Nếu user-Líst chưa có thì gán bằng mảng rỗng
let accountList = JSON.parse(localStorage.getItem("user-list")) || [];

// Hàm xử lí đăng kí
function handleSignUp(event) {
    // Ngăn việc load lại trang
    event.preventDefault()
    // Lấy giá trị người dùng nhập vào từ ô input

    let fullName = fullNameInput.value;
    let dateOfBirth = dateOfBirthInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let password = passwordInput.value;
    let passwordRepeat = passwordRepeatInput.value;

    // Kiểm tra xem đã điền đủ các trường thông tin hay chưa
    // Chỉ cần thiếu 1 trong các trường hợp thì báo lỗi
    // ! -> ngược lại
    if (!fullName || !dateOfBirth || !email || !phone || !password || !passwordRepeat) {
        alert("Please fill all field")
        
        // Khi lỗi thì dừng hàm, không chạy tiếp code bên dưới
        return;
    }
    // Kiểm tra mật khẩu có khớp hay không
    if(password != passwordRepeat) {
        alert("Password is not match");
        return;
    }

    // Gói các thuộc tính trên vào trong object accountData
    let accountData = {
        fullName,
        dateOfBirth,
        email,
        phone,
        password,
        passwordRepeat,
    };

    // Thêm account dât vào account list
    accountList.push(accountData)
    localStorage.setItem("user-list", JSON.stringify(accountList))
}

signUpForm.addEventListener("submit", function(event) {
    // Gọi hàm đăng kí
    handleSignUp(event)
})













