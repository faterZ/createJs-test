(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"demo3_atlas_", frames: [[0,0,1334,750],[328,752,128,116],[0,752,326,136]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.sprite_01 = function() {
	this.spriteSheet = ss["demo3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sprite_04 = function() {
	this.spriteSheet = ss["demo3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sprite_18 = function() {
	this.spriteSheet = ss["demo3_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.enter_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sprite_18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.enter_btn, new cjs.Rectangle(0,0,326,136), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sprite_04();
	this.instance.parent = this;
	this.instance.setTransform(116,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(0,0,116,128), null);


(lib.page1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.enter_btn.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			console.log(111)
			this.gotoAndPlay(20);
			if(model)model.dispatchEvent("videoPlay1");
			// 结束您的自定义代码
		}
	}
	this.frame_19 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop();
		this.enter_btn2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndPlay(45)
			if(model)model.dispatchEvent("videoPlay2");
			// 结束您的自定义代码
		}
		
		
		/* 用于获取当前帧的帧编号的代码
		*/
		
		var frameNumber = this.currentFrame;
		
	}
	this.frame_51 = function() {
		this.stop();
	}
	this.frame_66 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop();
		this.enter_btn2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndPlay(45)
			if(model)model.dispatchEvent("videoPlay3");
			// 结束您的自定义代码
		}
		
		this.enter_return.addEventListener("click", fl_MouseClickHandler_n.bind(this));
		
		function fl_MouseClickHandler_n()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndPlay(45)
			if(model)model.dispatchEvent("return_videoPlay1");
			// 结束您的自定义代码
		}
		
		/* 用于获取当前帧的帧编号的代码
		*/
		
		var frameNumber = this.currentFrame;
	}
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(15).call(this.frame_44).wait(7).call(this.frame_51).wait(15).call(this.frame_66).wait(7).call(this.frame_73).wait(1));

	// 图层 5
	this.enter_return = new lib.btn();
	this.enter_return.parent = this;
	this.enter_return.setTransform(393.8,107.7,1,1,0,0,0,58,64);
	this.enter_return.alpha = 0;
	this.enter_return._off = true;

	this.timeline.addTween(cjs.Tween.get(this.enter_return).wait(52).to({_off:false},0).to({alpha:1},14).to({alpha:0},7).wait(1));

	// 图层 3
	this.enter_btn2 = new lib.btn();
	this.enter_btn2.parent = this;
	this.enter_btn2.setTransform(366.9,1102.9,1,1,0,0,0,58,64);
	this.enter_btn2.alpha = 0;
	this.enter_btn2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.enter_btn2).wait(30).to({_off:false},0).to({alpha:1},14).wait(1).to({alpha:0},6).wait(1).to({alpha:1},14).wait(1).to({alpha:0},6).wait(1));

	// 图层 2
	this.enter_btn = new lib.enter_btn();
	this.enter_btn.parent = this;
	this.enter_btn.setTransform(404,652.7,1,1,90,0,0,163,68);

	this.timeline.addTween(cjs.Tween.get(this.enter_btn).to({alpha:0.965},1).to({alpha:0.461},15).to({alpha:1},3).wait(1).to({alpha:0},9).to({_off:true},1).wait(44));

	// 图层 1
	this.instance = new lib.sprite_01();
	this.instance.parent = this;
	this.instance.setTransform(750,-1,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},20).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,750,1334);


// stage content:
(lib.demo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.view = new lib.page1();
	this.view.parent = this;
	this.view.setTransform(375,667,1,1,0,0,0,375,666);

	this.timeline.addTween(cjs.Tween.get(this.view).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667,750,1334);
// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/demo3_atlas_.png", id:"demo3_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;