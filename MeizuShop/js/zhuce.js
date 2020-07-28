$(function() {
	localStorage.setItem("defalutuser", "admin");
	localStorage.setItem("defalutpass", "123");
	$(".submit").click(function() {
		var zhanghao = $("#zhanghao").val();
		var mima = $("#mima").val();
		console.log(zhanghao, mima);
		// 账号(长度至少3位)
		var reg1 = /^\w{3,}$/;
		var result1 = reg1.test(zhanghao);
		// 密码(长度至少3位)。
		var reg2 = /^\w{3,}$/;
		var result2 = reg2.test(mima);
		if (result1 && result2) {
			layer.msg('注册成功');
			localStorage.setItem("username", zhanghao);
			localStorage.setItem("password", mima);
			setTimeout( function(){
			     location.href = "denglu.html";
			}, 1000 );
		} else if (!result1 && result2) {
			layer.msg('账号至少3位');
		} else if (result1 && !result2) {
			layer.msg('密码至少3位');
		} else {
			layer.msg('账号密码均至少3位');
		}
	});

	// $(".floor2 .zhuce .foot").click(function() {
	// 	$(function() {
	// 		var zhanghao = sessionStorage.getItem("zhanghao");
	// 		if (zhanghao == undefined) {
	// 			zhanghao = {
	// 				items: [],
	// 				amount: 1,
	// 			};
	// 		} else {
	// 			zhanghao = JSON.parse(zhanghao);
	// 		}
	// 		var zhuce = {
	// 			id: "001",
	// 			zhanghao: $("#zhanghao").val(),
	// 			mima: $("#mima").val(),
	// 		}

	// 		zhanghao.items.push(zhuce);
	// 		sessionStorage.setItem("zhanghao", JSON.stringify(cart));
	// 	});
	// 	// 	$(function() {
	// 	// 		var hao = $("#zhanghao").val()
	// 	// 		var mima = $("#mima").val()
	// 	// 		// var shu = $("#shuliang").val()
	// 	// 		var denglu = {
	// 	// 			zhanghao: hao,
	// 	// 			mima: mima,
	// 	// 		}

	// 	// 		function zhanghao(denglu) {
	// 	// 			var get = sessionStorage.getItem("haoma");
	// 	// 			var haoma = JSON.parse(get);
	// 	// 			if (JSON.stringify(haoma).indexOf(JSON.stringify(denglu)) == -1) {
	// 	// 				if (haoma == null) {
	// 	// 					haoma = [denglu];
	// 	// 				} else {
	// 	// 					var n = haoma.length;
	// 	// 					haoma[n] = denglu;
	// 	// 				}
	// 	// 				var str = JSON.stringify(haoma);
	// 	// 				sessionStorage.setItem("haoma", str);
	// 	// 				return sessionStorage.setItem("haoma", str);
	// 	// 			}
	// 	// 		};
	// 	// 		zhanghao(denglu);
	// 	// 	});
	// })

});
