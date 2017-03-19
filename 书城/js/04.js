$(function(){
	var item=$('.choise .item');
	item.on('click',function(){
		item.removeClass('active');
		$(this).addClass('active');
	})
})