$(function() {
	
	$(".header-all").load("header.html");
	$(".footer-all").load("footer.html");
	//为您推荐轮播图
	(function() {
		var swiper = new Swiper(".swiper-container", {
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			},
		});
	})();
	//新品
	$(".new").click(function() {
		var money = [];
		$(".product .item .price>span").each(function(price) {
			money[price] =Math.random(parseFloat($(this).text())) ;
		});
		var arr = [];
		$(".item").each(function(index) {
			arr[index] = $(this);
		});
		for (var i = 0; i < money.length - 1; i++) {
			for (var j = 0; j < money.length - 1; j++) {
					var tmp = money[j + 1];
					money[j + 1] =money[j];
					money[j] = tmp;
					tmp = arr[j + 1];
					arr[j + 1] = arr[j];
					arr[j] = tmp;
				}
			}
		for (var i = 0; i < arr.length; i++) {
			$(".product .phone").append(arr[i]);
		}
	});
	//降序
	$(".btn2").click(function() {
	//缓存价格
		var money = [];
		$(".product .item .price>span").each(function(price) {
			money[price] = parseFloat($(this).text());
		});
	//手机
		var arr = [];
		$(".item").each(function(index) {
			arr[index] = $(this);
		});
		for (var i = 0; i < money.length - 1; i++) {
			for (var j = 0; j < money.length - 1 - i; j++) {
				if (money[j + 1] > money[j]) {
					var tmp = money[j + 1];
					money[j + 1] =money[j];
					money[j] = tmp;
	
					tmp = arr[j + 1];
					arr[j + 1] = arr[j];
					arr[j] = tmp;
	
				}
			}
		}
		for (var i = 0; i < arr.length; i++) {
			$(".product .phone").append(arr[i]);
		}
	});
	//升序
	$(".btn1").click(function() {
	//缓存价格
		var money = [];
		$(".product .item .price>span").each(function(price) {
			money[price] = parseFloat($(this).text());
		});
	//手机
		var arr = [];
		$(".item").each(function(index) {
			arr[index] = $(this);
		});
		for (var i = 0; i < money.length - 1; i++) {
			for (var j = 0; j < money.length - 1 - i; j++) {
				if (money[j + 1] < money[j]) {
					var tmp = money[j + 1];
					money[j + 1] =money[j];
					money[j] = tmp;
	
					tmp = arr[j + 1];
					arr[j + 1] = arr[j];
					arr[j] = tmp;
	
				}
			}
		}
		for (var i = 0; i < arr.length; i++) {
			$(".product .phone").append(arr[i]);
		}
	});
	//为您推荐
	$(".swiper-wrapper .list .photo").hover(function() {
		$(this).children("img").stop().animate({
			width: "240px",
			height: "240px",
			marginLeft: "30px",
			marginTop: "10px"
		})
	}, function() {
		$(this).children("img").stop().animate({
			width: "230px",
			height: "230px",
			marginLeft: "40px",
			marginTop: "20px"
		})
	});
	//鼠标点击按钮切换图片
	
	
	$(".phone .item .anniu>img").click(function(){
		var $parent=$(this).parent(".anniu").prev(".photo");
		var idx=$(this).index();
		console.log(idx);
		if(idx == 0){
			$parent.find("img").siblings().css("display", "none");
			$parent.find("img").eq(0).css("display", "block");
		}else if(idx==1){
			$parent.find("img").siblings().css("display", "none");
			$parent.find("img").eq(1).css("display", "block");
			
		}else if (idx ==2){
			$parent.find("img").siblings().css("display", "none");
			$parent.find("img").eq(2).css("display", "block");
			
		}else if(idx ==3){
			$parent.find("img").siblings().css("display", "none");
			$parent.find("img").eq(3).css("display", "block");
		}
	})
	
	$(".product .phone .item .photo").click(function(){
		location.href="details.html";
	});
	$(".recommend .list").click(function(){
		location.href="details.html";
	});
	$(".compare .pic").click(function(){
		location.href="details.html";
	});
});
