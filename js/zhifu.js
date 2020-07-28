$(function() {
	var username = localStorage.getItem("username");
	var defalutuser = localStorage.getItem("defalutuser");
	var Isdefaultlogin = sessionStorage.getItem("Isdefaultlogin");
	var Islogin = sessionStorage.getItem("Islogin");
	if (Isdefaultlogin == "true") {
		$("#yonghu").text(defalutuser);
	} else if (Islogin == "true") {
		$("#yonghu").text(username);
	}
	//添加头部

	$(".footer-all").load("footer.html");
	//导航栏效果
	$(".header .rgt li:last-child").hover(function() {
		$("dl").stop().slideDown();
		$(".header .rgt li:last-child>a").addClass("a");
		$("#span").text("∧");
	}, function() {
		$("dl").stop().slideUp();
		$(".header .rgt li:last-child>a").removeClass("a");
		$("#span").text("∨");
	})
	//鼠标滑过增加收货地址变色
	$(".content .shouhuo>ul>.zengjia").hover(function() {
		$(".content .shouhuo>ul>.zengjia").addClass("hover");
		$(".content .shouhuo>ul>.zengjia>.box").addClass("bianse");
	}, function() {
		$(".content .shouhuo>ul>.zengjia").removeClass("hover");
		$(".content .shouhuo>ul>.zengjia>.box").removeClass("bianse");
	})

	//计算总价
	function calculate() {
		var sum = 0; //定义一个变量，用于存储总价
		var sum1 = 0;
		var sum2 = 0;
		$(".yunfei").each(function(i, e) {
			var yun = parseFloat($(this).text());
			sum1 = sum1 + yun;
		});

		$(".jiage").each(function(i, e) {
			var price = parseFloat($(this).text());
			sum = sum + price;
		});
		sum2 = sum + sum1;
		$("#yunfei").text(sum1);
		$(".zongzhi").text(sum2);
	}
	calculate()
	//当点击增加地址弹出框的确认时，增加如下的文档结构，并将用户输入的信息赋值到新的文档架构
	$(".queren").click(function() {
		//创建文档结构
		var $li = $("<li>");
		var $xinghao = $("<div>");
		var $dizhi = $("<div>");
		var $dui = $("<div>");
		var $bianji = $("<div>");
		var $lft = $("<div>");
		var $rgt = $("<div>");
		var $shanchu = $("<div>");
		var $xiugai = $("<div>");
		var $sheng = $("#sheng").val();
		var $shi = $("#shi").val();
		var $xian = $("#xian").val();
		var $jie = $("#jie").val();
		var $xiangxi = $("#xiangxi").val();
		var $xingming = $("#xingming").val();
		var $shouji = $("#shouji").val();
		//判断用户输入的信息是否为空
		if ($sheng == "" || $shi == "" || $xian == "" || $jie == "" || $xiangxi == "" || $xingming == "" || $shouji == "") {
			// alert("请输入地址");
			layer.open({
				title: "提示",
				type: 1,
				area: ['600px', '360px'],
				shadeClose: true, //点击遮罩关闭
				content: '\<\div style="padding:20px; text-align: center; font-size:24px; line-height: 277px;" >请输入地址\<\/div>'
			});
		} else {
			//如果已经存在一个地址，则新增加地址为灰色
			if ($("#dizhi").children().length > 1) {
				$li.addClass("fl dizhi huise");
				$("#dizhi").prepend($li);
				$xinghao.addClass("xinghao clearfix");
				$li.append($xinghao);
				$li.append($dizhi);
				$li.append($dui);
				$bianji.addClass("bianji");
				$li.append($bianji);
				$lft.addClass("lft fl");
				$rgt.addClass("rgt fr");
				$xinghao.append($lft);
				$xinghao.append($rgt);
				$shanchu.addClass("shanchu fr");
				$shanchu.text("删除");
				$bianji.append($shanchu);
				$xiugai.addClass("xiugai fr");
				$xiugai.text("修改");
				$bianji.append($xiugai);
			} else {
				//用户添加的第一个地址
				$li.addClass("fl dizhi hover");
				$("#dizhi").prepend($li);
				$xinghao.addClass("xinghao clearfix");
				$li.append($xinghao);
				$li.append($dizhi);
				$dui.addClass("dui");
				$dui.text("√");
				$li.append($dui);
				$bianji.addClass("bianji");
				$li.append($bianji);
				$lft.addClass("lft fl");
				$rgt.addClass("rgt fr");
				$xinghao.append($lft);
				$xinghao.append($rgt);
				$shanchu.addClass("shanchu fr");
				$shanchu.text("删除");
				$bianji.append($shanchu);
				$xiugai.addClass("xiugai fr");
				$xiugai.text("修改");
				$bianji.append($xiugai);
			}
			//将用户输入的信息赋值进去
			$lft.text($("#xingming").val());
			$rgt.text($("#shouji").val());
			$dizhi.text($sheng + $shi + $xian + $jie + $xiangxi)
			$(".hui").css("display", "none");
		}
		//鼠标滑过地址栏时，显示编辑
		$(".dizhi").hover(function() {
			$(this).find(".bianji").css("display", "block");
		}, function() {
			$(this).find(".bianji").css("display", "none");
		})
		//选择地址
		$(".dizhi").click(function() {
			if ($(this).hasClass("hover") == true) {

			} else {
				$(this).addClass("fl dizhi huise hover");
				$(".dizhi>div:nth-child(3)").addClass("dui");
				$(this).find(".dui").css("display", "block");
				$(this).find(".dui").text("√");
				$(this).nextAll(".dizhi").removeClass("hover");
				$(this).prevAll(".dizhi").removeClass("hover");
				$(this).nextAll(".dizhi").find(".dui").css("display", "none");
				$(this).nextAll(".dizhi").find(".dui").removeClass("dui");
				$(this).nextAll(".dizhi").find(".dui").text("");
				$(this).prevAll(".dizhi").find(".dui").css("display", "none");
				$(this).prevAll(".dizhi").find(".dui").removeClass("dui");
				$(this).prevAll(".dizhi").find(".dui").text("");
			}
		})
		//点击修改，出现弹出框
		$(".xiugai").click(function() {
			$(".hui").css("display", "block");
		})
		//点击删除，删除地址栏
		$(".shanchu").click(function() {
			$(this).parents(".dizhi").remove();
		})
	})
	//点击增加地址时，清空上次输入的内容
	$(".content .shouhuo>ul>.zengjia").click(function() {
		$(".hui").css("display", "block");
		$("#sheng").val("");
		$("#shi").val("");
		$("#xian").val("");
		$("#jie").val("");
		$("#xiangxi").val("");
		$("#xingming").val("");
		$("#shouji").val("");
	})
	//取消按钮
	$(".quxiao").click(function() {
		$(".hui").css("display", "none");
	})
	//关闭按钮
	$(".guanbi").click(function() {
		$(".hui").css("display", "none");
	})
	//发票弹出框
	$("#xin").click(function() {
		$(".fapiao").css("display", "block");
	})
	//关闭发票弹出框
	$(".quxiaos").click(function() {
		$(".fapiao").css("display", "none");
	})
	//关闭
	$(".guanbis").click(function() {
		$(".fapiao").css("display", "none");
	})
	//确认按钮，将用户输入的值保存
	$(".querens").click(function() {
		$(".fapiao").css("display", "none");
		var moren = $("#moren").val();
		$("#fapiao").text(moren);
	})

	//礼品卡订花
	$(".lipin").click(function() {
		$(".lipinka").siblings().slideDown();
		$(".huigoujin").slideUp();
		$(".lipinka").slideToggle();
		$(".lipin").css("color", "#00c3f5");
		$(".huigou").css("color", "#898989");
	})
	//回购金动画
	$(".huigou").click(function() {
		$(".lipinka").slideUp();
		$(".huigoujin").siblings().slideDown();
		$(".huigoujin").slideToggle();
		$(".huigou").css("color", "#00c3f5");
		$(".lipin").css("color", "#898989");
	})
	//当有选择使用复选框时，暂不使用复选框取消选中
	$("#shiyong").click(function() {
		if ($("#shiyong").is(":checked") == true) {
			$("#zanbu").prop("checked", false);
		}
	})
	//同理
	$("#zanbu").click(function() {
		if ($("#zanbu").is(":checked") == true) {
			$("#shiyong").prop("checked", false);
		}
	})
	//支付宝微信支付只能选择一个
	$(".kuaijie>ul>li").click(function() {
		if ($(this).find("input").is(":checked") == true) {
			$(this).nextAll().find("input").prop("checked", false);
			$(this).prevAll().find("input").prop("checked", false);
			$(".xuanze>.btm>ul>li").find("input").prop("checked", false);
		}
		$(".yinhangka").css("display", "none");
	})
	//银行卡支付，只能选择一个
	$(".xuanze>.btm>ul>li").click(function() {
		if ($(this).find("input").is(":checked") == true) {
			$(this).nextAll().find("input").prop("checked", false);
			$(this).prevAll().find("input").prop("checked", false);
			$(".kuaijie>ul>li").find("input").prop("checked", false);
		}
	})
	//当点击中国银行时，下方会出现介绍
	$("#zhongguo").click(function() {
		$(".yinhangka").css("display", "table");
		$(".huan td>.img").css("background", "url(img/zhifu/image_04.png)");
		$(".huan td:nth-child(2)").text("储蓄卡：单笔限额50000元，每日限额100000元；信用卡：单笔限额300元，每日限额5000元。");
		$(".huan td:nth-child(3)").text("信用卡/储蓄卡");
		$(".huan td:nth-child(4)").text("95566");
	})
	//建设银行同理
	$("#jianshe").click(function() {
		$(".yinhangka").css("display", "table");
		$(".huan td>.img").css("background", "url(img/zhifu/image_05.png)");
		$(".huan td:nth-child(2)").html(
			"准贷记卡：动态口令卡用户单笔限额5000元，每日限额5000元；网银盾用户单笔限额5000元，每日限额5000元；<br>储蓄卡：动态口令用户限额50000元；网银盾用户限额500000元；<br>信用卡：限额500元。<br>（注：建行企业版的支付限额以在银行设置的限额为准）"
		);
		$(".huan td:nth-child(3)").text("信用卡/储蓄卡/准贷记卡");
		$(".huan td:nth-child(4)").text("95533");
	})
	//农业银行同理
	$("#nongye").click(function() {
		$(".yinhangka").css("display", "table");
		$(".huan td>.img").css("background", "url(img/zhifu/image_06.png)");
		$(".huan td:nth-child(2)").html(
			"储蓄卡：动态口令卡用户单笔限额1000元，每日限额3000元；<br>准贷记卡：动态口令卡用户单笔限额1000元，每日限额3000元；移动证书用户无限额。<br>（注：农行企业版的支付限额以在银行设置的限额为准）");
		$(".huan td:nth-child(3)").text("借记卡/准贷记卡");
		$(".huan td:nth-child(4)").text("95599");
	})
	//工商银行同理
	$("#gongshang").click(function() {
		$(".yinhangka").css("display", "table");
		$(".huan td>.img").css("background", "url(img/zhifu/image_07.png)");
		$(".huan td:nth-child(2)").html(
			"U盾用户：信用卡单笔限额1000元与信用卡本身限额孰低，每日限额信用卡本身透支限额。储蓄卡单笔限额100万元，每日限额：100万元；<br>柜面注册存量静态密码用户：信用卡每日限额300元与信用卡本身限额孰低，储蓄卡每日限额300元；<br>已开通手机短信认证电子银行口令卡用户：信用卡单笔限额1000元与信用卡本身限额孰低，每日限额000元与信用卡本身限额孰低；储蓄卡单笔限额2000元，每日限额5000元；<br>未开通手机短信认证电子银行口令卡用户：信用卡单笔限额500元与信用卡本身限额孰低，每日限额1000元与信用卡本身限额孰低；储蓄卡单笔限额500元，每日限额1000元。<br>（注：工行企业版的支付限额以在银行设置的限额为准）"
		);
		$(".huan td:nth-child(3)").text("信用卡/储蓄卡");
		$(".huan td:nth-child(4)").text("95588");
	})
	//交通银行同理
	$("#jiaotong").click(function() {
		$(".yinhangka").css("display", "table");
		$(".huan td>.img").css("background", "url(img/zhifu/image_08.png)");
		$(".huan td:nth-child(2)").html(
			"手机注册版：信用卡限额5000元与信用卡本身限额孰低；储蓄卡和准贷记卡限额5000元；<br>证书认证版：信用卡限额1万元与信用卡本身限额孰低；储蓄卡和准贷记卡限额5万元。");
		$(".huan td:nth-child(3)").text("信用卡/储蓄卡/准贷记卡");
		$(".huan td:nth-child(4)").text("95559");
	})
	//招商银行同理
	$("#zhaoshang").click(function() {
		$(".yinhangka").css("display", "table");
		$(".huan td>.img").css("background", "url(img/zhifu/image_09.png)");
		$(".huan td:nth-child(2)").html("储蓄卡/准贷记卡：大众版限额500元；专业版无限额；<br>信用卡：单笔限额499.99元，每日限额为信用卡本身透支额度。");
		$(".huan td:nth-child(3)").text("信用卡/储蓄卡/准贷记卡");
		$(".huan td:nth-child(4)").text("95555");
	})
	//邮政银行同理
	$("#youzheng").click(function() {
		$(".yinhangka").css("display", "table");
		$(".huan td>.img").css("background", "url(img/zhifu/image_10.png)")
		$(".huan td:nth-child(2)").html("单张汇票收据限额5000元；<br>邮政网汇e充值：普通账户1次/日；已开通短信提醒的账户3次/日；已安装数字证书的账户不限次数。")
		$(".huan td:nth-child(3)").text("不需要邮政账户也可以")
		$(".huan td:nth-child(4)").text("11185")
	})
	//兴业银行同理
	$("#xingye").click(function() {
		$(".yinhangka").css("display", "table");
		$(".huan td>.img").css("background", "url(img/zhifu/image_11.png)");
		$(".huan td:nth-child(2)").html(
			"储蓄卡：证书用户无限额；非证书用户有1000和5000两种限额，由用户在开通网上购物功能时自行选择；e卡每日5000元；<br>信用卡：单笔限额600元，账期内限额10000元。");
		$(".huan td:nth-child(3)").text("信用卡/储蓄卡");
		$(".huan td:nth-child(4)").text("95561");
	})
	//上海银行同理
	$("#shanghai").click(function() {
		$(".yinhangka").css("display", "table");
		$(".huan td>.img").css("background", "url(img/zhifu/image_12.png)");
		$(".huan td:nth-child(2)").html(
			"一代E盾 单笔限额：5万，日累计限额:20万；<br>一代E盾+动态密码 单笔限额：50万，日累计限额：100万；<br>二代/通用E盾（普通客户） 单笔限额：100万，日累计限额：500万；<br>二代/通用E盾（慧通及以上客户等级） 单笔限额：200万，日累计限额：2000万。<br>（注：上海银行企业版的支付限额以在银行设置的限额为准）"
		);
		$(".huan td:nth-child(3)").text("储蓄卡");
		$(".huan td:nth-child(4)").text("95594");
	})
	//计算总值
	function zongzhi() {
		var sum = 0;
		$(".jiage").each(function() {
			var a = parseFloat($(this).text());
			sum = sum + a;
		})
		$(".zongzhi").text(sum);
	}
	zongzhi()
	//退出登录
	$(".tui").click(function() {
		$(".denglu").css("display", "block");
		$(".zhuce").css("display", "block");
		$(".denglu").addClass("q");
		$(".zhuce").addClass("q");
		$(".dingdan").css("display", "none");
	})
	//结算按钮
	$(".xiadan").click(function() {
		// 判断用户是否填写地址
		if ($("#dizhi").children().length > 1) {

		} else {
			layer.open({
				title: "提示",
				type: 1,
				area: ['600px', '360px'],
				shadeClose: true, //点击遮罩关闭
				content: '\<\div style="padding:20px; text-align: center; font-size:24px; line-height: 277px;" >您还没有填写地址呦\<\/div>'
			});
			// alert("您还没有填写地址呦");
		}
		//判断用户是否选择支付方式
		var a = 0;
		$(".xuanzhong").each(function(i, e) {
			if ($(e).is(":checked") == true) {
				a++;
			}
		});
		//判断用登录状态
		var sum = 0;
		$("#denglu li").each(function(i, e) {
			//当复选框是被选择状态时，a就加1
			if ($(e).hasClass("q") == true) {
				sum++;
			}
		});
		//判断登录状态
		if (sum == 2) {
			layer.open({
				title: "提示",
				type: 1,
				area: ['600px', '360px'],
				shadeClose: true, //点击遮罩关闭
				content: '\<\div style="padding:20px; text-align: center; font-size:24px; line-height: 277px;" >您还没有登录呦\<\/div>'
			});
			// alert("您还没有登录呦");
		} else {

		}
		//判断是否选择支付
		if (a == 1) {

		} else {
			layer.open({
				title: "提示",
				type: 1,
				area: ['600px', '360px'],
				shadeClose: true, //点击遮罩关闭
				content: '\<\div style="padding:20px; text-align: center; font-size:24px; line-height: 277px;" >您还没有选择支付方式呦\<\/div>'
			});
			// alert("您还没有选择支付方式呦");
		}
		//如果满足条件，则跳转
		if (a == 1 && $("#dizhi").children().length > 1 && sum != 2) {
			$("#zhuan").prop("href", "fukuan.html");
		}
	})
	//取值
	var zhifu = sessionStorage.getItem("zhifu");
	// sessionStorage.clear()
	if (zhifu != null) {
		zhifu = JSON.parse(zhifu);
		for (var i = 0; i < zhifu.items.length; i++) {
			var productsItem = zhifu.items[i];
			console.log(productsItem)
			var $kelong = $(".shangpinxinxi").clone();
			$kelong.find(".mingzi").text(productsItem.name);
			$kelong.find(".se").text(productsItem.yanse);
			$kelong.find(".danjia").text(productsItem.jiage);
			$kelong.find(".shuliang").text(productsItem.shuliang);
			$kelong.find(".jiage").text(productsItem.zong);
			// $kelong.find(".mingzi").text(productsItem.zong)
			$("#lo tr:last").after($kelong);
		}
	}


	var zhifu2 = sessionStorage.getItem("zhifu2");
	// sessionStorage.clear()
	if (zhifu2 != null) {
		zhifu2 = JSON.parse(zhifu2);
		for (var i = 0; i < zhifu2.items.length; i++) {
			var shangpinbItem = zhifu2.items[i];
			console.log(shangpinbItem);
			var $kelongs = $kelong.clone();
			$kelongs.find(".mingzi").text(shangpinbItem.name);
			$kelongs.find(".se").text(shangpinbItem.yanse);
			$kelongs.find(".danjia").text(shangpinbItem.jiage);
			$kelongs.find(".shuliang").text(shangpinbItem.shuliang);
			$kelongs.find(".jiage").text(shangpinbItem.zong);
			// $kelong.find(".mingzi").text(productsItem.zong)
			$("#lo tr:last").after($kelongs);
		}
	}

	var zhifu3 = sessionStorage.getItem("zhifu3");
	// sessionStorage.clear()
	if (zhifu3 != null) {
		zhifu3 = JSON.parse(zhifu3);
		for (var i = 0; i < zhifu3.items.length; i++) {
			var shangpincItem = zhifu3.items[i];
			console.log(shangpincItem)
			var $kelongss = $kelongs.clone();
			$kelongss.find(".mingzi").text(shangpincItem.name)
			$kelongss.find(".se").text(shangpincItem.yanse)
			$kelongss.find(".danjia").text(shangpincItem.jiage)
			$kelongss.find(".shuliang").text(shangpincItem.shuliang)
			$kelongss.find(".jiage").text(shangpincItem.zong)
			// $kelong.find(".mingzi").text(productsItem.zong)
			$("#lo tr:last").after($kelongss);
		}
	}

	var zhifu4 = sessionStorage.getItem("zhifu4");
	// sessionStorage.clear()
	if (zhifu4 != null) {
		zhifu4 = JSON.parse(zhifu4);
		for (var i = 0; i < zhifu4.items.length; i++) {
			var shangpindItem = zhifu4.items[i];
			console.log(shangpindItem)
			var $kelongsss = $kelongss.clone();
			$kelongsss.find(".mingzi").text(shangpindItem.name)
			$kelongsss.find(".se").text(shangpindItem.yanse)
			$kelongsss.find(".danjia").text(shangpindItem.jiage)
			$kelongsss.find(".shuliang").text(shangpindItem.shuliang)
			$kelongsss.find(".jiage").text(shangpindItem.zong)
			// $kelong.find(".mingzi").text(productsItem.zong)
			$("#lo tr:last").after($kelongsss);
		}
	}

	var zhifu5 = sessionStorage.getItem("zhifu5");
	// sessionStorage.clear()
	if (zhifu5 != null) {
		zhifu5 = JSON.parse(zhifu5);
		for (var i = 0; i < zhifu5.items.length; i++) {
			var shangpineItem = zhifu5.items[i];
			console.log(shangpineItem)
			var $kelongssss = $kelongsss.clone();
			$kelongssss.find(".mingzi").text(shangpineItem.name)
			$kelongssss.find(".se").text(shangpineItem.yanse)
			$kelongssss.find(".danjia").text(shangpineItem.jiage)
			$kelongssss.find(".shuliang").text(shangpineItem.shuliang)
			$kelongssss.find(".jiage").text(shangpineItem.zong)
			// $kelong.find(".mingzi").text(productsItem.zong)
			$("#lo tr:last").after($kelongssss);
		}
	}


	var $b = $(".shangpinxinxi") //寻找到类名称为b的tr
	//按价格排序
	for (var i = 0; i < $b.length; i++) {
		for (var j = 0; j < $b.length - i - 1; j++) {
			var $shizhi = $b.eq(j).find(".se").text();
			var $shizhi2 = $b.eq(j + 1).find(".se").text();
			if ($shizhi == $shizhi2) {
				// var temp = $b[j + 1];
				// $b[j + 1] = $b[j];
				$b[j].remove();
				calculate();
			}
		}
	}
	$(".shangpinxinxi:first-child").remove();

	for (var i = 0; i < $b.length; i++) {
		var $se = $b.eq(i).find(".mingzi").text();
		if ($se == "") {
			$b[i].remove();
		}
	}
	var $c = $(".shangpinxinxi")
	for (var i = 0; i < $c.length; i++) {
		for (var j = 0; j < $c.length - i - 1; j++) {
			var $shi1 = $c.eq(j).find(".se").text();
			var $shi2 = $c.eq(j + 1).find(".se").text();
			var $shi3 = $c.eq(j).find(".shuliang").text();
			var $shi4 = $c.eq(j + 1).find(".shuliang").text();
			if ($shi1 == $shi2 && $shi3 == $shi4) {
				// var temp = $b[j + 1];
				// $b[j + 1] = $b[j];
				$c[j].remove();
				calculate();
			}
		}
	}
	zongzhi();
	//存值


	// $(function() {
	// 	var zongjia = $(".tijiao").text();
	// 	var xinxi = {
	// 		zong: zongjia,
	// 	}

	// 	function xin(xinxi) {
	// 		var get = sessionStorage.getItem("cangku");
	// 		var cangku = JSON.parse(get);
	// 		if (JSON.stringify(cangku).indexOf(JSON.stringify(xinxi)) == -1) {
	// 			if (cangku == null) {
	// 				cangku = [xinxi];
	// 			} else {
	// 				var n = cangku.length;
	// 				cangku[n] = xinxi;
	// 			}
	// 			var str = JSON.stringify(cangku);
	// 			sessionStorage.setItem("cangku", str);
	// 			return sessionStorage.setItem("cangku", str);
	// 		}
	// 	};
	// 	xin(xinxi);
	// });
	//判断图片

	var zongjia = sessionStorage.getItem("zongjia");
	if (zongjia == undefined) {
		zongjia = {
			items: [],
			amount: 1,
		};
	} else {
		zongjia = JSON.parse(zongjia);
	}
	var zongzhi = {
		zongjia: $("#zong").text(),
	}
	zongjia.items.push(zongzhi);
	sessionStorage.setItem("zongjia", JSON.stringify(zongjia));


	$(".se").each(function(i, e) {
		if ($(e).text() == "月白") {
			$(e).parents(".shangpinxinxi").find("#tupian").prop("src", "img/zhifu/image_01.jpg");
		}
		if ($(e).text() == "深蓝") {
			$(e).parents(".shangpinxinxi").find("#tupian").prop("src", "img/zhifu/image_04.jpg");
		}
		if ($(e).text() == "云灰") {
			$(e).parents(".shangpinxinxi").find("#tupian").prop("src", "img/zhifu/image_05.jpg");
		}
	});


})
