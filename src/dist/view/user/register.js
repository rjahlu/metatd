

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
                    mainView.router.navigate("/user/registerhocsinh/", data);
                }else if(data.role=="phuhuynh"){
                    mainView.router.navigate("/user/registerophuhuynh/", data);
                }else if(data.role=="giaovien"){
                    mainView.router.navigate("/user/registergiaovien/", data);
                } 
                
            }
        });
    }).on(namemodal+"_Leave",function(event,e,page){
        
    });
})();


    