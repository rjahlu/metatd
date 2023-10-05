function setupsocket(url,f){
  window.sdk = window.sdk?window.sdk:{};
 var socket = io(url);
  socket.on('connect', function(data) {
     
  });
  window.addEventListener("offline", (e) => {
      console.log("offline");
});

   window.addEventListener("online", (e) => {
      console.log("online");
  });
  socket.on('error',function() {
     /*if(!$(".nointernet").length){
        $("body").append(`<div class="nointernet" style="    position: fixed;
    bottom: 104px;
    z-index: 1000000;
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 8px;
    text-align: center;
    display: none;"><img src="https://cdn-icons-png.flaticon.com/128/2797/2797387.png" width="25" height="25" />There is a broblem with your internet.</div>`);
     }
     */
     
     console.log("error");
  });
 
  socket.on('ping', function(){
    console.log("ping");
 
    $(".nointernet").hide();
  }); 
  socket.on('pong', function(){
    console.log("pong");
  }); 

  socket.sent = function(){
      socket.emit.apply(window.sdk.socket,arguments);
  };

  window.addEventListener('online', (event) => {
      $(".nointernet").remove();
  });

  window.sdk.socket = socket;

  window.addEventListener('offline', (event) => {
      $(".nointernet").remove();
      $("body").prepend(`<div class="nointernet" style="    background-color: red;
    color: #fff;
    text-align: center;
    padding: 8px;
    border-radius: 8px;">Mất kết nối đến server. Vui lòng kiểm tra lại đường truyền.</div>`);
  });


}