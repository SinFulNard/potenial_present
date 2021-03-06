$(document).ready(function(){
	//Tooltips for gifts
	$('.edit').tooltip({'placement':'top'});
  $('.delete').tooltip({'placement':'top'});
  $('.tip-info').tooltip({'placement':'top'});
	$('.link-buy').tooltip({'placement':'bottom'});
  $('.long-name').tooltip({'placement':'top'});

	//Couldn't decide on a good header so random h1 for home page
	var randomNum = Math.ceil(Math.random()*4);

	switch (randomNum) {
		case 1:
		  $('#randomHeader').html("Gift yourself.");
			break;
		case 2:
      $('#randomHeader').html("Say no to socks.");
      break;
    case 3:
      $('#randomHeader').html("No more flannel pyjamas.");
      break;
    case 4:
      $('#randomHeader').html("Give gifts, make happy.");
      break;
		default:
			$('#randomHeader').html("Potential presents.");
	};

	//Basic input change for the Sign in hover box
	$('#nameInput').find('input').attr('value', 'username');
	$('#nameInput').find('input').focus(function(){
		$(this).attr('value', '');
	});

  $('#passInput').find('input').attr('value', '123456789');
  $('#passInput').find('input').focus(function(){
    $(this).attr('value', '');
  });

	//Fresh capsule config
	$('#linkNameInput').attr('value', 'link name');
  $('#linkNameInput').focus(function(){
    $(this).attr('value', '');
  });

  $('#linkInput').attr('value', 'link');
  $('#linkInput').focus(function(){
    $(this).attr('value', '');
  });

	//Hide the feature request text on click
	$('.feature').click(function(){
		$('.welcome').slideUp('1000');
	});
	
	//Expand the list capsules on mouseenter
	$('.present').mouseenter(function(){
		$(this).find('.details').slideDown();
		$(this).find('.caret').attr('id', 'pointUp');
	});

	$('.present').mouseleave(function(){
    $(this).find('.details').slideUp();
    $(this).find('.caret').attr('id', 'pointDown');
	});

});
