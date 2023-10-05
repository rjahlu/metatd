

(function(){
    var namemodal = "userforgotsteppassword";
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

                
                window.showLoader();
                post(site_url("api/user.php?a=login"),data,function(r){
                    mainView.router.navigate("/user/forgotstepsuccess/", {});
                    
                },true); 
                
            }
        });
    }).on(namemodal+"_Leave",function(event,e,page){
        
    });
})();


    