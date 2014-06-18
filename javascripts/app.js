/*var messages = ['When are <strong>The Black Keys</strong> coming to town next? Where will they be <strong class="r">next month?</strong>', 'When is <strong>Miley Cyrus</strong> coming to town next? Where will she be <strong class="r">next month?</strong>', 'When is <strong>50 Cent</strong> coming to town next? Where will he be <strong class="r">next month?</strong>', 'When are <strong>Lez Zeppelin</strong> coming to town next? Where will they be <strong class="r">next month?</strong>'];
function getMessage() {
   return messages[Math.floor(Math.random() * messages.length)];
}
var $band = $('#band');
var $linky = $('#list').find('.linky');
var $settings = $('#settings');
var $edit_settings = $('#edit-settings');
var $back = $('.back');
var $cls = $('#cls');*/

var $show_more = $('.show-more');
var $more = $('.more');

$(function(){

	$show_more.on('click', function(){
		var $this = $(this);
		var $this_more = $this.parent().next('.more');
		if($this_more.hasClass('show')){
			$this.removeClass('active');
			$this_more.removeClass('show');
		}else{
			$this.addClass('active');
			$this_more.addClass('show');
			$('html,body').animate({
				scrollTop: $this.offset().top - 30
			}, 500)
		}
	});

	if($(window).width()>770){
		$('img.lp').each(function(){
			var $this = $(this);
			var $this_src = $this.data('src');
			//alert($this_src);
			$(this).attr('src',$this_src);	
		});
	}
	$(window).resize(function(){
		if($(window).width()>770){
			$('img.lp').each(function(){
				var $this = $(this);
				var $this_src = $this.data('src');
				//alert($this_src);
				$(this).attr('src',$this_src);	
			});
		}
	});

});


