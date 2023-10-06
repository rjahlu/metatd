

(function(){
    var namemodal = "userregisterhocsinh";
    var modal = null;
    $(document).on(namemodal+"_Before",function(event,e,page){
        modal = $(page.el);
 
    }).on(namemodal+"_Init",function(event,e,page){
         modal = $(page.el);
        
        var params = namemodal.pageData();
         console.log(params);
        modal.find("form").validate({
            submitHandler : function(form){
                var data = $.extend(params,$(form).serializeObject(),true);

                console.log(data);

                data.role ="hocsinh";

                
                window.showLoader();
                post(site_url_ajax("user.php?a=register"),data,function(r){

                    try{

                        if(r.code){
                            // window.user.login(r.user);

                             "/user/login/".navigate({});
                             
                        }else{
                           app.dialog.alert(r.error,"Thông báo");
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


    