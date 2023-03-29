//JS를 만들때는 strict문법을 준수하겠다는 것 써놓으면 좋음
"use strict";

//서버의 중심 파일
//모듈
const express = require('express');
const app =express();


//앱 세팅
//로그인 뷰(view) 분리하기 - 로그인 뷰(view)를 최적화하기 위해서 분리
 app.set("views", "./views");
 app.set("view engine", "ejs"); //view engine

 //app.js에서 내보낸걸 받아오기 위한 코드
 //라우팅
 const home = require("./routes/home");
 app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드

//app을 www.js로 내보냄
module.exports = app;

