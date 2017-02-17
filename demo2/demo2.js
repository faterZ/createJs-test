(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.page1center = function() {
	this.spriteSheet = ss["demo2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.page1man_new = function() {
	this.spriteSheet = ss["demo2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.page1textpart1 = function() {
	this.spriteSheet = ss["demo2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.page1textpart2 = function() {
	this.spriteSheet = ss["demo2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.page1woman_new = function() {
	this.spriteSheet = ss["demo2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.subjectlogo5 = function() {
	this.spriteSheet = ss["demo2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hometext2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1textpart2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,545,67);


(lib.hometext1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1textpart1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,528,108);


(lib.homehearet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1center();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,882);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1woman_new();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,263);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.page1man_new();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,263);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.content = new cjs.Text("title", "40px 'Microsoft YaHei UI'", "#A24E41");
	this.content.name = "content";
	this.content.lineHeight = 53;
	this.content.lineWidth = 585;
	this.content.setTransform(70.4,-0.9);

	this.text = new cjs.Text("", "12px 'TimesNewRomanPSMT'", "#0066CC");
	this.text.lineHeight = 15;
	this.text.setTransform(25.9,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.content}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.9,-0.9,633.4,139.8);


(lib.slectList = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.page2logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.subjectlogo5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,358,358);


(lib.btnSet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnBoy.addEventListener("click",function(){
			this.parent.gotoAndPlay(125);
			}.bind(this))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.btnGirl = new lib.btn2();
	this.btnGirl.setTransform(554.5,131.5,1,1,0,0,0,101.5,131.5);

	this.btnBoy = new lib.btn1();
	this.btnBoy.setTransform(101.5,131.5,1,1,0,0,0,101.5,131.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnBoy},{t:this.btnGirl}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,656,263);


(lib.selectview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// 图层 1
	this.instance = new lib.page2logo();
	this.instance.setTransform(368.4,-230.1,1,1,0,0,0,179,179);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:232.1},14).wait(16));

	// title
	this.title = new lib.title();
	this.title.setTransform(367.3,499.7,1,1,0,0,0,342.6,69);
	this.title.alpha = 0;
	this.title._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title).wait(14).to({_off:false},0).to({alpha:1},15).wait(1));

	// 图层 2
	this.selectList = new lib.slectList();
	this.selectList.setTransform(64,476.7);
	this.selectList.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.selectList).to({y:600.7,alpha:1},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(189.4,-409.1,358,358);


(lib.homeview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_121 = function() {
		this.gotoAndPlay(101);
	}
	this.frame_139 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		if(model)model.dispatchEvent("gotoView2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(121).call(this.frame_121).wait(18).call(this.frame_139).wait(23));

	// btn1
	this.btnSet = new lib.btnSet();
	this.btnSet.setTransform(387.5,1464.9,1,1.544,0,0,0,328,131.5);

	this.timeline.addTween(cjs.Tween.get(this.btnSet).wait(60).to({y:1095.3},22).to({scaleY:0.77,y:994},6).to({regY:131.4,scaleY:1.11,y:1037.9},7).to({scaleY:1.02,y:1026.2},5).to({regY:131.5,scaleY:1,y:1023.9},2).to({regY:131.4,scaleY:1.06,y:1015.9},10).to({regY:131.5,scaleY:1,y:1023.9},8).wait(5).to({y:1400.9},13).wait(24));

	// heart
	this.instance = new lib.homehearet();
	this.instance.setTransform(375,690.4,0.147,0.147,0,0,0,375.2,440.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({regX:375,scaleX:1.14,scaleY:1.14,y:690.3,alpha:1},27).to({regY:441,scaleX:0.91,scaleY:0.91,y:690.4},10).to({regY:440.9,scaleX:1.09,scaleY:1.09,y:690.3},9).to({regY:441,scaleX:1,scaleY:1,y:690.4},6).wait(51).to({regX:375.1,scaleX:0.2,scaleY:0.2,alpha:0},13).to({_off:true},8).wait(16));

	// text2
	this.instance_1 = new lib.hometext2();
	this.instance_1.setTransform(370.1,-41.7,1,1,0,0,0,272.5,33.5);
	this.instance_1.alpha = 0.02;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({y:183.3,alpha:1},27).wait(76).to({x:371,y:-80.6},13).to({_off:true},9).wait(15));

	// text1
	this.instance_2 = new lib.hometext1();
	this.instance_2.setTransform(361.6,-120.7,1,1,0,0,0,264,54);
	this.instance_2.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:77.5,alpha:1},22).wait(103).to({x:362.5,y:-168.1},13).to({_off:true},18).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.5,-174.7,656,1842.6);


// stage content:



(lib.demo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;