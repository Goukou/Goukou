var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Playerget = (function () {
    function Playerget() {
    }
    Playerget.setPrefI = function (key, value) {
        asLocalStorage.getInstance().setKeyNumber(id.Instance().GetID().toString() + '_' + key, value); //保存数据 获取的key如果为数字的话
    };
    Playerget.getPrefI = function (key) {
        var value = -1;
        value = asLocalStorage.getInstance().getKeyInt(id.Instance().GetID().toString() + '_' + key); //读取数据 key 是 int 函数
        return value;
    };
    Playerget.setPrefS = function (key, value) {
        asLocalStorage.getInstance().setKeyString(id.Instance().GetID().toString() + '_' + key, value); //保存数据 key 是 字符串
    };
    Playerget.getPrefS = function (key) {
        var value = '';
        value = asLocalStorage.getInstance().getKeyString(id.Instance().GetID().toString() + '_' + key); //读取数据 是 字符串的话
        return value;
    };
    Playerget.uid_data = 'uid_data';
    return Playerget;
}());
__reflect(Playerget.prototype, "Playerget");
var id = (function () {
    function id() {
        this.m_id = -1;
    }
    id.Instance = function () {
        if (id.instance == null) {
            id.instance = new id();
        }
        return id.instance;
    };
    id.prototype.GetID = function () {
        return this.m_id;
    };
    id.instance = null;
    return id;
}());
__reflect(id.prototype, "id");
//# sourceMappingURL=Playerget.js.map