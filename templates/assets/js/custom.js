jQuery(function($){jQuery(window).bind('scroll',function(){if(jQuery(window).scrollTop()>200){jQuery('.mu-main-navbar').addClass('navbar-bg');jQuery('.navbar-brand').addClass('navbar-brand-small');}else{jQuery('.mu-main-navbar').removeClass('navbar-bg');jQuery('.navbar-brand').removeClass('navbar-brand-small');}});jQuery('.mu-top-slider').slick({dots:false,infinite:true,arrows:true,speed:500,autoplay:true,fade:true,cssEase:'linear'});jQuery('.mu-abtus-slider').slick({dots:false,infinite:true,arrows:false,speed:500,autoplay:true,fade:true,cssEase:'linear'});jQuery('#datepicker').datepicker();jQuery('.mu-chef-nav').slick({dots:true,arrows:false,infinite:true,speed:300,slidesToShow:4,slidesToScroll:2,autoplay:true,autoplaySpeed:2500,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:true,dots:true}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});jQuery('.mu-testimonial-slider').slick({dots:true,infinite:true,arrows:false,autoplay:true,speed:500,cssEase:'linear'});jQuery('.counter').counterUp({delay:10,time:1000});$('body').append("<div id='portfolio-popup'><div class='portfolio-popup-area'><div class='portfolio-popup-inner'></div></div></div>");jQuery('.mu-view-btn').on('click',function(event){event.preventDefault();$('#portfolio-popup').addClass("portfolio-popup-show");$('#portfolio-popup').animate({"opacity":1},500);var portfolio_detailscontent=$(this).parent(".mu-single-gallery-info").find(".portfolio-detail").html();$(".portfolio-popup-inner").html(portfolio_detailscontent);});$(document).on('click','.modal-close-btn',function(event){event.preventDefault();$('#portfolio-popup').removeClass("portfolio-popup-show");$('#portfolio-popup').animate({"opacity":0},500);});var lastId,topMenu=$(".mu-main-nav"),topMenuHeight=topMenu.outerHeight()+13,menuItems=topMenu.find('a[href^=\\#]'),scrollItems=menuItems.map(function(){var item=$($(this).attr("href"));if(item.length){return item;}});menuItems.click(function(e){var href=$(this).attr("href"),offsetTop=href==="#"?0:$(href).offset().top-topMenuHeight+32;jQuery('html, body').stop().animate({scrollTop:offsetTop},1500);jQuery('.navbar-collapse').removeClass('in');e.preventDefault();});jQuery(window).scroll(function(){var fromTop=$(this).scrollTop()+topMenuHeight;var cur=scrollItems.map(function(){if($(this).offset().top<fromTop)return this;});cur=cur[cur.length-1];var id=cur&&cur.length?cur[0].id:"";if(lastId!==id){lastId=id;menuItems.parent().removeClass("active").end().filter("[href=\\#"+id+"]").parent().addClass("active");}})
jQuery('ul.nav li.dropdown').hover(function(){jQuery(this).find('.dropdown-menu').stop(true,true).delay(200).fadeIn(200);},function(){jQuery(this).find('.dropdown-menu').stop(true,true).delay(200).fadeOut(200);});jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>300){jQuery('.scrollToTop').fadeIn();}else{jQuery('.scrollToTop').fadeOut();}});jQuery('.scrollToTop').click(function(){jQuery('html, body').animate({scrollTop:0},800);return false;});jQuery(window).load(function(){jQuery('#aa-preloader-area').delay(300).fadeOut('slow');});jQuery(".scroll").click(function(event){event.preventDefault();jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top},700,'swing');});});