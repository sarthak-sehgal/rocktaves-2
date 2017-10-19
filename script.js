$(document).ready(function(){
    $("#nav").hide(0).delay(700).fadeIn(500);

    $(".title").hide(0).delay(100).fadeIn(1000);

    setTimeout( function(){
    	$(".oasislogo").css('opacity','1');
   },700);

   //  $(".oasislogo").hover(function (){
   //  	$(".oasistext").stop().animate({'opacity':'1'},200);
   //  }, function (){
   //  	$(".oasistext").stop().animate({'opacity':'0.5'},200);
   //  });


	$(".nav-desc, .nav-rules").click(function(){
		$('.title').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.title').css('display','none');
		   },500);
	});
	
	$(".nav-desc").click(function(){
		$('.desc-box').css('display', 'flex');
		$('.desc-box').animate({ marginTop: '4vh', opacity:'1' }, 750);

		$('.rules-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.rules-box').css('display','none');
		   },500);
	});

	$(".nav-rules").click(function(){
		$('.rules-box').css('display', 'flex');
		$('.rules-box').animate({ marginTop: '4vh', opacity:'1' }, 750);

		$('.desc-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.desc-box').css('display','none');
		   },500);
	});
	
	$(".nav-home").click(function(){
		$('.title').css('display', 'flex');
		$('.title').animate({ marginTop: '0px', opacity:'1' }, 750);

		$('.desc-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.desc-box').css('display','none');
		   },1000);

		$('.rules-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.rules-box').css('display','none');
		   },1000);
	});

	$titlewidth = ($(".title").width()) / 3 ; // what I actually  want is width of .title-box but it is coming out to be 0 by this method: flaw in .width()
	console.log($titlewidth);
	$('.nav-home, .nav-desc, .nav-rules').css('min-width', $titlewidth+'px');
	

	// $('.nav').css('min-width', $titlewidth+'px');
	// $titlewidth = $titlewidth + 36;
	// $titlewidth = $titlewidth/3;
	// var element = document.getElementsByClassName('title')[0];
	// var positionInfo = element.getBoundingClientRect();
	// var width = positionInfo.width;
	// console.log(width);
});