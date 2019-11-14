var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        this.Start = new start;
        this.Register = new register;
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
         * 设置根场景
         */
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    /**
         * 删除其他场景
         * @param scene 不需要删除的场景
         */
    SceneManager.prototype.removeOther = function (scene) {
        var _this = this;
        var arr = [this.Start];
        arr.forEach(function (item) {
            if (scene === item) {
                return;
            }
            if (item.parent) {
                _this.Start.removeChild(item);
            }
        });
    };
    SceneManager.fiveG = function (arr) {
        console.log('44 ' + Start.bccphoto);
        arr;
        // 新建一个消息背景图 
        var img = new egret.Bitmap();
        img.texture = RES.getRes('toast-bg_png');
        SceneManager.instance.Start.addChild(img);
        img.x = SceneManager.instance.Start.width / 2 - img.width / 2;
        img.y = 850;
        img.height = 40;
        // 新建一个label用来显示 
        var label = new egret.TextField();
        label.text = arr;
        label.textColor = 247, 215, 27;
        label.size = 20;
        SceneManager.instance.Start.addChild(label);
        label.x = SceneManager.instance.Start.width / 2 - label.width / 2;
        label.y = 850;
        label.height = 40;
        // 创建一个定时器,1000毫秒后删除label
        var timer = new egret.Timer(1500, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            SceneManager.instance.Start.removeChild(label);
            SceneManager.instance.Start.removeChild(img);
        }, this);
    };
    SceneManager.winmany = function (newarr) {
        console.log('76 ' + Start.bccphoto);
        newarr;
        // 新建一个消息背景图
        var img = new egret.Bitmap();
        img.texture = RES.getRes('toast-bg_png');
        SceneManager.instance.Start.addChild(img);
        img.x = SceneManager.instance.Start.width / 2 - img.width / 2;
        img.y = 850;
        img.height = 40;
        // 新建一个label用来显示 
        var label = new egret.TextField();
        label.text = newarr;
        label.textColor = 247, 215, 27;
        label.size = 20;
        SceneManager.instance.Start.addChild(label);
        label.x = SceneManager.instance.Start.width / 2 - label.width / 2;
        label.y = 850;
        label.height = 40;
        // 创建一个定时器,1000毫秒后删除label 
        var timer = new egret.Timer(2000, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            SceneManager.instance.Start.removeChild(label);
            SceneManager.instance.Start.removeChild(img);
        }, this);
    };
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage; // (根) 舞台 
        var mainScene = SceneManager.instance.Register; // 主场景 
        // 判断主场景是否有父级(如果有,说明已经被添加到了场景中) 
        if (!mainScene.parent) {
            // 未被添加到场景  
            // 把主场景添加到之前设置好的根舞台中 
            stage.addChild(mainScene);
        }
        // if(SceneManager.instance.Play.parent) { 
        // 如果有就删除玩家场景 
        //   mainScene.removeChild(SceneManager.instance.Play) 
        //}
        SceneManager.instance.removeOther(SceneManager.instance.Start);
    };
    /**
       * 游玩场景
       */
    SceneManager.toRegister = function () {
        var stage = this.instance._stage;
        // 把玩家场景添加到主场景中 
        this.instance.Register.addChild(this.instance.Start);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=maindata.js.map