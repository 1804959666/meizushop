$(function() {
	//引入头部
	$(".footer-all").load("footer.html")
	//判断登录状态
	var username = localStorage.getItem("username");
	var defalutuser = localStorage.getItem("defalutuser");
	var Isdefaultlogin = sessionStorage.getItem("Isdefaultlogin");
	var Islogin = sessionStorage.getItem("Islogin");
	if (Isdefaultlogin == "true") {
		$(".yonghu").text(defalutuser);
		$(".denglu").css("display", "none");
		$(".zhuce").css("display", "none");
		$(".dingdan").css("display", "block");
		$(".xuanze").css("display", "table");
		$(".qudenglu").css("display", "none");
		$(".xuangou").css("display", "table");
	} else if (Islogin == "true") {
		$(".yonghu").text(username);
		$(".denglu").css("display", "none");
		$(".zhuce").css("display", "none");
		$(".dingdan").css("display", "block");
		$(".xuanze").css("display", "table");
		$(".qudenglu").css("display", "none");
		$(".xuangou").css("display", "table");
	} else {
		$(".xuanze").css("display", "none");
	}
	//返回购物车后，清除结算页面数据
	function qingchu(){
		sessionStorage.removeItem("zhifu")
		sessionStorage.removeItem("zhifu2")
		sessionStorage.removeItem("zhifu3")
		sessionStorage.removeItem("zhifu4")
		sessionStorage.removeItem("zhifu5")
	}
	qingchu()
	//
	function fanhui() {
		var a = $(".merchant-body>tbody").children()
		console.log(a.length)
		var $xuanze = $(".xuanze");
		var $xuangou = $(".xuangou");
		var sum = 0;
		for (var i = 0; i < a.length; i++) {
			sum += 1;
		}
		if (sum == 0) {
			$xuanze.css("display", "none");
			$xuangou.css("display", "table");
		}
	}


	// if ($(".product").hasClass("anli") == true) {
	// 	$(".xuanze").css("display", "none");
	// 	// $(".xuangou").css("display", "table");
	// }
	var $c = $(".product .product-desc").text()
	//取值
	var cart = sessionStorage.getItem("cart");
	if (cart != null) {
		cart = JSON.parse(cart);
		for (var i = 0; i < cart.items.length; i++) {
			var productItem = cart.items[i];

			$(".product").removeClass("anli");
			// $(".xuanze").css("display", "table");
			$(".xuangou").css("display", "none");
			$(".product").css("display", "table");
			var num = 0;
			$(".product .product-desc").each(function(i, e) {
				num++
				if (productItem.yanse == $(e).text()) {
					var a = parseInt($(e).parents(".product").find(".liang").text())
					var c = parseInt(productItem.shuliang)
					$(e).parents(".product").find(".liang").text(a + c)

					$(e).parents(".product").find(".shu").text((a + c) * 129)
					num--
					calculate()
				}

			})
			var b = $(".product").length
			if (num == b) {
				var $kelong = $(".product").clone();
				$kelong.find(".product-desc").text(productItem.yanse)
				$kelong.find(".liang").text(productItem.shuliang)
				$kelong.find(".shu").text(productItem.shuliang * 129)
				$(".merchant-body tr:last").after($kelong);
				calculate()
			}

			calculate()
		}
	}
	//如果颜色一样，就删除
	var $b = $(".product") 
	for (var i = 0; i < $b.length; i++) {
		for (var j = 0; j < $b.length - i - 1; j++) {
			var $shizhi = $b.eq(j).find(".product-desc").text();
			var $shizhi2 = $b.eq(j + 1).find(".product-desc").text();
			if ($shizhi == $shizhi2) {
				$b[j].remove();
				calculate()
			}
		}
	}
	//删除第一个
	$(".product:first-child").remove();

	//个人中心动画
	$(".header .rgt li:last-child").hover(function() {
		$("dl").stop().slideDown()
		$(".header .rgt li:last-child>a").addClass("a");
		$("#span").text("∧")
	}, function() {
		$("dl").stop().slideUp()
		$(".header .rgt li:last-child>a").removeClass("a");
		$("#span").text("∨")
	})
	//全选
	$("#quanxuan").click(function() {
		//定义一个变量，用于存储全选框的状态
		var $state = $(this).is(":checked");
		//把全选框的状态赋值给所有的复选框
		$("[name=fuxuan]").prop("checked", $state);
		// 全选后,计算总价
		calculate()
	})
	//删除的全选框
	$("#shanchu").click(function() {
		// console.log(111)
		//定义一个变量，用于存储全选框的状态
		var $state = $(this).is(":checked");
		//把全选框的状态赋值给所有的复选框
		$("[name=fuxuan]").prop("checked", $state);
		// 全选后,计算总价
		calculate()
	})
	//魅族的全选框
	$("#meizu").click(function() {
		// console.log(111)
		//定义一个变量，用于存储全选框的状态
		var $state = $(this).is(":checked");
		//把全选框的状态赋值给所有的复选框
		$("[name=fuxuan]").prop("checked", $state);
		// 全选后,计算总价
		calculate()
	})
	// 当所有复选框都被选中之后,所有全选框自动被选择
	$("[name=fuxuan]").click(function() {
		//获得所有复选框
		var changdu = $("[name=fuxuan]").length;
		var a = 0;
		//遍历所有复选框
		$("[name=fuxuan]").each(function(i, e) {
			//当复选框是被选择状态时，a就加1
			if ($(e).is(":checked") == true) {
				a++;
			}
			// 选择复选框后计算商品总价
			calculate()
		});
		// 判断如果a等于总长度的话,也就证明了所有复选框都被选择,这时候,全选就变成被选择状态
		if (a == changdu) {
			$("#quanxuan").prop("checked", true);
		} else {
			$("#quanxuan").prop("checked", false);
		}

		if (a == changdu) {
			$("#meizu").prop("checked", true);
		} else {
			$("#meizu").prop("checked", false);
		}

		if (a == changdu) {
			$("#shanchu").prop("checked", true);
		} else {
			$("#shanchu").prop("checked", false);
		}
	});

	//当点击魅族全选框时，所有框都被选择
	$("#meizu").click(function() {
		//获得所有复选框
		var changdu = $("[name=fuxuan]").length;
		var a = 0;
		//遍历所有复选框
		$("[name=fuxuan]").each(function(i, e) {
			//当复选框是被选择状态时，a就加1
			if ($(e).is(":checked") == true) {
				a++;
			}
			// 选择复选框后计算商品总价
			calculate()
		});
		// 判断如果a等于总长度的话,也就证明了所有复选框都被选择,这时候,全选就变成被选择状态
		if (a == changdu) {
			$("#quanxuan").prop("checked", true);
		} else {
			$("#quanxuan").prop("checked", false);
		}

		if (a == changdu) {
			$("#meizu").prop("checked", true);
		} else {
			$("#meizu").prop("checked", false);
		}
		if (a == changdu) {
			$("#shanchu").prop("checked", true);
		} else {
			$("#shanchu").prop("checked", false);
		}
	});
	//当点击全选框时，所有框都被选择
	$("#quanxuan").click(function() {
		//获得所有复选框
		var changdu = $("[name=fuxuan]").length;
		var a = 0;
		//遍历所有复选框
		$("[name=fuxuan]").each(function(i, e) {
			//当复选框是被选择状态时，a就加1
			if ($(e).is(":checked") == true) {
				a++;
			}
			// 选择复选框后计算商品总价
			calculate()
		});
		// 判断如果a等于总长度的话,也就证明了所有复选框都被选择,这时候,全选就变成被选择状态
		if (a == changdu) {
			$("#quanxuan").prop("checked", true);
		} else {
			$("#quanxuan").prop("checked", false);
		}

		if (a == changdu) {
			$("#meizu").prop("checked", true);
		} else {
			$("#meizu").prop("checked", false);
		}

		if (a == changdu) {
			$("#shanchu").prop("checked", true);
		} else {
			$("#shanchu").prop("checked", false);
		}
	});
	//当点击删除框时，所有框都被选择
	$("#shanchu").click(function() {
		//获得所有复选框
		var changdu = $("[name=fuxuan]").length;
		var a = 0;
		//遍历所有复选框
		$("[name=fuxuan]").each(function(i, e) {
			//当复选框是被选择状态时，a就加1
			if ($(e).is(":checked") == true) {
				a++;
			}
			// 选择复选框后计算商品总价
			calculate()
		});
		// 判断如果a等于总长度的话,也就证明了所有复选框都被选择,这时候,全选就变成被选择状态
		if (a == changdu) {
			$("#quanxuan").prop("checked", true);
		} else {
			$("#quanxuan").prop("checked", false);
		}

		if (a == changdu) {
			$("#meizu").prop("checked", true);
		} else {
			$("#meizu").prop("checked", false);
		}

		if (a == changdu) {
			$("#shanchu").prop("checked", true);
		} else {
			$("#shanchu").prop("checked", false);
		}
	});

	//计算总价
	function calculate() {
		var sum = 0; //定义一个变量，用于存储总价
		//遍历tr
		$("tr").each(function(i, e) {
			// 定义一个变量，存储这个tr后代.shu的值
			var price = parseFloat($(this).find(".shu").text());
			//如果复选框是被选择状态的话，就累加到sum里面
			if ($(this).find("[name=fuxuan]").prop("checked") == true) {
				sum = sum + price;
			}
			// console.log(sum)
		});
		//将sum的值赋给#sum
		$("#zongzhi").text(sum);
	}
	//调用函数
	calculate()
	//增加购买数量，同时价格与下方总价也会产生变化

	//删除选中
	$("#shan").click(function() {
		$("[name=fuxuan]").each(function(i, e) {
			if ($(e).is(":checked") == true) {
				$(this).parent("td").parent("tr").remove();
			}
			// 选择复选框后计算商品总价
			calculate()
			fanhui();
		});
	})

	//点击编辑时，出现删除按钮，并且删除对应的商品
	var zhuangtai = true;
	$("#bianji").click(function() {
		if (zhuangtai) {
			$(".cha").text("X");
			$(this).text("完成");

			$(".cha").click(function() {
				$(this).parents("tr").remove();
				calculate()
				fanhui();
			})
			zhuangtai = false;
		} else {
			$(".cha").text("--");
			$(this).text("编辑");
			zhuangtai = true;
		}
	})
	//退出按钮，点击之后会变成未登录状态
	$(".tui").click(function() {
		sessionStorage.setItem("Isdefaultlogin", "false");
		sessionStorage.setItem("Islogin", "false");
		$(".denglu").css("display", "block");
		$(".zhuce").css("display", "block");
		$(".denglu").addClass("q")
		$(".zhuce").addClass("q")
		$(".dingdan").css("display", "none");
		$(".xuanze").css("display", "none");
		$(".qudenglu").css("display", "table");
		$(".xuangou").css("display", "none");
	})
	//点击去结算按钮
	$("#tiaozhuan").click(function() {
		//获得所有复选框，
		var changdu = $("[name=fuxuan]").length;
		var a = 0;
		//遍历所有复选框，判断用户是否选择商品
		$("[name=fuxuan]").each(function(i, e) {
			//当复选框是未选择状态时，a就加1
			if ($(e).is(":checked") == false) {
				a++;
			}
			// 选择复选框后计算商品总价
			calculate()
		});
		//判断登录状态
		var sum = 0;
		$("#denglu li").each(function(i, e) {
			//当复选框是被选择状态时，a就加1
			if ($(e).hasClass("q") == true) {
				sum++
			}
			// 选择复选框后计算商品总价
		});
		if (a == changdu) {

			layer.open({
				title: "提示",
				type: 1,
				area: ['600px', '360px'],
				shadeClose: true, //点击遮罩关闭
				content: '\<\div style="padding:20px; text-align: center; font-size:24px; line-height: 277px;" >您还没有选择任何商品哟\<\/div>'
			});
			// alert("您还没有选择任何商品呦")
		} else {
			if (sum == 2) {
				layer.open({
					title: "提示",
					type: 1,
					area: ['600px', '360px'],
					shadeClose: true, //点击遮罩关闭
					content: '\<\div style="padding:20px; text-align: center; font-size:24px; line-height: 277px;" >您还没有哟\<\/div>'
				});
				// alert("您还没有登录呦")
			} else {
				$("#tiaozhuan").prop("href", "zhifu.html");
			}
		}
		var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
		$("[name=fuxuan]").each(function(i, e) {
			if ($(e).is(":checked") == true) {
				$(e).parents(".product").prop("id", arr[i]);
				var zhifu = sessionStorage.getItem("zhifu");
				if (zhifu == undefined) {
					zhifu = {
						items: [],
						amount: 1,
					};
				} else {
					zhifu = JSON.parse(zhifu);
				}

				var shangpina = {
					id: "001",
					name: $("#a .product-item-name").text(),
					jiage: $("#a .product-price").text(),
					shuliang: $("#a .liang").text(),
					shuxing: "false",
					yanse: $("#a .product-desc").text(),
					yan: $("#a .product-desc").text(),
					zong: $("#a .shu").text(),
				}
				zhifu.items.push(shangpina);
				sessionStorage.setItem("zhifu", JSON.stringify(zhifu));

				var zhifu2 = sessionStorage.getItem("zhifu2");
				if (zhifu2 == undefined) {
					zhifu2 = {
						items: [],
						amount: 1,
					};
				} else {
					zhifu2 = JSON.parse(zhifu2);
				}

				var shangpinb = {
					id: "001",
					name: $("#b .product-item-name").text(),
					jiage: $("#b .product-price").text(),
					shuliang: $("#b .liang").text(),
					shuxing: "false",
					yanse: $("#b .product-desc").text(),
					yan: $("#b .product-desc").text(),
					zong: $("#b .shu").text(),
				}
				zhifu2.items.push(shangpinb);
				sessionStorage.setItem("zhifu2", JSON.stringify(zhifu2));
				//按理说应该可以，但是一旦传第三个商品信息，就卡
				var zhifu3 = sessionStorage.getItem("zhifu3");
				if (zhifu3 == undefined) {
					zhifu3 = {
						items: [],
						amount: 1,
					};
				} else {
					zhifu3 = JSON.parse(zhifu3);
				}

				var shangpinc = {
					id: "001",
					name: $("#c .product-item-name").text(),
					jiage: $("#c .product-price").text(),
					shuliang: $("#c .liang").text(),
					shuxing: "false",
					yanse: $("#c .product-desc").text(),
					yan: $("#c .product-desc").text(),
					zong: $("#c .shu").text(),
				}
				zhifu3.items.push(shangpinc);
				sessionStorage.setItem("zhifu3", JSON.stringify(zhifu3));


				var zhifu4 = sessionStorage.getItem("zhifu4");
				if (zhifu4 == undefined) {
					zhifu4 = {
						items: [],
						amount: 1,
					};
				} else {
					zhifu4 = JSON.parse(zhifu4);
				}

				var shangpind = {
					id: "001",
					name: $("#d .product-item-name").text(),
					jiage: $("#d .product-price").text(),
					shuliang: $("#d .liang").text(),
					shuxing: "false",
					yanse: $("#d .product-desc").text(),
					yan: $("#d .product-desc").text(),
					zong: $("#d .shu").text(),
				}
				zhifu4.items.push(shangpind);
				sessionStorage.setItem("zhifu4", JSON.stringify(zhifu4));

				var zhifu5 = sessionStorage.getItem("zhifu5");
				if (zhifu5 == undefined) {
					zhifu5 = {
						items: [],
						amount: 1,
					};
				} else {
					zhifu5 = JSON.parse(zhifu5);
				}

				var shangpine = {
					id: "001",
					name: $("#e .product-item-name").text(),
					jiage: $("#e .product-price").text(),
					shuliang: $("#e .liang").text(),
					shuxing: "false",
					yanse: $("#e .product-desc").text(),
					yan: $("#e .product-desc").text(),
					zong: $("#e .shu").text(),
				}
				zhifu5.items.push(shangpine);
				sessionStorage.setItem("zhifu5", JSON.stringify(zhifu5));

				//另一种方法，这个也可以，但是毛病与上方相同
				// var zhifu = sessionStorage.getItem("zhifu");
				// if (zhifu == undefined) {
				// 	zhifu = {
				// 		items: [],
				// 		amount: 1,
				// 	};
				// } else {
				// 	zhifu = JSON.parse(zhifu);
				// }

				// var products = {
				// 	id: "001",
				// 	name: $("#a .product-item-name").text(),
				// 	jiage: $("#a .product-price").text(),
				// 	shuliang: $("#a .liang").text(),
				// 	shuxing: "false",
				// 	yanse: $("#a .product-desc").text(),
				// 	yan: $("#a .product-desc").text(),
				// 	zong: $("#a .shu").text(),
				// }
				// zhifu.items.push(products);
				// sessionStorage.setItem("zhifu", JSON.stringify(zhifu));

				// var zhifu = sessionStorage.getItem("zhifu");
				// if (zhifu == undefined) {
				// 	zhifu = {
				// 		items: [],
				// 		amount: 1,
				// 	};
				// } else {
				// 	zhifu = JSON.parse(zhifu);
				// }

				// var products = {
				// 	id: "001",
				// 	name: $("#b .product-item-name").text(),
				// 	jiage: $("#b .product-price").text(),
				// 	shuliang: $("#b .liang").text(),
				// 	shuxing: "false",
				// 	yanse: $("#b .product-desc").text(),
				// 	yan: $("#b .product-desc").text(),
				// 	zong: $("#b .shu").text(),
				// }
				// zhifu.items.push(products);
				// sessionStorage.setItem("zhifu", JSON.stringify(zhifu));

				// console.log(zhifu)
				// var zhifu = sessionStorage.getItem("zhifu");
				// if (zhifu == undefined) {
				// 	zhifu = {
				// 		items: [],
				// 		amount: 1,
				// 	};
				// } else {
				// 	zhifu = JSON.parse(zhifu);
				// }

				// var products = {
				// 	id: "001",
				// 	name: $("#c .product-item-name").text(),
				// 	jiage: $("#c .product-price").text(),
				// 	shuliang: $("#c .liang").text(),
				// 	shuxing: "false",
				// 	yanse: $("#c .product-desc").text(),
				// 	yan: $("#c .product-desc").text(),
				// 	zong: $("#c .shu").text(),
				// }
				// zhifu.items.push(products);
				// sessionStorage.setItem("zhifu", JSON.stringify(zhifu));

				// var zhifu = sessionStorage.getItem("zhifu");
				// if (zhifu == undefined) {
				// 	zhifu = {
				// 		items: [],
				// 		amount: 1,
				// 	};
				// } else {
				// 	zhifu = JSON.parse(zhifu);
				// }

				// var products = {
				// 	id: "001",
				// 	name: $("#d .product-item-name").text(),
				// 	jiage: $("#d .product-price").text(),
				// 	shuliang: $("#d .liang").text(),
				// 	shuxing: "false",
				// 	yanse: $("#d .product-desc").text(),
				// 	yan: $("#d .product-desc").text(),
				// 	zong: $("#d .shu").text(),
				// }
				// zhifu.items.push(products);
				// sessionStorage.setItem("zhifu", JSON.stringify(zhifu));
			}


			// 选择复选框后计算商品总价
			calculate()
		});
	});



	$(".jia").click(function() {
		var a = parseInt($(this).siblings(".liang").text());
		console.log(a)
		sum = a + 1;
		$(this).siblings(".liang").text(sum);

		var price = parseFloat($(this).parents(".number").siblings(".total").find(".shu").text());
		var b = price;
		b = price + 129;
		$(this).parents(".number").siblings(".total").find(".shu").text(b);
		calculate()
	})

	$(".jian").click(function() {
		var a = parseInt($(this).siblings(".liang").text());
		console.log(a)
		sum = a - 1;
		//判断sum是否为负数，如果是，则等于0
		if (sum < 0) {
			sum = 0;
		}
		$(this).siblings(".liang").text(sum);
		var price = parseFloat($(this).parents(".number").siblings(".total").find(".shu").text());
		var b = price;
		b = price - 129;
		//如果sum等于0，那么b就等于0
		if (sum == 0) {
			b = 0;
		}
		$(this).parents(".number").siblings(".total").find(".shu").text(b);
		calculate()
	})
	

	$(".product-desc").each(function(i, e) {
		if ($(e).text() == "月白") {
			$(e).parents(".select").find(".product-img").prop("src", "img/ShoppingCart/image_03.png")
		}
		if ($(e).text() == "深蓝") {
			$(e).parents(".select").find(".product-img").prop("src", "img/ShoppingCart/image_04.jpg")
		}
		if ($(e).text() == "云灰") {
			$(e).parents(".select").find(".product-img").prop("src", "img/ShoppingCart/image_05.jpg")
		}
	});


})
