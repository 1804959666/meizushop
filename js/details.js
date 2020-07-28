$(function() {
	$(".pic-min ul li:nth-child(1)").click(function() {
		$(".pic-max").find("img").css("display", "none");
		$(".pic-max .max01 img").css("display", "block");
	});
	$(".pic-min ul li:nth-child(2)").click(function() {
		$(".pic-max").find("img").css("display", "none");
		$(".pic-max .max02 img").css("display", "block");
	});
	$(".pic-min ul li:nth-child(3)").click(function() {
		$(".pic-max").find("img").css("display", "none");
		$(".pic-max .max03 img").css("display", "block");
	});
	//数量选择
	//数量增加
	$(".number-select .num-plus").click(function() {
		var number = $(".number-select input").val();
		var tol = 0;
		if (number < 5) {
			number++;
			$(".number-select input").val(number);
			$(".number-select .num-minus").removeClass("disabled");
			tol = number * 129;
			$(".float-nav .price p").text("￥" + tol + ".00");
		}
		if (number == 5) {
			$(this).addClass("disabled");
		}
	});
	//数量减少
	$(".number-select .num-minus").click(function() {
		var number = $(".number-select input").val();
		var tol = 0;
		if (number > 1) {
			number--;
			$(".number-select input").val(number);
			$(".number-select .num-plus").removeClass("disabled");
			tol = number * 129;
			$(".float-nav .price p").text("￥" + tol + ".00");
		}
		if (number == 1) {
			$(this).addClass("disabled");
		}
	});
	//型号选择
	$(".commodity-type .type-select a:nth-child(1)").click(function() {
		$(this).siblings().css("border", "1px solid #BFBFBF");
		$(this).css("border", "1px solid #000");
	});
	$(".commodity-type .type-select a:nth-child(2)").click(function() {
		$(this).siblings().css("border", "1px solid #BFBFBF");
		$(this).css("border", "1px solid #000");
	});
	$(".commodity-type .type-select a:nth-child(3)").click(function() {
		$(this).siblings().css("border", "1px solid #BFBFBF");
		$(this).css("border", "1px solid #000");
	});
	$(".commodity-type .type-select a:nth-child(4)").click(function() {
		$(this).siblings().css("border", "1px solid #BFBFBF");
		$(this).css("border", "1px solid #000");
	});
	$(".commodity-type .type-select a:nth-child(5)").click(function() {
		$(this).siblings().css("border", "1px solid #BFBFBF");
		$(this).css("border", "1px solid #000");
	});
	//颜色选择
	$(".commodity-color .color-select a:nth-child(1)").click(function() {
		$(this).siblings().css("border", "1px solid #BFBFBF");
		$(this).css("border", "1px solid #000");
		$(".white").css("display", "none");
		$(".gray").css("display", "none");
		$(".blue").css("display", "block");
		$(".float-nav .price span").text("深蓝");
		$(this).addClass("selected")
		$(this).nextAll().removeClass("selected")
		$(this).prevAll().removeClass("selected")
	});
	$(".commodity-color .color-select a:nth-child(2)").click(function() {
		$(this).siblings().css("border", "1px solid #BFBFBF");
		$(this).css("border", "1px solid #000");
		$(".gray").css("display", "none");
		$(".blue").css("display", "none");
		$(".white").css("display", "block");
		$(".float-nav .price span").text("月白");
		$(this).addClass("selected")
		$(this).nextAll().removeClass("selected")
		$(this).prevAll().removeClass("selected")
	});
	$(".commodity-color .color-select a:nth-child(3)").click(function() {
		$(this).siblings().css("border", "1px solid #BFBFBF");
		$(this).css("border", "1px solid #000");
		$(".blue").css("display", "none");
		$(".white").css("display", "none");
		$(".gray").css("display", "block");
		$(".float-nav .price span").text("云灰");
		$(this).addClass("selected")
		$(this).nextAll().removeClass("selected")
		$(this).prevAll().removeClass("selected")
	});
	//详情选项卡
	$(".details-hd ul li:first-child").click(function() {
		$(this).css("border-bottom", "2px solid #000");
		$(".details-hd ul li:last-child").css("border-bottom", "none");
		$(".more-tbl").css("display", "none");
		$(".more-img").css("display", "block");
	});
	$(".details-hd ul li:last-child").click(function() {
		$(this).css("border-bottom", "2px solid #000");
		$(".details-hd ul li:first-child").css("border-bottom", "none");
		$(".more-img").css("display", "none");
		$(".more-tbl").css("display", "block");
	});
	//页面回到顶部
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		if (top > 300) {
			$("#scrolltop").stop().fadeIn("fast");
			$(".float-nav").stop().slideDown("fast");
		} else {
			$("#scrolltop").stop().fadeOut("fast");
			$(".float-nav").stop().slideUp("fast");
		}
	});
	$("#scrolltop").click(function() {
		$("html,body").animate({
			scrollTop: "0"
		}, 500);
	});

	$(".commodity-buy button:nth-child(2)").click(function() {
		layer.msg("添加成功");
	});
	$(".commodity-buy button").click(function() {
		$(function() {
			var cart = sessionStorage.getItem("cart");
			if (cart == undefined) {
				cart = {
					items: [],
					amount: 1,
				};
			} else {
				cart = JSON.parse(cart);
			}
			var product = {
				id: "001",
				yanse: $(".selected").text(),
				shuliang: $("#shuliang").val(),
			}
				cart.items.push(product);
			sessionStorage.setItem("cart", JSON.stringify(cart));
		});
	})


});
