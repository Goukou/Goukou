// TypeScript file
/**
 * APIDefine
 */
var APIDefine;
(function (APIDefine) {
    APIDefine.PLAYER_HEARTBEAT = "/player/heartbeat"; //心跳
    // export const ROLL = "/api/roll" ; // 获取数据
    APIDefine.ROLL = "http://localhost:4000/api/roll"; // 获取数据
    APIDefine.REFRESH = 'http://localhost:4000/api/Refresh'; //请求数据 更新
    APIDefine.BETS = "http://localhost:4000/api/bets"; // 下赌注
    APIDefine.MANY = "http://localhost:4000/api/Many"; // 金钱
    APIDefine.SIGN = "http://localhost:4000/api/sign"; // 登录
    //export const TEST = "http://httpbin.org/post" ; // 测试
    APIDefine.TEST = "http://localhost:4000/api/test"; // 测试
    APIDefine.NBETS = 'http://localhost:4000/api/nbets'; // 重置赌注
    APIDefine.PlAYMANY = 'http://localhost:4000/api/playmany'; // 入场费
    APIDefine.FOST = 'http://localhost:4000/api/fost'; // 资金最后结果计算
    APIDefine.GETBET = 'http://localhost:4000/api/getbet'; //获取当前赌注数量
    APIDefine.PLAYMATHS = 'http://localhost:4000/api/playmaths'; //获取数组
})(APIDefine || (APIDefine = {}));
//# sourceMappingURL=APIDefine.js.map