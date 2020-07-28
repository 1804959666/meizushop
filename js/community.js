$(function() {
	//轮播
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
	//导航下载选项
	$(".header-nav ul li:last-child").hover(function() {
		$(".header-dl").css("display", "block");
	}, function(e) {
		$(".header-dl").on("mouseenter", function() {
			$(".header-dl").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-dl").css("display", "none");
		});
		$(".header-dl").css("display","none");
	});
	//用户列表选项
	$(".user-menu").hover(function() {
		$(".menu-select").css("display", "block");
	}, function(e) {
		$(".menu-select").css("display","none");
	});
	//板块
	$(".bankuai").hover(function() {
		$(".bankuai-list").css("display", "block");
	}, function(e) {
		$(".bankuai-list").css("display","none");
	});
	//显示当前日期
	var date = new Date();
	// date.toLocaleDateString();2020/5/22
	var today = date.getFullYear() + "." + 0 + (date.getMonth() + 1) + "." + date.getDate();
	$(".rgt .box-data .data-text").text(today);
	//下载系统选项
	$(".title-tiyan").hover(function() {
		$(this).css({
			"border-top": "1px solid #e6e6e6",
			"border-left": "1px solid #e6e6e6",
			"border-right": "1px solid #e6e6e6",
			"border-bottom": "none",
			"color": "#32a5e7",
		});
		$(".title-zhengshi").css({
			"border-top": "none",
			"border-left": "none",
			"border-right": "none",
			"border-bottom": "1px solid #e6e6e6",
			"color": "#000",
		});
		$(".hidden").css("display", "none");
		$(".default").css("display", "block");
	});
	$(".title-zhengshi").hover(function() {
		$(this).css({
			"border-top": "1px solid #e6e6e6",
			"border-left": "1px solid #e6e6e6",
			"border-right": "1px solid #e6e6e6",
			"border-bottom": "none",
			"color": "#32a5e7",
		});
		$(".title-tiyan").css({
			"border-top": "none",
			"border-left": "none",
			"border-right": "none",
			"border-bottom": "1px solid #e6e6e6",
			"color": "#000",
		});
		$(".default").css("display", "none");
		$(".hidden").css("display", "block");
	});
	//页面回到顶部
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		if (top > 300) {
			$("#scrolltop").stop().fadeIn("fast");
		} else {
			$("#scrolltop").stop().fadeOut("fast");
		}
	});
	$("#scrolltop").click(function(){
		$("html,body").animate({
			scrollTop: "0"
		}, 0);
	});
	$(".footer-message .selectli").hover(function(){
		$(".language-select").css("display","block");
		console.log("asd");
	},function(){
		$(".language-select").css("display","none");
		console.log("as");
	});
})
