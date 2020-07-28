$(function() {
	// $(".header-all").load("header.html");
	//导航下载选项
	$(".header-nav .header-link li:last-child").hover(function() {
		$(".header-dl").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-dl").on("mouseenter", function() {
			$(".header-dl").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-dl").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-dl").css("display","none");
		$(".header").removeClass("toggle");
	});
	//导航手机项
	$(".header-nav .header-link li:first-child").hover(function() {
		$(".header-phone").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-phone").on("mouseenter", function() {
			$(".header-phone").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-phone").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-phone").css("display","none");
		$(".header").removeClass("toggle");
	});
	//导航声学项
	$(".header-nav .header-link li:nth-child(2)").hover(function() {
		$(".header-voice").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-voice").on("mouseenter", function() {
			$(".header-voice").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-voice").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-voice").css("display","none");
		$(".header").removeClass("toggle");
	});
	//导航配件项
	$(".header-nav .header-link li:nth-child(3)").hover(function() {
		$(".header-parts").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-parts").on("mouseenter", function() {
			$(".header-parts").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-parts").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-parts").css("display","none");
		$(".header").removeClass("toggle");
	});
	//导航生活项
	$(".header-nav .header-link li:nth-child(4)").hover(function() {
		$(".header-life").css("display", "block");
		$(".header").addClass("toggle");
	}, function(e) {
		$(".header-life").on("mouseenter", function() {
			$(".header-life").css("display", "block");
		}).on("mouseleave", function() {
			$(".header-life").css("display", "none");
			$(".header").removeClass("toggle");
		});
		$(".header-life").css("display","none");
		$(".header").removeClass("toggle");
	});
	//隐藏选项
	$(".hide .hidden ul li").hover(function() {
		$(this).siblings().children(".touming").stop(true,true).fadeIn(0);
		$(this).siblings().find("span").stop(true,true).css("color","#999999");
	}, function() {
		$(this).siblings().children(".touming").stop(true,true).fadeOut(0);
		$(this).siblings().find("span").stop(true,true).css("color","#333");
	});
	//用户列表选项
	$(".header-user").hover(function() {
		$(".menu-select").css("display", "block");
	}, function(e) {
		$(".menu-select").css("display","none");
	});
})
