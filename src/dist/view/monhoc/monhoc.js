(function(){
	var namemodal = "monhoc";
	var modal = null;
	$(document).on(namemodal+"_Before",function(event,e,page){
		modal = $(page.el);

	 

	}).on(namemodal+"_Init",function(event,e,page){
		 modal = $(page.el);
	
	    post(site_url_ajax("monhoc.php?a=list"),{},function(r){
 			
 			var s = Handlebars.compile($("#itemmonhoc").html());

 			modal.find(".buttons").html(r.map(function(v){
 				return s(v);
 			}).join("")); 
	    			
	    },true); 
	}).on(namemodal+"_Leave",function(event,e,page){
	    
	});
})();

