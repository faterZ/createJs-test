var canvas,animateList,stage,viewList=[],View={};
var model = new createjs.EventDispatcher();
function init() {
    // --- write your JS code here ---

    canvas = document.getElementById("canvas");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadFile({src:"images/demo2_atlas_.json", type:"spritesheet", id:"demo2_atlas_"}, true);
    loader.loadManifest(lib.properties.manifest);
    resizeCanvas();
}
function resizeCanvas(){
    model = new createjs.EventDispatcher();//用来捕获事件的原型
    stageWidth =  document.documentElement.clientWidth;
    stageHeight = document.documentElement.clientHeight;
    stageScale = stageWidth/(750/2);

    canvas = document.getElementById("canvas");
    if(stageWidth/stageHeight > 0.665)
    {
        stageScale = stageHeight/(1206/2);
        canvas.style.left = (stageWidth - 750/2*stageScale)/2 + 'px';
    }
    else
    {
        stageScale = stageWidth/(750/2);
    }

    canvas.style.width = 750/2*stageScale + 'px';
    canvas.style.height = 1206/2*stageScale + 'px';
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
    var queue = evt.target;
    ss["demo2_atlas_"] = queue.getResult("demo2_atlas_");
    stage = new createjs.Stage(canvas);
    createjs.Touch.enable(stage);
    var view1 = new View.ContentView1()
    view1.x=0;
    view1.y=0
    
    viewList[0] = view1
    stage.addChild(viewList[0])
    bindEvent();//绑定事件

    // var view2 = new lib.homeview()
    // viewList[1] = view2
    createjs.Ticker.setFPS(40);
    createjs.Ticker.addEventListener("tick", stage);
}
function bindEvent() {
    model.addEventListener("bindjump",function(){
         // model.initialize(lib.btnSet.prototype);
        // viewList[0].instance.on("touchend",function(){
        //     alert(1);
    
        // })

    })
    model.addEventListener("gotoView2",function(){
        stage.removeChild(viewList[0])
        stage.addChild(viewList[1])

    })

}
function bindTap(obj,cb){
    obj.on("mousedown",function(){
        var listener = obj.on("pressup",function(){
            cb()
        })
        setTimeout(function () {
            obj.off("pressup",listener);
        },300)
    })

}
(function() {
    function ContentView1() {
        this.Container_constructor();
        this.back = new lib.homeview();
        this.addChild(this.back);
        bindTap(this.back.instance,function()
        {
            this.back.gotoAndPlay(125);

        }.bind(this));
        var text1 =  new createjs.Text('text', '20px Arial', '#ff7700');
        text1.textAlign='center';
        text1.x = this.back.instance.width/2
        this.back.instance.addChild(text1)

    }
    var p = createjs.extend(ContentView1, createjs.Container);
    View.ContentView1 = createjs.promote(ContentView1, "Container");
})();