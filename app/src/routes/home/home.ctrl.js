//컨트롤러:사용자의 입력을 처리하고 모델과 뷰 사이에서 중개 역할을 수행
//api연동 페이지.
"use strict";

const User = require("../../models/User");
//output은 화면 띄우기만 하는것. 프론트엔드에서 get요청 하는것은 대부분 이 곳에 넣으면됨. 홈화면 구성은 예시로 넣어놓은 것이고 실제 구현에서는 process로 빼야됨.
const output = {
    home: (req, res) =>{
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};
// 프로세스에서는 컨트롤러에서 모델(함수)을 호출. ex)login() / 모델은 로직을 담당 / req = request, res = response
const process = {
    login: (req, res) =>{
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },
    register: (req, res) =>{
        const user = new User(req.body);
        const response = user.register();
        console.log(response);
        return res.json(response);
    }
};

module.exports ={
    output,
    process,
};