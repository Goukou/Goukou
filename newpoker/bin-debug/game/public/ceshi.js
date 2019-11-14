// interface FerrisPrizeInfo
// {
// 	goods:GoodsNode,	
// 	boxImg:string,
// }
// class FerriswheelMainLayer extends asLayer implements Net.NetHandler{
// //摩天轮旋转动画
// public group_ferris:eui.Group;
// public img_fer_wheel:eui.Image;
// 	private rollSkyWheel():void
// 	{
// 		//重置数据
// 		//let info:FerrisWheelInfo = FerrisWheelManager.Instance().GetFerrisWheelInfo();
// 		egret.Tween.removeTweens(this.img_fer_wheel); 
// 		this.group_ferris.rotation = 0;
// 		// this[`group_light${info.rare}`].rotation = 0;  
// 		// this[`group_light${info.rare}_s1`].rotation = 0; 
// 		for (let index = 1; index <= 8; index++)
// 		{
// 			this[`img_box${index}`].rotation = 0;
// 		}
// 		//设置摩天轮礼物锚点ferris_wheel_box1_png 
// 		// for (let index:number = 1; index <= 8; index++) 
// 		// {
// 		// 	this[`img_box${index}`].anchorOffsetX = this[`img_box${index}`].width / 2;
// 		// 	this[`img_box${index}`].anchorOffsetY = 0;
// 		// 	this.includeInLayout = false;  
// 		//  }
// 
// 		let prizeArr:Array<FerrisPrizeInfo> = info.prizeList;
// 		egret.Tween.get(this.group_ferris, {loop : true, onChange:function() {
// 			// this.group_box.rotation = this.img_fer_wheel.rotation;
// 			// this.group_box.rotation = this.img_fer_wheel.rotation; 
// 			// this[`group_light${info.rare}`].rotation = this.img_fer_wheel.rotation;
// 			// this[`group_light${info.rare}_s1`].rotation = this.img_fer_wheel.rotation;
// 			for (let index = 1; index <= 8; index++)
// 			{
// 				if ((!(prizeArr && prizeArr[index] && prizeArr[index].goods && prizeArr[index].goods.goodsNum > 0)) 
// 					|| (prizeArr && prizeArr[index] && prizeArr[index].goods && prizeArr[index].goods.goodsNum > 0 && this._armPrizeIdx != index))
// 				{
// 					this[`img_box${index}`].rotation = -this.group_ferris.rotation;
// 				}
// 			}
// 		}, onChangeObj: this}).to({rotation: 360}, 60000); //
// 	}
// } 
//# sourceMappingURL=ceshi.js.map