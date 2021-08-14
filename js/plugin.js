//$(document).ready(function(){
//
//    $("html").niceScroll();
//});


scroll = document.getElementById("scroll-top");

window.onscroll = function(){
//	console.log(this.scrollY);
	if(scrollY>=700){
		scroll.style.display = "block"
	}else{
		scroll.style.display = "none"
	}
};
scroll.onclick = function(){
	window.scrollTo(0,0)
};



$(window).on('load',function()
 {  
     $(".overlay .sk-folding-cube").fadeOut(7000,function(){
         $(this).parent().fadeOut(500,function(){

             $("body").css("overflow-y","visible");
             $(this).remove();
            
         });
     });
 });

//js pure over-lay

// overlay = document.querySelector(".overlay");
//body = document.querySelector("body");
////console.log(overlay);
//window.onload = function mo(){
//	overlay.animate()
//	overlay.style.display = "none"
//	body.style.overflowX = "hidden";
//	body.style.overflowY = "auto";
//	
//};

