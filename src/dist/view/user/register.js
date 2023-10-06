

(function(){
    var namemodal = "userregister";
    var modal = null;
    $(document).on(namemodal+"_Before",function(event,e,page){
        modal = $(page.el);

        // window.user.storage.clear();

    }).on(namemodal+"_Init",function(event,e,page){
         modal = $(page.el);
        modal.find("form").validate({
            submitHandler : function(form){
                var data = $(form).serializeObject();

                console.log(data);

                if(data.role=="hocsinh"){
                    "/user/registerhocsinh/".navigate(data);
                }else if(data.role=="phuhuynh"){
                    "/user/registerophuhuynh/".navigate(data);
                }else if(data.role=="giaovien"){
                    "/user/registergiaovien/".navigate(data);
                } 
                
            }
        });
    }).on(namemodal+"_Leave",function(event,e,page){
        
    });
})();


    