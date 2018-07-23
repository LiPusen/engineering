(function(win) {
	var os = {};
	os.init = function() {
		initEle();
		initEven();
	}
	
	function initEle() {
		document.write('hello world')
	}
	function initEven() {
		document.body.onclick = function(){
			alert(11)
		}
	}
	win.until = os;
})(this)
