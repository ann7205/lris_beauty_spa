// JavaScript Document
var	useringSwitch = function(eve){
	$("a").removeClass("pick");
	eve.addClass("pick");
	var target = eve.parent('h3').next('.list_box').html();
	var title = eve.parent('h3').text()
	$(".member .info .content").html(target);
	$(".member .info .title").text(title);
};
var memberLogin = function(){
	if( $('#account').val()==""){ $('#account').focus(); alert("請輸入您的手機號碼。"); return false;}
	if( $('#pwd').val()==""){ $('#pwd').focus(); alert("請輸入您的密碼。"); return false;}
	//$("#LoginForm").attr("action","action/ajax.php?memberlogin=1");
	//alert($("#LoginForm").attr("action"))
	//$("#LoginForm").submit();
	$.post(
			"action/ajax.php?memberlogin=1",
			{
				account:$("#account").val(),
				pwd:$('#pwd').val(),
			},
			function(msg){
				msg = msg.trim();
				if(msg=="ok"){
					window.location.replace("index.php?action=member");
				}else{
					$("#msg").text("帳號或密碼錯誤")
				}
			}
		)
};
var LogOut = function(){
	$.post(
			"action/ajax.php?memberlogout=1",
			function(msg){
				msg = msg.trim();
				if(msg=="ok"){
					window.location.replace("index.php");
				}else{
					alert(msg)
				}
			}
		)
};
var ReSetPWD ={
	ShowBox:function(){
		$(".lock").show();
		$(".pwdbox").show();
	},
	ReSet:function(key){
		if(key == "default"){
			var PWDKey = "#resetpwd";
			var CheckKey = "#checkpwd";
			var Id = "#memberid";
		}else{
			var PWDKey = "#newpwd";
			var CheckKey = "#checknewpwd";
			var Id = "#id";
			if( $("#oldpwd").val()!=$("#basepwd").val()){ $("#oldpwd").focus(); alert("原始密碼錯誤"); return false;}
		}
		if( $(PWDKey).val()==""){ $(PWDKey).focus(); alert("請輸入您的新密碼。"); return false;}
		if( $(PWDKey).val()=="1234"){ $(PWDKey).focus(); alert("新密碼不能與預設密碼相同。"); return false;}
		if( $(CheckKey).val()==""){ $(CheckKey).focus(); alert("請再次輸入您的新密碼。"); return false;}
		if( $(CheckKey).val()!=$(PWDKey).val()){ $(CheckKey).focus(); alert("兩次密碼不相同。"); return false;}
		$.post(
			"action/ajax.php?memberresetpwd=1",
			{
				id:$(Id).val(),
				pwd:$(PWDKey).val(),
			},
			function(msg){
				msg = msg.trim();
				if(msg=="ok"){
					alert("修改完成");
					window.location.replace("index.php?action=member");
				}else{
					alert(msg);
				}
			}
		)
	}
	
}
var EditMember =function(){
	if($('#name').val()==""){$('#name').focus(); alert("請輸入您的姓名。");return false;}
	if($('#phone').val()==""){$('#phone').focus(); alert("請輸入手機號碼。");return false;}
	//if($('#email').val()==""){$('#email').focus(); alert("請輸入Email。");return false;}
	//if(!$('#email').val().match(/^[0-9a-zA-Z]([-._]*[0-9a-zA-Z])*@[0-9a-zA-Z]([-._]*[0-9a-zA-Z])*\.+[a-zA-Z]+$/)){$('#mail').focus(); alert("請輸入正確的Email格式。");return false;}
	if($('input[name=zipcode]').val()==""){$('input[name=zipcode]').focus(); alert("請選擇郵遞區號。");return false;}
	if($('#addr').val()==""){$('#addr').focus(); alert("請輸入聯絡地址。");return false;}
	
	$.post(
		"action/ajax.php?memberedit=1",
		{
			id:$('#id').val(),
			date:$('#date').val(),
			name:$("#name").val(),
			phone:$("#phone").val(),
			gender:$("#gender option:selected").val(),
			tel:$("#tel").val(),
			birthday:$("#birthday").val(),
			email:$("#email").val(),
			county:$('select[name=county]').val(),
			district:$("select[name=district]").val(),
			zip:$('input[name=zipcode]').val(),
			addr:$("#addr").val()
		},
		function(msg){
			msg = msg.trim();
			if(msg=="ok"){
				alert("修改完成");
				window.location.replace("index.php?action=member&run=edit");
			}else{
				alert(msg);
			}
		}
	)
	
}
var ForGet = function(){
	if($('#name').val()==""){$('#name').focus(); alert("請輸入您的姓名。");return false;}
	if($('#phone').val()==""){$('#phone').focus(); alert("請輸入手機號碼。");return false;}
	if($('input[name=zipcode]').val()==""){$('input[name=zipcode]').focus(); alert("請選擇郵遞區號。");return false;}
	if($('#addr').val()==""){$('#addr').focus(); alert("請輸入聯絡地址。");return false;}
	$.post(
		"action/ajax.php?forget=1",
		{ 			
			name:$("#name").val(),
			phone:$("#phone").val(),
			gender:$("#gender option:selected").val(),
			county:$('select[name=county]').val(),
			district:$("select[name=district]").val(),
			zip:$('input[name=zipcode]').val(),
			addr:$("#addr").val()
		},
		function(msg){
			msg = msg.trim();
			if(msg=="ok"){
				$("#callback").css("color","green")
				$("#callback").html("您的密碼已經回復為預設密碼(1234)<br/><a href='javascript:' class='ShowLogin'>請重新登入</a>");
			}else{
				$("#callback").css("color","red")
				$("#callback").text("輸入的會員資訊有誤，請再檢查一次。")
			}
		}
	)
};
var ShowNav = function(){
	$(".m_nav").show();
	$(".mask").show();
};

$(function(){
	
	/* 輪播*/	
	$('.slider').unslider({autoplay: true,infinite: true });
	$('.prev').html('<img src="img/prev.png"/>');
	$('.next').html('<img src="img/next.png"/>');

	$(".mask").click(function(){	
		$(".mask").hide();
		$(".loginbox").hide();
		$(".m_nav").hide();
		$(".linebox").hide();
	});
	$(".shadow").on("click",".ShowLogin",function(){
		$(".mask").show();
		$(".loginbox").show();
	});
	$(".line").click(function(){
		$(".mask").show();
		$(".linebox").show();
	})

	$('.switch_list_box').click(function(){
		useringSwitch($(this));
	});
	$("#send").click(function(){
		memberLogin();
	});
	$("#reset").click(function(){
		ReSetPWD.ReSet("default");
	});
	$("#PWDReSet").click(function(){
		ReSetPWD.ReSet("reset");
	});
	$(".logout").click(function(){
		LogOut();
	});
	$("#editmember").click(function(){
		EditMember();
	});
	$("#forget").click(function(){
		ForGet();
	});
	$("#showNav").click(function(){
		ShowNav();
	})
});