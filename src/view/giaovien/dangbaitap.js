

(function(){
    var namemodal = "giaoviendangbaitap";
    var modal = null;
    $(document).on(namemodal+"_Before",function(event,e,page){
        modal = $(page.el);

        // window.user.storage.clear();

    }).on(namemodal+"_Init",function(event,e,page){
         modal = $(page.el);
         var data = namemodal.pageData();

         modal.find(".name").val(data.name);

        modal.find("form").validate({
            submitHandler : function(form){
                 data = $.extend(data,$(form).serializeObject(),true);

                console.log(data);

                
                window.showLoader();
                post(site_url_ajax("monhoc.php?a=dangbai"),data,function(r){

                    try{

                        if(r.code){
                          

                            //cache data now

                            mainView.router.back();
                            
                        }else{
                            alert(r.error);
                        }
                    }catch(e){
                        alert(e);
                    }
                    
                },true); 
                
            }
        });
    }).on(namemodal+"_Leave",function(event,e,page){
        
    });
})();


    