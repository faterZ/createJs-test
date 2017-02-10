(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/gm.png?1486719120253", id:"gm"}
	]
};



// symbols:



(lib.gm = function() {
	this.initialize(img.gm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,350);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AuMKsIAA1XIcZAAIAAVXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-68.5,182,137);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gm();
	this.instance.setTransform(-600,-319.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600,-319.5,352,350);


(lib.旋转光芒 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gm
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(603,249,1,1,0,0,0,-424,-144.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-602,-321,356,354);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},154).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(427,74,352,350);


(lib.view1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.旋转光芒();
	this.instance.setTransform(-176.5,71,1,1,0,0,0,600,319.5);

	this.instance_1 = new lib.补间1("synched",0);
	this.instance_1.setTransform(-245,-82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-845,-401.5,847.5,577);


// stage content:



(lib.testAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(118,81.5);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.setTransform(135,172.5);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 34, 127.5, 0)];
	this.instance_1.cache(-93,-70,186,141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true,x:135,y:172.5},14).wait(11).to({_off:false,x:147,y:144.5},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},14).to({x:170,y:150.5,loop:false},11).to({_off:true,x:147,y:144.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-38,352,350);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;