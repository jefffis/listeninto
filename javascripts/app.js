var $choosy = $('#choosy');
var $listitems = $choosy.find('li');
var $listlinks = $listitems.find('a');
var $selecty = $('#selecty');
var $selection = $('#selection');
var $cancel = $('.back');
var $btn = $('.btn');
var $main = $('#main');
var $cls = $('#close');
var $none = $('.none');
var $info = $('#info');
var $table = $info.find('table');
var $td = $info.find('td');
var $th = $info.find('th');

$(function(){

	$table.each(function(){
		$(this).attr({
			'width':'',
			'height':''
		});
	});

	$td.each(function(){
		$(this).attr({
			'width':'',
			'height':''
		});
	});

	$th.each(function(){
		$(this).attr({
			'width':'',
			'height':''
		});
	});

	$listlinks.on('click',function(){
		var $this = $(this);
		var $this_parent = $this.parent();
		var $this_val = $this.data('location');
		if($choosy.hasClass('open')){
			$listitems.removeClass('selected');
			$this_parent.addClass('selected');
			$choosy.removeClass('open');
			$selecty.removeClass('hide');
			$selection.val($this_val);
			$cls.removeClass('show');
		}else{
			$choosy.addClass('open');
			$selecty.addClass('hide');
			$('html,body').animate({
				scrollTop: $choosy.offset().top - 30
			}, 500);
			$cls.addClass('show');
		}
		$none.hide();
		return false;
	});

	$cls.on('click',function(){
		$choosy.removeClass('open');
		$selecty.removeClass('hide');
		$cls.removeClass('show');
		if($none.hasClass('selected')){
			$none.show();
		}
	});

	$selecty.on('click',function(){
		var $this = $(this);
		$this.addClass('hide');
		$choosy.addClass('open');
		$('html,body').animate({
			scrollTop: $choosy.offset().top - 30
		}, 500);
		$none.hide();
		$cls.addClass('show');
		return false;
	});

	//$btn.on('click',function(){
		//var $this = $(this);
		//var $url = $this.attr('href');
		//console.log($url);
		//$('html').load($url);
		//return false;
	//});

	$cancel.on('click',function(){
		//alert(history.length);
		//if(window.history.go(-window.history.length) > 0){
		///	history.back();
		//	return false;
		//}else{
		//	return;
		//}
		history.back();
		return false;
	});

});