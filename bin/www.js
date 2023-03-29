//서버를 띄워주는 코드 작성
"use strict";

// www.j의 상위 폴더로 간 후 거기에 있는 같은 경로에 있는 app.js를 불러와야함
const app = require("../app");

const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});