// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Net;
(function (Net) {
    /*
    * NetFactory
    */
    var NetAPIType;
    (function (NetAPIType) {
        NetAPIType[NetAPIType["http"] = 0] = "http";
        NetAPIType[NetAPIType["https"] = 1] = "https";
        NetAPIType[NetAPIType["ws"] = 2] = "ws";
        NetAPIType[NetAPIType["myhttp"] = 3] = "myhttp";
        NetAPIType[NetAPIType["Myhttp"] = 4] = "Myhttp";
    })(NetAPIType = Net.NetAPIType || (Net.NetAPIType = {}));
    var NetAPI = (function () {
        // 返回 -1?
        function NetAPI(type) {
            this._net = NetAPIType.myhttp;
            this._guideParam = -1;
            this._net = type;
        }
        NetAPI.prototype.apiName = function () {
            /* 服务器接口api */
            egret.error("[NetAPI.apiName()] need implement this method in child!~");
            return "";
        };
        NetAPI.prototype.apiData = function () {
            /* 数据的json序列化 */
            egret.error("[NetAPI.apiData()] need implement this method in child!~");
            return {};
        };
        //api名字+
        NetAPI.prototype.apiUrl = function () {
            var url = ""; //url 地址
            if (this._net == NetAPIType.Myhttp) {
                //	url = asConfig.getInstance().httpHost + this.apiName();// url=ins http服务请求 加上 接口名称
                url = this.apiName();
                //循环check asconfig==null，赋予asconfig新值
            }
            else if (this._net == NetAPIType.https) {
                url = asConfig.getInstance().httpHost + this.apiName(); // url=ins http服务请求 加上 接口名称
            }
            else if (this._net == NetAPIType.ws) {
                url = this.apiName();
                //url = asConfig.getInstance().wsHost; // url = ins ws 
            }
            else if (this._net == NetAPIType.http) {
                url = this.apiName();
            }
            else {
                egret.error("[NetAPI.hostUrl()] need implement this method in child!~"); //主机地址
            }
            return url;
        };
        NetAPI.prototype.guideParam = function () {
            return this._guideParam;
        };
        return NetAPI;
    }());
    Net.NetAPI = NetAPI;
    __reflect(NetAPI.prototype, "Net.NetAPI");
    // fixme: 这里需要找个地方放dcodeIO创建builder的方法 [ruix] 
    Net.gProtobufMsg = null;
    /**
     * NetFactory
     */
    var NetFactory = (function () {
        function NetFactory() {
        }
        NetFactory.doRequest = function (api, handler) {
            if (api._net == NetAPIType.http) {
                Net.doRequest(api.apiUrl(), JSON.stringify(api.apiData()), handler, api);
            }
            else if (api._net == NetAPIType.https) {
                Net.MyHttpFactory.doRequest(api, handler);
                console.log(2);
            }
            else if (api._net == NetAPIType.myhttp) {
                Net.MyHttpFactory.doRequest(api, handler);
                console.log(3);
            }
            else if (api._net == NetAPIType.Myhttp) {
                Net.MyHttpFactory.doRequest(api, handler);
                console.log(' HTTP网络接口 - 请求发送正常 ');
            }
        };
        NetFactory.doRawRequest = function (api, handler) {
            //  let body = JSON.stringify(api.apiData())
            HTTP.url_request(api.apiUrl(), JSON.stringify(api.apiData()), "POST", false, null, null);
        };
        NetFactory.cancelRequest = function (handler) {
            egret.log("cancelRequest for handler");
            Net.HttpFactory.cancelRequest(handler);
            //	SocketFactory.cancelRequest(handler);
            //处理取消请求
        };
        NetFactory.initProtoBuf = function (fileURL, msgPackage) {
            // fixme: 这里需要找个地方放dcodeIO创建builder的方法 [ruix]
            //	gProtobufMsg = dcodeIO.ProtoBuf.loadProto(RES.getRes(fileURL)).build(msgPackage);
            RES.destroyRes(fileURL);
        };
        NetFactory._httpList = [];
        return NetFactory;
    }());
    Net.NetFactory = NetFactory;
    __reflect(NetFactory.prototype, "Net.NetFactory");
})(Net || (Net = {}));
//# sourceMappingURL=NetFactory.js.map