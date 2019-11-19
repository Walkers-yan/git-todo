// 引入 Express
const express = require('express');
// 创建服务器
const app = express();
const path = require('path');

app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

// 静态资源访问
app.use(express.static(path.join(__dirname, 'public')));

const home = require('./route/home');
const admin = require('./route/admin');

// 前台相关的路由
app.use('/admin', admin);
// 后台相关的路由
app.use('/home', home);

app.listen(3000);