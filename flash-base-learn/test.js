/**
 * Created by xiaweize on 2017/2/11.
 */
var canvas = document.getElementById("mainView"),stage;
var model = new createjs.EventDispatcher();//用来捕获事件的原型
function init(){
    stage = new createjs.Stage(canvas);
    images = images||{};
    var loader = new createjs.LoadQueue(true);
    loader.on("fileload", handleFileLoad);
    loader.on("complete", loadCompleteHandler);
    loader.loadManifest(lib.properties.manifest);

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.on("tick", stageBreakHandler);
    bindFlashEvent();
}
/**
 * 资源加载完毕
 */
function loadCompleteHandler(){
   view1= new lib.view1();
   stage.addChild(view1);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function stageBreakHandler(event)
{
    stage.update();
}
function bindFlashEvent(){
    model.addEventListener("complete",function(){
        console.log("complete")
    })
    model.addEventListener("textready",function(){
        console.log("textready")
    })
}