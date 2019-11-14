//<<<<<<<<<<<<<<<<<<<<
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SvrAPIRoll = (function (_super) {
    __extends(SvrAPIRoll, _super);
    function SvrAPIRoll(data) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = data;
        //  StatictisManager.onNetwork(this.apiName())  
        var userid;
        var bets;
        var many;
        var result;
        var result2;
        var result3;
        _this._apiData = {
            userId: userid,
            bets: bets,
            many: many = 0,
            result: result,
            result2: result2,
            result3: result3
        };
        return _this;
    }
    SvrAPIRoll.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.ROLL;
    };
    SvrAPIRoll.prototype.apiData = function () {
        /* 数据的json序列化 */
        // console.log(5)
        return this._apiData;
    };
    return SvrAPIRoll;
}(Net.NetAPI));
__reflect(SvrAPIRoll.prototype, "SvrAPIRoll");
var SvrAPISIGN = (function (_super) {
    __extends(SvrAPISIGN, _super);
    function SvrAPISIGN(name, mima) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = {
            Ed_name: name,
            Ed_mima: mima
        };
        return _this;
    }
    SvrAPISIGN.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.SIGN;
    };
    SvrAPISIGN.prototype.apiData = function () {
        /* 数据的json序列化 */
        return this._apiData;
    };
    return SvrAPISIGN;
}(Net.NetAPI));
__reflect(SvrAPISIGN.prototype, "SvrAPISIGN");
var SvrAPITEST = (function (_super) {
    __extends(SvrAPITEST, _super);
    function SvrAPITEST(data) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = data;
        return _this;
    }
    SvrAPITEST.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.TEST;
    };
    SvrAPITEST.prototype.apiData = function () {
        /* 数据的json序列化 */
        return this._apiData;
    };
    return SvrAPITEST;
}(Net.NetAPI));
__reflect(SvrAPITEST.prototype, "SvrAPITEST");
var SvrAPIBET = (function (_super) {
    __extends(SvrAPIBET, _super);
    function SvrAPIBET(data) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = data;
        var startdouble = data.startdouble;
        _this._apiData = {
            startdouble: startdouble
        };
        return _this;
    }
    SvrAPIBET.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.BETS;
    };
    SvrAPIBET.prototype.apiData = function () {
        /* 数据的json序列化 */
        return this._apiData;
    };
    return SvrAPIBET;
}(Net.NetAPI));
__reflect(SvrAPIBET.prototype, "SvrAPIBET");
var SvrAPINBET = (function (_super) {
    __extends(SvrAPINBET, _super);
    function SvrAPINBET(data) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = data;
        var startdouble = data.startdouble;
        _this._apiData = {
            startdouble: startdouble
        };
        return _this;
    }
    SvrAPINBET.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.NBETS;
    };
    SvrAPINBET.prototype.apiData = function () {
        /* 数据的json序列化 */
        return this._apiData;
    };
    return SvrAPINBET;
}(Net.NetAPI));
__reflect(SvrAPINBET.prototype, "SvrAPINBET");
var SvrAPIMONEY = (function (_super) {
    __extends(SvrAPIMONEY, _super);
    function SvrAPIMONEY(data) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = data;
        return _this;
        //  let startmany = data.startmany
        // this._apiData = { 
        //    startmany:startmany
        // } 
    }
    SvrAPIMONEY.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.MANY;
    };
    SvrAPIMONEY.prototype.apiData = function () {
        /* 数据的json序列化 */
        return this._apiData;
    };
    return SvrAPIMONEY;
}(Net.NetAPI));
__reflect(SvrAPIMONEY.prototype, "SvrAPIMONEY");
var SvrAPIREFRESH = (function (_super) {
    __extends(SvrAPIREFRESH, _super);
    function SvrAPIREFRESH(data) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = data;
        var startshuaxin = data.startshuaxin;
        _this._apiData = {
            startshuaxin: startshuaxin
        };
        return _this;
    }
    SvrAPIREFRESH.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.REFRESH;
    };
    SvrAPIREFRESH.prototype.apiData = function () {
        /* 数据的json序列化 */
        return this._apiData;
    };
    return SvrAPIREFRESH;
}(Net.NetAPI));
__reflect(SvrAPIREFRESH.prototype, "SvrAPIREFRESH");
// many
var SvrAPIPLAYMANY = (function (_super) {
    __extends(SvrAPIPLAYMANY, _super);
    function SvrAPIPLAYMANY(data) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = data;
        var playermany = data.playermany;
        _this._apiData = {
            playermany: playermany
        };
        return _this;
    }
    SvrAPIPLAYMANY.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.PlAYMANY;
    };
    SvrAPIPLAYMANY.prototype.apiData = function () {
        /* 数据的json序列化 */
        return this._apiData;
    };
    return SvrAPIPLAYMANY;
}(Net.NetAPI));
__reflect(SvrAPIPLAYMANY.prototype, "SvrAPIPLAYMANY");
//fost
var SvrAPIFOST = (function (_super) {
    __extends(SvrAPIFOST, _super);
    function SvrAPIFOST() {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        return _this;
        //      this._apiData = cdata;
        //  let fost = cdata.fost
        // this._apiData = { 
        //    fost:fost
        // } 
    }
    SvrAPIFOST.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.FOST;
    };
    SvrAPIFOST.prototype.apiData = function () {
        /* 数据的json序列化 */
        //	return this._apiData;
    };
    return SvrAPIFOST;
}(Net.NetAPI));
__reflect(SvrAPIFOST.prototype, "SvrAPIFOST");
var SvrAPIGETBET = (function (_super) {
    __extends(SvrAPIGETBET, _super);
    function SvrAPIGETBET(data) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = data;
        var getbet = data.getbet;
        _this._apiData = {
            getbet: getbet
        };
        return _this;
    }
    SvrAPIGETBET.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.GETBET;
    };
    SvrAPIGETBET.prototype.apiData = function () {
        /* 数据的json序列化 */
        return this._apiData;
    };
    return SvrAPIGETBET;
}(Net.NetAPI));
__reflect(SvrAPIGETBET.prototype, "SvrAPIGETBET");
var SvrAPIPLAYMATHS = (function (_super) {
    __extends(SvrAPIPLAYMATHS, _super);
    function SvrAPIPLAYMATHS(data) {
        var _this = _super.call(this, Net.NetAPIType.http) || this;
        _this._apiData = null;
        _this._apiData = data;
        var maths = data.maths;
        _this._apiData = {
            maths: maths
        };
        return _this;
    }
    SvrAPIPLAYMATHS.prototype.apiName = function () {
        /* 服务器接口api */
        return APIDefine.PLAYMATHS;
    };
    SvrAPIPLAYMATHS.prototype.apiData = function () {
        /* 数据的json序列化 */
        return this._apiData;
    };
    return SvrAPIPLAYMATHS;
}(Net.NetAPI));
__reflect(SvrAPIPLAYMATHS.prototype, "SvrAPIPLAYMATHS");
//# sourceMappingURL=myapi.js.map