$(function(){
	var itemFive=$('.choise .item');
	itemFive.on('click',function(){
		itemFive.removeClass('active');
		$(this).addClass('active');
	})
})