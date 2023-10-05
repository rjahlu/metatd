
window.AEventPage = function(name_route){
    return { 
        pageAfterIn: function (e, page) {
            $(document).trigger(name_route+"_Before",[e,page]);
        },
        pageInit: function (e, page) {
            window.localStorage.setItem("f7_history_url", app.views.main.router.currentRoute.path);
            // setTimeout(function(){
                $(document).trigger(name_route+"_Init",[e,page]);
            // },100);
        },
        pageBeforeRemove: function (e, page) {
           $(document).trigger(name_route+"_Leave",[e,page]);
        }
    };
};
window.routes=[];

function addRoute(options){

    window.routes.push(options);

    return new Promise(function(a,b){
        a();
    });
}

//////////////////////////////

addRoute({
    path: '/home/',
    url: site_url('home.html'),
    on: AEventPage("home"),
}).then((page)=>{

});
addRoute({
    path: '/intro/',
    url: site_url('intro.html'),
    on: AEventPage("intro"),
}).then((page)=>{

});

addRoute({
    path: '/user/login/',
    url: site_url('user/login.html'),
    on: AEventPage("login"),
}).then((page)=>{

});




addRoute({
    path: '/monhoc/item/:id',
    url: site_url('monhoc/monhocitem.html'),
    on: AEventPage("hocsinhmonhoc") 
}).then((page)=>{

});

addRoute({
    path: '/monhoc/',
    url: site_url('monhoc/monhoc.html'),
    on: AEventPage("monhoc"),
}).then((page)=>{

});

addRoute({
    path: '/lophoc/',
    url: site_url('lophoc/lophoc.html'),
    on: AEventPage("lophoc"),
}).then((page)=>{

});
addRoute({
    path: '/lophoc/item/:id',
    url: site_url('lophoc/lophocitem.html'),
    on: AEventPage("lophocitem")
}).then((page)=>{

});

addRoute({
    path: '/lophoc/phaquyenhocsinh/',
    url: site_url('lophoc/phaquyenhocsinh.html'),
    on: AEventPage("phaquyenhocsinh"),
}).then((page)=>{

});
addRoute({
    path: '/lophoc/addhocsinh/',
    url: site_url('/lophoc/addhosinh.html'),
    on: AEventPage("lophocaddhosinh")
}).then((page)=>{

});

addRoute({
    path: '/task/baocao/',
    url: site_url('task/baocao.html'),
    on: {
        pageAfterIn: function(e, page) {
             
        },
        pageInit: function(e, page) {
            
        },
        pageBeforeRemove: function(e, page) {
            
        }
    }
}).then((page)=>{

});
 
addRoute({
    path: '/hocsinh/profile/:id',
    url: site_url('/hocsinh/profile.html'),
    on: AEventPage("hocsinhprofile")
}).then((page)=>{

});


addRoute({
    path: '/hocsinhboard/',
    url: site_url('/hocsinh/hocsinhboard.html'),
    on: AEventPage("hocsinhhocsinhboard")
}).then((page)=>{

});
addRoute({
    path: '/phuhuynhboard/',
    url: site_url('/phuhunh/phuhuynhboard.html'),
    on: AEventPage("phuhunhphuhuynhboard")
}).then((page)=>{

});
addRoute({
    path: '/giaovienboard/',
    url: site_url('/giaovien/giaovienboard.html'),
    on: AEventPage("giaoviengiaovienboard")
}).then((page)=>{

});
addRoute({
    path: '/phuhunh/baocao/',
    url: site_url('/phuhunh/baocao.html'),
    on: AEventPage("phuhunhbaocao")
}).then((page)=>{

});
addRoute({
    path: '/phuhunh/baocao/hocsinh/',
    url: site_url('/phuhunh/baocao/hocsinh.html'),
    on: AEventPage("phuhunhbaocaohocsinh")
}).then((page)=>{

});
addRoute({
    path: '/hocsinh/monhoc/',
    url: site_url('/hocsinh/monhoc.html'),
    on: AEventPage("hocsinhmonhoc")
}).then((page)=>{

});

addRoute({
    path: '/hocsinh/monhoc/baitap/:id',
    url: site_url('/hocsinh/baitap/index.html'),
    on: AEventPage("hocsinhbaitapindex")
}).then((page)=>{

});

addRoute({
    path: '/hocsinh/monhoc/baitap/chitiet/:id',
    url: site_url('/hocsinh/baitap/chitiet.html'),
    on: AEventPage("hocsinhbaitapchitiet")
}).then((page)=>{

});
addRoute({
    path: '/hocsinh/baitap/danhgia/:id',
    url: site_url('/hocsinh/baitap/danhgia.html'),
    on: AEventPage("hocsinhbaitapdanhgia")
}).then((page)=>{

});
addRoute({
    path: '/giaovien/profile/',
    url: site_url('/giaovien/profile.html'),
    on: AEventPage("giaovienprofile")
}).then((page)=>{

});
addRoute({
    path: '/phuhuynh/profile/',
    url: site_url('/phuhuynh/profile.html'),
    on: AEventPage("phuhuynhprofile")
}).then((page)=>{

});
addRoute({
    path: '/phuhunh/profile/',
    url: site_url('/phuhunh/profile.html'),
    on: AEventPage("phuhunhprofile")
}).then((page)=>{

});
addRoute({
    path: '/phuhunh/baocao/ketquabaitap/:id',
    url: site_url('/phuhunh/baocao/ketquabaitap.html'),
    on: AEventPage("phuhunhbaocaoketquabaitap")
}).then((page)=>{

});
addRoute({
    path: '/giaovien/dangbaitap/',
    url: site_url('/giaovien/dangbaitap.html'),
    on: AEventPage("giaoviendangbaitap")
}).then((page)=>{

});
addRoute({
    path: '/giaovien/phaquyenhocsinh/',
    url: site_url('/giaovien/phaquyenhocsinh.html'),
    on: AEventPage("giaovienphaquyenhocsinh")
}).then((page)=>{

});
addRoute({
    path: '/giaovien/xembaocaohocsinh/',
    url: site_url('/giaovien/xembaocaohocsinh.html'),
    on: AEventPage("giaovienxembaocaohocsinh")
}).then((page)=>{

});
addRoute({
    path: '/user/register/',
    url: site_url('/user/register.html'),
    on: AEventPage("userregister")
}).then((page)=>{

});
addRoute({
    path: '/user/registerhocsinh/',
    url: site_url('/user/registerhocsinh.html'),
    on: AEventPage("userregisterhocsinh")
}).then((page)=>{

});
addRoute({
    path: '/user/registergiaovien/',
    url: site_url('/user/registergiaovien.html'),
    on: AEventPage("userregistergiaovien")
}).then((page)=>{

});
addRoute({
    path: '/user/registerophuhuynh/',
    url: site_url('/user/registerophuhuynh.html'),
    on: AEventPage("userregisterophuhuynh")
}).then((page)=>{

});
addRoute({
    path: '/hocsinh/taikhoan/',
    url: site_url('/hocsinh/taikhoan.html'),
    on: AEventPage("hocsinhtaikhoan")
}).then((page)=>{

});
addRoute({
    path: '/giaovien/taikhoan/',
    url: site_url('/giaovien/taikhoan.html'),
    on: AEventPage("giaovientaikhoan")
}).then((page)=>{

});
addRoute({
    path: '/phuhunh/taikhoan/',
    url: site_url('/phuhunh/taikhoan.html'),
    on: AEventPage("phuhunhtaikhoan")
}).then((page)=>{

});
addRoute({
    path: '/user/forgot/',
    url: site_url('/user/forgot.html'),
    on: AEventPage("userforgot")
}).then((page)=>{

});
addRoute({
    path: '/user/forgothocsinh/',
    url: site_url('/user/forgothocsinh.html'),
    on: AEventPage("userforgothocsinh")
}).then((page)=>{

});
 
addRoute({
    path: '/user/forgotphuhuynh/',
    url: site_url('/user/forgotphuhuynh.html'),
    on: AEventPage("userforgotphuhuynh")
}).then((page)=>{

});
 
addRoute({
    path: '/user/forgotstepotp/',
    url: site_url('/user/forgotstepotp.html'),
    on: AEventPage("userforgotstepotp")
}).then((page)=>{

});
addRoute({
    path: '/user/forgotsteppassword/',
    url: site_url('/user/forgotsteppassword.html'),
    on: AEventPage("userforgotsteppassword")
}).then((page)=>{

});
addRoute({
    path: '/user/forgotstepsuccess/',
    url: site_url('/user/forgotstepsuccess.html'),
    on: AEventPage("userforgotstepsuccess")
}).then((page)=>{

});
