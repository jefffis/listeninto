var $linky = $('#list').find('.linky');


$(function(){

	$linky.on('click',function(){
		var $this = $(this);
		var $this_icon = $this.find('span');
		var $this_detail = $this.next('.hide');
		if($this_detail.hasClass('show')){
			$this_icon.removeClass('icon-resize-small').addClass('icon-resize-full');
			$this_detail.removeClass('show');
		}else{
			$this_icon.removeClass('icon-resize-full').addClass('icon-resize-small');
			$this_detail.addClass('show');
		}
		return false;
	});

});