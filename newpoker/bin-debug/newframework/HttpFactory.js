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
var Net;
(function (Net) {
    var HttpFactory = (function () {
        function HttpFactory() {
        }
        HttpFactory.cancelRequest = function (handler) {
            HttpFactory._httpList.forEach(function (element) {
                if (element.handler === handler) {
                    element.handler = null;
                }
            });
        };
        HttpFactory._httpList = [];
        return HttpFactory;
    }());
    Net.HttpFactory = HttpFactory;
    __reflect(HttpFactory.prototype, "Net.HttpFactory");
    function doRequest(url, data, handler, api) {
        var _this = this;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(data);
        request.addEventListener(egret.Event.COMPLETE, Net.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, Net.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, Net.onPostProgress, this);
        var _httpHandler;
        var _api;
        this._api = api.apiName;
        this._httpHandler = handler;
        if (this._httpHandler) {
            setTimeout(function () {
                console.log(request.response);
                if (request.response == 'No operation') {
                    console.log(1);
                }
                else {
                    _this._httpHandler.onReceiveResponse(_this._api, request.response);
                }
            }, 100);
        }
    }
    Net.doRequest = doRequest;
    function onPostComplete(event) {
        var request = event.currentTarget;
        console.log("post data : ", request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
        // this.addChild(responseLabel);
        responseLabel.x = 300;
        responseLabel.y = 70;
    }
    Net.onPostComplete = onPostComplete;
    function onPostIOError(event) {
        console.log("post error : " + event);
    }
    Net.onPostIOError = onPostIOError;
    function onPostProgress(event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }
    Net.onPostProgress = onPostProgress;
})(Net || (Net = {}));
var NotifyCenter = (function (_super) {
    __extends(NotifyCenter, _super);
    function NotifyCenter() {
        return _super.call(this) || this;
    }
    NotifyCenter.Instance = function () {
        if (NotifyCenter._ins == null) {
            NotifyCenter._ins = new NotifyCenter();
        }
        return NotifyCenter._ins;
    };
    NotifyCenter.prototype.dispatchEventWithDelay = function (evt, delay) {
        var timer = new egret.Timer(delay, 1);
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            NotifyCenter.Instance().dispatchEvent(evt);
        }, this);
        timer.start();
    };
    NotifyCenter._ins = null;
    return NotifyCenter;
}(egret.EventDispatcher));
__reflect(NotifyCenter.prototype, "NotifyCenter");
//# sourceMappingURL=HttpFactory.js.map