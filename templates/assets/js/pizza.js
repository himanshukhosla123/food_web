$(document).ready(function(){
//alert('click on ingredients to add them');

var z_index_sauce = 1;
var z_index_ingredients = 1000;

var price_left = 0;
var price_right	= 0;

//$('.show1').show();
$('.base').click(function(){
	$('.base').removeClass('large_base');
	$(this).addClass('large_base');
});

$('.base1').click(function(){
	$('.ingre_hide').hide();
	$('.show1').show();
	$('.sauce_list').hide();
	$('.sauce_list1').show();
});
$('.base2').click(function(){
	$('.ingre_hide').hide();
	$('.show2').show();
	$('.sauce_list').hide();
	$('.sauce_list2').show();
});

$('.sauce').click(function(){
	var ingredient_target = $(this).attr('ingredient-target');
	var name_to_be_shown_to_user = $(this).attr('name-to-be-shown-to-user');
	var name_to_be_shown_to_user_val = $(this).attr('name-to-be-shown-to-user').replace(' ', '-');
	var name_sent_to_backend =$(this).attr('name-sent-to-backend');
	var side = $(this).attr('side');
	var price = parseInt($(this).attr('price'));

	z_index_sauce += 1;

	if(side == "left"){

		if($(this).is('.active')){
			$(ingredient_target).fadeOut('800');
			var sauce = $('.sauces-left-base').text();
			sauce = sauce.replace(name_sent_to_backend + ',', '');
			$('.sauces-left-base').text(sauce);
			$('.droplist_base1').find('[value=' + name_to_be_shown_to_user_val +']').remove();
			price_left -= price;
			putPrice(price_left, price_right);
			$(this).removeClass('active');
		}
		else{
			
			$(ingredient_target).fadeIn('800').css('z-index', z_index_sauce);
			$('.sauces-left-base').append(name_sent_to_backend + ',');
			$('.droplist_base1').append('<option value='+ name_to_be_shown_to_user_val + '>' + name_to_be_shown_to_user + '</option>');
			price_left += price;
			putPrice(price_left, price_right);
			$(this).addClass('active');
		}
	}
	else if( side == "right"){

		if($(this).is('.active')){
			$(ingredient_target).fadeOut('800');
			var sauce = $('.sauces-right-base').text();
			sauce = sauce.replace(name_sent_to_backend + ',', '');
			$('.sauces-right-base').text(sauce);
			$('.droplist_base2').find('[value=' + name_to_be_shown_to_user_val +']').remove();	
			price_right -= price;
			putPrice(price_left, price_right);
			$(this).removeClass('active');
		}
		else{
			$(ingredient_target).fadeIn('800').css('z-index', z_index_sauce);
			$('.sauces-right-base').append(name_sent_to_backend + ',');
			$('.droplist_base2').append('<option value='+ name_to_be_shown_to_user_val + '>' + name_to_be_shown_to_user + '</option>');
			price_right += price;
			putPrice(price_left, price_right);
			$(this).addClass('active');
		}
	}
});

$('.ingredient').click(function(){
	var ingredient_target = $(this).attr('ingredient-target');
	var name_to_be_shown_to_user = $(this).attr('name-to-be-shown-to-user');
	var name_to_be_shown_to_user_val = $(this).attr('name-to-be-shown-to-user').replace(' ', '-');
	var name_sent_to_backend =$(this).attr('name-sent-to-backend');
	var side = $(this).attr('side');
	var price = parseInt($(this).attr('price'));

	z_index_ingredients += 1;

	if(side == "left"){

		if($(this).is('.active')){
			$(ingredient_target).fadeOut('800');
			var sauce = $('.sauces-left-base').text();
			sauce = sauce.replace(name_sent_to_backend + ',', '');
			$('.ingredients-left-base').text(sauce);
			$('.droplist_base1').find('[value=' + name_to_be_shown_to_user_val +']').remove();
			price_left -= price;
			putPrice(price_left, price_right);
			$(this).removeClass('active');
		}
		else{
			$(ingredient_target).fadeIn('800').css('z-index', z_index_ingredients);
			$('.ingredients-left-base').append(name_sent_to_backend + ',');
			$('.droplist_base1').append('<option value='+ name_to_be_shown_to_user_val + '>' + name_to_be_shown_to_user + '</option>');
			price_left += price;
			putPrice(price_left, price_right);
			$(this).addClass('active');
		}
	}
	else if( side == "right"){

		if($(this).is('.active')){
			$(ingredient_target).fadeOut('800');
			var sauce = $('.sauces-right-base').text();
			sauce = sauce.replace(name_sent_to_backend + ',', '');
			$('.ingredients-right-base').text(sauce);
			$('.droplist_base2').find('[value=' + name_to_be_shown_to_user_val +']').remove();	
			price_right -= price;
			putPrice(price_left, price_right);
			$(this).removeClass('active');
		}
		else{
			$(ingredient_target).fadeIn('800').css('z-index', z_index_ingredients);
			$('.ingredients-right-base').append(name_sent_to_backend + ',');
			$('.droplist_base2').append('<option value='+ name_to_be_shown_to_user_val + '>' + name_to_be_shown_to_user + '</option>');
			price_right += price;
			putPrice(price_left, price_right);
			$(this).addClass('active');
		}
	}
});


$('.ingre_hide>img').click(function(){

	if($(this).is('.down')){
		$(this).siblings('ul').find('.in_hide_all').slideUp('fast');
		$(this).removeClass('down');	
	}

	else{
		$('.ingre_hide>img').removeClass('down');
		$('.in_hide_all').slideUp('fast');
		$(this).siblings('ul').find('.in_hide_all').slideDown('fast');
		$(this).addClass('down');
	}
});

function putPrice(price1, price2){

	new_amount = price1 + price2;
	$('.total-amount').val(new_amount);
	return 0;
}

$('.standard_choice').click(function(){

	var ingredient_target = $(this).attr('ingredient-target');
	var side = $(this).attr('side');
	var price = parseInt($(this).attr('price'));
	var name_sent_to_backend = $(this).attr('name-sent-to-backend');
	var name_to_be_shown_to_user = $(this).attr('name-to-be-shown-to-user');
	var name_to_be_shown_to_user_val = $(this).attr('name-to-be-shown-to-user').replace(' ', '-');
	var current_base_size = $('.size_slider').slider('value');

	
	if(side == "left"){

		if($(this).is('.active')){
			price_left = 0;
			putPrice(price_left, price_right);
			$(ingredient_target).fadeOut('800');
			$('.standard_choice-left-base').val('');
			$('.droplist_base1').find('[value='+ name_to_be_shown_to_user_val +']').remove();
			$('.ingredients-tab>li a').removeClass('disabled-tab');
			$(this).removeClass('active');
		}

		else{
			$('.standard_choice').removeClass('active');
			price_left = price;
			putPrice(price_left, price_right);
			$('.sauces-left-base').empty();
			$('.ingredients-left-base').empty();
			$('.standard_choice-left-base').val(name_sent_to_backend);
			$('.top1').fadeOut();
			$('.ingredient[side="left"]').removeClass('active');
			$(ingredient_target).fadeIn('800');
			$('.ingredients-tab>li a').addClass('disabled-tab');
			$('.droplist_base1').find('[value]').remove();
			$('.droplist_base1').append('<option value='+ name_to_be_shown_to_user_val +'>' + name_to_be_shown_to_user +'</option>');
			//change_base_size(current_base_size);
			$(this).addClass('active');
		}
	}

	if(side == "right"){
		if($(this).is('.active')){
			price_right = 0;
			putPrice(price_left, price_right);
			$('.standard_choice-right-base').val('');
			$('.ingredients-tab>li a').removeClass('disabled-tab')
			$(ingredient_target).fadeOut('800');
			$(this).removeClass('active');
		}

		else{
			$('standard_choice').removeClass('active');
			price_right = price;
			putPrice(price_left, price_right);
			$('.sauces-right-base').empty();
			$('.ingredients-right-base').empty();
			$('.standard_choice-right-base').val(name_sent_to_backend);
			$('.top2').fadeOut();
			$('.ingredient[side="right"]').removeClass('active');
			$(ingredient_target).fadeIn('800');
			$('.ingredients-tab>li a').addClass('disabled-tab');
			$('.droplist_base2').find('[value]').remove();
			$('.droplist_base2').append('<option value='+ name_to_be_shown_to_user_val +'>' + name_to_be_shown_to_user +'</option>');
			//change_base_size(current_base_size);
			$(this).addClass('active');
		}
	}
});


	$('.base-selector').click(function(){
		var base_size = $(this).attr('size');
		$('.base-selector').removeClass('active');
		$(this).addClass('active');
		$('.base-size').val(base_size);

		switch (base_size){
			case 'small' :
		        $('.test').css('transform', 'scale(0.9)');  
				break;
			case 'medium' :
		        $('.test').css('transform', 'scale(1)'); 
		        break;
		    case 'large' :
		        $('.test').css('transform', 'scale(1.1)');  
		}

	});

//$('.hide_sidebar').hide();
$('.hide_sidebar_btn').click(function(){
	$('.hide_sidebar').toggle();
});

$('.reset').click(function(){

	z_index = 1;
	$('.top1').hide();
	$('.top2').hide();
	$('.ingredient').each(function(){
		$(this).removeClass('active');
	});
	$('.sauce').each(function(){
		$(this).removeClass('active');
	});
	$('.standard_choice').each(function(){
		$(this).removeClass('active');
	});

	price_right = 0;
	price_left = 0;
	putPrice(price_right, price_left);
	$('.pizza_detail1 textarea').empty();
	$('.droplist_base1').find('option').remove();
	$('.droplist_base2').find('option').remove();

});


$('.back-btn').click(function(e){
	e.preventDefault();
	history.back();
});
/*
$('.submit-btn').click(function(){
	$('.pizza_detail1').submit();
})*/

});