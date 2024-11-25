"use strict";
const id = document.querySelector("#id"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    confirmPsword = document.querySelector("#confirm-psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", register);

function register(){
    if(!id.value) return alert("아이디를 입력해주세요.");
    if(password !== confirmPsword) return alert("비밀번호가 일치하지 않습니다.");
    const req = {
        id: id.value,
        email: email.value,
        password: password.value,
        confirmPsword: confirmPsword.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/login";
            } else{
                alert(res.message);
            }
        })
        .catch((err => {
            console.error(new Error("로그인 중 에러 발생"));
        }));
}
