

(function(){
    var namemodal = "hocsinhbaitapdanhgia";
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

                    try{

                        if(r.code){
                            window.user.login(r.user);

                            mainView.router.navigate("/intro/", {});
                            // ACache.getItem("skip_intro",function(res){

                            //  if(res){
                            //      mainView.router.navigate("/home/", {});
                            //  }else{
                            //      mainView.router.navigate("/intro/", {});
                            //  }
                            // });
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


    