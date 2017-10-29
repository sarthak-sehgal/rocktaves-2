$(document).ready(function(){
    $("#nav").hide(0).delay(700).fadeIn(500);

    $(".title").hide(0).delay(100).fadeIn(1000);

    setTimeout(function(){
    	$(".oasislogo").css('opacity','1');
   },700);

	$(".nav-desc, .nav-rules, .nav-contact").click(function(){
		$('.title').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.title').css('display','none');
		   },500);
	});
	
	$(".nav-desc").click(function(){
		$('.nav-home, .nav-rules, .nav-contact').css({
			'background-color' : 'rgba(255,255,255,0.7)',
			'color' : '#000',
		});
		$('.nav-desc').css({
			'background-color' : 'rgba(0,0,0,0.7)',
			'color' : '#fff',
		});
		$('.desc-box').css('display', 'flex');
		$('.desc-box').animate({ marginTop: '4vh', opacity:'1' }, 750);

		$('.rules-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.rules-box').css('display','none');
		   },500);
		$('.contact-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.contact-box').css('display','none');
		   },500);
	});

	$(".nav-rules").click(function(){
		$('.nav-home, .nav-desc, .nav-contact').css({
			'background-color' : 'rgba(255,255,255,0.7)',
			'color' : '#000',
		});
		$('.nav-rules').css({
			'background-color' : 'rgba(0,0,0,0.7)',
			'color' : '#fff',
		});
		$('.rules-box').css('display', 'flex');
		$('.rules-box').animate({ marginTop: '4vh', opacity:'1' }, 750);

		$('.desc-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.desc-box').css('display','none');
		   },500);

		$('.contact-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.contact-box').css('display','none');
		   },500);
	});
	
	$(".nav-home").click(function(){
		$('.nav-desc, .nav-rules, .nav-contact').css({
			'background-color' : 'rgba(255,255,255,0.7)',
			'color' : '#000',
		});
		$('.nav-home').css({
			'background-color' : 'rgba(0,0,0,0.7)',
			'color' : '#fff',
		});
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
		$('.contact-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.contact-box').css('display','none');
		   },1000);
	});

	$(".nav-contact").click(function(){
		$('.nav-home, .nav-desc, .nav-rules').css({
			'background-color' : 'rgba(255,255,255,0.7)',
			'color' : '#000',
		});
		$('.nav-contact').css({
			'background-color' : 'rgba(0,0,0,0.7)',
			'color' : '#fff',
		});
		$('.contact-box').css('display', 'flex');
		$('.contact-box').animate({ marginTop: '4vh', opacity:'1' }, 750);

		$('.desc-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.desc-box').css('display','none');
		   },500);
		$('.rules-box').animate({ marginTop: '300px', opacity:'0' }, 500);
		setTimeout( function(){
		$('.rules-box').css('display','none');
		   },500);
	});
});