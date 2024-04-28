// JavaScript Document

function ShowShop(eve){
	var srcV =eve.children("img").attr("src");
	
	$("#ShowShop").attr("src",srcV);
};
function Base(){
	$("#ShowShop").attr("src",$("#base").attr("src"));
}
function tsetimer(){
	
	//alert($(".slick-active").eq(1).children(".ShowShop").data("shop"))
	ShowShop($(".slick-active").eq(0).children(".ShowShop"));
} 
$(function(){
	//Base();
	// self.setInterval(tsetimer,500) ;
	/*
	$(".ShowShop").click(function(){
		ShowShop($(this));
	});
	*/
	 $('.prd-info-bigimg').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.regular'
});
	
	
	 $(".regular").slick({
		 
        dots: false,
		arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
	    autoplay: true,
  		autoplaySpeed: 5000,
		 asNavFor: '.prd-info-bigimg',
		
  focusOnSelect: true,
		 // prev arrow
prevArrow: '<a class="slick-prev shopbotton lll"><img src="../img/prev.png"></a>',
 
// next arrow
 
nextArrow: '<a class="slick-next shopbotton rrr"><img src="../img/next.png"></a>',

      });
})
