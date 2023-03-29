// 컨트롤러 분리하기

"use strict";

const hello = (req, res) => {
    res.render("home/index");
  };

  const login = (req, res) => {
    res.render("home/login");
  }

  //index.js랑 연결될 수 있도록 내보내기
  module.exports = {
    hello,
    login
  };