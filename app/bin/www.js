"use strict";
//서버 실행파일
const PORT = 3000;
const app = require("../app");

app.listen(PORT, () => {
    console.log("서버가동");
});