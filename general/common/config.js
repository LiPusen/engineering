// 配置全局变量，应控制在最小，一般配置不同环境的分发域名，或者在上线后还需要做改动的数据等
(function(win){
	var conf = {
		api: 'www.baidu.com'
	}
	win.cos = conf
})(this)
