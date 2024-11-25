"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }
    login() {
        const client = this.body;
        const {id, password} = UserStorage.getUsersInfo(client.id);
        if(id){
            if(id===client.id&&password===client.password)
                return {success: true};
            else{
                return {success: false, message: "비밀번호가 틀렸습니다."}
            }
        }
        return {success: false, message: "아이디가 존재하지 않습니다."};
    }

    register() {
        const client = this.body;
        UserStorage.save(client);
    }
}

module.exports = User;

 // const id = req.body.id,
        //     password = req.body.password

        // const users = UserStorage.getUsers("id", "password");
        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.password[idx]===password){
        //         response.success = "true";
        //         return res.json(response);
        //     }
        // }

        // response.success = "false";
        // response.msg = "로그인에 실패하셨습니다.";
        // console.log(response.success);
        // return res.json(response);