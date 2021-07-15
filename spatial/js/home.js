$(function(){
	$(".pages").on("mouseenter",function(){
		$(this).children("ul").removeClass("none");
		if ($(window).width()>=992) {
			$(this).children("ul").css({"position":"absolute","top":"100%","left":"0","zIndex":"100","width":"170px"});
		}else{
			$(this).children("ul").css({"position":"absolute","top":"0","right":"-100%","zIndex":"100","width":"170px"});
		}
		$(this).children("ul").addClass("wow fadeInUp animated");
	})
	$(".pages").on("mouseleave",function(){
		$(this).children("ul").addClass("none");
		$(this).children("ul").removeClass("wow fadeInUp animated");
	})
	$("#menu_bar").on("click",function(){
		$(this).addClass("none");
		$(this).next().removeClass("none");
		$(this).parent().next().removeClass("none");
		$(this).parent().next().css({"display":"block","position":"absolute","top":"100%","left":"0","zIndex":"100"});
		$(this).parent().next().addClass("wow fadeInLeft animated");
	})
	$("#menu_bar_x").on("click",function(){
		$(this).addClass("none");
		$(this).prev().removeClass("none");
		$(this).parent().next().addClass("none");
		$(this).parent().next().removeClass("wow fadeInLeft animated");
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>= 110) {
			$("#menu").css({"position":"fixed","top":"0","boxShadow":"0px 0px 10px","zIndex":"100"});
			$("#menu").addClass("wow fadeInDown animated");
   		}else{
   			$("#menu").css({"position":"relative","boxShadow":"none","zIndex":"100"});
   			$("#menu").removeClass("wow fadeInDown animated");
   		}
	})
})