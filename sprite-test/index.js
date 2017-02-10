/**
 * Created by xia on 2017/2/10.
 */
var canvas,stage,container,images = {},sprite
function init(){
    canvas =  document.getElementById("mainView");//选中canvas
    stage = new createjs.Stage(canvas)//建立舞台
    container = new createjs.Container();//创建容器
    stage.addChild(container);//容器放到舞台中
    createjs.Touch.enable(stage)//使移动端支持createjs的鼠标事件

    var loader = new createjs.LoadQueue(false);//这里一共可以是3个参数 第一个是是否用XHR模式加载 第二个是基础路径  第三个是跨域
    loader.addEventListener
}