var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Net;
(function (Net) {
    var Myhttp = (function () {
        function Myhttp() {
        }
        Object.defineProperty(Myhttp.prototype, "handler", {
            get: function () {
                //	console.log(9)
                return this._httpHandler;
            },
            set: function (h) {
                this._httpHandler = h;
            },
            enumerable: true,
            configurable: true
        });
        Myhttp.prototype.request = function (api, handler, guideInfo) {
            var _this = this;
            if (guideInfo === void 0) { guideInfo = null; }
            //	console.log(10) 
            this.api = api.apiName(); //api 名字 
            this._httpHandler = handler; //网络回复 返回 错误
            // http传输解析方式，使用requestbody[yang.pei] 
            var requestBody = {
                header: {},
                data: api.apiData(),
            };
            //console.log(requestBody)
            //resp
            var resp = this.processMsg(api.apiUrl(), requestBody); // 实例数据响应，返回的数据 
            if (this._httpHandler) {
                //console.log(7) 
                setTimeout(function () {
                    _this._httpHandler.onReceiveResponse(_this.api, resp);
                }, 1000);
            }
        };
        // processMsg 创造返回数据 resp请求到的数据加名字 apiData把接口的名字传进去 
        Myhttp.prototype.processMsg = function (apiurl, data) {
            //       PLAYMATHS 
            if (apiurl == APIDefine.PLAYMATHS) {
                console.log(' 经过Play.maths ');
                Play.maths();
                return '1';
            }
            //       SIGN 
            if (apiurl == APIDefine.SIGN) {
                console.log(data);
                console.log(apiurl);
                //console.log(data.data)
                var dataArr = [
                    ['1', '1'],
                    ['987654321', '987654321'],
                    ['123456789', '123456789']
                ];
                var newzc = dataArr.map(function (e) { return { 'name': e[0], 'sv': e[1] }; });
                var bad = newzc.map(function (e) { return e.name == data.data.Ed_name; });
                var newbad = newzc.map(function (e) { return e.sv == data.data.Ed_mima; });
                var endmap = bad.map(function (e) { });
                data.data.Ed_name;
                data.data.Ed_mima;
                for (var i = 0; i <= Array.length; i++) {
                    if (bad[i] == newbad[i]) {
                        if (bad[i] == false) {
                            return console.log('密码错误 或者 账号不存在');
                        }
                        else {
                            return "SceneManager.toRegister()";
                        }
                    }
                    else {
                        null;
                    }
                    if (dataArr && dataArr) {
                        return dataArr == undefined;
                    }
                }
            }
            //       BETS
            if (apiurl == APIDefine.BETS) {
                var nbets = void 0;
                Play.double++;
                nbets = Play.double;
                //return nbets.toString()
                return { nbets: nbets.toString() };
            }
            //       many
            if (apiurl == APIDefine.MANY) {
                var donewmany = void 0;
                donewmany = Player._many;
                //  console.log(Player._many)
                console.log('获取最新的资金显示 ' + donewmany);
                // return donewmany.toString()  
                return { donewmany: donewmany.toString() };
            }
            //      Refresh 
            if (apiurl == APIDefine.REFRESH) {
                console.log('有刷新过');
                Play.shuaxin();
            }
            //      nbets
            if (apiurl == APIDefine.NBETS) {
                var nbets = void 0;
                Play.double = 1;
                nbets = Play.double;
                //return nbets.toString()
                return { nbets: nbets.toString() };
            }
            //      playemany
            if (apiurl == APIDefine.PlAYMANY) {
                Play.a();
            }
            //      getbet
            if (apiurl == APIDefine.GETBET) {
                var bet = Play.double;
                return { bet: bet };
            }
            //      fost
            if (apiurl == APIDefine.FOST) {
                Play.fost();
                console.log('执行fost');
            }
            //      ROLL
            if (apiurl == APIDefine.ROLL) {
                // setTimeout(()=>{  
                //	console.log(12) 
                // data.userid;
                // data.bets;
                // data.many;
                // data.result;
                // data.result2;
                // data.result3
                //  return '100'  
                // 
                return { result: Play.one, result2: Play.two, result3: Play.three, bets: Play.double, many: Player._many };
                // },10) 
            }
        };
        return Myhttp;
    }());
    Net.Myhttp = Myhttp;
    __reflect(Myhttp.prototype, "Net.Myhttp");
    var MyHttpFactory = (function () {
        function MyHttpFactory() {
        }
        MyHttpFactory.doRequest = function (api, handler) {
            var http = new Myhttp();
            //console.log(8)
            http.request(api, handler);
        };
        return MyHttpFactory;
    }());
    Net.MyHttpFactory = MyHttpFactory;
    __reflect(MyHttpFactory.prototype, "Net.MyHttpFactory");
})(Net || (Net = {}));
// 将数据打包发送给net 从nethandler听到请求又传回去 
//  
//# sourceMappingURL=myhttp.js.map