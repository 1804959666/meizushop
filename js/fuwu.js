$(function() {
	//轮播图
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
		//navigation: {
		//prevEl: ".swiper-button-prev",
		//nextEl: ".swiper-button-next"
		// },
	});
	//手机动画
	$(".floor3 .conter .inde").hover(function() {
		$(this).find("img").stop().animate({
			marginTop: "-5px",
		});
	}, function() {
		$(this).find("img").stop().animate({
			marginTop: "5px",
		});
	});
	//图片背景的减弱
	$(".floor3 .bottom .inne").hover(function() {
		$(this).find("img").stop().animate({
			opacity: 0.7
		});
	}, function() {
		$(this).find("img").stop().animate({
			opacity: 1
		});
	});
	//鼠标滑过的时候显示二维码
	$(function() {
		$(".floor6 .bottom .zhong .tupian").hide();
		$(".floor6 .bottom .shang .pic3").hover(function() {
			$(".floor6 .bottom .zhong .tupian").show();
		}, function() {
			$(".floor6 .bottom .zhong .tupian").hide();
		});
	});

	$(".footer-message .selectli").hover(function() {
		$(".language-select").css("display", "block");
		console.log("asd");
	}, function() {
		$(".language-select").css("display", "none");
		console.log("as");
	});
	$(".footer-all").load("footer.html")
});
