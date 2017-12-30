$(document).ready(function(){
    //no of slides in feedback
    var noOfSlides=18;
    currentSlide=0;
    actualSlides=$(".feedback ul li").length;
    console.log(actualSlides);
    var starClickCounter=0,ClearTimer;
    $(".feedback .modal-body ul").css("width",598*noOfSlides+"px");
    
     $(".feedback #myModal").modal();
    
    $(".feedback .overall_rating input").on("click",function(){
        starClickCounter++;
        if(starClickCounter==1)
        ClearTimer=setTimeout(function(){nextSlide()},1000);
        else{
            clearInterval(ClearTimer);
            ClearTimer=setTimeout(function(){nextSlide()},1000);
        }
    });
    
    
    $(".feedback div:not(.overall_rating) input").on("click",function(){
        var parentTable=$(this).parents("tbody")[0];
        if(parentTable!=null&& parentTable!=undefined){
        var noOfChildren=parentTable.children.length;
        var selectedChildren=$(parentTable).find("input:checked").length;
        if(noOfChildren===selectedChildren){
        starClickCounter++;
        if(starClickCounter==1)
        ClearTimer=setTimeout(function(){nextSlide()},300);
        else{
            clearInterval(ClearTimer);
            ClearTimer=setTimeout(function(){nextSlide()},300);
        }
        }}
        
    });
    
    
    $(".specific_item_rating input[type=radio]").on("click",function(){
//    for testing feedback 2 file
//    var i=this.parentNode.parentNode.id;
        
//    for djangio file    
    var i=this.parentNode.id;
    i=i.charAt(i.length-1); 
    if($(".feedback  #category"+i+" input:checked").val()>3){
     $(".feedback .category"+i).hide();
     $(".feedback .category"+i+" input.star-5").prop("checked",true); 
    }
    else{
     $(".feedback .category"+i).show();
     $(".feedback .category"+i+" input.star-5").prop("checked",false);
    }
    
        
        
         
    });
    
});

function nextSlide(){
//    console.log(currentSlide);
    if(++currentSlide<=actualSlides-1){
    $(".feedback ul").css("transform","translateX(-"+(currentSlide*598)+"px)");
    manageImage(currentSlide);}
    else{
        --currentSlide;
    }
}

function resetSlides(){
    $(".feedback ul input:checked").prop("checked",false);
    $(".feedback ul label.star").css({"transform":'scale(1) rotate(0deg)'});
    $(".feedback ul").css("transform","translateX(0px)");
    $(".feedback input").prop("value","");
    $(".feedback textarea").prop("value","");
    currentSlide=0;
    manageImage(currentSlide);
}


function prevSlide(){
    $(".feedback ul").css("transform","translateX(-"+(--currentSlide)*598+"px)");
    manageImage(currentSlide);
}


function foodListGenerator(itemList){
    var list;
    for(var i=1;i<=5;i++){
        var idGenerator=i*10*itemList.length;
        var itemName='chowmein'+i;
        list='<tr><td>'+itemName+'</td><td><div class="center"><div class="stars"><input class="star star-5" id="stars'+idGenerator+'" type="radio" name="'+itemName+'" value="5"/><label class="star star-5" for="stars'+idGenerator+++'"></label><input class="star star-4" id="stars'+idGenerator+'" type="radio" name="'+itemName+'" value="4"/><label class="star star-4" for="stars'+idGenerator+++'"></label><input class="star star-3" id="stars'+idGenerator+'" type="radio" name="'+itemName+'" value="3"/><label class="star star-3" for="stars'+idGenerator+++'"></label><input class="star star-2" id="stars'+idGenerator+'" type="radio" name="'+itemName+'" value="2"/><label class="star star-2" for="stars'+idGenerator+++'"></label><input class="star star-1" id="stars'+idGenerator+'" type="radio" name="'+itemName+'" value="1"/><label class="star star-1" for="stars'+idGenerator+++'"></label></form></div></div></td></tr>';
    $("."+itemList+" table").append(list);
    }
}

function manageImage(index){
    var img=$(".main img")[0];
    var img1=$("#firstimg")[0];
    var img2=$("#secondimg")[0];
//     console.log(img1);
    switch(++index){
        case 1:img.src=img1.src;
        case 2:break;
        default:img.src=img2.src;
             break;     
    }
}
