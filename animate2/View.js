/**
 * Created by pengxiang on 2016/7/26.
 */
var canvas,img,stage,model,stageWidth,stageHeight,stageScale,view,cls={};

model = new createjs.EventDispatcher();
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
function init() {
    stage = new createjs.Stage(canvas);
    var loader = new createjs.LoadQueue(true);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress",loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler);
    loader.loadManifest(lib.properties.manifest);

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stageBreakHandler);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function loadProgressHandler(event)
{

}
function loadCompleteHandler(event)
{
    event.currentTarget.removeEventListener("fileload",handleFileLoad);
    event.currentTarget.removeEventListener("progress",loadProgressHandler);
    event.currentTarget.removeEventListener("complete",loadCompleteHandler);

    model.addEventListener("complete",function (){
        alert("complete");
    })

    view = new cls.View();
    stage.addChild(view);
}
function stageBreakHandler(event)
{
    if(stageWidth!=document.documentElement.clientWidth||stageHeight!= document.documentElement.clientHeight)
    {
        stageWidth =  document.documentElement.clientWidth;
        stageHeight = document.documentElement.clientHeight;
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
    stage.update();
}
//view
(function() {
    "use strict";
    function View(){
        this.Container_constructor();

        this.back = new lib.page();
        this.addChild(this.back);
        this.show = function (){

            //这里可以写额外的方法
        }
        //this.con = new createjs.Container() 这里可以是额外处理的对象

        //在这个js里新new的Text对象，
        this.htext = new createjs.Text("Hello World", "60px Arial", "#ff7700");
        this.htext.x = 200;
        this.htext.y = 700;
        this.htext.textBaseline = "alphabetic";
        this.back.addChild(this.htext);

        //操纵 animate内部变量
        //一、给 变量赋值
        this.back.txt_1.text = "page里的文本txt_1";
        this.back.mc_1.txt.text = "page里元件mc_1里的文本txt";

        //二、new 库中class
        this.mc_2 = new lib.mc1();
        this.mc_2.txt.text = "这个是用代码new的animate库里的元件mc1，生成的新元件mc_2";
        this.mc_2.x = 100;
        this.mc_2.y = 890;
        this.back.addChild(this.mc_2);
    }
    var p = createjs.extend(View,createjs.Container);
    cls.View = createjs.promote(View, "Container");
}());
