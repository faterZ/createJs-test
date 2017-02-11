/**
 * Created by xia on 2017/2/11.
 */
var canvas, stage, container, anim_container, dom_overlay_container, fnStartAnimation;
var tweenLength, viewList, loadingView, currentView, moveView, homeView, ContentView2, contentView3, contentView4, contentView5;
var isloadInit = false;
model = new createjs.EventDispatcher;
var canvas = document.getElementById("canvas");
var isStartTouch = true;
var loadSucc, loadErr;
function init() {
    stage = new createjs.Stage(canvas);
    container = new createjs.Container;
    stage.addChild(container);
    createjs.Touch.enable(stage);
    images = images || {};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("error", handleFileError);
    loader.addEventListener("complete", loadLoadingComplete);
    loadSucc = 0;
    loadErr = 0;
    window.postMessage({type:"loadLoadfest", data:{length:lib.properties.loadfest.length}}, location.protocol + "//h5.qzone.qq.com");
    loader.loadManifest(lib.properties.loadfest, null, window.loaderParams && window.loaderParams.basePath);
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}
function handleFileLoad(evt) {
    loadSucc++;
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}
function handleFileError(evt) {
    loadErr++;
    window.postMessage({type:"imgError", data:{id:evt.data.id, src:evt.data.src}}, location.protocol + "//h5.qzone.qq.com");
}
function loadLoadingComplete(evt) {
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("error", handleFileError);
    event.currentTarget.removeEventListener("complete", loadLoadingComplete);
    window.postMessage({type:"loadLoadfestComplete", data:{succ:loadSucc, err:loadErr}}, location.protocol + "//h5.qzone.qq.com");
    loadingView = new View.loadingView;
    stage.addChild(loadingView);
    var loader = new createjs.LoadQueue(true);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("error", handleFileError);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler);
    loadSucc = 0;
    loadErr = 0;
    window.postMessage({type:"loadManifest", data:{length:lib.properties.manifest.length}}, location.protocol + "//h5.qzone.qq.com");
    loader.loadManifest(lib.properties.manifest, null, window.loaderParams && window.loaderParams.basePath);
    isloadInit = true;
}
/**
 * 用load触发的progress事件来显示加载进度
 * @param evt
 */
function loadProgressHandler(evt) {
    loadingView.back.txt.text = Math.floor(evt.progress * 99).toString() + "%";
}
function loadCompleteHandler(evt) {
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("error", handleFileError);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler);
    window.postMessage({type:"loadManifestComplete", data:{succ:loadSucc, err:loadErr}}, location.protocol + "//h5.qzone.qq.com");
    if (loadingView.parent) {
        loadingView.parent.removeChild(loadingView);
    }
    homeView = new View.HomeView;
    container.addChild(homeView);
    homeView.back.gotoAndPlay(1);
    currentView = homeView;
    contentView2 = new View.ContentView2;
    contentView3 = new View.ContentView3;
    contentView4 = new View.ContentView4;
    contentView5 = new View.ContentView5;
    viewList = [homeView, contentView2, contentView3, contentView4, contentView5];
    tweenLength = 5;
    isStartTouch = true;
}
var View = {};
View.index = 0;
View.isTween = false;
View.changeHandler = function changeHandler(arrow, index, force) {
    if ((index < 0 || index > tweenLength) && force != true) {
        return;
    }
    View.isTween = true;
    View.index = index;
    var bi;
    if (arrow == "down") {
        bi = Math.abs((1206 - Math.abs(currentView.y)) / 1206);
        createjs.Tween.get(moveView).to({y:0}, 500 * bi);
        createjs.Tween.get(currentView).to({y:-1206}, 500 * bi).call(View.delayComplete);
    } else {
        bi = Math.abs((1206 - Math.abs(currentView.y)) / 1206);
        createjs.Tween.get(moveView).to({y:0}, 500 * bi);
        createjs.Tween.get(currentView).to({y:1206}, 500 * bi).call(View.delayComplete);
    }
    View.bi = bi;
};
View.delayComplete = function delayComplete() {
    View.isTween = false;
    if (currentView.back.gotoAndStop) {
        currentView.back.gotoAndStop(0);
    }
    if (currentView.parent) {
        currentView.parent.removeChild(currentView);
    }
    currentView = viewList[View.index];
    if (currentView.back.gotoAndPlay) {
        currentView.back.gotoAndPlay(1);
    }
};
View.resumeHandler = function resumeHandler(arrow) {
    if (arrow == "down") {
        View.bi = Math.abs(currentView.y / 1206);
        createjs.Tween.get(currentView).to({y:0}, 500 * View.bi);
        createjs.Tween.get(moveView).to({y:-1206}, 500 * View.bi).call(View.resumeComplete);
    } else {
        View.bi = Math.abs(currentView.y / 1206);
        createjs.Tween.get(currentView).to({y:0}, 500 * View.bi);
        createjs.Tween.get(moveView).to({y:1206}, 500 * View.bi).call(View.resumeComplete);
    }
};
View.resumeComplete = function resumeComplete() {
    if (moveView) {
        if (moveView.parent) {
            moveView.parent.removeChild(moveView);
        }
    }
};
View.codeHandler = function codeHandler() {
    if (codepic) {
        if (View.index == 7) {
            codepic.style.display = "block";
        } else {
            codepic.style.display = "none";
        }
    }
};
(function() {
    function loadingView() {
        this.Container_constructor();
        this.back = new lib.loadingView;
        this.addChild(this.back);
    }
    var p = createjs.extend(loadingView, createjs.Container);
    View.loadingView = createjs.promote(loadingView, "Container");
})();
(function() {
    function HomeView() {
        this.Container_constructor();
        this.back = new lib.view1;
        this.addChild(this.back);
    }
    var p = createjs.extend(HomeView, createjs.Container);
    View.HomeView = createjs.promote(HomeView, "Container");
})();
(function() {
    function ContentView2() {
        this.Container_constructor();
        this.back = new lib.view2;
        this.addChild(this.back);
    }
    var p = createjs.extend(ContentView2, createjs.Container);
    View.ContentView2 = createjs.promote(ContentView2, "Container");
})();
(function() {
    function ContentView3() {
        this.Container_constructor();
        this.back = new lib.view3;
        this.addChild(this.back);
    }
    var p = createjs.extend(ContentView3, createjs.Container);
    View.ContentView3 = createjs.promote(ContentView3, "Container");
})();
(function() {
    function ContentView4() {
        this.Container_constructor();
        this.back = new lib.view4;
        this.addChild(this.back);
    }
    var p = createjs.extend(ContentView4, createjs.Container);
    View.ContentView4 = createjs.promote(ContentView4, "Container");
})();
(function() {
    function ContentView5() {
        this.Container_constructor();
        this.back = new lib.view5;
        this.addChild(this.back);
        this.back.openBtn.addEventListener("click", p.openHander);
        model.addEventListener("complete", p.showCodePic);
    }
    var p = createjs.extend(ContentView5, createjs.Container);
    p.showCodePic = function(event) {
    };
    p.openHander = function(event) {
        window.postMessage({type:"goAlbumList"}, location.protocol + "//h5.qzone.qq.com");
    };
    View.ContentView5 = createjs.promote(ContentView5, "Container");
})();
var mx = 0;
var my = 0;
var cx = 0;
var cy = 0;
canvas.addEventListener("touchstart", function(event) {
    if (!isStartTouch) {
        return;
    }
    if (View.isTween) {
        return;
    }
    event.preventDefault();
    var touch = event.targetTouches[0];
    mx = touch.pageX;
    my = touch.pageY;
    cx = container.x;
    cy = container.y;
}, false);
var addX = 0;
var addY = 0;
canvas.addEventListener("touchmove", function(event) {
    if (!isStartTouch) {
        return;
    }
    if (View.isTween) {
        return;
    }
    if (event.targetTouches.length == 1) {
        event.preventDefault();
        var touch = event.targetTouches[0];
        addX = touch.pageX - mx;
        addY = touch.pageY - my;
        touchMoveHandler(addY);
    }
}, false);
canvas.addEventListener("touchend", function(event) {
    if (!isStartTouch) {
        return;
    }
    if (View.isTween) {
        return;
    }
    var index = View.index;
    if (currentView.y > 0) {
        if (currentView.y > 100) {
            View.changeHandler("up", index - 1);
        } else {
            View.resumeHandler("down");
        }
    } else {
        if (currentView.y < 0) {
            if (currentView.y < -100) {
                View.changeHandler("down", index + 1);
            } else {
                View.resumeHandler("up");
            }
        }
    }
}, false);
function touchMoveHandler(moveNum) {
    if (!isStartTouch) {
        return;
    }
    if (View.isTween) {
        return;
    }
    var index = View.index;
    if (index > tweenLength) {
        return;
    }
    var nn = 0;
    if (moveNum > 0 && index > 0) {
        moveView = viewList[index - 1];
        nn = -1206;
        if (!moveView.parent) {
            moveView.y = -1206;
            container.addChild(moveView);
        }
        if (moveView) {
            moveView.y = cy + moveNum + nn;
            currentView.y = cy + moveNum;
        }
    } else {
        if (moveNum < 0 && index < tweenLength) {
            moveView = viewList[index + 1];
            nn = 1206;
            if (moveView) {
                if (!moveView.parent) {
                    moveView.y = 1206;
                    container.addChild(moveView);
                }
                moveView.y = cy + moveNum + nn;
                currentView.y = cy + moveNum;
            }
        }
    }
}
;