$(document).ready(function(){
    $('.hide_sidebar_btn').click(function(){
    	$('.hide_sidebar').toggle();
    });


  var arrow_face= 'down';
      $('.discount_btn').click(function(){
        if (arrow_face == 'down'){
        $('.glyphicon-menu-down').css({'transform': 'rotateZ(-180deg) translateX(-5px)', 'transform-origin' :'center', 'transition-duration':'0.4s'});
        arrow_face = 'up';
      }

       else if (arrow_face == 'up'){
        $('.glyphicon-menu-down').css({'transform': 'rotateZ(360deg)', 'transform-origin' :'center', 'transition-duration':'0.4s'});
        arrow_face = 'down';
      }

      });

      $('.back-btn').click(function(){
        history.back();
      });

      /* cart quantity addition and reduction buttons */
$('.quantity-plus').click(function(){
        var quantity = parseInt($(this).parent().find('input[type= number]').val()); /* fetch the clicked input field value */
        $(this).parent().find('input[type= number]').val(quantity + 1);     /* increase the quantity by 1 and place back */
     });

      $('.quantity-minus').click(function(){
        var quantity = parseInt($(this).parent().find('input[type= number]').val());  /* fetch the clicked input field value */
        if(quantity != 0){                                                          /* if the quantity is more than 0 */
          $(this).parent().find('input[type= number]').val(quantity - 1);       /* decrease the quantity by 1 and place back */
        }
     });
      

  });
/*
    $(function () {
        $('.sign-in-btn').click(function() {
            $('#login-modal').on('hidden.bs.modal', function() {
                $('#login-modal1').modal('show'); 
            }).modal('hide');
        });
    });
*/