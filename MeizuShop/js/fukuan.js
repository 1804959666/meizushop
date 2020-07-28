$(function() {
	var a = true;
	$(".xiangqing").click(function() {
		if (a) {
			$(".base").css("height", "155px");
			a = false;
		} else {
			$(".base").css("height", "75px");

			a = true;
		}
	});

	$(".a").click(function() {
		$(".a").css("display", "none");
		$(".b").css("display", "block");
	});
	$(".b").click(function() {
		$(".b").css("display", "none");
		$(".a").css("display", "block");
	});

	// $(".anniu").click(function(){
	// 	$(".diannao").stop().animate({
	// 		left:"-950px",
	// 	},700)
	// 	$(".shouji").stop().animate({
	// 		right:"0px",
	// 	},700)
	// })
	
	// $(".fanhui").click(function(){
	// 	$(".diannao").stop().animate({
	// 		left:"0px",
	// 	},700);
	// 	$(".shouji").stop().animate({
	// 		right:"-950px",
	// 	},700);
	// });
	
	var zongjia = sessionStorage.getItem("zongjia");
	if (zongjia != null) {
		zongjia = JSON.parse(zongjia);
		for (var i = 0; i < zongjia.items.length; i++) {
			var zongzhiItem = zongjia.items[i];
			$(".jia").text(zongzhiItem.zongjia)
		}
	}
	
	$(".anniu a").click(function(){
		layer.msg("付款成功");
	});
	// var cangku = JSON.parse(sessionStorage.getItem("cangku"));
	// // var sum = 0;
	// for (var i = 0; i < cangku.length; i++) {
	// 	$(".jia").text(+cangku[i].zong)
	
	// 	// sum += parseFloat(cangku[i].jiage) * parseFloat(cangku[i].shuliang);
	// 	// zongzhi()
	// }
	$(".qingchu").click(function(){
		sessionStorage.removeItem("cart")
		sessionStorage.removeItem("zhifu")
		sessionStorage.removeItem("zhifu2")
		sessionStorage.removeItem("zhifu3")
		sessionStorage.removeItem("zhifu4")
		sessionStorage.removeItem("zhifu5")
		sessionStorage.removeItem("zongjia")
	})
	
})
