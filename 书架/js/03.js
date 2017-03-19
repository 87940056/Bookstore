$(function(){
	var screen=$('.head .screen'),
		sort=$('.head .sort');
	screen.on('click',function(){
		$('.head .shadow').toggle();
		$('.head .screenBox').toggle();
	})
	sort.on('click',function(){
		sort.removeClass('active');
		$(this).addClass('active');
	})

})