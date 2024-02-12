"use strict";

// // express 모듈 미사용
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     if(req.url == '/') {
//         res.end("안녕");
//     } else if(req.url == '/login') {
//         res.end("this is a login window");
//     }
// });

// app.listen(3000, () => {
//     console.log("server open by http");
// });

// express 모듈 사용
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//routing
const home = require('./src/routes/home/index.js');

//app setting
app.set("views", "./src/views"); //위치 지정
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', home); //미들 웨어를 등록해주는 메소드

module.exports = app;