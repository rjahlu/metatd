(function(){
  var key_u = "{{slug}}__u__";
  var storage = null;
  var local = window.localStorage?window.localStorage:{};
  window.user = {
     prefix : function(k){
        return key_u+(k?k:"");
     },
     storage : {
         clear: function(){

            var a = window.user.prefix();
            Object.keys(window.localStorage).map(function(k){

                if(k.includes(a)){
                    window.localStorage.removeItem(k);
                }
                
            });
         },
         get: function(k,def){
 
            var u = window.localStorage[window.user.prefix(k)];
            try{
              return JSON.parse(u);
            }catch(ex){ 
            }

            return def;
         }, 
         set: function(k,v){ 
            window.localStorage.setItem(window.user.prefix(k),typeof v=="object"?JSON.stringify(v):v);
         }
     },
     hasLogin : function(){
        storage = local[key_u];
        storage = storage?JSON.parse(storage):null;
       return storage;
     },
     login : function(data){
        local.setItem(key_u,JSON.stringify(data)); 

        if(data&&data.session_id){
            $('[name="auth-token"]').attr("content",data.session_id);
        }
        return this;
     },
     logout : function(url){
        storage =null;
        this.storage.clear();
        mainView.router.navigate(url);
        return this;
     },
     set:function(k,v){
        if(storage){
          storage[k] = v;
          local.setItem(key_u,JSON.stringify(storage)); 
        }
        return this;
     },
     append:function(obj){
         storage = storage?storage:{};
         storage = $.extend(storage,obj,true);
          local.setItem(key_u,JSON.stringify(storage)); 
        return this;
     },
     profile:function(f){ 
        f(this.hasLogin());
     }
  };
})();