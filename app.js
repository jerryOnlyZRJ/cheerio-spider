const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio')

app.get('/', (req, res) => {
    //request异步读取
    request('http://www.baidu.com', function(error, response, body) {
        //cheerio加载响应文本，之后我们就可以使用$选择器模仿jQuery进行相关操作
        const $ = cheerio.load(body)
        res.send($('.mnav').text())
    });
})

app.listen(3000)