let myInfo = {
    fullName: "Trần Văn Tiến",
    dateOfBirth: "25/12/2008",
    gender: "Male",
    email: "vietcanta1@gnail.com",
    phone: "0867747JQK",
    address: "Ba Vì, Hà Nội"
}

localStorage.setItem("my-info", JSON.stringify(myInfo));
let myInfosaved = JSON.parse(localStorage.getItem("my-info"));
console.log(myInfosaved);
const nameHTML = document.getElementById("name");
for (let x of Object.values(myInfosaved)) {
    nameHTML.innerText = x;
    if (myInfosaved.gender = "Male") {
        nameHTML.style.color = "white"
        nameHTML.style.background = "black"
    }
    console.log(x);
}



