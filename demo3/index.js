var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var model = new createjs.EventDispatcher();

var videoTimeArr = [3.60, 10.6, 3.67,
    14, 15.46, 12.67,
    18, 20.33, 17.67,
    26.4, 29.77, 23,
    33.8, 36.1, 32.67];//视频循环点（每3个为一组，依次代表起点、终点、字幕出现的时间点）
var videoBackwardTimeArr = [36.55, 37.90, 3.70,
    38.1, 39.50, 12.40];//视频倒播点（每3个为一组，依次代表起点、终点、跳转目标点）
function init() {
    canvas = document.getElementById("canvas");
    video = document.getElementById("video");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
    bindEvent();
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}
function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
            "images": [queue.getResult(ssMetadata[i].name)],
            "frames": ssMetadata[i].frames
        })
    }
    exportRoot = new lib.demo3();
    stage = new createjs.Stage(canvas);
    createjs.Touch.enable(stage)
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = video.height = w * pRatio * sRatio;
            canvas.height = video.width = h * pRatio * sRatio;
            canvas.style.width = video.style.height = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = video.style.width = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
        }
    }

    makeResponsive(true, 'height', true, 1);
    fnStartAnimation();
}
function bindTap() {

}
function bindEvent() {
    // getTime(video)
    // video.play();
    // video.addEventListener("touchstart",function(){
    //     Loop(video,0)
    //     // video.play();
    // })
    model.addEventListener("videoPlay1", function () {
        Loop(video, 0)
    })
    model.addEventListener("return_videoPlay1", function () {
        unloop(video, 0)
    })
    model.addEventListener("videoPlay2", function () {
        Loop(video, 1)
    })

    model.addEventListener("videoPlay3", function () {
        Loop(video, 2)
    })
    canvas.addEventListener("touchstart",function(){
        view = stage.children[0].view;
        if(view.currentFrame>20){
            video.play();
        }
    })
}
function playAnimate(index) {
    var view = stage.children[0].view;
    if (index == 0) {
        if (view.currentFrame < 30) {
            view.gotoAndPlay(30);
        }

    } else if (index == 1) {
        if (view.currentFrame < 52) {
            view.gotoAndPlay(52);
        }

    }
}
function Loop(obj, index) {
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    obj.play();
    obj.timer = setInterval(function () {
        var t = obj.currentTime;
        //视频循环时间点
        if (Math.abs(t - videoTimeArr[3 * index + 1]) <= .1) {
            obj.currentTime = videoTimeArr[3 * index];
            // obj.play();
            // clearInterval(obj.timer);
        }
        //动画播放时间点
        if (Math.abs(t - videoTimeArr[3 * index + 2]) <= .1) {
            playAnimate(index);
        }
    }, 20);
}
function unloop(obj, index) {
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    obj.currentTime = videoBackwardTimeArr[3 * index];
    obj.play();
    obj.timer = setInterval(function () {
        var t = obj.currentTime;
        if (Math.abs(t - videoBackwardTimeArr[3 * index + 1]) <= .1) {
            obj.currentTime = videoBackwardTimeArr[3 * index + 2];
            obj.play();
            Loop(obj, 0)
            var view = stage.children[0].view;
            view.gotoAndStop(29)
        }
    }, 20);
}