/**
 * Created by xia on 2017/2/10.
 */
function init() {
    canvas = document.getElementById("canvas"), images = images || {};
    var e = new createjs.LoadQueue(!1);
    e.addEventListener("fileload", handleFileLoad), e.addEventListener("complete", handleComplete), e.loadManifest(lib.properties.manifest)
}
function handleFileLoad(e) {
    "image" == e.item.type && (images[e.item.id] = e.result)
}
function handleComplete(e) {
    view1 = new cls.View1, stage = new createjs.Stage(canvas), stage.addChild(view1), model.addEventListener("complete", function () {
    }), fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps), createjs.Ticker.addEventListener("tick", stageBreakHandler)
    }, fnStartAnimation()
}
function stageBreakHandler(e) {
    stageWidth == document.documentElement.clientWidth && stageHeight == document.documentElement.clientHeight || (stageWidth = document.documentElement.clientWidth, stageHeight = document.documentElement.clientHeight, stageWidth / stageHeight > .665 ? stageScale = stageHeight / 603 : stageScale = stageWidth / 375, canvas.style.width = 375 * stageScale + "px", canvas.style.height = 603 * stageScale + "px"), stage.update()
}
var canvas, stage, exportRoot, cls = {};
model = new createjs.EventDispatcher, stageWidth = document.documentElement.clientWidth, stageHeight = document.documentElement.clientHeight, stageScale = stageWidth / 375, canvas = document.getElementById("canvas"), stageWidth / stageHeight > .665 ? stageScale = stageHeight / 603 : stageScale = stageWidth / 375, canvas.style.width = 375 * stageScale + "px", canvas.style.height = 603 * stageScale + "px", function () {
    "use strict";
    function e() {
        this.Container_constructor(), this.back = new lib.view1, this.addChild(this.back), this.show = function () {
        }
    }

    createjs.extend(e, createjs.Container);
    cls.View1 = createjs.promote(e, "Container")
}();