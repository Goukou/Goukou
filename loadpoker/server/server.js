"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const Player_1 = require("./Player");
const Play_1 = require("./Play");
var app = new express;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json");
    next();
});
app.get('/', function (req, res) {
    let math = Math.floor(Math.random());
    console.log(Player_1.Player._many);
    res.send('No operation');
});
app.post('/post', urlencodedParser, function (req, res, Next) {
    console.log(req.data);
    console.log(req);
    if (req.body.usernaname) {
        console.dir('hello   ' + req.body.usernaname + '    ' + Date());
        let name = req.body.usernaname;
        res.send('hello   ' + name + '    ' + Date());
    }
    if (req.body.userage) {
        console.dir('hello   ' + req.body.userage + '    ' + Date());
        res.send('hello   ' + req.body.userage + '    ' + Date());
    }
});
app.post('/api/roll', jsonParser, function (req, res, data) {
    data = { result: Play_1.Play.one, result2: Play_1.Play.two, result3: Play_1.Play.three, bets: Play_1.Play.double, many: Player_1.Player._many };
    var ROLLDATA = JSON.stringify(data);
    res.send(ROLLDATA);
    console.log(ROLLDATA);
    console.log('判定成功');
});
app.post('/api/fost', jsonParser, function (req, res, data) {
    Play_1.Play.fost();
    console.log('执行fost');
    // data = { nes: '执行fost' }
    res.send('No operation');
});
// app.post( '/api/bets', jsonParser, function ( req, res, data: any){
//         var bet = Play.double
//             data = { bet: bet }
//         var BETDATA = JSON.stringify ( data )
//         res.send ( BETDATA )
//         console.log ( BETDATA )
// })
app.post('/api/playmany', jsonParser, function (req, res, data) {
    Play_1.Play.a();
    // data = { nes: " a " }
    res.send('No operation');
});
app.post('/api/nbets', jsonParser, function (req, res, data) {
    let nbets;
    Play_1.Play.double = 1;
    nbets = Play_1.Play.double;
    data = { nbets: nbets.toString() };
    var NBETSDATA = JSON.stringify(data);
    res.send(NBETSDATA);
    console.log(NBETSDATA);
});
app.post('/api/Refresh', jsonParser, function (req, res, data) {
    Play_1.Play.shuaxin();
    // data = { nes: "刷新"}
    res.send('No operation');
    console.log(' 有刷新过 ');
});
app.post('/api/Many', jsonParser, function (req, res, data) {
    let donewmany;
    donewmany = Player_1.Player._many;
    data = { donewmany: donewmany.toString() };
    var MONYDATA = JSON.stringify(data);
    res.send(MONYDATA);
    console.log('获取最新的资金显示 ' + donewmany);
});
app.post('/api/bets', jsonParser, function (req, res, data) {
    console.log(' 执行的是bets');
    let nbets;
    Play_1.Play.double++;
    nbets = Play_1.Play.double;
    data = { nbets: nbets.toString() };
    var BETSDATA = JSON.stringify(data);
    res.send(BETSDATA);
    console.log(BETSDATA);
});
app.post('/api/sign', jsonParser, function (req, res, data) {
    console.log(req.body);
    let Account = req.body;
    console.log(Account);
    let dataArr = [
        ['1', '1'],
        ['987654321', '987654321'],
        ['123456789', '123456789']
    ];
    var newzc = dataArr.map((e) => { return { 'name': e[0], 'sv': e[1] }; });
    var bad = newzc.map((e) => { return e.name == Account.Ed_name; });
    var newbad = newzc.map((e) => { return e.sv == Account.Ed_mima; });
    Account.Ed_name;
    Account.Ed_mima;
    for (var i = 0; i <= Array.length; i++) {
        if (bad[i] == newbad[i]) {
            if (bad[i] == false) {
                data = { speak: '密码错误 或者 账号不存在' };
                var SPEAKDATA = JSON.stringify(data);
                res.send(SPEAKDATA);
            }
            else {
                data = { Key: "SceneManager.toRegister()" };
                var KEYDATA = JSON.stringify(data);
                res.send(KEYDATA);
            }
        }
        else {
            null;
        }
        if (dataArr && dataArr) {
            data = { speak: '密码错误 或者 账号不存在' };
            var SPEAKDATA = JSON.stringify(data);
            res.send(SPEAKDATA);
        }
    }
});
// var options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//         res.header("Access-Control-Allow-Origin", "*");
//       res.set('x-timestamp', Date.now())
//     }
//   }
// app.use(express.static('public', options))
app.post('/api/test', jsonParser, function (req, res) {
    console.log(req);
    console.log(req.body);
    res.send(req.body);
});
app.listen(4000);
