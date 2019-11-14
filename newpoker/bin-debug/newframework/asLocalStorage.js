var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var asLocalStorage = (function () {
    function asLocalStorage() {
        this._storage = {};
        this._enable = null;
    }
    // 不用管
    asLocalStorage.getInstance = function () {
        if (asLocalStorage.instance == null) {
            asLocalStorage.instance = new asLocalStorage();
            if (asLocalStorage.instance._enable == null) {
                try {
                    egret.localStorage.setItem('testaslocalstoragesupported', 'yesornot');
                    egret.localStorage.removeItem('testaslocalstoragesupported');
                    asLocalStorage.instance._enable = true;
                }
                catch (error) {
                    asLocalStorage.instance._enable = false;
                }
            }
        }
        return asLocalStorage.instance;
    };
    asLocalStorage.prototype.isSupported = function () {
        return this._enable;
    };
    asLocalStorage.prototype.setKeyNumber = function (key, value) {
        if (this._enable) {
            egret.localStorage.setItem(key, value.toString()); //保存数据
        }
        else {
            this._storage[key] = '' + value;
        }
    };
    asLocalStorage.prototype.setKeyString = function (key, value) {
        if (this._enable) {
            egret.localStorage.setItem(key, value); //保存数据
        }
        else {
            this._storage[key] = value;
        }
    };
    asLocalStorage.prototype.getKeyInt = function (key) {
        var value = null;
        if (this._enable) {
            value = egret.localStorage.getItem(key); //读取数据
        }
        else {
            value = this._storage[key];
        }
        var result = parseInt(value); //将字符串专户为整数
        return result;
    };
    asLocalStorage.prototype.getKeyFloat = function (key) {
        var value = null;
        if (this._enable) {
            value = egret.localStorage.getItem(key); //读取数据
        }
        else {
            value = this._storage[key];
        }
        var result = parseFloat(value); //将数字转化成浮点数
        return result;
    };
    asLocalStorage.prototype.getKeyString = function (key) {
        var result = null;
        if (this._enable) {
            result = egret.localStorage.getItem(key); //读取数据
        }
        else {
            result = this._storage[key];
        }
        return result;
    };
    asLocalStorage.prototype.deleteKey = function (key) {
        if (this._enable) {
            egret.localStorage.removeItem(key); //删除key
        }
        else {
            this._storage[key] = undefined;
        }
    };
    asLocalStorage.prototype.clearAll = function () {
        if (this._enable) {
            egret.localStorage.clear(); //数据清空
        }
        else {
            this._storage = {};
        }
    };
    asLocalStorage.instance = null;
    return asLocalStorage;
}());
__reflect(asLocalStorage.prototype, "asLocalStorage");
//# sourceMappingURL=asLocalStorage.js.map