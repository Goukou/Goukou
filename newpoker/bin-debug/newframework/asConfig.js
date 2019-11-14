var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var asConfig = (function () {
    function asConfig() {
        this._httpHost = null; //HTTP主机
        this.is_https = false;
        this._cnf = null;
    }
    asConfig.getInstance = function () {
        if (asConfig.ins == null) {
            asConfig.ins = new asConfig();
        }
        return asConfig.ins;
        //如果没有就添加新的asconfig
    };
    Object.defineProperty(asConfig.prototype, "httpHost", {
        get: function () {
            return this._httpHost;
        },
        enumerable: true,
        configurable: true
    });
    asConfig.prototype.initConfig = function () {
        this.is_https = (egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE ? false : window.location.protocol === 'https:');
        /* 测试配置自行修改，会覆盖自动生成的配置.  [ruix] */
        /* SERVER CONFIG 在发布模式下，脚本根据config.json自动生成，测试配置会被清空 [ruix] */
        /*--server_config_start--*/
        var version = "test_facebook_0.0.10";
        var buildtime = "1489677493";
        var name = "facebook测试";
        var pcUrl = "http://anansi.vicp.cc:23000";
        var pcUrl_s = "https://innet.anansigame.net:23003";
        var payCenter = "http://anansi.vicp.cc:21910";
        var payCenter_s = "https://innet2.anansigame.net:21907";
        var statistic = "http://anansi.vicp.cc:23001/client";
        var statistic_s = "https://innet.anansigame.net:23014/client";
        var ws = "ws://anansi.vicp.cc:23012/ws";
        var ws_s = "wss://innet.anansigame.net:23013/ws";
        this._cnf = {
            name: name,
            playerCenter: this.is_https ? pcUrl_s : pcUrl,
            payCenter: this.is_https ? payCenter_s : payCenter,
            statistic: this.is_https ? statistic_s : statistic,
            ws: this.is_https ? ws_s : ws,
            version: version,
            buildtime: buildtime
        };
        /*--server_config_end--*/
    };
    asConfig.ins = null; //ins对象元素？？？ 
    return asConfig;
}());
__reflect(asConfig.prototype, "asConfig");
//# sourceMappingURL=asConfig.js.map