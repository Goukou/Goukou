var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Net;
(function (Net) {
    var XOR_KEY = '$dreamteam$XOR$KEY$for$Anansi$2017$'; //fixme: need use dynamic secret key [ruix]
    var ENABLE_XOR = true;
    var Http = (function () {
        function Http() {
        }
        Object.defineProperty(Http.prototype, "key", {
            get: function () {
                return this._key;
            },
            set: function (v) {
                this._key = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Http.prototype, "handler", {
            get: function () {
                return this._httpHandler;
            },
            set: function (h) {
                this._httpHandler = h;
            },
            enumerable: true,
            configurable: true
        });
        Http.prototype.request = function (api, handler, guideInfo) {
            if (guideInfo === void 0) { guideInfo = null; }
        };
        /**
         * 通用的url请求方法，用于通用的get/post请求
         * @param url 地址
         * @param data method为egret.HttpMethod.GET时，data为参数列表，method为egret.HttpMethod.POST时，data为需要发送的数据
         * @param method 使用egret.HttpMethod中定义的常量
         * @param success 成功回调
         * @param err 错误回调
         * @param resp 使用egret.HttpResponseType定义的常量，默认值egret.HttpResponseType.TEXT
         */
        Http.prototype.url_request = function (url, data, method, success, err, resp) {
            var querydata = [];
            // 从data中获取参数，如果是get，获取到的参数将添加到url之后，如果是post，将会直接发送。
            if (method == egret.HttpMethod.GET) {
                for (var key in data) {
                    if (data.hasOwnProperty(key) && typeof (data[key]) !== 'function' && key.charAt(0) !== '_') {
                        if (typeof (data[key]) == 'object') {
                            querydata.push(key + "=" + encodeURIComponent(JSON.stringify(data[key])));
                        }
                        else {
                            querydata.push(key + "=" + encodeURIComponent(data[key]));
                        }
                    }
                }
                var querystring = querydata.length > 0 ? ('?' + querydata.join('&')) : '';
                url += querystring;
                data = null;
            }
            var request = new egret.HttpRequest();
            if (resp) {
                request.responseType = resp;
            }
            else {
                request.responseType = egret.HttpResponseType.TEXT;
            }
            request.addEventListener(egret.Event.COMPLETE, function () {
                var response = request.response;
                response = response.replace(/:(\d{18,})/g, ':"$1"');
                if (success) {
                    success.call(null, response);
                }
            }, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) {
                var error = {
                    result: -1,
                    errorMessage: "IOERROR",
                };
                if (err) {
                    err.call(null, error);
                }
            }, this);
            request.open(url, method);
            request.send(data);
        };
        return Http;
    }());
    Net.Http = Http;
    __reflect(Http.prototype, "Net.Http");
})(Net || (Net = {}));
//# sourceMappingURL=Http.js.map