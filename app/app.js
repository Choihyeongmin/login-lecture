"use strict";
// main file, node server의 기본설정.
// ------------use http---------------
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
//     if(req.url === "/")
//         res.end("여기는 루트입니다.");
//     else if(req.url === "/login")
//         res.end("여기는 로그인입니다.");
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });

// -------------use express-----------------
//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views"); //view(html) 분리
app.set("view engine", "ejs"); //view(html) 분리 / view engine == ejs
app.use(express.static(`${__dirname}/src/public`)); // 정적 경로 추가 
app.use(bodyParser.json()); //bodyParser 
app.use(bodyParser.urlencoded({extended:true}));


app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드;

module.exports = app;