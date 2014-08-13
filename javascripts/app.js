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

	$('#note a').on('click',function(){
		localStorage.setItem('hide-note',1);
		$('#note').addClass('hide');
	});

	if(localStorage.getItem('hide-note')!=1){
		$('#note').removeClass('hide').show();
	}

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

	if($(window).width()>700){
		$('img.lp').each(function(){
			var $this = $(this);
			var $this_src = $this.data('src');
			//alert($this_src);
			$(this).attr('src',$this_src);	
		});
	}
	$(window).resize(function(){
		if($(window).width()>700){
			console.log($(window).width());
			$('img.lp').each(function(){
				var $this = $(this);
				var $this_src = $this.data('src');
				//alert($this_src);
				$(this).attr('src',$this_src);	
			});
		}
	});

});

(function(e){var d=e.document;if(!location.hash&&e.addEventListener){window.scrollTo(0,1);var c=1,b=function(){return e.pageYOffset||d.compatMode==="CSS1Compat"&&d.documentElement.scrollTop||d.body.scrollTop||0},a=setInterval(function(){if(d.body){clearInterval(a);c=b();e.scrollTo(0,c===1?0:1)}},15);e.addEventListener("load",function(){setTimeout(function(){if(b()<20){e.scrollTo(0,c===1?0:1)}},0)})}})(this);