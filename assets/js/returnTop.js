var tempTimer;
function scrollPosition(_obj) {
    clearInterval(tempTimer);
    var targetX, targetY;
    if (!_obj) {
        targetX = 0;
        targetY = 0;
    } else {
        if (typeof (_obj) == "string") {
            _obj = document.getElementById(_obj);
        } else {
            _obj = _obj
        }
        targetX = _obj.getBoundingClientRect().left + getScrollOffsets().x;
        targetY = _obj.getBoundingClientRect().top + getScrollOffsets().y - 130;
    }
    var maxTargetX=document.body.scrollWidth-getViewPortSize().x;
    if(targetX>=maxTargetX) targetX=maxTargetX;
    if(targetX<0) targetX=0;
    var maxTargetY=document.body.scrollHeight-getViewPortSize().y;
    if(targetY>=maxTargetY) targetY=maxTargetY;
     if(targetY<0) targetY=0;

    //console.log(targetX,targetY)

    //console.log(targetX, targetY);
    tempTimer = setInterval(function () {
        var currentY = getScrollOffsets().y;
        var currentX = getScrollOffsets().x;

        var tempTargetY = currentY - (currentY - targetY) / 8;
        var tempTargetX = currentX - (currentX - targetX) / 8;
        if (Math.abs(tempTargetY - currentY) < 1) {
            tempTargetY - currentY > 0 ? tempTargetY++ : tempTargetY--;
        }
        if (Math.abs(tempTargetX - currentX) < 1) {
            tempTargetX - currentX > 0 ? tempTargetX++ : tempTargetX--;
        }

        //console.log(currentX, tempTargetX, currentY, tempTargetY);
        window.scrollTo(tempTargetX, tempTargetY);


        if ( Math.abs(getScrollOffsets().y - targetY) <= 4 && Math.abs(getScrollOffsets().x - targetX) <= 4  ) {
            clearInterval(tempTimer);
            window.scrollTo(targetX, targetY);
            //console.log("done");
        }
    }, 10);

}

function setButtons(){
    var btn=document.getElementById("returnTop");
    if (getScrollOffsets().y > getViewPortSize().y/2 ) {
        btn.className = "btn-float";
    } else {
        btn.className = "btn-float hide";
    }
}

// addEvent(window, "scroll", setButtons );
// addEvent(window, "load", setButtons );
// addDOMLoadEvent( setButtons() );
// window.onscroll=setButtons;
// window.onload=setButtons;