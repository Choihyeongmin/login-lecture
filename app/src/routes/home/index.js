"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
//라우터 설정 get or post요청 get요청은 정보 전달 없이 요청 ex)화면 처리 / post요청은 정보 전달 ex) login.
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router; // 다른 곳에서 쓸 수 있도록 던지는 코드;