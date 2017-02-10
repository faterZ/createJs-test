(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/gm.png?1486719777194", id:"gm"}
	]
};



// symbols:



(lib.gm = function() {
	this.initialize(img.gm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,350);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gm();
	this.instance.setTransform(-600,-319.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600,-319.5,352,350);


(lib.view2 = function(mode,startPosition,loop) {
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
	this.instance = new lib.view2();
	this.instance.setTransform(-176.5,71,1,1,0,0,0,600,319.5);

	this.instance_1 = new lib.补间1("synched",0);
	this.instance_1.setTransform(-245,-82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-845,-401.5,847.5,577);


// stage content:



(lib.testAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.view2();
	this.instance.setTransform(127,209.4,1,1,0,0,0,439,269.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371,211,371.1,353);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;