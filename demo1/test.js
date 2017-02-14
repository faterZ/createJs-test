var canvas,animateList,stage;
function init() {
    // --- write your JS code here ---

    canvas = document.getElementById("canvas");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadFile({src:"images/demo1_atlas_.json?1487073669884", type:"spritesheet", id:"demo1_atlas_"}, true);
    loader.loadManifest(lib.properties.manifest);
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
    stage = new createjs.Stage(canvas);
    ss["demo1_atlas_"] = queue.getResult("demo1_atlas_");
    var animate1 = new lib.view1();
    var animate2 = new lib.view2();
    // animation.setTransform(205,209);
    animate1.x="360";
    animate1.y="600";
    animate2.x="300";
    animate2.y="570";
    animateList= [animate1,animate2];
    stage.addChild(animate2);
    stage.update();
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
    resizeCanvas();
    bindEvent();
}
function bindEvent() {
    canvas.addEventListener("touchstart",function(){
        stage.removeChild(animateList[1]);
        stage.addChild(animateList[0]);
    })
    canvas.addEventListener("touchend",function(){
        stage.removeChild(animateList[0]);
        stage.addChild(animateList[1]);
    })
    // canvas.addEventListener("touchstart",function(){
    //         animateList[0].stop();
    //     })
    // canvas.addEventListener("touchend",function(){
    //     animateList[0].play();
    // })
}