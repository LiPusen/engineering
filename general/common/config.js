(function(doc, win) {
    // 页面自适应
    var _root = doc.documentElement,
        resizeEvent = 'orientationchange' in win ? 'orientationchange' : 'resize',
        resizeCallback = function() {
            var clientWidth = _root.clientWidth;
            _root.style.fontSize = parseInt(clientWidth / 7.5) + 'px';
			clientWidth > 778 && (_root.style.fontSize = '50px');
        };

    if (!doc.addEventListener) {return;}
    win.addEventListener(resizeEvent, resizeCallback, false);
    doc.addEventListener('DOMContentLoaded', resizeCallback, false);

    // 请求域名及请求api
    var api = {
        get: "www.baidu.com"
    }
    win.cos = api;
})(document, window);
window.PointerEvent = undefined;
