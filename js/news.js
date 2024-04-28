// JavaScript Document


function ShowNews(eve){
	
	var key = eve.data("no");
	$(".loading").show();
	$.post(
		"action/ajax.php?shownews=1",
		{"id":key},
		function(msg){
			console.log(msg);
			$(".loading").hide();
			$(".index-course-text-title").children("h1").text(msg.title);
			$(".index-course-text-title").children("h2").text(msg.description);
			$(".before-images").children("imf").attr("src",msg.img);
			$(".news-content").text(msg.content);
		},
		"json")
}

$(function(){
	$(".shownews").click(function(){
		ShowNews($(this));
	})
	
})