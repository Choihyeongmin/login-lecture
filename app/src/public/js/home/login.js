//front-end
"use strict";
// ejs 파일에서 이 javascript파일 선언해줘야함
const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("#button");
// 페이지에서 입력받은 값을 저장
loginBtn.addEventListener("click", login);
//버튼이 눌리면 login함수 수행
function login(){
    const req = {
        id: id.value,
        password: password.value,
    };
    // request를 만들고
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    }) // api로 request를 던짐, json은 형식.
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/";
            } else{
                alert(res.message);
            }
        }) // response를 받고 수행
        .catch((err => {
            console.error(new Error("로그인 중 에러 발생"));
        }));
}
