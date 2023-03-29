//JS를 만들때는 strict문법을 준수하겠다는 것 써놓으면 좋음
// 디버깅이 쉬워지고 발생 가능한 에러들을 예방한다.
"use strict";

// 서버의 중심 파일
//여기서도 app을 사용하기 위하여 작성 
//but 이건 경로이기 떄문에 router로 변경하여 작성
const express = require('express');
const router =express.Router();

const ctrl = require("./home.ctrl");

//클라이언트가 url로 접근하는 경로를 안내해줌
//경로 필수!! '/' 꼭 넣어줘야함
// 써져있던 함수를 home.ctrl.js로 따로 이동시켜줌 = 컨트롤러 분리
router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

//메인 app.js에서는 indes.js가 어디있는지 모르기때문에 
// 연결이 필요 이걸 app.js에서도 받아주기 위한 코드 작성
module.exports = router;
