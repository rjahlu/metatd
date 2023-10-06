
(function(){
	var namemodal = "lophocitem";
	var modal = null;
	 
	$(document).on(namemodal+"_Before",function(event,e,page){
		modal = $(page.el);
		console.log(modal);



	}).on(namemodal+"_Init",function(event,e,page){
		 modal = $(page.el);

		 var params = page.route.params;
		var data = namemodal.pageData();

	 	post(site_url_ajax("lophoc.php?a=item"),params,function(r){
 			
 			var s = Handlebars.compile($("#itemhocsinhlophoc").html());

 			modal.find(".buttons").html(r.data.map(function(v){
 				return s(v);
 			}).join("")); 


 			modal.find(".total").html(r.data.length);


 			modal.find(".namelop").html(r.item.name);
	    			
	    },true); 
	     
	}).on(namemodal+"_Leave",function(event,e,page){
	    
	});
})();

