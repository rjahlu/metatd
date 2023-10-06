

(function(){
    var namemodal = "hocsinhbaitapindex";
    var modal = null;
    $(document).on(namemodal+"_Before",function(event,e,page){
        modal = $(page.el);

        // window.user.storage.clear();

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

      post(site_url_ajax("hocsinh.php?a=baitapcuatoi"),data,function(r){
      
      var s = Handlebars.compile($("#itemmonhocbaitaphocsinh").html());

      modal.find(".buttons.new").html(r.new.map(function(v){
        return s(v);
      }).join("")); 

      modal.find(".buttons.done").html(r.new.map(function(v){
        return s(v);
      }).join(""));


      modal.find(".total_new").html(r.done.length);
      modal.find(".total_done").html(r.done.length);


      modal.find(".namemonhoc").html(r.monhoc.name);
      
            
      },true); 
    }).on(namemodal+"_Leave",function(event,e,page){
        
    });
})();


    