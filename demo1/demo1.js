(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._14 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._15 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._16 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._18 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._19 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._20 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._21 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._22 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._23 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.cat = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.pop = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgUAAIgBgyIAHADIALAAIADgEIAFAGIgEADIgJAdQAJAMABAGQABAIgDAGQgBAEgGACQgBgGgHgBIAAAfIgGADIABg0gAgPAQQAIABADgBQACgBAAgKQgBgHgIgLIAIgfIgMAAgAATApIAAgCIAPACQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAhRIgVAAIgGABIgEgEIAiAAIAFgEIAIAHIgKAAIAABTQAAAEgCADQgCACgGACQgBgFgNgFgAgzgJIgBgkIAGAEIAMAAIADgEIAGAGIgDACIAAAoIAAANIgGAEIAAgIIgMAAIAAAKIgGADIABgigAguAKIAMAAIAAgwIgMAAgAAHgCIgBgXIAGADIAKAAIADgEIAGAFIgDADIAAASIAAAOIgGAEIAAgHIgKAAIAAAGIgGADIABgWgAAMAHIAKAAIAAgbIgKAAg");
	this.shape.setTransform(68.1,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AgqArIAAgCIALACQAGAAAAgFIAAgZQgVAIgCADIgFgJQAHgBAVgGIAAgWIgNAAQgGAAgFACIgEgFIAcAAIAAgVIgYADIAAgCIAYgFQAMgEAGgEIAHAIIgSADIAAAWIAWAAIgBgkIAMAGIgFADIAAAbIAZAAIAGgGIAKAJIgoAAQACAWADAJQALgOAHgMIAHAIIgEABQgGAIgNAPQALAQAQAFIADgVIACAAQgCAXAGAFIABACIgBAAIgBAAQgEAAgLgEQgMgEgNgSQgMAKgRAIIgBgCQASgLAJgKQgEgLgCgZIgWAAIAAAUIASgGIABABIgTAJIAAAfQAAAJgMAEQAAgHgMgEgAAhgdQgCgGgKgKIABgBIAOAHQAFADAAADQABADgCACIgDACQgCAAgCgDg");
	this.shape_1.setTransform(56.1,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AgzAzQAPgKAIgNQAIgNABgTIgTAAQgGAAgFACIgEgEIAiAAIAAgkIgNAAQgGAAgFACIgEgEIBOAAIAHgHIAKAJIgbAAIAAAkIAQAAIAHgIIALAKIgiAAIAAAjIABARIgIADIABgYIAAgfIgcAAQAAATgJANQgIANgUALgAgNgGIAcAAIAAgkIgcAAg");
	this.shape_2.setTransform(44,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AgPA1QAVgMANgSQgJgRgCgTQgGANgCAAIAAgBQAJgYAEgdIALAHIgEACIgGASIAZAAIAGgGIAIAIIgMAAQgFAfgKARQANASAQADIAAADQgIgBgCAFQgNgJgKgOQgQASgVAIgAAKgRQADARAJARQAHgNAEgdIgUAAIgDAIgAg2A0QALgOADgNQADgNAAgMIABgZIgJAAIgEABIgEgEIAuAAIAFgFIAFAIIghAAIAAASIASAAIAFgEIAFAHIgDACIgCAjIgDAIIgDAEIgIAEQgBgIgKgCIABgDQAKADADAAQACAAACgGIACgQIABgUIgTAAQgBARgEAOQgEANgOAMgAgYgkQgCgFgIgIIABgCQAKAFADADQADADAAACIgBAEQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIAAAAQgCAAgBgFg");
	this.shape_3.setTransform(32,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AALAyQgMAAgIgDQgIgDgHgHIgIgHIgHAGQgGAGgCAFIgGgHIATgMIAAgjIgFAAQgGAAgFACIgEgFIASAAIAFgFIAHAHIgFADIAAAiQAFAEAJAFQAIAFASABQAVAAAXgCIAAACQgJACgBAFIgigBgAgNAPIAAgWIAGAEIAqAAIAEgFIAHAGIgFACIABAjIgGACIAAgFIgrAAIAAAEIgGACIAAgXgAARAdIATAAIAAgOIgTAAgAgHAdIASAAIAAgOIgSAAgAARAMIATAAIAAgNIgTAAgAgHAMIASAAIAAgNIgSAAgAgGgWIgBgPIAGAEIAeAAIAEgFIAGAGIgEADIABARIgHACIAAgEIgeAAIAAADIgGABIABgMgAgBgRIAeAAIAAgOIgeAAgAgjghQgDgHgGgGIABgCIALAIQADADABADQAAADgCACIgCACQgCAAgBgGgAgUgtIA5AAIAFgFIAIAIIg2AAQgGAAgFACg");
	this.shape_4.setTransform(20,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FF").s().p("AgjAqIAAg4QgJAMgJAHIgBgCQAMgNAHgSQAIgTACgHIAKAHIgEABIgNAZIAHACIgEADIAABEIgHADIABgNgAAQAoQgRANgYABIAAgBQAZgFALgMQgGgIgDgKQgHALgJAGIgBgBQAGgHAHgJQAEgIAEgKIAIAFQgDABgDAFIATAAIAEgFIAIAIQgEABgEAHIgLAPQAEADAJADQAJAEANAAIAAACQgGABgCAEQgUgDgLgLgAADAQQAFAKAHAHQAHgIAGgLIgWAAgAgWAOIAOgLIAJgLIAHAIIgEAAQgOAKgLAFgAAqAIQgFgGgQgGIAAgCQAVAGADABQAEACgBAFQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAgDgEgAgLgYIgBgTIAHAEIAHAAQADgIABgHIAJAFQgDAAgCADIgGAHIAhAAIAEgFIAHAGIgEADIAAASIABALIgHADIAAgFIgrAAIAAAEIgHACIABgWgAgFgLIArAAIAAgZIgOAAIgdAAg");
	this.shape_5.setTransform(8,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.2,17.5);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgUAAIgBgyIAHADIALAAIADgEIAFAGIgEADIgJAdQAJAMABAGQABAIgDAGQgBAEgGACQgBgGgHgBIAAAfIgGADIABg0gAgPAQQAIABADgBQACgBAAgKQgBgHgIgLIAIgfIgMAAgAATApIAAgCIAPACQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAhRIgVAAIgGABIgEgEIAiAAIAFgEIAIAHIgKAAIAABTQAAAEgCADQgCACgGACQgBgFgNgFgAgzgJIgBgkIAGAEIAMAAIADgEIAGAGIgDACIAAAoIAAANIgGAEIAAgIIgMAAIAAAKIgGADIABgigAguAKIAMAAIAAgwIgMAAgAAHgCIgBgXIAGADIAKAAIADgEIAGAFIgDADIAAASIAAAOIgGAEIAAgHIgKAAIAAAGIgGADIABgWgAAMAHIAKAAIAAgbIgKAAg");
	this.shape.setTransform(44.1,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AgrArIAAgCIANACQAFAAAAgFIAAgZQgVAIgBADIgHgJQAIgBAVgGIAAgWIgNAAQgGAAgFACIgFgFIAdAAIAAgVIgXADIAAgCIAWgFQAOgEAEgEIAIAIIgSADIAAAWIAWAAIgBgkIAMAGIgFADIAAAbIAZAAIAHgGIAJAJIgoAAQABAWAEAJQALgOAHgMIAIAIIgGABQgFAIgNAPQALAQAPAFIAEgVIACAAQgBAXAEAFIABACIAAAAIgBAAQgEAAgLgEQgMgEgMgSQgNAKgSAIIAAgCQASgLAJgKQgDgLgCgZIgXAAIAAAUIASgGIAAABIgSAJIAAAfQAAAJgMAEQAAgHgNgEgAAhgdQgDgGgIgKIABgBIANAHQAEADABADQAAADgBACIgDACQgCAAgCgDg");
	this.shape_1.setTransform(32.1,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AApAwQgCgIgHgLIABgBQAJAGADAFQAEAFAAACIgCAFIgDACQgCAAgBgFgAguA0QAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAGgGIAGgLIACAAQgDASgDADQgDADgDAAIgDgBgAgKAwQgCgIgFgJIABgBQAKAHABADIACAFQAAADgDACIgDACQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgAANAuQgCgIgFgHIABgCQAJAHACAEIACAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgCADQgCAAgBgGgAgeAFIgBgUIAHAEIAVAAIAAgpIAIAEIgEAEIAAALIAfAAIAGgGIAIAJIgtAAIAAATIAYAAIAFgFIAHAHIgEADIAAAcIgHADIAAgHIgyAAIAAAGIgHACIABgVgAgYAPIAyAAIAAgYIgyAAg");
	this.shape_2.setTransform(20,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AgCAGQgTAggfANIAAgCQAcgRARggIgfAAQgGAAgFACIgEgDIAzAAIAAgcIgbAAQgGgBgFACIgEgEIAqAAIgBgWIALAGIgFADIAAANIAcAAIAHgHIAJAKIgsAAIAAAcIAIAAQALgNAFgOIAKAIIgEABQgKAMgJAGIAXAAIAHgHIAKAIIguAAQAQAfAfAIIAAABQgJAAgCAGQgbgOgMggIgCAAIAAAzIgGAEIABgxgAgXgIQgCgIgIgJIABgBQANAHACACQADAEgBACIgBAFQgBABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQgCAAgCgFg");
	this.shape_3.setTransform(8,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.2,17.5);


(lib.pop_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.pop();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:-3},0).wait(4).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,31);


(lib.cat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,76);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.txt2();
	this.instance.setTransform(7,32,1,1,0,0,0,38.1,8.7);

	this.instance_1 = new lib.pop_1();
	this.instance_1.setTransform(7,34.8,1,1,0,0,0,48.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,19.3,97,31);


(lib.view2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.cat_1();
	this.instance.setTransform(40,38,1.038,1,0,0,0,26.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:38.1,scaleX:1,scaleY:1.05,x:41,y:36.4},4).to({regY:38,scaleX:1.04,scaleY:1,x:40,y:38},4).wait(1));

	// 图层 3
	this.instance_1 = new lib.txt();
	this.instance_1.setTransform(43.4,-22,1,1,0,0,0,26.1,8.7);

	this.instance_2 = new lib.pop_1();
	this.instance_2.setTransform(45,-19,1,1,0,0,0,48.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:-19,x:45}},{t:this.instance_1,p:{y:-22,x:43.4}}]}).to({state:[{t:this.instance_2,p:{y:-24,x:45}},{t:this.instance_1,p:{y:-27,x:43.4}}]},4).to({state:[{t:this.instance_2,p:{y:-29,x:48.5}},{t:this.instance_1,p:{y:-32,x:48.5}}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-34.5,97,110.5);


(lib.view1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.txt3();
	this.instance.setTransform(-31.5,-45,1,1,0,0,0,7,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:62.5,y:-57},0).wait(6).to({x:-38.5,y:-43},0).wait(6).to({x:20.5,y:-57},0).wait(5).to({x:-31.5,y:-45},0).wait(1));

	// 3
	this.instance_1 = new lib._1();
	this.instance_1.setTransform(-80,-66);

	this.instance_2 = new lib._2();
	this.instance_2.setTransform(-80,-66);

	this.instance_3 = new lib._3();
	this.instance_3.setTransform(-80,-66);

	this.instance_4 = new lib._4();
	this.instance_4.setTransform(-80,-66);

	this.instance_5 = new lib._5();
	this.instance_5.setTransform(-80,-66);

	this.instance_6 = new lib._6();
	this.instance_6.setTransform(-80,-66);

	this.instance_7 = new lib._7();
	this.instance_7.setTransform(-80,-66);

	this.instance_8 = new lib._8();
	this.instance_8.setTransform(-80,-66);

	this.instance_9 = new lib._9();
	this.instance_9.setTransform(-80,-66);

	this.instance_10 = new lib._10();
	this.instance_10.setTransform(-80,-66);

	this.instance_11 = new lib._11();
	this.instance_11.setTransform(-80,-66);

	this.instance_12 = new lib._12();
	this.instance_12.setTransform(-80,-66);

	this.instance_13 = new lib._13();
	this.instance_13.setTransform(-80,-66);

	this.instance_14 = new lib._14();
	this.instance_14.setTransform(-80,-66);

	this.instance_15 = new lib._15();
	this.instance_15.setTransform(-80,-66);

	this.instance_16 = new lib._18();
	this.instance_16.setTransform(-80,-66);

	this.instance_17 = new lib._19();
	this.instance_17.setTransform(-80,-66);

	this.instance_18 = new lib._20();
	this.instance_18.setTransform(-80,-66);

	this.instance_19 = new lib._21();
	this.instance_19.setTransform(-80,-66);

	this.instance_20 = new lib._22();
	this.instance_20.setTransform(-80,-66);

	this.instance_21 = new lib._23();
	this.instance_21.setTransform(-80,-66);

	this.instance_22 = new lib._16();
	this.instance_22.setTransform(-80,-66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-66,160,132);


// stage content:



(lib.demo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.view2();
	this.instance.setTransform(284,174.1,1,1,0,0,0,45,20.8);

	this.instance_1 = new lib.view1();
	this.instance_1.setTransform(476,168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(510.5,302,320.5,132);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;