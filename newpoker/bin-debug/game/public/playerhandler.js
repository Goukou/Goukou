var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// http 请求 62行
var playerhandler = (function () {
    // myhttp:null
    // Myhttp
    function playerhandler() {
    }
    playerhandler.prototype.x = function () {
        console.log('执行过 x 的请求');
        var data = {};
        Net.NetFactory.doRequest(new SvrAPIRoll(data), this);
        this.domany;
    };
    playerhandler.prototype.donewmany = function (manymsg) {
        if (manymsg == undefined) {
            return null;
        }
        else {
            var donewmany = manymsg.donewmany;
            Start.donewmany = donewmany;
        }
    };
    playerhandler.prototype.ndouble = function () {
        var data = {};
        Net.NetFactory.doRequest(new SvrAPINBET(data), this);
    };
    playerhandler.prototype.playmaths = function () {
        var data = {};
        Net.NetFactory.doRequest(new SvrAPIPLAYMATHS(data), this);
    };
    playerhandler.prototype.domany = function () {
        var data = {};
        Net.NetFactory.doRequest(new SvrAPIMONEY(data), this);
    };
    playerhandler.prototype.playmany = function () {
        var data = {};
        Net.NetFactory.doRequest(new SvrAPIPLAYMANY(data), this);
    };
    playerhandler.prototype.getbet = function () {
        var data = {};
        Net.NetFactory.doRequest(new SvrAPIGETBET(data), this);
    };
    playerhandler.prototype.dofost = function () {
        var cdata = {};
        Net.NetFactory.doRequest(new SvrAPIFOST(), this);
    };
    playerhandler.prototype.newmany = function (msg) {
        if (msg == undefined) {
            return null;
        }
        else {
            setTimeout(function () {
                var newmany = msg.many;
                // console.log('ccmany'+newmany)
                Start.ccmany = newmany;
                //   console.log(Start.ccmany) 
                //  console.log(newmany) 
            }, 100);
        }
    };
    playerhandler.prototype.newplayer = function () {
        if (Start.ccmany || Start.ccbets == undefined) {
            Start.ccmany = 100;
            Start.ccbets = 0;
        }
    };
    playerhandler.prototype.ngetbet = function (getbetmsg) {
        if (getbetmsg == undefined) {
            null;
        }
        else {
            var getbet = getbetmsg.bet;
            Start.getbet = getbet;
        }
    };
    // public ddmany(msg:any){ 
    //   console.log('msg '+msg) 
    //   let dmany:any = msg 
    //   console.log("dmany "+dmany)  
    //   Start.ccnewmany = dmany.toString()  
    // }  
    playerhandler.prototype.maths = function (msg) {
        if (msg == undefined) {
            return null;
        }
        else {
            var newmayhs = msg;
            Start.ccmaths = newmayhs;
        }
    };
    playerhandler.prototype.newbets = function (msg) {
        if (msg == undefined) {
            return null;
        }
        else {
            var newbets = msg.bet;
            Start.ccbets = newbets;
        }
    };
    playerhandler.Instance = function () {
        if (playerhandler.instance == null) {
            playerhandler.instance = new playerhandler();
        }
        return playerhandler.instance;
    };
    playerhandler.prototype.ParseHearBeat = function (msg) {
    };
    playerhandler.prototype.photo = function (msg) {
        if (msg == undefined) {
            return null;
        }
        else {
            var newphoto = msg.result;
            Start.ccphoto = newphoto;
        }
    };
    playerhandler.prototype.photo2 = function (msg) {
        if (msg == undefined) {
            return null;
        }
        else {
            var bnewphoto2 = msg.result2;
            Start.ccphoto2 = bnewphoto2;
        }
    };
    playerhandler.prototype.photo3 = function (msg) {
        if (msg == undefined) {
            return null;
        }
        else {
            var newphoto3 = msg.result3;
            Start.ccphoto3 = newphoto3;
        }
    };
    playerhandler.prototype.dataget = function (msg) {
        Playerget.setPrefS(Playerget.uid_data, msg);
        Playerget.getPrefS(Playerget.uid_data);
    };
    playerhandler.prototype.staticbets = function () {
        console.log('执行bet请求');
        var data = {};
        Net.NetFactory.doRequest(new SvrAPIBET(data), this);
    };
    playerhandler.prototype.doshuaxin = function () {
        var data = {};
        Net.NetFactory.doRequest(new SvrAPIREFRESH(data), this);
    };
    playerhandler.prototype.newdouble = function (msg) {
        if (msg == undefined) {
            return null;
        }
        else {
            var destatic = msg.nbets;
            // if(msg == undefined){
            //   null
            // }else{
            Start.startdouble = destatic;
            console.log(msg);
            console.log(Start.startdouble);
            //}
        }
    };
    /* 收到正确网络回复 */
    playerhandler.prototype.onReceiveResponse = function (apiName, data) {
        // data = {}
        //console.log('在 268 '+ Start.bccphoto)
        var msg = JSON.parse(data);
        var manymsg = JSON.parse(data);
        var getbetmsg = JSON.parse(data);
        console.log(msg);
        // let msg = data 
        // console.log(msg)
        playerhandler.Instance().ngetbet(getbetmsg);
        playerhandler.Instance().donewmany(manymsg);
        //playerhandler.Instance().ddmany(msg);
        playerhandler.Instance().maths(msg);
        playerhandler.Instance().newdouble(msg);
        playerhandler.Instance().ParseHearBeat(msg);
        playerhandler.Instance().newmany(msg);
        playerhandler.Instance().newbets(msg);
        playerhandler.Instance().photo(msg);
        playerhandler.Instance().photo2(msg);
        playerhandler.Instance().photo3(msg);
        playerhandler.Instance().dataget(msg);
        // apiName = '/api/roll' 
        //  data; 
        //  apiName; 
        //  console.log(data())
        // console.log(data.many()) 
    };
    ;
    /* 服务器返回error */
    playerhandler.prototype.onReceiveError = function (apiName, errCode, errMsg) { };
    ;
    /* 网络链接错误 */
    playerhandler.prototype.onNetError = function (apiName, errCode) { };
    ;
    playerhandler.instance = null;
    return playerhandler;
}());
__reflect(playerhandler.prototype, "playerhandler", ["Net.NetHandler"]);
var Playerhandler = new playerhandler();
// NetHandler    
//# sourceMappingURL=playerhandler.js.map