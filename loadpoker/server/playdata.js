"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class playdata {
    constructor(_name, _many, userID) {
        this.userId = userID;
        this._name = _name;
        this._many = _many;
    }
    set many(_many) {
        this._many = _many;
    }
    get many() {
        return this._many;
    }
}
exports.playdata = playdata;
