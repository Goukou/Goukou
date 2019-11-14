var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var playdata = (function () {
    function playdata(_name, _many, userID) {
        this.userId = userID;
        this._name = _name;
        this._many = _many;
    }
    Object.defineProperty(playdata.prototype, "many", {
        get: function () {
            return this._many;
        },
        set: function (_many) {
            this._many = _many;
        },
        enumerable: true,
        configurable: true
    });
    playdata.Instance = function () {
        if (player.instance == null) {
            player.instance = new player();
        }
        return player.instance;
    };
    return playdata;
}());
__reflect(playdata.prototype, "playdata");
//let Playdata = new Playdata
//# sourceMappingURL=playdata.js.map