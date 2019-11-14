window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","start":"resource/skins/start.exml","register":"resource/skins/register.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/btdouble.exml'] = window.btdouble = (function (_super) {
	__extends(btdouble, _super);
	function btdouble() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 39;
		this.width = 77;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","source","b_jpg"),
					new eui.SetProperty("","width",84),
					new eui.SetProperty("","height",45)
				])
		];
	}
	var _proto = btdouble.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 90;
		t.horizontalCenter = 0;
		t.source = "b_jpg";
		t.verticalCenter = 0;
		t.percentWidth = 90;
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "加注";
		t.textColor = 0x070606;
		t.x = 18.5;
		t.y = 9.5;
		return t;
	};
	return btdouble;
})(eui.Skin);generateEUI.paths['resource/skins/dengru.exml'] = window.dengru = (function (_super) {
	__extends(dengru, _super);
	function dengru() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 373;
		this.elementsContent = [this._Label1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
		];
	}
	var _proto = dengru.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "登入";
		t.x = 156.5;
		t.y = 10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "b_jpg";
		t.width = 2;
		t.x = 0;
		t.y = -1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 2;
		t.source = "b_jpg";
		t.width = 373;
		t.x = 0;
		t.y = 44;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 2;
		t.source = "b_jpg";
		t.width = 373;
		t.x = -2.5;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "b_jpg";
		t.width = 2;
		t.x = 368;
		t.y = 0;
		return t;
	};
	return dengru;
})(eui.Skin);generateEUI.paths['resource/skins/gamplay.exml'] = window.gamplay = (function (_super) {
	__extends(gamplay, _super);
	function gamplay() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 50;
		this.width = 133;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","source","b_jpg")
				])
		];
	}
	var _proto = gamplay.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 90;
		t.horizontalCenter = 0;
		t.source = "b_jpg";
		t.verticalCenter = 0;
		t.percentWidth = 90;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "再来一次";
		t.textColor = 0x070606;
		t.x = 26.5;
		t.y = 15;
		return t;
	};
	return gamplay;
})(eui.Skin);generateEUI.paths['resource/skins/godie.exml'] = window.godie = (function (_super) {
	__extends(godie, _super);
	function godie() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 40;
		this.width = 40;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","source","b_jpg")
				])
		];
	}
	var _proto = godie.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 90;
		t.horizontalCenter = 0;
		t.source = "b_jpg";
		t.verticalCenter = 0;
		t.percentWidth = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "X";
		t.textColor = 0xe81010;
		t.width = 40;
		t.y = 0;
		return t;
	};
	return godie;
})(eui.Skin);generateEUI.paths['resource/skins/gohelp.exml'] = window.gohelp = (function (_super) {
	__extends(gohelp, _super);
	function gohelp() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "go";
		this.height = 44;
		this.width = 82;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("go",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","source","b_jpg")
				])
		];
	}
	var _proto = gohelp.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 90;
		t.horizontalCenter = 0;
		t.source = "b_jpg";
		t.verticalCenter = 0;
		t.percentWidth = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "帮助";
		t.textColor = 0x0a0000;
		t.x = 21;
		t.y = 12;
		return t;
	};
	return gohelp;
})(eui.Skin);generateEUI.paths['resource/skins/goplay.exml'] = window.goplay = (function (_super) {
	__extends(goplay, _super);
	function goplay() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 61;
		this.width = 133;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("","width",133),
					new eui.SetProperty("","height",59)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","source","b_jpg")
				])
		];
	}
	var _proto = goplay.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 90;
		t.horizontalCenter = 0;
		t.source = "b_jpg";
		t.verticalCenter = 0;
		t.percentWidth = 90;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "游戏开始";
		t.textColor = 0x0c0101;
		t.x = 26.5;
		t.y = 20.5;
		return t;
	};
	return goplay;
})(eui.Skin);generateEUI.paths['resource/skins/wangji.exml'] = window.wangji = (function (_super) {
	__extends(wangji, _super);
	function wangji() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 39;
		this.width = 74;
		this.elementsContent = [this._Label1_i()];
	}
	var _proto = wangji.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 15;
		t.text = "忘记密码";
		t.x = 7;
		t.y = 12;
		return t;
	};
	return wangji;
})(eui.Skin);generateEUI.paths['resource/skins/zhuce.exml'] = window.zhuce = (function (_super) {
	__extends(zhuce, _super);
	function zhuce() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 39;
		this.width = 74;
		this.elementsContent = [this._Label1_i()];
	}
	var _proto = zhuce.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 15;
		t.text = "注册账号";
		t.x = 7;
		t.y = 12;
		return t;
	};
	return zhuce;
})(eui.Skin);generateEUI.paths['resource/skins/register.exml'] = window.registerSkin = (function (_super) {
	__extends(registerSkin, _super);
	function registerSkin() {
		_super.call(this);
		this.skinParts = ["Ed_name","Ed_mima","btn_logon","btn_reg"];
		
		this.height = 950;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.Ed_name_i(),this.Ed_mima_i(),this.btn_logon_i(),this.btn_reg_i(),this._Button1_i(),this._Label4_i(),this._Label5_i()];
	}
	var _proto = registerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.source = "Re_a_jpg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.size = 50;
		t.text = "Slot   machine";
		t.textColor = 0xe5a024;
		t.width = 320;
		t.x = 134;
		t.y = 95;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "账号：";
		t.textColor = 0x110202;
		t.x = 60;
		t.y = 354;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "密码：";
		t.textColor = 0x0f0606;
		t.x = 60;
		t.y = 423.5;
		return t;
	};
	_proto.Ed_name_i = function () {
		var t = new eui.EditableText();
		this.Ed_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.text = "";
		t.textColor = 0x110707;
		t.width = 282;
		t.x = 150;
		t.y = 354;
		return t;
	};
	_proto.Ed_mima_i = function () {
		var t = new eui.EditableText();
		this.Ed_mima = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.text = "";
		t.textColor = 0x110303;
		t.width = 288;
		t.x = 150;
		t.y = 418.5;
		return t;
	};
	_proto.btn_logon_i = function () {
		var t = new eui.Button();
		this.btn_logon = t;
		t.anchorOffsetX = 0;
		t.label = "Button";
		t.skinName = "dengru";
		t.width = 373;
		t.x = 113.5;
		t.y = 671;
		return t;
	};
	_proto.btn_reg_i = function () {
		var t = new eui.Button();
		this.btn_reg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.label = "Button";
		t.skinName = "wangji";
		t.width = 74;
		t.x = 60;
		t.y = 761.5;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.label = "Button";
		t.skinName = "zhuce";
		t.width = 72;
		t.x = 473;
		t.y = 761.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 10;
		t.text = "—————————————————————————————————————";
		t.textColor = 0x140303;
		t.x = 60;
		t.y = 385;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 10;
		t.text = "——————————————————————————————————————";
		t.textColor = 0x0f0303;
		t.x = 60;
		t.y = 465;
		return t;
	};
	return registerSkin;
})(eui.Skin);generateEUI.paths['resource/skins/start.exml'] = window.startSkin = (function (_super) {
	__extends(startSkin, _super);
	function startSkin() {
		_super.call(this);
		this.skinParts = ["data_double","data_many","btn_double1","btn_help1","btn_help","btn_double","btn_play","btn_play1","im_lemon","im_ll","im_c","im_d","im_e","im_h","im_i","im_f","im_j","gp_one1","scr_one1","scr_ceshi","im_lemon2","im_newj","im_c2","im_d2","im_e2","im_h2","im_i2","im_f2","im_j2","gp_one2","scr_one2","im_lemon3","im_lll","im_c3","im_d3","im_e3","im_h3","im_i3","im_f3","im_j3","gp_one3","scr_one3","btn_return1","btn_return","gp_help","btn_gameplay","gp_over"];
		
		this.height = 950;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.data_double_i(),this.data_many_i(),this.btn_double1_i(),this.btn_help1_i(),this.btn_help_i(),this.btn_double_i(),this.btn_play_i(),this.btn_play1_i(),this.scr_one1_i(),this.scr_ceshi_i(),this.scr_one2_i(),this.scr_one3_i(),this.gp_help_i(),this.gp_over_i(),this._Label12_i(),this._Label13_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.double"],[0],this.data_double,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.many"],[0],this.data_many,"text");
	}
	var _proto = startSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 950;
		t.source = "a_jpg";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 303;
		t.source = "b_jpg";
		t.width = 173;
		t.x = 19;
		t.y = 199;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 303;
		t.source = "b_jpg";
		t.width = 172;
		t.x = 212;
		t.y = 196;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 308;
		t.source = "b_jpg";
		t.width = 180;
		t.x = 403;
		t.y = 194;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.rotation = 359.53;
		t.size = 20;
		t.text = "1";
		t.textColor = 0xed12ea;
		t.width = 20;
		t.x = 18.34;
		t.y = 339.58;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.size = 20;
		t.text = "3";
		t.textColor = 0xe80d0d;
		t.width = 20;
		t.x = 18.5;
		t.y = 432;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.size = 20;
		t.text = "2";
		t.textColor = 0x15d8ea;
		t.width = 20;
		t.x = 18.34;
		t.y = 258.8;
		return t;
	};
	_proto.data_double_i = function () {
		var t = new eui.Label();
		this.data_double = t;
		t.size = 25;
		t.textColor = 0xf7d71b;
		t.x = 489;
		t.y = 643;
		return t;
	};
	_proto.data_many_i = function () {
		var t = new eui.Label();
		this.data_many = t;
		t.size = 20;
		t.textColor = 0xf4ba0c;
		t.x = 328.5;
		t.y = 579;
		return t;
	};
	_proto.btn_double1_i = function () {
		var t = new eui.ToggleButton();
		this.btn_double1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.label = "ToggleButton";
		t.skinName = "btdouble";
		t.visible = false;
		t.width = 77;
		t.x = 457;
		t.y = 742;
		return t;
	};
	_proto.btn_help1_i = function () {
		var t = new eui.ToggleButton();
		this.btn_help1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.label = "ToggleButton";
		t.skinName = "gohelp";
		t.visible = false;
		t.width = 82;
		t.x = 58;
		t.y = 739;
		return t;
	};
	_proto.btn_help_i = function () {
		var t = new eui.Button();
		this.btn_help = t;
		t.label = "Button";
		t.skinName = "gohelp";
		t.x = 58;
		t.y = 739.5;
		return t;
	};
	_proto.btn_double_i = function () {
		var t = new eui.Button();
		this.btn_double = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.label = "Button";
		t.skinName = "btdouble";
		t.width = 84;
		t.x = 452;
		t.y = 739.5;
		return t;
	};
	_proto.btn_play_i = function () {
		var t = new eui.Button();
		this.btn_play = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.label = "Button";
		t.skinName = "goplay";
		t.width = 133;
		t.x = 237;
		t.y = 710;
		return t;
	};
	_proto.btn_play1_i = function () {
		var t = new eui.ToggleButton();
		this.btn_play1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "ToggleButton";
		t.skinName = "goplay";
		t.visible = false;
		t.width = 139;
		t.x = 237;
		t.y = 713;
		return t;
	};
	_proto.scr_one1_i = function () {
		var t = new eui.Scroller();
		this.scr_one1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 275;
		t.width = 152;
		t.x = 33;
		t.y = 212;
		t.viewport = this.gp_one1_i();
		return t;
	};
	_proto.gp_one1_i = function () {
		var t = new eui.Group();
		this.gp_one1 = t;
		t.anchorOffsetY = 0;
		t.height = 274;
		t.elementsContent = [this.im_lemon_i(),this.im_ll_i(),this.im_c_i(),this.im_d_i(),this.im_e_i(),this.im_h_i(),this.im_i_i(),this.im_f_i(),this.im_j_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto.im_lemon_i = function () {
		var t = new eui.Image();
		this.im_lemon = t;
		t.height = 91.6;
		t.source = "c_jpg";
		t.width = 154;
		t.x = -2;
		t.y = 1;
		return t;
	};
	_proto.im_ll_i = function () {
		var t = new eui.Image();
		this.im_ll = t;
		t.height = 91.6;
		t.source = "j_jpg";
		t.width = 154;
		t.x = -2;
		t.y = 1;
		return t;
	};
	_proto.im_c_i = function () {
		var t = new eui.Image();
		this.im_c = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "c_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 92.6;
		return t;
	};
	_proto.im_d_i = function () {
		var t = new eui.Image();
		this.im_d = t;
		t.height = 91.6;
		t.source = "d_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 184.2;
		return t;
	};
	_proto.im_e_i = function () {
		var t = new eui.Image();
		this.im_e = t;
		t.height = 91.6;
		t.source = "e_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 275.8;
		return t;
	};
	_proto.im_h_i = function () {
		var t = new eui.Image();
		this.im_h = t;
		t.height = 91.6;
		t.source = "h_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 367.4;
		return t;
	};
	_proto.im_i_i = function () {
		var t = new eui.Image();
		this.im_i = t;
		t.height = 91.6;
		t.source = "i_jpg";
		t.width = 154;
		t.x = 1;
		t.y = 459;
		return t;
	};
	_proto.im_f_i = function () {
		var t = new eui.Image();
		this.im_f = t;
		t.height = 91.6;
		t.source = "f_jpg";
		t.width = 154;
		t.x = 0;
		t.y = 550.6;
		return t;
	};
	_proto.im_j_i = function () {
		var t = new eui.Image();
		this.im_j = t;
		t.height = 91.6;
		t.source = "j_jpg";
		t.width = 154;
		t.x = -2;
		t.y = 642.2;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 91.6;
		t.source = "c_jpg";
		t.visible = false;
		t.width = 154;
		t.x = -1;
		t.y = 92.6;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 91.6;
		t.source = "d_jpg";
		t.visible = false;
		t.width = 154;
		t.x = -1;
		t.y = 184.2;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 91.6;
		t.source = "e_jpg";
		t.visible = false;
		t.width = 154;
		t.x = -2;
		t.y = 275.8;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 91.6;
		t.source = "h_jpg";
		t.visible = false;
		t.width = 154;
		t.x = -1;
		t.y = 367.4;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 91.6;
		t.source = "i_jpg";
		t.visible = false;
		t.width = 154;
		t.x = 0;
		t.y = 459;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 91.6;
		t.source = "f_jpg";
		t.visible = false;
		t.width = 154;
		t.x = 0;
		t.y = 550.6;
		return t;
	};
	_proto.scr_ceshi_i = function () {
		var t = new eui.Scroller();
		this.scr_ceshi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 294;
		t.visible = false;
		t.width = 178;
		t.x = 18;
		t.y = 191;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._List1_i(),this._Image11_i()];
		return t;
	};
	_proto._List1_i = function () {
		var t = new eui.List();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 293;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 178;
		t.x = 0;
		t.y = 2.5;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 2400;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "a_jpg";
		t.visible = false;
		t.width = 178;
		t.x = 3;
		t.y = -2107;
		return t;
	};
	_proto.scr_one2_i = function () {
		var t = new eui.Scroller();
		this.scr_one2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 275;
		t.width = 152;
		t.x = 216;
		t.y = 212;
		t.viewport = this.gp_one2_i();
		return t;
	};
	_proto.gp_one2_i = function () {
		var t = new eui.Group();
		this.gp_one2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 264;
		t.width = 163;
		t.x = 1;
		t.y = -3;
		t.elementsContent = [this.im_lemon2_i(),this.im_newj_i(),this.im_c2_i(),this.im_d2_i(),this.im_e2_i(),this.im_h2_i(),this.im_i2_i(),this.im_f2_i(),this.im_j2_i()];
		return t;
	};
	_proto.im_lemon2_i = function () {
		var t = new eui.Image();
		this.im_lemon2 = t;
		t.height = 91.6;
		t.source = "c_jpg";
		t.width = 154;
		t.x = -2;
		t.y = 1;
		return t;
	};
	_proto.im_newj_i = function () {
		var t = new eui.Image();
		this.im_newj = t;
		t.height = 91.6;
		t.source = "j_jpg";
		t.width = 154;
		t.x = -2;
		t.y = 1;
		return t;
	};
	_proto.im_c2_i = function () {
		var t = new eui.Image();
		this.im_c2 = t;
		t.height = 91.6;
		t.source = "c_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 92.6;
		return t;
	};
	_proto.im_d2_i = function () {
		var t = new eui.Image();
		this.im_d2 = t;
		t.height = 91.6;
		t.source = "d_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 184.2;
		return t;
	};
	_proto.im_e2_i = function () {
		var t = new eui.Image();
		this.im_e2 = t;
		t.height = 91.6;
		t.source = "e_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 275.8;
		return t;
	};
	_proto.im_h2_i = function () {
		var t = new eui.Image();
		this.im_h2 = t;
		t.height = 91.6;
		t.source = "h_jpg";
		t.width = 154;
		t.x = -2;
		t.y = 367.4;
		return t;
	};
	_proto.im_i2_i = function () {
		var t = new eui.Image();
		this.im_i2 = t;
		t.height = 91.6;
		t.source = "i_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 459;
		return t;
	};
	_proto.im_f2_i = function () {
		var t = new eui.Image();
		this.im_f2 = t;
		t.height = 91.6;
		t.source = "f_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 550.6;
		return t;
	};
	_proto.im_j2_i = function () {
		var t = new eui.Image();
		this.im_j2 = t;
		t.height = 91.6;
		t.source = "j_jpg";
		t.width = 154;
		t.y = 642.2;
		return t;
	};
	_proto.scr_one3_i = function () {
		var t = new eui.Scroller();
		this.scr_one3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 275;
		t.width = 152;
		t.x = 406;
		t.y = 212;
		t.viewport = this.gp_one3_i();
		return t;
	};
	_proto.gp_one3_i = function () {
		var t = new eui.Group();
		this.gp_one3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.width = 168;
		t.x = 1;
		t.elementsContent = [this.im_lemon3_i(),this.im_lll_i(),this.im_c3_i(),this.im_d3_i(),this.im_e3_i(),this.im_h3_i(),this.im_i3_i(),this.im_f3_i(),this.im_j3_i()];
		return t;
	};
	_proto.im_lemon3_i = function () {
		var t = new eui.Image();
		this.im_lemon3 = t;
		t.height = 91.6;
		t.source = "c_jpg";
		t.width = 154;
		t.x = -2;
		t.y = 1;
		return t;
	};
	_proto.im_lll_i = function () {
		var t = new eui.Image();
		this.im_lll = t;
		t.height = 91.6;
		t.source = "j_jpg";
		t.width = 154;
		t.x = -2;
		t.y = 1;
		return t;
	};
	_proto.im_c3_i = function () {
		var t = new eui.Image();
		this.im_c3 = t;
		t.height = 91.6;
		t.source = "c_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 92.6;
		return t;
	};
	_proto.im_d3_i = function () {
		var t = new eui.Image();
		this.im_d3 = t;
		t.height = 91.6;
		t.source = "d_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 184.2;
		return t;
	};
	_proto.im_e3_i = function () {
		var t = new eui.Image();
		this.im_e3 = t;
		t.height = 91.6;
		t.source = "e_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 275.8;
		return t;
	};
	_proto.im_h3_i = function () {
		var t = new eui.Image();
		this.im_h3 = t;
		t.height = 91.6;
		t.source = "h_jpg";
		t.width = 154;
		t.x = 1;
		t.y = 367.4;
		return t;
	};
	_proto.im_i3_i = function () {
		var t = new eui.Image();
		this.im_i3 = t;
		t.height = 91.6;
		t.source = "i_jpg";
		t.width = 154;
		t.y = 459;
		return t;
	};
	_proto.im_f3_i = function () {
		var t = new eui.Image();
		this.im_f3 = t;
		t.height = 91.6;
		t.source = "f_jpg";
		t.width = 154;
		t.x = -1;
		t.y = 550.6;
		return t;
	};
	_proto.im_j3_i = function () {
		var t = new eui.Image();
		this.im_j3 = t;
		t.height = 91.6;
		t.source = "j_jpg";
		t.width = 154;
		t.x = 6;
		t.y = 642.2;
		return t;
	};
	_proto.gp_help_i = function () {
		var t = new eui.Group();
		this.gp_help = t;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.visible = false;
		t.width = 400;
		t.x = 106.5;
		t.y = 170;
		t.elementsContent = [this._Image12_i(),this._Label4_i(),this._Label5_i(),this.btn_return1_i(),this.btn_return_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.source = "b_jpg";
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "游戏玩法 ：";
		t.textColor = 0x070606;
		t.x = 130.5;
		t.y = 28;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "点击开始游戏，转动转盘，获得丰富奖励";
		t.textColor = 0x070606;
		t.x = 18.5;
		t.y = 78.8;
		return t;
	};
	_proto.btn_return1_i = function () {
		var t = new eui.ToggleButton();
		this.btn_return1 = t;
		t.height = 40;
		t.label = "ToggleButton";
		t.skinName = "godie";
		t.visible = false;
		t.width = 40;
		t.x = 360;
		t.y = 3;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.height = 40;
		t.label = "Button";
		t.skinName = "godie";
		t.width = 40;
		t.x = 357.5;
		t.y = 2;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 20;
		t.text = "金币x3:1500G,  7x3:500G,  金币x2:150G";
		t.textColor = 0xf2d10e;
		t.width = 352;
		t.x = 30.5;
		t.y = 124.1;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "钻石x3:50G,  7x2:50G,  幸运草x3:25G";
		t.textColor = 0xefbc10;
		t.x = 31;
		t.y = 160.4;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "西瓜x3:15G,  柠檬x3:10G,  荔枝x3:5G";
		t.textColor = 0xf2a610;
		t.x = 30.5;
		t.y = 200;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "钻石x2:5G,  西瓜x2:2G,  幸运草x2:2G";
		t.textColor = 0xcec812;
		t.x = 32.5;
		t.y = 242;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "荔枝x2:1G,  芒果x2:1G";
		t.textColor = 0xd8a91a;
		t.x = 33.5;
		t.y = 282;
		return t;
	};
	_proto.gp_over_i = function () {
		var t = new eui.Group();
		this.gp_over = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 945;
		t.visible = false;
		t.width = 598;
		t.x = 1;
		t.y = 3;
		t.elementsContent = [this._Rect1_i(),this._Label11_i(),this.btn_gameplay_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.7;
		t.fillColor = 0x000000;
		t.height = 946;
		t.width = 599;
		t.x = -1;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.size = 40;
		t.text = "您没钱了";
		t.width = 162;
		t.x = 219;
		t.y = 96;
		return t;
	};
	_proto.btn_gameplay_i = function () {
		var t = new eui.ToggleButton();
		this.btn_gameplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.label = "ToggleButton";
		t.skinName = "gamplay";
		t.width = 132;
		t.x = 235;
		t.y = 711.5;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.size = 20;
		t.text = "4";
		t.textColor = 0x64ea0e;
		t.width = 20;
		t.x = 18.5;
		t.y = 227;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "5";
		t.textColor = 0x1013ed;
		t.width = 20;
		t.x = 20;
		t.y = 462.5;
		return t;
	};
	return startSkin;
})(eui.Skin);