var i = 0;
var lbttt;
var j = $('.lunbobox').width();
var k = $('.box').width();
var funnn = function(){
    lbttt = window.setInterval(function(){
        i += 1;
        $('.lunbobox').css('left',-i);
        if( i > j - k) {
            i = 0;
            // $('.lunbobox').css('left',i)
        }
    },1)
}
 


// var div = document.querySelector('.qige ');
// div.onmousedown = function (e1) {
// 	var x1 = e1.offsetX;
// 	var y1 = e1.offsetY;
// 	document.onmousemove = function (e) {
// 		var x = e.clientX;
// 		var y = e.clientY;
// 		div.style.left = x - x1 + 'px';
// 		div.style.top = y - y1 + 'px';
// 	}
// }
// // 鼠标抬起不移动
// div.onmouseup = function () {
// 	document.onmousemove = null;
// }


funnn()


$('.top_slideshow').mouseenter(function(){
    clearInterval(lbttt)
})


$('.top_slideshow').mouseleave(function(){
   funnn()
})