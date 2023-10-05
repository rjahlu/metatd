

(function(){
    var namemodal = "userforgot";
    var modal = null;
    $(document).on(namemodal+"_Before",function(event,e,page){
        modal = $(page.el);

        // window.user.storage.clear();

    }).on(namemodal+"_Init",function(event,e,page){
         modal = $(page.el);
        modal.find("form").validate({
            submitHandler : function(form){
                var data = $(form).serializeObject();

                var data = $(form).serializeObject();

                console.log(data);

                if(data.role=="hocsinh"){
                    mainView.router.navigate("/user/forgothocsinh/", data);
                }else{
                    mainView.router.navigate("/user/forgotphuhuynh/", data);
                }
                
                
            }
        });
    }).on(namemodal+"_Leave",function(event,e,page){
        
    });
})();


    