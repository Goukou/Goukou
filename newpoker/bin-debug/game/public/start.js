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
var start = (function (_super) {
    __extends(start, _super);
    // public win = Playerhandler.win
    //	public parseHearBeat = Playerhandler.ParseHearBeat 
    //imgData.push({name:im_c,path:"./myphoto/c.jpg"}) 
    function start() {
        var _this = _super.call(this) || this;
        _this.text = 100;
        _this.ccdenewmany = _this.ccnewmany;
        _this.bccphoto = 'watermelon';
        _this.playnumber = 0;
        _this.isPaused = true;
        _this.ispaused = true;
        return _this;
    }
    start.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    start.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.diemany();
        // Playerhandler 
        // Playerhandler.newmany 
        Playerhandler.x();
        //	  console.log()
        console.log('初始化金钱 : ' + Start.ccmany);
        this.data_many.text = Start.ccmany.toString(); //Player._many.toString()          // 此处 http 返回的数据 有误差 注意 
        // 在账号登陆的时候就请求一次数据 直接获取数据就可以不用发送请求 
        // 
        // this.data_many.text = Play.text() 
        // setInterval(()=>{ frlrtebbbmsnt,erabshjt
        // this.data_double.text = '1' 
        this.data_double.text = '1'; //Play.double.toString()//Playerhandler.newbets.toString()
        //	  },0) 
        // this.many()   
        // this.im_c.x = -1;  
        // this.addChild(this.im_c); 
        this.btn_double.addEventListener(egret.TouchEvent.TOUCH_TAP, this.double, this);
        this.btn_play.addEventListener(egret.TouchEvent.TOUCH_TAP, this.manyrun, this);
        //	this.btn_play.addEventListener ( egret.TouchEvent.TOUCH_TAP , this.ceshi , this )    
        this.btn_play.addEventListener(egret.TouchEvent.TOUCH_END, this.newplayrun, this);
        this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Ineedhelp, this);
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Gohome, this);
        this.btn_gameplay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gamestare, this);
    };
    // export class new data implements load data { public data(){(if === data){return a}}} 
    // public static text(blackcallback:null){ 
    //  
    // 	return(Text.toString())
    //  }
    start.prototype.ceshi = function () {
        //console.log('ceshi')
    };
    start.prototype.double = function () {
        var _this = this;
        Playerhandler.newbets;
        //	console.log(Start.ccbets.toString())   
        Playerhandler.staticbets();
        this.btn_play.enabled = false;
        var betdata = setInterval(function () {
            console.log(' 正在请求接收bet数据 ..... ');
            if (Start.startdouble == undefined) {
                return null;
            }
            else {
                console.log(' bet 数据接收成功 ...... ');
                clearInterval(betdata);
                _this.btn_double.enabled = false;
                _this.btn_play.enabled = true;
                _this.data_double.text = Start.startdouble;
                setTimeout(function () {
                    _this.btn_double.enabled = true;
                }, 200);
                Playerhandler.x();
            }
        }, 60);
        // watermelon console.log(has.eventer)   
        // console.log('ceshi'+ Playerhandler.newbets )  
        // console.log('ceshi'+ Playerhandler.newmany )  
        //	console.log(Play.double) 
        //	console.log('double l many  '+Player._many)   
    };
    start.prototype.gamestare = function () {
        // asStatistic.onEvent(StatictisEvents.ButtonClick,EventsDesc.TurnBtn, null)  //服务器 修改 
        // 我知道了 wait.resquerse  
        // 
        //	Player._many=100 
        this.gp_over.visible = false;
        this.isPaused = false;
        // this.data_many.text = Play.many.toString() //这条语句没用了
        for (var i = 0; i < this.gp_over.numChildren; i++) {
            var item = this.gp_over.getChildAt(i);
            item.anchorOffsetY = -800;
            egret.Tween.get(item).wait(i * 200)
                .to({ "anchorOffsetY": 0 }, 500);
        }
    };
    start.prototype.gameover = function () {
        this.gp_over.visible = true;
        this.isPaused = true;
        for (var i = 0; i < this.gp_over.numChildren; i++) {
            var item = this.gp_over.getChildAt(i);
            item.alpha = 0;
            egret.Tween.get(item).wait(i * 200)
                .to({ "alpha": 1 }, 500);
        }
    };
    start.prototype.gameplay = function () {
        //	Play.maths() 
        Playerhandler.ndouble();
        var gamemaths = setInterval(function () {
            if (Start.ccmaths == undefined) {
                console.log('gameplay 验证 ');
                return null;
            }
            else {
                clearInterval(gamemaths);
                console.log('gameplay 执行过这里');
                //  this.gp_one1.visible = true;
                //  this.im_j.visible = true;
                //  this.isPaused = true;
            }
        }, 60);
    };
    start.prototype.a = function () {
        //handler doreqiest dofor this is  
        //通过one决定y位置，arr等于上一次one里面的内容， 
        //独自转动的齿轮，如何更改初始，暴露结果  
        //setInterval(()=>{ 
        //this.scr_ceshi.height = 160 
        //console.log(Play.playone)   
        //console.log(Play.playnumber)   
        var _this = this;
        //console.log(Play.maths())
        console.log('  START.ccphoto   ' + Start.ccphoto);
        console.log(' 外部的 备用的 ccphoto ' + Start.bccphoto);
        //this.gameplay()
        //console.log(Play.maths())
        if (this.playnumber <= 1) {
            this.scr_one1.viewport.validateNow();
            this.scr_one1.viewport.scrollV = 0;
            console.log('在 223' + Start.bccphoto);
        }
        else {
            Playerhandler.x();
            console.log('备用的 ccphoto ' + Start.bccphoto);
            //Play.shuaxin() 
            if (Start.ccphoto == 'seven') {
                //setInterval(()=>{
                this.im_lemon.source = 'h_jpg';
                this.im_ll.source = 'i_jpg';
                this.im_c.source = 'h_jpg';
                this.im_d.source = 'f_jpg';
                this.im_e.source = 'j_jpg';
                this.im_h.source = 'c_jpg';
                this.im_i.source = 'd_jpg';
                this.im_f.source = 'e_jpg';
                this.im_j.source = 'i_jpg';
                setTimeout(function () {
                    _this.im_h.source = 'h_jpg';
                    _this.im_i.source = 'i_jpg';
                    _this.im_f.source = 'f_jpg';
                }, 1989);
                this.scr_one1.viewport.validateNow();
                this.scr_one1.viewport.scrollV = 0;
            }
            /////////////////////////////////////////////////
            if (Start.ccphoto == 'clover') {
                //setInterval(()=>{
                this.im_lemon.source = 'd_jpg';
                this.im_ll.source = 'c_jpg';
                this.im_c.source = 'd_jpg';
                this.im_d.source = 'e_jpg';
                this.im_e.source = 'h_jpg';
                this.im_h.source = 'i_jpg';
                this.im_i.source = 'f_jpg';
                this.im_f.source = 'j_jpg';
                this.im_j.source = 'c_jpg';
                setTimeout(function () {
                    // this.im_c.source='c_jpg' 
                    // this.im_d.source='d_jpg' 
                    // this.im_e.source='e_jpg'  
                    _this.im_lemon.source = 'c_jpg';
                    _this.im_ll.source = 'j_jpg';
                    _this.im_c.source = 'c_jpg';
                    _this.im_d.source = 'd_jpg';
                    _this.im_e.source = 'e_jpg';
                    _this.im_h.source = 'h_jpg';
                    _this.im_i.source = 'i_jpg';
                    _this.im_f.source = 'f_jpg';
                    _this.im_j.source = 'j_jpg';
                }, 1950); //1989
                this.scr_one1.viewport.validateNow();
                this.scr_one1.viewport.scrollV = 0;
            }
            ////////////////////////////////////////////////
            if (Start.ccphoto == 'coins') {
                //setInterval(()=>{
                this.im_lemon.source = 'e_jpg';
                this.im_ll.source = 'd_jpg';
                this.im_c.source = 'e_jpg';
                this.im_d.source = 'h_jpg';
                this.im_e.source = 'i_jpg';
                this.im_h.source = 'f_jpg';
                this.im_i.source = 'j_jpg';
                this.im_f.source = 'c_jpg';
                this.im_j.source = 'd_jpg';
                setTimeout(function () {
                    // this.im_d.source='d_jpg'
                    // this.im_e.source='e_jpg'
                    // this.im_h.source='h_jpg'
                    _this.im_lemon.source = 'c_jpg';
                    _this.im_ll.source = 'j_jpg';
                    _this.im_c.source = 'c_jpg';
                    _this.im_d.source = 'd_jpg';
                    _this.im_e.source = 'e_jpg';
                    _this.im_h.source = 'h_jpg';
                    _this.im_i.source = 'i_jpg';
                    _this.im_f.source = 'f_jpg';
                    _this.im_j.source = 'j_jpg';
                }, 1989);
                this.scr_one1.viewport.validateNow();
                this.scr_one1.viewport.scrollV = 0;
            }
            ///////////////////////////////////////////////////////
            if (Start.ccphoto == 'Diamonds') {
                //setInterval(()=>{
                this.im_lemon.source = 'h_jpg';
                this.im_ll.source = 'e_jpg';
                this.im_c.source = 'h_jpg';
                this.im_d.source = 'i_jpg';
                this.im_e.source = 'f_jpg';
                this.im_h.source = 'j_jpg';
                this.im_i.source = 'c_jpg';
                this.im_f.source = 'd_jpg';
                this.im_j.source = 'e_jpg';
                setTimeout(function () {
                    // this.im_e.source='e_jpg'
                    // this.im_h.source='h_jpg'
                    // this.im_i.source='i_jpg' 
                    _this.im_lemon.source = 'c_jpg';
                    _this.im_ll.source = 'j_jpg';
                    _this.im_c.source = 'c_jpg';
                    _this.im_d.source = 'd_jpg';
                    _this.im_e.source = 'e_jpg';
                    _this.im_h.source = 'h_jpg';
                    _this.im_i.source = 'i_jpg';
                    _this.im_f.source = 'f_jpg';
                    _this.im_j.source = 'j_jpg';
                }, 1989); //1989
                this.scr_one1.viewport.validateNow();
                this.scr_one1.viewport.scrollV = 0;
            }
            ////////////////////////////////////////////////////////
            if (Start.ccphoto == 'Litchi') {
                //setInterval(()=>{ 
                this.im_lemon.source = 'f_jpg';
                this.im_ll.source = 'i_jpg';
                this.im_c.source = 'f_jpg';
                this.im_d.source = 'j_jpg';
                this.im_e.source = 'c_jpg';
                this.im_h.source = 'd_jpg';
                this.im_i.source = 'e_jpg';
                this.im_f.source = 'h_jpg';
                this.im_j.source = 'i_jpg';
                setTimeout(function () {
                    // this.im_d.source='d_jpg'  
                    // this.im_e.source='e_jpg'
                    // this.im_f.source='f_jpg' 
                    _this.im_lemon.source = 'c_jpg';
                    _this.im_ll.source = 'j_jpg';
                    _this.im_c.source = 'c_jpg';
                    _this.im_d.source = 'd_jpg';
                    _this.im_e.source = 'e_jpg';
                    _this.im_h.source = 'h_jpg';
                    _this.im_i.source = 'i_jpg';
                    _this.im_f.source = 'f_jpg';
                    _this.im_j.source = 'j_jpg';
                }, 1989);
                this.scr_one1.viewport.validateNow();
                this.scr_one1.viewport.scrollV = 0;
            }
            ///////////////////////////////////////////////////////
            if (Start.ccphoto == 'watermelon') {
                //setInterval(()=>{
                this.im_lemon.source = 'j_jpg';
                this.im_ll.source = 'f_jpg';
                this.im_c.source = 'j_jpg';
                this.im_d.source = 'c_jpg';
                this.im_e.source = 'd_jpg';
                this.im_h.source = 'e_jpg';
                this.im_i.source = 'h_jpg';
                this.im_f.source = 'i_jpg';
                this.im_j.source = 'f_jpg';
                setTimeout(function () {
                    // this.im_f.source='f_jpg'
                    // this.im_j.source='j_jpg'
                    // this.im_c.source='c_jpg'
                    _this.im_lemon.source = 'c_jpg';
                    _this.im_ll.source = 'j_jpg';
                    _this.im_c.source = 'c_jpg';
                    _this.im_d.source = 'd_jpg';
                    _this.im_e.source = 'e_jpg';
                    _this.im_h.source = 'h_jpg';
                    _this.im_i.source = 'i_jpg';
                    _this.im_f.source = 'f_jpg';
                    _this.im_j.source = 'j_jpg';
                }, 1989); //1989
                this.scr_one1.viewport.validateNow();
                this.scr_one1.viewport.scrollV = 0;
            }
            //////////////////////////////////////////////////////
            if (Start.ccphoto == 'lemon') {
                //setInterval(()=>{ 
                this.im_lemon.source = 'f_jpg';
                this.im_ll.source = 'c_jpg';
                this.im_c.source = 'j_jpg';
                this.im_d.source = 'c_jpg';
                this.im_e.source = 'd_jpg';
                this.im_h.source = 'e_jpg';
                this.im_i.source = 'h_jpg';
                this.im_f.source = 'i_jpg';
                this.im_j.source = 'f_jpg';
                setTimeout(function () {
                    // this.im_d.source='d_jpg'
                    // this.im_e.source='e_jpg'
                    // this.im_f.source='f_jpg'
                    _this.im_lemon.source = 'c_jpg';
                    _this.im_ll.source = 'j_jpg';
                    _this.im_c.source = 'c_jpg';
                    _this.im_d.source = 'd_jpg';
                    _this.im_e.source = 'e_jpg';
                    _this.im_h.source = 'h_jpg';
                    _this.im_i.source = 'i_jpg';
                    _this.im_f.source = 'f_jpg';
                    _this.im_j.source = 'j_jpg';
                }, 1800); //1989
                this.scr_one1.viewport.validateNow();
                this.scr_one1.viewport.scrollV = 0;
            }
        }
        var sc = this.scr_one1;
        console.log('在 448 的 bccphoto ' + Start.bccphoto);
        // setInterval(()=>{
        // sc.viewport.scrollV += 10;
        // },60)
        // setTimeout(()=>{
        //if(){9
        var a1run = setInterval(function () {
            //	console.log('在 456 的 bccphoto '+ Start.bccphoto)
            // sc.stopAnimation();
            sc.viewport.scrollV += 10;
        }, 10);
        console.log('在 460 ' + Start.bccphoto);
        // setTimeout(()=>{
        // 	clearInterval(arun)
        // },4100)
        //setTimeout(()=>{
        // this.im_f.y=1376
        // this.im_c.y=1651
        // this.im_d.y=2201
        // this.im_e.y=2476
        // this.im_h.y=2751
        // this.im_i.y=3026
        // //this.im_j.y=1926.  
        var a1runtime = setInterval(function () {
            _this.scr_one1.viewport.scrollV = 0;
            _this.im_j.y = 1;
            setTimeout(function () {
                _this.im_j.y = 642.2;
            }, 20);
        }, 663);
        // var a1runtime = setInterval(()=>{ 
        // setTimeout(()=>{
        // this.im_c.y=642.2
        // },83)
        // setTimeout(()=>{
        // this.im_d.y=642.2
        // },166)
        // setTimeout(()=>{
        // this.im_e.y=642.2
        // },249)
        // setTimeout(()=>{
        // this.im_f.y=642.2
        // },332)
        // setTimeout(()=>{
        // this.im_i.y=642.2
        // },415)
        // setTimeout(()=>{
        // this.im_h.y=642.2
        // },498)
        // setTimeout(()=>{
        // this.im_j.y=642.2
        // },581)
        //  },581)
        // setTimeout(()=>{
        // 	var arun = setInterval(()=>{
        // 	          // sc.stopAnimation();
        // 			sc.viewport.scrollV += 10;
        // 			},30)
        // },4100) 
        // }	 
        // if(sc.viewport.scrollH = 1600){
        //    sc.viewport.scrollV = 0;
        // }
        // },60)
        if ((sc.viewport.scrollV + sc.height) >= sc.viewport.contentHeight) {
            //console.log("滚动到底部了");
        }
        this.scr_one1.verticalScrollBar.autoVisibility = false;
        this.scr_one1.verticalScrollBar.visible = false;
        console.log('在 523 run 的 bccphoto ' + Start.ccphoto);
        if (Start.ccphoto == undefined) {
            this.scr_one1.viewport.validateNow();
            this.scr_one1.viewport.scrollV = 0;
        }
        else {
            console.log('在 528 的 bccphoto ' + Start.ccphoto);
            if (Start.ccphoto == 'watermelon') {
                console.log('在 531 的 bccphoto ' + Start.ccphoto);
                setTimeout(function () {
                    console.log('在 watermelon run 的 bccphoto ' + Start.ccphoto);
                    _this.im_ll.y = 92.6;
                    _this.im_c.y = 733.8;
                    clearInterval(a1run);
                    clearInterval(a1runtime);
                    // },0)
                }, 2530); //2530 1880
            }
            if (Start.ccphoto == 'seven') {
                setTimeout(function () {
                    console.log('在seven 的 bccphoto ' + Start.ccphoto);
                    clearInterval(a1run);
                    clearInterval(a1runtime);
                }, 2350); //2350
            }
            if (Start.ccphoto == 'Diamonds') {
                setTimeout(function () {
                    clearInterval(a1run);
                    clearInterval(a1runtime);
                }, 2257); //2257 
            }
            if (Start.ccphoto == 'coins') {
                setTimeout(function () {
                    clearInterval(a1run);
                    clearInterval(a1runtime);
                }, 2167); //2167  
            }
            if (Start.ccphoto == 'clover') {
                setTimeout(function () {
                    clearInterval(a1run);
                    clearInterval(a1runtime);
                }, 2070); //2070
            }
            if (Start.ccphoto == 'lemon') {
                setTimeout(function () {
                    _this.im_lemon.y = 92.6;
                    _this.im_ll.y = 1;
                    clearInterval(a1run);
                    clearInterval(a1runtime);
                }, 1990); //1990
            }
            if (Start.ccphoto == 'Litchi') {
                setTimeout(function () {
                    clearInterval(a1run);
                    clearInterval(a1runtime);
                }, 2435); //2435			
            }
            console.log('585 的 bccphoto ' + Start.bccphoto);
        }
        console.log('在 587 的 bccphoto ' + Start.bccphoto);
    };
    start.prototype.b = function () {
        var _this = this;
        //console.log('本地 photo2 '+this.ccphoto2)
        console.log('start photot2 ' + Start.ccphoto2);
        console.log('在 b 的 bccphoto ' + Start.bccphoto);
        //setInterval(()=>{
        //this.scr_ceshi.height = 160
        if (this.playnumber <= 1) {
            this.scr_one2.viewport.validateNow();
            this.scr_one2.viewport.scrollV = 0;
        }
        else {
            if (Start.ccphoto2 == 'seven') {
                //setInterval(()=>{
                this.im_lemon2.source = 'h_jpg';
                this.im_newj.source = 'i_jpg';
                this.im_c2.source = 'h_jpg';
                this.im_d2.source = 'f_jpg';
                this.im_e2.source = 'j_jpg';
                this.im_h2.source = 'c_jpg';
                this.im_i2.source = 'd_jpg';
                this.im_f2.source = 'e_jpg';
                this.im_j2.source = 'i_jpg';
                setTimeout(function () {
                    // this.im_h2.source='h_jpg'
                    // this.im_i2.source='i_jpg'
                    // this.im_f2.source='f_jpg'
                    _this.im_lemon2.source = 'c_jpg';
                    _this.im_newj.source = 'j_jpg';
                    _this.im_c2.source = 'c_jpg';
                    _this.im_d2.source = 'd_jpg';
                    _this.im_e2.source = 'e_jpg';
                    _this.im_h2.source = 'h_jpg';
                    _this.im_i2.source = 'i_jpg';
                    _this.im_f2.source = 'f_jpg';
                    _this.im_j2.source = 'j_jpg';
                }, 2652);
                this.scr_one2.viewport.validateNow();
                this.scr_one2.viewport.scrollV = 0;
            }
            /////////////////////////////////////////////////
            if (Start.ccphoto2 == 'clover') {
                //setInterval(()=>{
                this.im_lemon2.source = 'd_jpg';
                this.im_newj.source = 'c_jpg';
                this.im_c2.source = 'd_jpg';
                this.im_d2.source = 'e_jpg';
                this.im_e2.source = 'h_jpg';
                this.im_h2.source = 'i_jpg';
                this.im_i2.source = 'f_jpg';
                this.im_f2.source = 'j_jpg';
                this.im_j2.source = 'c_jpg';
                setTimeout(function () {
                    // this.im_c2.source='c_jpg'
                    // this.im_d2.source='d_jpg'
                    // this.im_e2.source='e_jpg'
                    _this.im_lemon2.source = 'c_jpg';
                    _this.im_newj.source = 'j_jpg';
                    _this.im_c2.source = 'c_jpg';
                    _this.im_d2.source = 'd_jpg';
                    _this.im_e2.source = 'e_jpg';
                    _this.im_h2.source = 'h_jpg';
                    _this.im_i2.source = 'i_jpg';
                    _this.im_f2.source = 'f_jpg';
                    _this.im_j2.source = 'j_jpg';
                }, 2652);
                this.scr_one2.viewport.validateNow();
                this.scr_one2.viewport.scrollV = 0;
            }
            ////////////////////////////////////////////////
            if (Start.ccphoto2 == 'coins') {
                //setInterval(()=>{
                this.im_lemon2.source = 'e_jpg';
                this.im_newj.source = 'd_jpg';
                this.im_c2.source = 'e_jpg';
                this.im_d2.source = 'h_jpg';
                this.im_e2.source = 'i_jpg';
                this.im_h2.source = 'f_jpg';
                this.im_i2.source = 'j_jpg';
                this.im_f2.source = 'c_jpg';
                this.im_j2.source = 'd_jpg';
                setTimeout(function () {
                    // this.im_d2.source='d_jpg'
                    // this.im_e2.source='e_jpg'
                    // this.im_h2.source='h_jpg'
                    _this.im_lemon2.source = 'c_jpg';
                    _this.im_newj.source = 'j_jpg';
                    _this.im_c2.source = 'c_jpg';
                    _this.im_d2.source = 'd_jpg';
                    _this.im_e2.source = 'e_jpg';
                    _this.im_h2.source = 'h_jpg';
                    _this.im_i2.source = 'i_jpg';
                    _this.im_f2.source = 'f_jpg';
                    _this.im_j2.source = 'j_jpg';
                }, 2652);
                this.scr_one2.viewport.validateNow();
                this.scr_one2.viewport.scrollV = 0;
            }
            ///////////////////////////////////////////////////////
            if (Start.ccphoto2 == 'Diamonds') {
                //setInterval(()=>{
                this.im_lemon2.source = 'h_jpg';
                this.im_newj.source = 'e_jpg';
                this.im_c2.source = 'h_jpg';
                this.im_d2.source = 'i_jpg';
                this.im_e2.source = 'f_jpg';
                this.im_h2.source = 'j_jpg';
                this.im_i2.source = 'c_jpg';
                this.im_f2.source = 'd_jpg';
                this.im_j2.source = 'e_jpg';
                setTimeout(function () {
                    // this.im_e2.source='e_jpg'
                    // this.im_h2.source='h_jpg'
                    // this.im_i2.source='i_jpg'
                    _this.im_lemon2.source = 'c_jpg';
                    _this.im_newj.source = 'j_jpg';
                    _this.im_c2.source = 'c_jpg';
                    _this.im_d2.source = 'd_jpg';
                    _this.im_e2.source = 'e_jpg';
                    _this.im_h2.source = 'h_jpg';
                    _this.im_i2.source = 'i_jpg';
                    _this.im_f2.source = 'f_jpg';
                    _this.im_j2.source = 'j_jpg';
                }, 2652);
                this.scr_one2.viewport.validateNow();
                this.scr_one2.viewport.scrollV = 0;
            }
            ////////////////////////////////////////////////////////
            if (Start.ccphoto2 == 'Litchi') {
                //setInterval(()=>{
                this.im_lemon2.source = 'f_jpg';
                this.im_newj.source = 'i_jpg';
                this.im_c2.source = 'f_jpg';
                this.im_d2.source = 'j_jpg';
                this.im_e2.source = 'c_jpg';
                this.im_h2.source = 'd_jpg';
                this.im_i2.source = 'e_jpg';
                this.im_f2.source = 'h_jpg';
                this.im_j2.source = 'i_jpg';
                setTimeout(function () {
                    // this.im_d2.source='d_jpg'
                    // this.im_e2.source='e_jpg'
                    // this.im_f2.source='f_jpg'
                    _this.im_lemon2.source = 'c_jpg';
                    _this.im_newj.source = 'j_jpg';
                    _this.im_c2.source = 'c_jpg';
                    _this.im_d2.source = 'd_jpg';
                    _this.im_e2.source = 'e_jpg';
                    _this.im_h2.source = 'h_jpg';
                    _this.im_i2.source = 'i_jpg';
                    _this.im_f2.source = 'f_jpg';
                    _this.im_j2.source = 'j_jpg';
                }, 2652);
                this.scr_one2.viewport.validateNow();
                this.scr_one2.viewport.scrollV = 0;
            }
            ///////////////////////////////////////////////////////
            if (Start.ccphoto2 == 'watermelon') {
                //setInterval(()=>{
                this.im_lemon2.source = 'j_jpg';
                this.im_newj.source = 'f_jpg';
                this.im_c2.source = 'j_jpg';
                this.im_d2.source = 'c_jpg';
                this.im_e2.source = 'd_jpg';
                this.im_h2.source = 'e_jpg';
                this.im_i2.source = 'h_jpg';
                this.im_f2.source = 'i_jpg';
                this.im_j2.source = 'f_jpg';
                setTimeout(function () {
                    // this.im_f2.source='f_jpg'
                    // this.im_j2.source='j_jpg'
                    // this.im_c2.source='c_jpg'
                    _this.im_lemon2.source = 'c_jpg';
                    _this.im_newj.source = 'j_jpg';
                    _this.im_c2.source = 'c_jpg';
                    _this.im_d2.source = 'd_jpg';
                    _this.im_e2.source = 'e_jpg';
                    _this.im_h2.source = 'h_jpg';
                    _this.im_i2.source = 'i_jpg';
                    _this.im_f2.source = 'f_jpg';
                    _this.im_j2.source = 'j_jpg';
                }, 2652);
                this.scr_one2.viewport.validateNow();
                this.scr_one2.viewport.scrollV = 0;
            }
            //////////////////////////////////////////////////////
            if (Start.ccphoto2 == 'lemon') {
                //setInterval(()=>{
                this.im_lemon2.source = 'j_jpg';
                this.im_newj.source = 'c_jpg';
                this.im_c2.source = 'j_jpg';
                this.im_d2.source = 'c_jpg';
                this.im_e2.source = 'd_jpg';
                this.im_h2.source = 'e_jpg';
                this.im_i2.source = 'h_jpg';
                this.im_f2.source = 'i_jpg';
                this.im_j2.source = 'f_jpg';
                setTimeout(function () {
                    // this.im_d2.source='d_jpg'
                    // this.im_e2.source='e_jpg'
                    // this.im_f2.source='f_jpg'
                    _this.im_lemon2.source = 'c_jpg';
                    _this.im_newj.source = 'j_jpg';
                    _this.im_c2.source = 'c_jpg';
                    _this.im_d2.source = 'd_jpg';
                    _this.im_e2.source = 'e_jpg';
                    _this.im_h2.source = 'h_jpg';
                    _this.im_i2.source = 'i_jpg';
                    _this.im_f2.source = 'f_jpg';
                    _this.im_j2.source = 'j_jpg';
                }, 2552); //2652
                this.scr_one2.viewport.validateNow();
                this.scr_one2.viewport.scrollV = 0;
            }
        }
        //this.scr_ceshi.viewport.contentHeight=10
        var sc = this.scr_one2;
        // setInterval(()=>{
        // sc.viewport.scrollV += 10;
        // },60)
        // setTimeout(()=>{
        //if(){
        var a2run = setInterval(function () {
            // sc.stopAnimation();
            sc.viewport.scrollV += 10;
        }, 10);
        // setTimeout(()=>{
        // 	clearInterval(arun)
        // },4100)
        //setTimeout(()=>{
        // this.im_f.y=1376
        // this.im_c.y=1651 
        // this.im_d.y=2201
        // this.im_e.y=2476
        // this.im_h.y=2751
        // this.im_i.y=3026
        // //this.im_j.y=1926.
        var a2runtime = setInterval(function () {
            _this.scr_one2.viewport.scrollV = 0;
            _this.im_j2.y = 1;
            setTimeout(function () {
                _this.im_j2.y = 642.2;
            }, 20);
        }, 663);
        // setTimeout(()=>{
        // 	var arun = setInterval(()=>{
        // 	          // sc.stopAnimation();
        // 			sc.viewport.scrollV += 10;
        // 			},30)
        // },4100)
        // }	 
        // if(sc.viewport.scrollH = 1600){
        //    sc.viewport.scrollV = 0;
        // }
        // },60)
        if ((sc.viewport.scrollV + sc.height) >= sc.viewport.contentHeight) {
            console.log("滚动到底部了");
        }
        this.scr_one2.verticalScrollBar.autoVisibility = false;
        this.scr_one2.verticalScrollBar.visible = false;
        if (Start.ccphoto2 == undefined) {
            this.scr_one2.viewport.validateNow();
            this.scr_one2.viewport.scrollV = 0;
        }
        else {
            if (Start.ccphoto2 == 'watermelon') {
                setTimeout(function () {
                    _this.im_newj.y = 92.6;
                    _this.im_c2.y = 733.8;
                    clearInterval(a2run);
                    clearInterval(a2runtime);
                }, 3205);
            }
            if (Start.ccphoto2 == 'seven') {
                setTimeout(function () {
                    clearInterval(a2run);
                    clearInterval(a2runtime);
                }, 3025);
            }
            if (Start.ccphoto2 == 'Diamonds') {
                setTimeout(function () {
                    clearInterval(a2run);
                    clearInterval(a2runtime);
                }, 2925);
            }
            if (Start.ccphoto2 == 'coins') {
                setTimeout(function () {
                    clearInterval(a2run);
                    clearInterval(a2runtime);
                }, 2840);
            }
            if (Start.ccphoto2 == 'clover') {
                setTimeout(function () {
                    //this.im_c2.y=1
                    clearInterval(a2run);
                    clearInterval(a2runtime);
                }, 2745);
            }
            if (Start.ccphoto2 == 'lemon') {
                setTimeout(function () {
                    _this.im_lemon2.y = 91.6;
                    _this.im_newj.y = 1;
                    clearInterval(a2run);
                    clearInterval(a2runtime);
                }, 3320); //3320
            }
            if (Start.ccphoto2 == 'Litchi') {
                setTimeout(function () {
                    clearInterval(a2run);
                    clearInterval(a2runtime);
                }, 3105);
            }
        }
    };
    start.prototype.c = function () {
        var _this = this;
        //setInterval(()=>{
        //this.scr_ceshi.height = 160
        console.log(' Start.ccphoto3 ' + Start.ccphoto3);
        if (this.playnumber <= 1) {
            this.scr_one3.viewport.validateNow();
            this.scr_one3.viewport.scrollV = 0;
        }
        else {
            if (Start.ccphoto3 == 'seven') {
                //setInterval(()=>{
                this.im_lemon3.source = 'h_jpg';
                this.im_lll.source = 'i_jpg';
                this.im_c3.source = 'h_jpg';
                this.im_d3.source = 'f_jpg';
                this.im_e3.source = 'j_jpg';
                this.im_h3.source = 'c_jpg';
                this.im_i3.source = 'd_jpg';
                this.im_f3.source = 'e_jpg';
                this.im_j3.source = 'i_jpg';
                setTimeout(function () {
                    // this.im_h3.source='h_jpg'
                    // this.im_i3.source='i_jpg'
                    // this.im_f3.source='f_jpg'
                    _this.im_lemon3.source = 'c_jpg';
                    _this.im_lll.source = 'j_jpg';
                    _this.im_c3.source = 'c_jpg';
                    _this.im_d3.source = 'd_jpg';
                    _this.im_e3.source = 'e_jpg';
                    _this.im_h3.source = 'h_jpg';
                    _this.im_i3.source = 'i_jpg';
                    _this.im_f3.source = 'f_jpg';
                    _this.im_j3.source = 'j_jpg';
                }, 3315);
                this.scr_one3.viewport.validateNow();
                this.scr_one3.viewport.scrollV = 0;
            }
            /////////////////////////////////////////////////
            if (Start.ccphoto3 == 'clover') {
                //setInterval(()=>{
                this.im_lemon3.source = 'd_jpg';
                this.im_lll.source = 'c_jpg';
                this.im_c3.source = 'd_jpg';
                this.im_d3.source = 'e_jpg';
                this.im_e3.source = 'h_jpg';
                this.im_h3.source = 'i_jpg';
                this.im_i3.source = 'f_jpg';
                this.im_f3.source = 'j_jpg';
                this.im_j3.source = 'c_jpg';
                setTimeout(function () {
                    // this.im_c3.source='c_jpg'
                    // this.im_d3.source='d_jpg'
                    // this.im_e3.source='e_jpg'
                    _this.im_lemon3.source = 'c_jpg';
                    _this.im_lll.source = 'j_jpg';
                    _this.im_c3.source = 'c_jpg';
                    _this.im_d3.source = 'd_jpg';
                    _this.im_e3.source = 'e_jpg';
                    _this.im_h3.source = 'h_jpg';
                    _this.im_i3.source = 'i_jpg';
                    _this.im_f3.source = 'f_jpg';
                    _this.im_j3.source = 'j_jpg';
                }, 3315);
                this.scr_one3.viewport.validateNow();
                this.scr_one3.viewport.scrollV = 0;
            }
            ////////////////////////////////////////////////
            if (Start.ccphoto3 == 'coins') {
                //setInterval(()=>{
                this.im_lemon3.source = 'e_jpg';
                this.im_lll.source = 'd_jpg';
                this.im_c3.source = 'e_jpg';
                this.im_d3.source = 'h_jpg';
                this.im_e3.source = 'i_jpg';
                this.im_h3.source = 'f_jpg';
                this.im_i3.source = 'j_jpg';
                this.im_f3.source = 'c_jpg';
                this.im_j3.source = 'd_jpg';
                setTimeout(function () {
                    // this.im_d3.source='d_jpg'
                    // this.im_e3.source='e_jpg'
                    // this.im_h3.source='h_jpg'
                    _this.im_lemon3.source = 'c_jpg';
                    _this.im_lll.source = 'j_jpg';
                    _this.im_c3.source = 'c_jpg';
                    _this.im_d3.source = 'd_jpg';
                    _this.im_e3.source = 'e_jpg';
                    _this.im_h3.source = 'h_jpg';
                    _this.im_i3.source = 'i_jpg';
                    _this.im_f3.source = 'f_jpg';
                    _this.im_j3.source = 'j_jpg';
                }, 3315);
                this.scr_one3.viewport.validateNow();
                this.scr_one3.viewport.scrollV = 0;
            }
            ///////////////////////////////////////////////////////
            if (Start.ccphoto3 == 'Diamonds') {
                //setInterval(()=>{
                this.im_lemon3.source = 'h_jpg';
                this.im_lll.source = 'e_jpg';
                this.im_c3.source = 'h_jpg';
                this.im_d3.source = 'i_jpg';
                this.im_e3.source = 'f_jpg';
                this.im_h3.source = 'j_jpg';
                this.im_i3.source = 'c_jpg';
                this.im_f3.source = 'd_jpg';
                this.im_j3.source = 'e_jpg';
                setTimeout(function () {
                    // this.im_e3.source='e_jpg'
                    // this.im_h3.source='h_jpg'
                    // this.im_i3.source='i_jpg'
                    _this.im_lemon3.source = 'c_jpg';
                    _this.im_lll.source = 'j_jpg';
                    _this.im_c3.source = 'c_jpg';
                    _this.im_d3.source = 'd_jpg';
                    _this.im_e3.source = 'e_jpg';
                    _this.im_h3.source = 'h_jpg';
                    _this.im_i3.source = 'i_jpg';
                    _this.im_f3.source = 'f_jpg';
                    _this.im_j3.source = 'j_jpg';
                }, 3315);
                this.scr_one3.viewport.validateNow();
                this.scr_one3.viewport.scrollV = 0;
            }
            ////////////////////////////////////////////////////////
            if (Start.ccphoto3 == 'Litchi') {
                //setInterval(()=>{
                this.im_lemon3.source = 'f_jpg';
                this.im_lll.source = 'i_jpg';
                this.im_c3.source = 'f_jpg';
                this.im_d3.source = 'j_jpg';
                this.im_e3.source = 'c_jpg';
                this.im_h3.source = 'd_jpg';
                this.im_i3.source = 'e_jpg';
                this.im_f3.source = 'h_jpg';
                this.im_j3.source = 'i_jpg';
                setTimeout(function () {
                    // this.im_d3.source='d_jpg'
                    // this.im_e3.source='e_jpg'
                    // this.im_f3.source='f_jpg'
                    _this.im_lemon3.source = 'c_jpg';
                    _this.im_lll.source = 'j_jpg';
                    _this.im_c3.source = 'c_jpg';
                    _this.im_d3.source = 'd_jpg';
                    _this.im_e3.source = 'e_jpg';
                    _this.im_h3.source = 'h_jpg';
                    _this.im_i3.source = 'i_jpg';
                    _this.im_f3.source = 'f_jpg';
                    _this.im_j3.source = 'j_jpg';
                }, 3315);
                this.scr_one3.viewport.validateNow();
                this.scr_one3.viewport.scrollV = 0;
            }
            ///////////////////////////////////////////////////////
            if (Start.ccphoto3 == 'watermelon') {
                //setInterval(()=>{
                this.im_lemon3.source = 'c_jpg';
                this.im_lll.source = 'f_jpg';
                this.im_c3.source = 'j_jpg';
                this.im_d3.source = 'c_jpg';
                this.im_e3.source = 'd_jpg';
                this.im_h3.source = 'e_jpg';
                this.im_i3.source = 'h_jpg';
                this.im_f3.source = 'i_jpg';
                this.im_j3.source = 'c_jpg';
                setTimeout(function () {
                    // this.im_f3.source='f_jpg'
                    // this.im_j3.source='j_jpg'
                    // this.im_c3.source='c_jpg'
                    _this.im_lemon3.source = 'c_jpg';
                    _this.im_lll.source = 'j_jpg';
                    _this.im_c3.source = 'c_jpg';
                    _this.im_d3.source = 'd_jpg';
                    _this.im_e3.source = 'e_jpg';
                    _this.im_h3.source = 'h_jpg';
                    _this.im_i3.source = 'i_jpg';
                    _this.im_f3.source = 'f_jpg';
                    _this.im_j3.source = 'j_jpg';
                }, 3315);
                this.scr_one3.viewport.validateNow();
                this.scr_one3.viewport.scrollV = 0;
            }
            //////////////////////////////////////////////////////
            if (Start.ccphoto3 == 'lemon') {
                //setInterval(()=>{
                this.im_lemon3.source = 'j_jpg';
                this.im_lll.source = 'c_jpg';
                this.im_c3.source = 'j_jpg';
                this.im_d3.source = 'c_jpg';
                this.im_e3.source = 'd_jpg';
                this.im_h3.source = 'e_jpg';
                this.im_i3.source = 'h_jpg';
                this.im_f3.source = 'i_jpg';
                this.im_j3.source = 'f_jpg';
                setTimeout(function () {
                    // this.im_d3.source='d_jpg'
                    // this.im_e3.source='e_jpg'
                    // this.im_f3.source='f_jpg'
                    _this.im_lemon3.source = 'c_jpg';
                    _this.im_lll.source = 'j_jpg';
                    _this.im_c3.source = 'c_jpg';
                    _this.im_d3.source = 'd_jpg';
                    _this.im_e3.source = 'e_jpg';
                    _this.im_h3.source = 'h_jpg';
                    _this.im_i3.source = 'i_jpg';
                    _this.im_f3.source = 'f_jpg';
                    _this.im_j3.source = 'j_jpg';
                }, 3215); //3315
                this.scr_one3.viewport.validateNow();
                this.scr_one3.viewport.scrollV = 0;
            }
        }
        //this.scr_ceshi.viewport.contentHeight=10
        var sc = this.scr_one3;
        // setInterval(()=>{
        // sc.viewport.scrollV += 10;
        // },60)
        // setTimeout(()=>{
        //if(){
        var a3run = setInterval(function () {
            // sc.stopAnimation();
            sc.viewport.scrollV += 10;
        }, 10);
        // setTimeout(()=>{
        // 	clearInterval(arun)
        // },4100)
        //setTimeout(()=>{
        // this.im_f.y=1376
        // this.im_c.y=1651
        // this.im_d.y=2201
        // this.im_e.y=2476
        // this.im_h.y=2751
        // this.im_i.y=3026
        // //this.im_j.y=1926.
        var a3runtime = setInterval(function () {
            _this.scr_one3.viewport.scrollV = 0;
            _this.im_j3.y = 1;
            setTimeout(function () {
                _this.im_j3.y = 642.2;
            }, 20);
        }, 663);
        // setTimeout(()=>{
        // 	var arun = setInterval(()=>{
        // 	          // sc.stopAnimation();
        // 			sc.viewport.scrollV += 10;
        // 			},30)
        // },4100)
        // }	 
        // if(sc.viewport.scrollH = 1600){
        //    sc.viewport.scrollV = 0;
        // }
        // },60)
        if ((sc.viewport.scrollV + sc.height) >= sc.viewport.contentHeight) {
            console.log("滚动到底部了");
        }
        this.scr_one3.verticalScrollBar.autoVisibility = false;
        this.scr_one3.verticalScrollBar.visible = false;
        // setTimeout(()=>{
        // Playerhandler.domany()
        // },3860)
        if (Start.ccphoto3 == undefined) {
            this.scr_one3.viewport.validateNow();
            this.scr_one3.viewport.scrollV = 0;
        }
        else {
            if (Start.ccphoto3 == 'watermelon') {
                setTimeout(function () {
                    _this.im_lll.y = 92.6;
                    _this.im_c3.y = 733.8;
                    clearInterval(a3run);
                    clearInterval(a3runtime);
                    Playerhandler.domany();
                    var endtext = setInterval(function () {
                        if (Start.donewmany == undefined) {
                            return null;
                        }
                        else {
                            clearInterval(endtext);
                            _this.data_many.text = Start.donewmany.toString();
                        }
                    }, 60);
                    //	this.data_many.text = Player._many.toString()
                    var newarr;
                    // 																		Playerhandler.getbet()
                    // 									let textend = setInterval(()=>{
                    // 									if(Start.getbet == undefined){
                    // 										return null
                    // 									}else{
                    // 										clearInterval(textend)
                    // 							        if(this.loadmany2<=0){
                    // 									   newarr=' 您 本 次 获 得'+(Start.getbet*10 - Math.abs(this.loadmany2)).toString()+' G '	
                    // 									}else{
                    //                                        newarr=' 您 本 次 获 得'+Math.abs(this.loadmany2).toString()+' G '	 
                    // 									}
                    // console.log(this.loadmany2) 
                    // console.log('new start getbet '+Start.getbet)
                    // 		 SceneManager.winmany(newarr) 
                    // 		 									}
                    // 									},50)
                }, 3870);
            }
            if (Start.ccphoto3 == 'seven') {
                setTimeout(function () {
                    clearInterval(a3run);
                    clearInterval(a3runtime);
                    Playerhandler.domany();
                    var endtext = setInterval(function () {
                        if (Start.donewmany == undefined) {
                            return null;
                        }
                        else {
                            clearInterval(endtext);
                            _this.data_many.text = Start.donewmany.toString();
                        }
                    }, 60);
                    //	 this.data_many.text = Start.ccnewmany 
                    //this.data_many.text = Player._many.toString()
                    var newarr;
                    // 																	Playerhandler.getbet()
                    // 									let textend = setInterval(()=>{
                    // 									if(Start.getbet == undefined){
                    // 										return null
                    // 									}else{
                    // 										clearInterval(textend)
                    // 							        if(this.loadmany2<=0){
                    // 									   newarr=' 您 本 次 获 得'+(Start.getbet*10 - Math.abs(this.loadmany2)).toString()+' G '	
                    // 									}else{
                    //                                        newarr=' 您 本 次 获 得'+Math.abs(this.loadmany2).toString()+' G '	 
                    // 									}
                    // console.log(this.loadmany2)
                    // console.log('new start getbet '+Start.getbet)
                    // 		 SceneManager.winmany(newarr) 
                    // 		 									}
                    // 									},50)
                }, 3690);
            }
            if (Start.ccphoto3 == 'Diamonds') {
                setTimeout(function () {
                    clearInterval(a3run);
                    clearInterval(a3runtime);
                    Playerhandler.domany();
                    var endtext = setInterval(function () {
                        if (Start.donewmany == undefined) {
                            return null;
                        }
                        else {
                            clearInterval(endtext);
                            _this.data_many.text = Start.donewmany.toString();
                        }
                    }, 60);
                    //	 this.data_many.text = Start.ccnewmany
                    //this.data_many.text = Player._many.toString()
                    var newarr;
                    // 																	Playerhandler.getbet()
                    // 								let textend = setInterval(()=>{
                    // 								if(Start.getbet == undefined){
                    // 									return null
                    // 								}else{
                    // 									clearInterval(textend)
                    // 						        if(this.loadmany2<=0){
                    // 								   newarr=' 您 本 次 获 得'+(Start.getbet*10 - Math.abs(this.loadmany2)).toString()+' G '	
                    // 								}else{
                    //                                    newarr=' 您 本 次 获 得'+Math.abs(this.loadmany2).toString()+' G '	 
                    // 								}
                    // console.log(this.loadmany2)
                    // console.log('new start getbet '+Start.getbet)
                    // 	 SceneManager.winmany(newarr) 
                    // 	 									}
                    // 								},50)
                }, 3586);
            }
            if (Start.ccphoto3 == 'coins') {
                setTimeout(function () {
                    clearInterval(a3run);
                    clearInterval(a3runtime);
                    Playerhandler.domany();
                    var endtext = setInterval(function () {
                        if (Start.donewmany == undefined) {
                            return null;
                        }
                        else {
                            clearInterval(endtext);
                            _this.data_many.text = Start.donewmany.toString();
                        }
                    }, 60);
                    //	 this.data_many.text = Start.ccnewmany
                    //this.data_many.text = Player._many.toString()
                    var newarr;
                    // 															Playerhandler.getbet()
                    // 							let textend = setInterval(()=>{
                    // 							if(Start.getbet == undefined){
                    // 								return null
                    // 							}else{
                    // 								clearInterval(textend)
                    // 					        if(this.loadmany2<=0){
                    // 							   newarr=' 您 本 次 获 得'+(Start.getbet*10 - Math.abs(this.loadmany2)).toString()+' G '	
                    // 							}else{
                    //                                newarr=' 您 本 次 获 得'+Math.abs(this.loadmany2).toString()+' G '	 
                    // 							}
                    // console.log(this.loadmany2)
                    // console.log('new start getbet '+Start.getbet)
                    //  SceneManager.winmany(newarr) 
                    //  									}
                    // 							},50)
                }, 3503);
            }
            if (Start.ccphoto3 == 'clover') {
                setTimeout(function () {
                    // this.im_lemon3.y=1
                    //  this.im_lll.y=1
                    //  this.im_c3.y=1
                    clearInterval(a3run);
                    clearInterval(a3runtime);
                    Playerhandler.domany();
                    var endtext = setInterval(function () {
                        if (Start.donewmany == undefined) {
                            return null;
                        }
                        else {
                            clearInterval(endtext);
                            _this.data_many.text = Start.donewmany.toString();
                        }
                    }, 60);
                    //	 this.data_many.text = Start.ccnewmany
                    //this.data_many.text = Player._many.toString()
                    var newarr;
                    // 							        Playerhandler.getbet()
                    // 									let textend = setInterval(()=>
                    // 									if(Start.getbet == undefined){
                    // 										return null
                    // 									}else{
                    // 										clearInterval(textend)
                    // 							        if(this.loadmany2<=0){
                    // 									   newarr=' 您 本 次 获 得'+(Start.getbet*10 - Math.abs(this.loadmany2)).toString()+' G '	
                    // 									}else{
                    //                                        newarr=' 您 本 次 获 得'+Math.abs(this.loadmany2).toString()+' G '	 
                    // 									}
                    // console.log(this.loadmany2) 
                    // console.log('new start getbet '+Start.getbet)
                    // 		 SceneManager.winmany(newarr) 
                    // 		 									}
                    // 									},50)
                }, 3405);
            }
            if (Start.ccphoto3 == 'lemon') {
                setTimeout(function () {
                    _this.im_lemon3.y = 91.6;
                    _this.im_lll.y = 1;
                    clearInterval(a3run);
                    clearInterval(a3runtime);
                    Playerhandler.domany();
                    var endtext = setInterval(function () {
                        if (Start.donewmany == undefined) {
                            return null;
                        }
                        else {
                            clearInterval(endtext);
                            _this.data_many.text = Start.donewmany.toString();
                        }
                    }, 60);
                    //	 this.data_many.text = Start.ccnewmany
                    //this.data_many.text = Player._many.toString()
                    var newarr;
                    // 																Playerhandler.getbet()
                    // 									let textend = setInterval(()=>{
                    // 									if(Start.getbet == undefined){
                    // 										return null
                    // 									}else{
                    // 										clearInterval(textend)
                    // 							        if(this.loadmany2<=0){
                    // 									   newarr=' 您 本 次 获 得'+(Start.getbet*10 - Math.abs(this.loadmany2)).toString()+' G '	
                    // 									}else{
                    //                                        newarr=' 您 本 次 获 得'+Math.abs(this.loadmany2).toString()+' G '	 
                    // 									}
                    // console.log(this.loadmany2)
                    // console.log('new start getbet '+Start.getbet)
                    // 		 SceneManager.winmany(newarr) 
                    // 		 									}
                    // 									},50)
                }, 3315);
            }
            if (Start.ccphoto3 == 'Litchi') {
                setTimeout(function () {
                    clearInterval(a3run);
                    clearInterval(a3runtime);
                    Playerhandler.domany();
                    var endtext = setInterval(function () {
                        if (Start.donewmany == undefined) {
                            return null;
                        }
                        else {
                            clearInterval(endtext);
                            _this.data_many.text = Start.donewmany.toString();
                        }
                    }, 60);
                    //	 this.data_many.text = Start.ccnewmany
                    //this.data_many.text = Player._many.toString()
                    var newarr;
                    // 									Playerhandler.getbet() 
                    // 									let textend = setInterval(()=>{ 
                    // 									if(Start.getbet == undefined){
                    // 										return null 
                    // 									}else{ 500+100 
                    // 										clearInterval(textend) 
                    // 							        if(this.loadmany2<=0){
                    // 									   newarr=' 您 本 次 获 得'+(Start.getbet*10 - Math.abs(this.loadmany2)).toString()+' G '	
                    // 									}else{
                    //                                        newarr=' 您 本 次 获 得'+Math.abs(this.loadmany2).toString()+' G '	 
                    // 									}
                    //       console.log( this.loadmany2 ) 
                    //       console.log('new start getbet '+Start.getbet) 
                    // 		 SceneManager.winmany(newarr) 
                    // 		 									}
                    // 									},50)
                }, 3765);
            }
        }
    };
    start.prototype.manyrun = function () {
        console.log('play 第一次判定');
        // Playerhandler.x()
        if (Player._many <= 0) {
            return this.gameover();
        }
        else {
            this.run();
        }
    };
    start.prototype.newplayrun = function () {
        if (Player._many <= 0) {
            return this.gameover();
        }
        else {
            this.playrun();
        }
    };
    //  public a(){ 
    //             Player._many=Player._many-5
    // 			this.data_many.text = Player._many.toString()
    //  }  
    start.prototype.run = function () {
        var _this = this;
        console.log('在run 的 bccphoto ' + Start.bccphoto);
        // let secmany:any = Playerhandler.remany 
        // let newsecmany:any  
        //  setTimeout(()=>{  
        //  let ccmany:any  = Playerhandler.newmany  
        //	console.log(ccmany())  
        //	setTimeout(()=>{
        //	console.log(Start.ccmany.toString()) 
        //	},5)
        //    var responseText = JSON.parse() 
        //   console.log(responseText())  
        //},10) 
        //  newsecmany.push(secmany)  
        //	console.log(newsecmany)
        //  secmany.push(newsecmany) 
        //	console.log(Playerhandler.remany) 
        // run.handler;doRequest 
        // console.log(Playerhandler.bets) 
        //	console.log(this.win)   
        //console.log(this.win) 
        //	this.win 
        // this.scr_one1.viewport.scrollV = 0;
        // this.scr_one2.viewport.scrollV = 0;
        // this.scr_one3.viewport.scrollV = 0;
        this.playnumber++;
        //	console.log(this.playnumber)
        Playerhandler.x();
        setTimeout(function () {
            Playerhandler.domany();
        }, 0);
        var runcheck = setInterval(function () {
            console.log('正在请求data数据....');
            // console.log(' run 判定出来的 staer ccphoto '+Start.ccphoto) 
            // console.log('在runcheck 的 bccphoto '+ Start.bccphoto)
            if (Start.ccphoto == undefined) {
                console.log('data 请求失败....');
                console.log(Start.donewmany);
                return null;
                // this.scr_one1.viewport.validateNow();
                // this.scr_one1.viewport.scrollV = 0;
                // this.scr_one2.viewport.validateNow();
                // this.scr_one2.viewport.scrollV = 0;
                // this.scr_one3.viewport.validateNow();
                // this.scr_one3.viewport.scrollV = 0;
            }
            else {
                console.log('在run runcheck 结束后 的 bccphoto ' + Start.bccphoto);
                console.log('data数据接收成功....');
                clearInterval(runcheck);
                console.log('在 1567 的 bccphoto ' + Start.bccphoto);
                _this.a();
                console.log('在 1569 的 bccphoto ' + Start.bccphoto);
                _this.b();
                _this.c();
                console.log('在 1570 run 的 bccphoto ' + Start.bccphoto);
                //  等着数据过来 数据延迟在 交互期间 而不是 请求后 数据到了 存留 延迟 key变量函数 
                // this.scr_one1.touchChildren=false 
                // this.scr_one2.touchChildren=false 
                // this.scr_one3.touchChildren=false 
                //  console.log('play') 
                _this.btn_play.enabled = false;
                setTimeout(function () {
                    _this.btn_play.enabled = true;
                }, 3000);
                // console.log(Player._many) 
                // Play.a() 
                //   setTimeout(()=>{
                var pm_1 = setInterval(function () {
                    if (Start.donewmany == undefined) {
                        console.log('没有执行到开始金钱减少动画');
                        null;
                    }
                    else {
                        clearInterval(pm_1);
                        console.log(' 执行到开始金钱减少动画 ');
                        _this.data_many.text = Start.donewmany.toString(); //Start.ccmany.toString()//Player._many.toString() 
                    }
                }, 60);
                //   },0) 
                _this.isPaused = false;
                //   this.scr_one1.viewport = this.gp_one1; 
                var loadmany = void 0;
                var loadmany2 = void 0;
                Playerhandler.domany();
                loadmany = Start.donewmany;
                console.log('在 1595 run 的 bccphoto ' + Start.bccphoto);
                setTimeout(function () {
                    console.log('在 1596 的 bccphoto ' + Start.bccphoto);
                    //     Play.maths()  
                    var mstc = setInterval(function () {
                        Playerhandler.domany();
                        if (Start.donewmany == undefined) {
                            return null;
                        }
                        else {
                            clearInterval(mstc);
                            console.log('mtc 的 bccphoto ' + Start.bccphoto);
                            //this.loadmany2=Start.donewmany - loadmany
                        }
                    }, 60);
                    //	console.log('you'+loadmany2)  
                }, 20);
            }
        }, 100);
        console.log('在 run 结束后 run 的 bccphoto ' + Start.bccphoto);
    };
    start.prototype.playrun = function () {
        var _this = this;
        Playerhandler.playmany();
        console.log('在 play run 的 bccphoto ' + Start.bccphoto);
        //      Playerhandler.getbet()			 
        // let datad = setInterval(()=>{
        // 	console.log(Start.getbet)
        // 	console.log('正在接收 many bet 展现 数据.......')
        // if(Start.getbet == undefined){
        // 	return null
        // }else{
        // 	console.log('展现数据接收成功......')
        //  clearInterval(datad)
        //  let arr:string
        //  arr = ' 已 扣 除 入 场 费 '+(Start.getbet*10).toString()+' G '                //this
        //  this.data_many.text = (Start.ccmany - (Start.getbet*10)).toString()
        //  console.log('    ------------------------------------  数据分割线  ---------------------------------------------                                                              ')
        //  console.log(arr)		 
        // SceneManager.fiveG(arr)
        // delete hadlvent 
        // console.log('down')   	 
        //  setTimeout(()=>{  
        this.fost();
        console.log('在 1642 bccphoto ' + Start.bccphoto);
        //   },3765)
        // 
        setTimeout(function () {
            console.log('在 数据刷新 run 的 bccphoto ' + Start.bccphoto);
            Playerhandler.ndouble();
            Playerhandler.doshuaxin();
            var newbet = setInterval(function () {
                if (Start.startdouble == '1') {
                    _this.data_double.text = Start.startdouble;
                    console.log('bet刷新回成 0 ');
                    clearInterval(newbet);
                }
                else {
                    return null;
                }
            }, 100);
            console.log('...........................   数据分割线  ..........................');
        }, 3500);
        //  Playerhandler.x()
        // }
        //  },100)
    };
    start.prototype.newfost = function () {
        // setInterval(()=>{ 
        //  
        // })
        // Play.fost()	
        Playerhandler.dofost();
    };
    start.prototype.fost = function () {
        var _this = this;
        //   setTimeout(()=>{  
        //        this.data_many.text = Player._many.toString()  	
        // 	 },1200)
        setTimeout(function () {
            _this.newfost();
        }, 10);
    };
    //   public nodata(){
    // 	  if(Start.ccphoto == undefined){
    // 		  this.scr_one1.viewport.validateNow();
    //           this.scr_one1.viewport.scrollV = 0;
    // 		  this.scr_one2.viewport.validateNow();
    //           this.scr_one2.viewport.scrollV = 0;
    // 		  this.scr_one3.viewport.validateNow();
    //           this.scr_one3.viewport.scrollV = 0;
    // 	  }
    //   }
    start.prototype.Ineedhelp = function () {
        this.btn_help.enabled = false;
        this.btn_play.enabled = false;
        this.btn_double.enabled = false;
        this.gp_help.visible = true;
        this.isPaused = true;
        for (var i = 0; i < this.gp_help.numChildren; i++) {
            var item = this.gp_help.getChildAt(i);
            item.alpha = 0;
            egret.Tween.get(item).wait(i * 200)
                .to({ "alpha": 1 }, 500);
        }
    };
    start.prototype.Gohome = function () {
        this.btn_help.enabled = true;
        this.btn_play.enabled = true;
        this.btn_double.enabled = true;
        this.gp_help.visible = false;
        this.isPaused = false;
        for (var i = 0; i < this.gp_help.numChildren; i++) {
            var item = this.gp_help.getChildAt(i);
            item.anchorOffsetY = -800;
            egret.Tween.get(item).wait(i * 200)
                .to({ "anchorOffsetY": 0 }, 500);
        }
    };
    start.prototype.many = function () {
        var _this = this;
        setInterval(function () {
            if (Start.ccmany == undefined) {
                return null;
            }
            else {
                setInterval(function () {
                    _this.data_many.text = Start.ccmany.toString();
                    //  this.data_many.text = Player._many.toString() ccconsole.log() 已没用
                }, 7730);
            }
        }, 60);
    };
    start.prototype.diemany = function () {
        var _this = this;
        setInterval(function () {
            if (Player._many <= 0) {
                return _this.gameover();
            }
        }, 0);
        //		 let strmany=Player._many.toString()
        // 		 let strmany:string = SvrAPIPayCenter.GetPayNotifyUrl(APIDefine.PLAYER_MANY + "/debug_default");    
        // 		 HTTP.url_request(strmany,egret.HttpMethod.GET,true,(a:any)=>{
        // 		} )
        // 	 }
        // }
        // class playrun extends Net.NetAPI{
        // private _apiData:Object = null;
        //     constructor() {
        //         super(Net.NetAPIType.http);
        //        // this._apiData = Net.gProtobufMsg.StartTurntableUpStream.prototype.toBase64();
        // 		 HTTP.url_request(egret.HttpMethod.POST,this._apiData)
        //         StatictisManager.onNetwork(this.apiName());
        //     }
        // public apiName():string {
        // 		/* 服务器接口api */
        // 		return APIDefine.PLAYER_MANY;
        // 	}
        // 	public apiData():any {
        // 		/* 数据的json序列化 */ 
        // 		return this._apiData;
        // 	 function ajaxPost ( url  ) {
        //     var ajax = processMsg();
        //     ajax.open( "get" , url , true );
        //     ajax.onreadystatechange = function () {
        //         if( ajax.readyState == 4 ) {
        //             if( ajax.status == 200 ) {
        //                  var response = JSON.parse(ajax.responseText) 
        //                  console.log("返回的数据")
        //                  console.log(response)  
        //                  console.log("...............")
        //             }
        //         }
        //       }
        //       ajax.send( null );
        //   }
        // var titleUrl='这里写请求地址'
        // ajaxPost(titleUrl)
    };
    return start;
}(eui.Component));
__reflect(start.prototype, "start", ["eui.UIComponent", "egret.DisplayObject"]);
var Start = new start;
//在游戏开始前 dorequest get player_uid
//转动问题 btn play 后 dorequest data
//转动期间 doRequest money 协议交互期间 转盘持续 转动
//end 重置 bets 提交 valuse
//是不是在开始的时候 doRequest 一次就可以
//还是先触发 转动特效 然后 doRequest
//转动时 发送 dorequest if 404 return error
// 100 1 0
// 270 1 143
// 423 1 147
// 700 1 140 850 多出了10 
// 10 以下 显示正确 1倍
// 1017 2 1019 -8 2倍以上显示错误
// 100 2 
// 数值过低 NAN
// data 传回来的数据 覆盖了 所以 Start.getbet 为 0 或者已经 重置了
// 倍数还是得要 改重置的时机
// 修改过bet刷新时间 跟刷新没关系
// 100 90 91 -9 1 10-9 1 2 80 81 -19 20-19 1
// 并没有接收展现数据
//bet 刷新问题 全是 默认为 1  
//# sourceMappingURL=start.js.map