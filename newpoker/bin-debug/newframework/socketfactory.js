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
    var SocketStatus;
    (function (SocketStatus) {
        SocketStatus[SocketStatus["None"] = 0] = "None";
        SocketStatus[SocketStatus["Closed"] = 0] = "Closed";
        SocketStatus[SocketStatus["Connecting"] = 1] = "Connecting";
        SocketStatus[SocketStatus["Busy"] = 2] = "Busy";
        SocketStatus[SocketStatus["Idel"] = 3] = "Idel";
    })(SocketStatus = Net.SocketStatus || (Net.SocketStatus = {}));
    var SocketFactory = (function (_super) {
        __extends(SocketFactory, _super);
        function SocketFactory() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SocketFactory;
    }(egret.EventDispatcher));
    Net.SocketFactory = SocketFactory;
    __reflect(SocketFactory.prototype, "Net.SocketFactory");
})(Net || (Net = {}));
//# sourceMappingURL=socketfactory.js.map