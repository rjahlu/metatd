
(function(){
	var namemodal = "lophoc";
	var modal = null;
	 
	$(document).on(namemodal+"_Before",function(event,e,page){
		modal = $(page.el);
		console.log(modal);

	 	

	}).on(namemodal+"_Init",function(event,e,page){
		 modal = $(page.el);

		 post(site_url_ajax("lophoc.php?a=list"),{},function(r){
 			
 			var s = Handlebars.compile($("#itemlophoc").html());

 			modal.find(".buttons").html(r.map(function(v){
 				return s(v);
 			}).join("")); 
	    			
	    },true); 
	     
	}).on(namemodal+"_Leave",function(event,e,page){
	    
	});
})();

