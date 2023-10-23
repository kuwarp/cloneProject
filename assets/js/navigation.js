/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var nav = document.getElementById( 'mobileMenu' ), button, menu;
	if ( ! nav )
		return;
	//button = nav.getElementsByTagName( 'h3' )[0];
	button = document.getElementById( 'topFloatBar_r' )
	menu   = nav.getElementsByTagName( 'ul' )[0];

	menuLength   = nav.getElementsByTagName( 'li' ).length;
	menuLineHeight = 42;
	var menuLine;
	var menuHeight;
	for(j=0;j<menuLength;j++){
		if( hasClass(nav.getElementsByTagName( 'li' )[j],"current-menu-item") ||  hasClass(nav.getElementsByTagName( 'li' )[j],"current-menu-ancestor") ){
			addClass(nav.getElementsByTagName( 'li' )[j], "on" ); 
		}
	}


	function getMenuHeight(){
		menuLine=0;
		for(j=0;j<menuLength;j++){
			nav.getElementsByTagName( 'li' )[j].getBoundingClientRect().height>1?menuLine+=1:menuLine+=0;
		}
		//menuHeight = menuLine*menuLineHeight + 14;
		menuHeight = menuLine*menuLineHeight+4;
		//console.log(menuLine);
		return menuHeight;
	}
	
	//menuHeight = menuLength*menuLineHeight;

	if ( ! button )
		return;

	// Hide button if menu is missing or empty.
	if ( ! menu || ! menu.childNodes.length ) {
		button.style.display = 'none';
		return;
	}

	button.onclick = function() {
		if ( -1 == menu.className.indexOf( 'nav-menu' ) )
			menu.className = 'nav-menu';

		if ( -1 != button.className.indexOf( 'toggled-on' ) ) {
			button.className = button.className.replace( ' toggled-on', '' );
			menu.className = menu.className.replace( ' toggled-on', '' );
			nav.style.height=0;
			$("#topFloatBar .wpml-ls-legacy-list-horizontal").removeClass("toggled-on");
		} else {
			button.className += ' toggled-on';
			menu.className += ' toggled-on';
			nav.style.height=getMenuHeight()+"px";
			$("#topFloatBar .wpml-ls-legacy-list-horizontal").addClass("toggled-on");
		}
	};

	var itemHasSub = getElementsByClassName("menu-item-has-children", nav , "li")
	for (i=0; i<itemHasSub.length; i++){
		targetItem = itemHasSub[i].getElementsByTagName("a")[0];
		var objA=document.createElement("a");
		objA.className="menu-item-switch";
		objA.href="###";
		insertAfter( objA ,targetItem);
		if( !hasClass(objA.parentNode,"on") ){
			addClass(objA.parentNode,"off");
		}	

		objA.onclick =function(){
			if( !hasClass(this.parentNode,"on") ){
				addClass(this.parentNode,"on");
				removeClass(this.parentNode,"off");
			}else{
				removeClass(this.parentNode,"on");
				addClass(this.parentNode,"off");
			}
			nav.style.height=getMenuHeight()+"px";
		}

	}

} )();