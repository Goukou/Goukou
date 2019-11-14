"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playdata_1 = require("./playdata");
class player extends playdata_1.playdata {
    constructor() {
        super('Goukou Ruri', 100, '123');
    }
}
exports.player = player;
player.instance = null;
exports.Player = new player;
