$(function() {
	$(".header-all").load("header.html");
	$(".footer-all").load("footer.html");
	//点击商品物流状态
	$(".right .order-btn a:eq(0)").css("border-bottom", "2px solid #00C3F5");
	$(".right .order-btn a").click(function() {
		$(this).css("border-bottom", "2px solid #00C3F5");
		$(this).siblings().css("border-bottom", "1px solid #eee");
		$(".order-detail").css("display", "block");
		$(".order-message").css("display", "none");

	})
	
	//下单时间
	var date=new Date();
	$(".order-message .tr1 .time").text("下单时间：" + date);
	//订单号
	$(".order-message .tr1 .num").text("订单号：" + parseInt(Math.random()*100000000000000));
	
	
	//全部订单
	$(".right .order-btn .all").click(function() {
			$(".order-detail").css("display", "none");
			$(".order-message").css("display", "block");
	
			});
	 	//待付款
		$(".right .order-btn .pay").click(function() {
			
			$(".order-detail").css("display", "none");
			$(".order-message").css("display", "block");
		});
	// 我的收藏
	$(".shoucang").click(function() {
		$(".store-order .right").css("display", "none");
		$(".collect").css("display", "block");

		$(this).css("color", "#00c3f5");
		$(".menu a").css("color", "#666");

	})
	// 我的订单
	$(".left-main #myorder").css("color", "#00c3f5");
	$(".menu a:first-child").click(function() {
		$(".menu a").css("color", "#666");
		$(this).css("color", "#00c3f5");
		$(".store-order .right").css("display", "block");
		$(".collect").css("display", "none");
	})

	
	var zhifu = sessionStorage.getItem("zhifu");
	// sessionStorage.clear()
	if (zhifu != null) {
		// $(".order-message").css("display","table");
		zhifu = JSON.parse(zhifu);
		for (var i = 0; i < zhifu.items.length; i++) {
			var productsItem = zhifu.items[i];
			//console.log(productsItem)
			var $kelong = $(".order-message").clone();
			$kelong.find(".ming").text(productsItem.name)
			$kelong.find(".yanse").text(productsItem.yanse)
			// $kelong.find(".danjia").text(productsItem.jiage)
			// $kelong.find(".shuliang").text(productsItem.shuliang)
			$kelong.find("#zongjia").text(productsItem.zong)
			$kelong.css("display", "table")
			// $kelong.find(".mingzi").text(productsItem.zong)
			$(".right-main table:last").after($kelong);
		}
	}
	var zhifu2 = sessionStorage.getItem("zhifu2");
	// sessionStorage.clear()
	if (zhifu2 != null) {
		zhifu2 = JSON.parse(zhifu2);
		for (var i = 0; i < zhifu2.items.length; i++) {
			var shangpinbItem = zhifu2.items[i];
			//console.log(shangpinbItem)
			var $kelongs = $kelong.clone();
			$kelongs.find(".ming").text(shangpinbItem.name)
			$kelongs.find(".yanse").text(shangpinbItem.yanse)
			// $kelong.find(".danjia").text(productsItem.jiage)
			// $kelong.find(".shuliang").text(productsItem.shuliang)
			$kelongs.find("#zongjia").text(shangpinbItem.zong)
			$kelongs.css("display", "table")
			// $kelong.find(".mingzi").text(productsItem.zong)
			$(".right-main table:last").after($kelongs);
		}
	}

	var zhifu3 = sessionStorage.getItem("zhifu3");
	// sessionStorage.clear()
	if (zhifu3 != null) {
		zhifu3 = JSON.parse(zhifu3);
		for (var i = 0; i < zhifu3.items.length; i++) {
			var shangpincItem = zhifu3.items[i];
			//console.log(shangpincItem)
			var $kelongss = $kelongs.clone();
			$kelongss.find(".ming").text(shangpincItem.name)
			$kelongss.find(".yanse").text(shangpincItem.yanse)
			// $kelong.find(".danjia").text(productsItem.jiage)
			// $kelong.find(".shuliang").text(productsItem.shuliang)
			$kelongss.find("#zongjia").text(shangpincItem.zong)
			$kelongss.css("display", "table")
			// $kelong.find(".mingzi").text(productsItem.zong)
			$(".right-main table:last").after($kelongss);
		}
	}

	var zhifu4 = sessionStorage.getItem("zhifu4");
	// sessionStorage.clear()
	if (zhifu4 != null) {
		zhifu4 = JSON.parse(zhifu4);
		for (var i = 0; i < zhifu4.items.length; i++) {
			var shangpindItem = zhifu4.items[i];
			//console.log(shangpindItem)
			var $kelongsss = $kelongss.clone();
			$kelongsss.find(".ming").text(shangpindItem.name)
			$kelongsss.find(".yanse").text(shangpindItem.yanse)
			// $kelong.find(".danjia").text(productsItem.jiage)
			// $kelong.find(".shuliang").text(productsItem.shuliang)
			$kelongsss.find("#zongjia").text(shangpindItem.zong)
			$kelongsss.css("display", "table")
			// $kelong.find(".mingzi").text(productsItem.zong)
			$(".right-main table:last").after($kelongsss);
		}
	}

	var zhifu5 = sessionStorage.getItem("zhifu5");
	// sessionStorage.clear()
	if (zhifu5 != null) {
		zhifu5 = JSON.parse(zhifu5);
		for (var i = 0; i < zhifu5.items.length; i++) {
			var shangpineItem = zhifu5.items[i];
			//console.log(shangpineItem)
			var $kelongssss = $kelongsss.clone();
			$kelongssss.find(".ming").text(shangpineItem.name)
			$kelongssss.find(".yanse").text(shangpineItem.yanse)
			// $kelong.find(".danjia").text(productsItem.jiage)
			// $kelong.find(".shuliang").text(productsItem.shuliang)
			$kelongssss.find("#zongjia").text(shangpineItem.zong)
			$kelongssss.css("display", "table")
			// $kelong.find(".mingzi").text(productsItem.zong)
			$(".right-main table:last").after($kelongssss);
		}
	}


	var $b = $(".order-message") //寻找到类名称为b的tr
	//按价格排序
	for (var i = 0; i < $b.length; i++) {
		for (var j = 0; j < $b.length - i - 1; j++) {
			var $shizhi = $b.eq(j).find(".yanse").text();
			var $shizhi2 = $b.eq(j + 1).find(".yanse").text();
			if ($shizhi == $shizhi2) {
				// var temp = $b[j + 1];
				// $b[j + 1] = $b[j];
				$b[j].remove();
				// calculate()
			}
		}
	}
	$(".order-message:first-child").remove();

	for (var i = 0; i < $b.length; i++) {
		var $se = $b.eq(i).find(".ming").text()
		if ($se == "") {
			$b[i].remove();
		}
	}


	$(".yanse").each(function(i, e) {
		if ($(e).text() == "月白") {
			$(e).parents(".order-message").find("#tupian").prop("src", "img/myorder/shopping.png");
		}
		if ($(e).text() == "深蓝") {
			$(e).parents(".order-message").find("#tupian").prop("src", "img/myorder/image_04.jpg")
		}
		if ($(e).text() == "云灰") {
			$(e).parents(".order-message").find("#tupian").prop("src", "img/myorder/image_05.jpg")
		}
	});
	//取消订单
	
	$(".tr2 .tr2-4 .cancel").click(function() {
		console.log("aaa");
		
		if ($(".right .order-btn .pay").prop("checked", true)) {
			$(".order-detail").css("display", "block");
			$(".order-message").css("display", "none");
		}
		if ($(".right .order-btn .all").prop("checked", true)) {
			$(".order-detail").css("display", "none");
			$(".order-message").css("display", "block");
			$(".order-message").find(".tr2-3").text("已取消");
			$(".order-message").find(".tr2-4").children("span").css("display", "none");
			$(".order-message").find(".tr2-4").children(".cancel").css("display", "none");
		}
		
	});

});
