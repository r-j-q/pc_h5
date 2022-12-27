$(function(){
    $(".FullY").click(function(){
        $(".FullY").removeClass('s_pan');
        $(this).addClass('s_pan');
    //    $(".col-md-12").addClass('h');
        var v= $(this).attr("data-name");
        $(".col-md-12").addClass('h');
        $('.'+v).removeClass('h');
           
        })
    // $(".oncs").mouseenter(function(){
       
    //     $(this).css("color","#3e6bf2");
    //     $(".asb ").css("color","#3e6bf2");
    //     $(".bsb").css("color","#3e6bf2");
           
    //     })
    // $(".csb").mouseout (function(){
       
    //     $(this).css("color","#e3e3e3");
           
    //     })


        
})