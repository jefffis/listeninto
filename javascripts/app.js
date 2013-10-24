var messages = ['When are <strong>The Black Keys</strong> coming to town next? Where will they be <strong class="r">next month?</strong>', 'When is <strong>Miley Cyrus</strong> coming to town next? Where will she be <strong class="r">next month?</strong>', 'When is <strong>50 Cent</strong> coming to town next? Where will he be <strong class="r">next month?</strong>', 'When are <strong>Lez Zeppelin</strong> coming to town next? Where will they be <strong class="r">next month?</strong>'];
function getMessage() {
   return messages[Math.floor(Math.random() * messages.length)];
}
var $band = $('#band');
var $linky = $('#list').find('.linky');

$(function(){

	$band.html(getMessage());

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