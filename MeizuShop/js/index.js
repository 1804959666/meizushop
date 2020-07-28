$(function(){
	
	$(".header-all").load("header.html")
	var swiper = new Swiper(".swiper-container", {
		loop: true,
		autoplay: true,
		// effect: 'fade',
		autoplay: {
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
	});
	
	$(".section li").hover(function(){
		$(this).find("img").stop().animate({
			marginTop:"-10px",
		})
	},function(){
		$(this).find("img").stop().animate({
			marginTop:"10px",
		})
	})
	
	$(".phone_banner").hover(function(){
		$(this).find("img").stop().animate({
			// marginTop:"-10px",
			width:"2700px",
		})
	},function(){
		$(this).find("img").stop().animate({
			// marginTop:"10px",
			width:"2560px",
		})
	})
	
	$(".xinpin li .big_phone").hover(function(){
		$(this).find("img").stop().animate({
			// marginTop:"-10px",
			width:"500px",
			marginLeft:"-20px",
			marginTop:"-20px",
		})
	},function(){
		$(this).find("img").stop().animate({
			// marginTop:"10px",
			width:"460px",
			marginLeft:"0px",
			marginTop:"0px",
		})
	})
	
	$(".xinpin li .small_phone").hover(function(){
		$(this).find("img").stop().animate({
			// marginTop:"-10px",
			width:"260px",
			marginLeft:"-15px",
			marginTop:"-15px",
		})
	},function(){
		$(this).find("img").stop().animate({
			// marginTop:"10px",
			width:"230px",
			marginLeft:"0px",
			marginTop:"0px",
		})
	})
	
	$(".content .remai li:nth-child(1)").hover(function(){
		$(this).find("img").stop().animate({
			// marginTop:"-10px",
			width:"340px",
			marginLeft:"-20px",
			marginTop:"-20px",
		})
	},function(){
		$(this).find("img").stop().animate({
			// marginTop:"10px",
			width:"303px",
			marginLeft:"0px",
			marginTop:"0px",
		})
	})
	$(".content .remai li:nth-child(5)").hover(function(){
		$(this).find("img").stop().animate({
			// marginTop:"-10px",
			width:"340px",
			marginLeft:"-20px",
			marginTop:"-20px",
		})
	},function(){
		$(this).find("img").stop().animate({
			// marginTop:"10px",
			width:"303px",
			marginLeft:"0px",
			marginTop:"0px",
		})
	})
	$(".content .remai li:nth-child(9)").hover(function(){
		$(this).find("img").stop().animate({
			// marginTop:"-10px",
			width:"340px",
			marginLeft:"-20px",
			marginTop:"-20px",
		})
	},function(){
		$(this).find("img").stop().animate({
			// marginTop:"10px",
			width:"303px",
			marginLeft:"0px",
			marginTop:"0px",
		})
	})
	
	$(".retie li a").hover(function(){
		$(this).children("img").stop().animate({
			// marginTop:"-10px",
			width:"340px",
			marginLeft:"-20px",
			marginTop:"-20px",
		})
	},function(){
		$(this).children("img").stop().animate({
			// marginTop:"10px",
			width:"303px",
			marginLeft:"0px",
			marginTop:"0px",
		})
	})
	
	$(".flyme li:first-child a").hover(function(){
		$(this).children("img").stop().animate({
			// marginTop:"-10px",
			width:"655px",
			marginLeft:"-20px",
			marginTop:"-20px",
		})
	},function(){
		$(this).children("img").stop().animate({
			// marginTop:"10px",
			width:"625px",
			marginLeft:"0px",
			marginTop:"0px",
		})
	})
	
	$(".shipin li:first-child a").hover(function(){
		$(this).children("img").stop().animate({
			// marginTop:"-10px",
			width:"340px",
			marginLeft:"-20px",
			marginTop:"-20px",
		})
	},function(){
		$(this).children("img").stop().animate({
			// marginTop:"10px",
			width:"303px",
			marginLeft:"0px",
			marginTop:"0px",
		})
	})
	
	
	
	$(".footer-all").load("footer.html")
})