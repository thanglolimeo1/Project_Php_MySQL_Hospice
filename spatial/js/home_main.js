$(function(){
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeInRight',
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true
	});
})
