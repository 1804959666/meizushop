$(function() {
	$(".conter .denglu .menu a ").click(function() {
		var idx = $(this).index();
		// 如果索引等于0
		if (idx == 0) {
			// 第一个显示,第二个隐藏
			$(".one").show();
			$(".two").hide();
		} else {
			$(".one").hide();
			$(".two").show();
		}
	});
	// var zhanghaoDom = document.querySelector("#zhanghao");
	// var mimaDom = document.querySelector("#mima")
	// var tijiaoDom = document.querySelector("#submit");
	// tijiaoDom.addEventListener("click", function() {
	// 	//阻止默认事件
	// 	event.preventDefault();
	
	// 	var zhanghao = zhanghaoDom.value;
	// 	var mima = mimaDom.value;
	// 	// 正则表达式
	// 	// 账号(长度至少3位)
	// 	var reg = /^\w{3,}$/;
	// 	var result = reg.test(zhanghao);
	// 	console.log(result);
	// 	if (reg.test(zhanghao) == false) {
	// 		layer.msg('输入您注册时候的账号');
	// 	}
	// 	// 密码(长度至少3位)。
	
	// 	var reg1 = /^\w{3,}$/;
	// 	var result1 = reg1.test(mima);
	// 	console.log(result1);
	// 	if (reg1.test(mima) == false) {
	// 		layer.msg('输入您注册时候的密码');
	// 	}
	// 	if (reg.test(zhanghao) && reg1.test(mima) == true) {
	// 		layer.msg('恭喜您，可以马上登录了');
	// 	};
	// });
	$("#submit").click(function(){
		var zhanghao = $("#zhanghao").val();
		var mima = $("#mima").val();
		// 账号(长度至少3位)
		var reg1 = /^\w{3,}$/;
		var result1 = reg1.test(zhanghao);
		// 密码(长度至少3位)。
		var reg2 = /^\w{3,}$/;
		var result2 = reg2.test(mima);
		if (result1 && result2) {
			layer.msg('格式正确');
		}else if(!result1&&result2){
			layer.msg('账号至少3位');
		}else if(result1&&!result2){
			layer.msg('密码至少3位');
		}else{
			layer.msg('账号密码均至少3位');
		}
	});
	$(".denglu1 .color").click(function(){
		var zhanghao = $("#zhanghao").val();
		var mima = $("#mima").val();
		
		var defalutuser = localStorage.getItem("defalutuser");
		var defalutpass = localStorage.getItem("defalutpass");
		
		var name = localStorage.getItem("username");
		var password = localStorage.getItem("password");
		if(zhanghao==defalutuser&&mima==defalutpass){
			sessionStorage.setItem("Isdefaultlogin","true");
			sessionStorage.setItem("Islogin","false");
			layer.msg("登陆成功");
			$("#tiaozhuan").prop("href", "ShoppingCart.html");
		}else if(zhanghao==name&&mima==password){
			sessionStorage.setItem("Islogin","true");
			sessionStorage.setItem("Isdefaultlogin","false");
			layer.msg("登陆成功");
			$("#tiaozhuan").prop("href", "ShoppingCart.html");
		}else{
			layer.msg("用户名或密码错误");
		}
	});
	//$(".denglu1").click(function() {

		//var haoma = JSON.parse(sessionStorage.getItem("haoma"));
		// var sum = 0;
		//var hao = $("#zhanghao").val()
		//var mi = $("#mima").val()
		//for (var i = 0; i < haoma.length; i++) {
			//if (haoma[i].zhanghao == hao && haoma[i].mima == mi) {
				//alert("登录成功");
				// history.go(-2);
				//$("#tiaozhuan").prop("href", "ShoppingCart.html")
				//break;
			//} else {
				//alert("需要输入您注册时候的密码")
				//break;
			//}
			// console.log(haoma[i].zhanghao);
		//}
	//})

});
