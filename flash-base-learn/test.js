/**
 * Created by xiaweize on 2017/2/11.
 */
var canvas = document.getElementById("mainView"),stage,viewList;
var model = new createjs.EventDispatcher();//用来捕获事件的原型
function resizeCanvas(){
    model = new createjs.EventDispatcher();//用来捕获事件的原型
    stageWidth =  document.documentElement.clientWidth;
    stageHeight = document.documentElement.clientHeight;
    stageScale = stageWidth/(750/2);
    canvas = document.getElementById("mainView");
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
function init(){
    stage = new createjs.Stage(canvas);
    images = images||{};
    var loader = new createjs.LoadQueue(true);

    loader.on("fileload", handleFileLoad);
    loader.on("complete", loadCompleteHandler);
    loader.loadManifest(lib.properties.manifest);

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.on("tick", stageBreakHandler);

    resizeCanvas();
}
/**
 * 资源加载完毕
 */
function loadCompleteHandler(){
    var view1= new lib.view1();
    var view2 = new lib.view2();
    viewList = [view1,view2];
    stage.addChild(viewList[0]);
    stage.addChild(viewList[1]);
    viewList[0].y=0;
    viewList[1].y=1206;
    viewList[0].gotoAndPlay(0);
    viewList[1].gotoAndStop(0);
    bindFlashEvent();//事件监听需要在资源加载完毕后绑定
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function stageBreakHandler(event)
{
    stage.update();
}
function bindFlashEvent(){
    model.on("completeClick",function(){
        createjs.Tween.get(viewList[0]).to({y:-1206}, 500);
        createjs.Tween.get(viewList[1]).to({y:0}, 500).call(function(){
            viewList[1].gotoAndPlay(0);
            viewList[0].gotoAndStop(0);
        });

    })
    model.on("completeClick2",function(){
        createjs.Tween.get(viewList[0]).to({y:0}, 500).call(function(){
            viewList[0].gotoAndPlay(0);
            viewList[1].gotoAndStop(0);
        });;
        createjs.Tween.get(viewList[1]).to({y:1206}, 500)

    })
    model.on("textready",function(){
        console.log("textready");
    })
}