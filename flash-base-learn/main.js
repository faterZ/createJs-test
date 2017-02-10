/**
 * Created by Administrator on 2016/2/23.
 */
var canvas,img,stage,model,stageWidth,stageHeight,stageScale,view1,cls={};

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
    model.addEventListener("textready",function (){
        alert("textready");
    })
    view1 = new cls.View1();
    stage.addChild(view1);

//    view1= new lib.view1();
//    stage.addChild(view1);

}
function stageBreakHandler(event)
{
    /**
     * 判断浏览器适配手机
     */
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
    /**
     * 更新场景
     */
    stage.update();
}
//view1
/**
 * 在闭包里定义一个类
 */
(function() {
    "use strict";//严格模式
    function View1(){
        this.Container_constructor();//父级构造函数调用

        this.back = new lib.view1();
        this.addChild(this.back);
        this.show = function (){

            //这里可以写额外的方法
        }
        //this.con = new createjs.Container() 这里可以是额外处理的对象
    }
    var p = createjs.extend(View1,createjs.Container);//继承与元件
    cls.View1 = createjs.promote(View1, "Container");继承与元件的构造方法
}());