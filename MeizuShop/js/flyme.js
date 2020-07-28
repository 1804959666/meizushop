$(function() {
// 轮播图
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
	//navigation: {
	//prevEl: ".swiper-button-prev",
	//nextEl: ".swiper-button-next"
	// },
});
// 头部移动
$(window).scroll(function() {
	if ($(document).scrollTop() > 150) {
		$(".floor1 .nav").addClass("xinde");
	} else {

	}
	if ($(document).scrollTop() > 680) {
		$(".xinde").stop().slideDown()
	} else {
		$(".floor1 .nav").removeClass("xinde");
	}
});
// 动画效果
$(".floor5 .top .left   ").hover(function() {
	$(this).find("img").stop().animate({
		marginTop: "-2px",
	});
}, function() {
	$(this).find("img").stop().animate({
		marginTop: "2px",
	});
});
$(".floor5 .top .right .inex   ").hover(function() {
	$(this).find("img").stop().animate({
		marginTop: "-2px",
	});
}, function() {
	$(this).find("img").stop().animate({
		marginTop: "2px",
	});
});
$(".floor5 .bottom .zuo .indd  ").hover(function() {
	$(this).find("img").stop().animate({
		marginTop: "-2px",
	});
}, function() {
	$(this).find("img").stop().animate({
		marginTop: "2px",
	});
});
$(".floor5 .bottom .you .idet  ").hover(function() {
	$(this).find("img").stop().animate({
		marginTop: "-2px",
	});
}, function() {
	$(this).find("img").stop().animate({
		marginTop: "2px",
	});
});
//鼠标滑过显示图片
$(function() {
	$(".floor7 .index .pict").hide();
	$(".floor7 .index").eq(0).hover(function() {
		$(".floor7 .index .pict").show();
	}, function() {
		$(".floor7 .index .pict").hide();
	});
});
$(function() {
	$(".floor7 .index .pict1").hide();
	$(".floor7 .index").eq(1).hover(function() {
		$(".floor7 .index .pict1").show();
	}, function() {
		$(".floor7 .index .pict1").hide();
	});
});
$(function() {
	$(".floor7 .index .pict2").hide();
	$(".floor7 .index").eq(2).hover(function() {
		$(".floor7 .index .pict2").show();
	}, function() {
		$(".floor7 .index .pict2").hide();
	});
});
$(function() {
	$(".floor7 .index .pict3").hide();
	$(".floor7 .index").eq(3).hover(function() {
		$(".floor7 .index .pict3").show();
	}, function() {
		$(".floor7 .index .pict3").hide();
	});
});
});
