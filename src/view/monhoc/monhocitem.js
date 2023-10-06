(function(){
	var namemodal = "monhocitem";
	var modal = null;
	$(document).on(namemodal+"_Before",function(event,e,page){
		modal = $(page.el);

	 

	}).on(namemodal+"_Init",function(event,e,page){
		 modal = $(page.el);
	 
		var data = namemodal.pageData();




		 var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var calendarInline = app.calendar.create({
        containerEl: modal.find('.calendar-input')[0],
        value: [new Date()],
        renderToolbar: function () {
          return '<div class="toolbar calendar-custom-toolbar no-shadow">' +
            '<div class="toolbar-inner">' +
            '<div class="left">' +
            '<a  class="link icon-only"><i class="icon icon-back"></i></a>' +
            '</div>' +
            '<div class="center"></div>' +
            '<div class="right">' +
            '<a  class="link icon-only"><i class="icon icon-forward"></i></a>' +
            '</div>' +
            '</div>' +
            '</div>';
        },
        on: {
          init: function (c) {
            $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ', ' + c.currentYear);
            $('.calendar-custom-toolbar .left .link').on('click', function () {
              calendarInline.prevMonth();
            });
            $('.calendar-custom-toolbar .right .link').on('click', function () {
              calendarInline.nextMonth();
            });
          },
          monthYearChangeStart: function (c) {
            $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ', ' + c.currentYear);
          }
        }
      });

		post(site_url_ajax("monhoc.php?a=historypost"),data,function(r){
 			
 			var s = Handlebars.compile($("#itemmonhocbaitap").html());

 			modal.find(".buttons").html(r.data.map(function(v){
 				return s(v);
 			}).join("")); 


 			modal.find(".total").html(r.data.length);


 			modal.find(".namemonlop").html(r.item.name);
 			modal.find(".btn-dangbai").attr("href",'/giaovien/dangbaitap/'+r.item.id+"/"+r.item.name+"/");

 			
	    			
	    },true); 
 
	}).on(namemodal+"_Leave",function(event,e,page){
	    
	});
})();

