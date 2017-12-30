$(document).ready(function(){
    var temp=$(window).height();
    console.log(temp);
    $(".tab-content").css("height",temp-150+"px");
    $(".order_area").css("height",temp-158+"px");
    $(".order_content").css("height",temp-158-67+"px");
    
	for(var i=1;i<=40;i++){	
		$('.tab-content .all_tables').append("<div class='tabel_btn'><button type='button' class='btn btn-default'>"+i+"</button</div>");
	}
    for(var i=1;i<=10;i++){	
		$('.tab-content .active_tables').append("<div class='tabel_btn'><button type='button' class='active_tabel btn btn-default'>"+i+"</button</div>");
	}
    for(var i=1;i<=5;i++){	
		$('.tab-content .pending_tables').append("<div class='tabel_btn'><button type='button' class='pending_tabel btn btn-default'>"+i+"</button</div>");
	}
    for(var i=1;i<=30;i++){	
		$('.tab-content .success_tables').append("<div class='tabel_btn'><button type='button' class='success_tabel btn btn-default'>"+i+"</button</div>");
	}
})