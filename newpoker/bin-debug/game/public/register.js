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
var register = (function (_super) {
    __extends(register, _super);
    function register() {
        return _super.call(this) || this;
    }
    register.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    register.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_logon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.check, this);
    };
    // public helloword(){ 
    // 	Playerhandler.x()  
    // 	Playerhandler.y()  
    // }                  
    // 	private dename() {
    // let newname:string = this.Ed_name.text
    // return newname
    // 	}
    // 	public newname(){
    // let sname = this.newname()
    // console.log(sname)		
    // 	}
    register.prototype.check = function () {
        var newname = this.Ed_name.text;
        var nname = newname;
        this.nename = nname;
        var apiName;
        // console.log(this.nename)
        //let newname = this.Ed_name.text  
        //let name:any = newname//Number(newname) 
        //let newmima = this.Ed_mima.text 
        //let mima:any = newmima//Number(newmima) 
        // let name = this.Ed_name.text 
        // let mima = this.Ed_mima.EditableText  
        // let data:any = {Ed_name:name,Ed_mima:mima} 
        // let data:any = {Ed_name:this.Ed_name,Ed_mima:this.Ed_mima} 
        // let header:any ={}
        //  let data:any = { Ed_name:'1',Ed_mima:'123' } 
        //  let apiData = {data}
        //console.log(newname)
        //  let requestBody:any = {header,data} 
        //   let header:any = { Ed_name:this.Ed_name.text,Ed_mima:this.Ed_mima.text } 
        //  let data:any = { 
        // 	 header:{}, 
        // 	 data:{Ed_name: this.Ed_name.text, Ed_mima: this.Ed_mima.text} 
        //  }  
        //   let data:any = {} 
        //   console.log(data)  
        // HTTP.url_request(apiName,data,'GET',null,null)  
        // HTTP.url_request(apiName="/api/sign",data,'GET',null,null)
        // Net.NetFactory.doRequest(new SvrAPITEST({hi:"helloword"}),this)   
        Net.NetFactory.doRequest(new SvrAPISIGN(this.Ed_name.text, this.Ed_mima.text), this);
        // Net.NetFactory.doRawRequest(new SvrAPISIGN(Register.onReceiveResponse(apiName,data)),this) 
        // Net.NetFactory.doRawRequest(new SvrAPISIGN(this.Ed_name.text,this.Ed_mima.text),this)   
        // Net.NetFactory.doRawRequest(new SvrAPIRoll(''),this)
        // Net.NetFactory.doRequest(new SvrAPISIGN(Register.onReceiveResponse(apiName,header)),this)    
        //  Net.MyHttpFactory.doRequest(new SvrAPISIGN(Register.onReceiveResponse(apiName,data)),this)   
        //  console.log(data)  
        //  console.log(requestBody)   
    };
    register.prototype.do = function () {
        return this.nename;
    };
    //  public de(){
    // let  newname:string = this.Ed_name.text
    // let  nname:string = newname    
    //  this.nename = nname 
    //  this.check()
    //  } 
    //   public dee(){   
    // 	 return console.log(this.nename)
    //  }
    //  
    register.prototype.newgostart = function (msg) {
        var dohas = setInterval(function () {
            console.log(msg);
            // console.log('这是msg name数据 '+ msg.Ed_name)    
            // console.log('这是msg mima的数据 '+ msg.Ed_mima)   
            if (msg.Key == "SceneManager.toRegister()") {
                console.log('第二次判断');
                clearInterval(dohas);
                Playerhandler.x();
                var has_1 = setInterval(function () {
                    console.log('等待数据获取中');
                    console.log(Start.ccmany);
                    if (Start.ccmany == undefined) {
                        return null;
                    }
                    else {
                        clearInterval(has_1);
                        return SceneManager.toRegister();
                    }
                }, 100);
            }
            else {
                null;
            }
        }, 100);
    };
    // 
    // private gostart(){     
    //       //console.log(this.Ed_name.text)   
    //       // Playerhandler.x() 
    // 	   let zc=this.Ed_name.text  
    // 	   let zzc=this.Ed_mima.text  
    // 	    var newzc=dataArr.map((e)=>{return{'name':e[0],'sv':e[1]}}) 
    // 	//   for (var i=0;i<=Array.length;i++){
    //        
    // 	//   }
    // 	//   var newzc=dataArr.map(function(item){
    // 	// 			 return item(zc.toString()) 
    //     //          }) 
    //  	 		//   var endzc=newzc.map(function(item){     
    // 			// 	 return item ['name'==this.Ed_name.text] 
    //             //  }) 
    // 			var bad=newzc.map((e)=>{return e.name == this.Ed_name.text})   
    // 			var newbad=newzc.map((e)=>{return e.sv == this.Ed_mima.text}) 
    // 		// 	var data = newzc.find(function(e){return e.name == 1});
    //         //    console.log(data);        
    // 		console.log(bad)    
    // 		console.log(newbad)                       
    // 		   for (var i=0;i<=Array.length;i++){
    //                    if(bad[i]==newbad[i]){
    // 					 //  if(bad[i]==false){ 
    // 					//	   null
    // 					SceneManager.toRegister()
    // 					   }else{ 
    //                             null
    // 					   } 
    // 					   if (dataArr && dataArr){
    //                            return dataArr == undefined
    // 					   }
    // 					  // console.log(dataArr) 
    // 				  // }
    // 	   }
    // 		    // console.log(bad)
    // 			// console.log(dataArr)
    // 			// console.log(newbad)
    // 		//	console.log(endzc)  
    // 	//	 let runzc=  
    // 	//	 console.log(newzc.sort(runzc("name"))) 
    //
    // // console.log(dataArr[0])
    // //        console.log(this.Ed_name.text)
    // // 	 console.log(newzc[0])
    // 	 //SceneManager.toRegister() 
    //}
    register.Instance = function () {
        if (register.instance == null) {
            register.instance = new register();
        }
        return register.instance;
    };
    /* 收到正确网络回复 */
    register.prototype.onReceiveResponse = function (apiName, data) {
        // data = { Ed_name:this.Ed_name.text,Ed_mima:this.Ed_mima.text } 
        var msg = JSON.parse(data);
        register.Instance().newgostart(msg);
    };
    ;
    /* 服务器返回error */
    register.prototype.onReceiveError = function (apiName, errCode, errMsg) {
    };
    ;
    /* 网络链接错误 */
    register.prototype.onNetError = function (apiName, errCode) {
    };
    ;
    register.instance = null;
    return register;
}(eui.Component));
__reflect(register.prototype, "register", ["eui.UIComponent", "egret.DisplayObject", "Net.NetHandler"]);
var Register = new register;
//带着录入好的数据去发送请求 还是 接到请求后 回来调取data 
//# sourceMappingURL=register.js.map