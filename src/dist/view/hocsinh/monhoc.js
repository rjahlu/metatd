

(function(){
    var namemodal = "hocsinhmonhoc";
    var modal = null;
    $(document).on(namemodal+"_Before",function(event,e,page){
        modal = $(page.el);

        // window.user.storage.clear();

    }).on(namemodal+"_Init",function(event,e,page){
         modal = $(page.el);
        

       
    }).on(namemodal+"_Leave",function(event,e,page){
        
    });
})();


    