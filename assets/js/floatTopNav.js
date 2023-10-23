( function() {//desktop floating top bar
	if( (SysPC==true  ) && (SysIe==-1 || SysIe>=9) ){//目前只支持PC IE9+和现代浏览器
		var masthead=checkElement("masthead");
		//var mastHeight = window.getComputedStyle(document.getElementById("masthead")).height; //记录初始顶部导航高度
		var mastHeight = "50";

		var nextHead= ( checkElement("home-headimage")? checkElement("home-headimage"): checkElement("top-inner"));
		var ori_marginTop=nextHead.style.marginTop;//保存初始的margin-top

		function runscroll(){
			if (getViewPortSize().x>=1024 ){
				if( getScrollOffsets().y >= 50 ){
					addClass( masthead , "scroll") ;
					nextHead.style.marginTop = mastHeight ;
					addClass( checkElement("product-panel-content") , "scroll") ;
				} else {
					removeClass( masthead , "scroll") ;
					nextHead.style.marginTop = ori_marginTop ;
					removeClass( checkElement("product-panel-content") , "scroll") ;
				}
			}
		}
		addEvent(window, "scroll", function(){
			runscroll();
		});
		addEvent(window, "resize", function(){
			runscroll();
		});
		runscroll();
	}
} )();