
window.MyLibrary={},window.loadJS=function(e,t){if(window.MyLibrary[e])t();else{var n=document.createElement("script");n.src=e,n.async=!0,n.onload=function(){window.MyLibrary[e]=e,t instanceof Function&&t()},n.onreadystatechange=function(){t instanceof Function&&t()},document.getElementsByTagName("head")[0].appendChild(n)}},window.loadCSS=function(e,t){if(window.MyLibrary[e])t instanceof Function&&t();else{var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),n.setAttribute("async",!0),n.onload=function(){window.MyLibrary[e]=e,t instanceof Function&&t()},n.onreadystatechange=function(){t instanceof Function&&t()},document.getElementsByTagName("head")[0].appendChild(n)}};
function post(e,t,n,r){$.ajax({url:e,type:"POST",data:t,async:r||!1,success:function(e){try{e=JSON.parse(e.trim())}catch(e){}n(e)},error:function(e,t,n){post.STATUS_CODE=n.status;this.success(e.responseText)}})}post.STATUS_CODE=0;function showMessageBar(e,t){t&&(t="danger"),$.notify({message:e},{type:t,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},z_index:1031,delay:5e3,timer:1e3})}function postForm(e,s,t,c){$.ajax({beforeSend:function(){},type:"POST",url:e,global:!1,data:s,processData:!1,contentType:!1,async:!0==c||fasle,success:function(e){try{e=JSON.parse(e)}catch(s){}t(e)},error:function(e,s,t){this.success(e.responseText)}})}
function postForm(url,form,func,a){
  $.ajax({
        
        type: "POST",
        url: url,
        global: false,
        data: form,
        processData: false,
        contentType: false,
        beforeSend:function(xhr,options){
     
          var auth =$('[name="auth-token"]').attr("content");
          if(auth){
            xhr.setRequestHeader( 'auth-token',auth);
          }
           
        },
        async: a==true?true:fasle,
        success:function(data){
            try{
              data =  JSON.parse(data);
            }catch(e){}

            func(data);
        },
        error :function(a,b,c){
           this.success(a.responseText);
        }
    });
};

window.make_slug = (function() {
    function d(a) {
        var b = {
            A: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g,
            AA: /[\uA732]/g,
            AE: /[\u00C6\u01FC\u01E2]/g,
            AO: /[\uA734]/g,
            AU: /[\uA736]/g,
            AV: /[\uA738\uA73A]/g,
            AY: /[\uA73C]/g,
            B: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g,
            C: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g,
            D: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g,
            DZ: /[\u01F1\u01C4]/g,
            Dz: /[\u01F2\u01C5]/g,
            E: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g,
            F: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g,
            G: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g,
            H: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g,
            I: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g,
            J: /[\u004A\u24BF\uFF2A\u0134\u0248]/g,
            K: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g,
            L: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g,
            LJ: /[\u01C7]/g,
            Lj: /[\u01C8]/g,
            M: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g,
            N: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g,
            NJ: /[\u01CA]/g,
            Nj: /[\u01CB]/g,
            O: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g,
            OI: /[\u01A2]/g,
            OO: /[\uA74E]/g,
            OU: /[\u0222]/g,
            P: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g,
            Q: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g,
            R: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g,
            S: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g,
            T: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g,
            TZ: /[\uA728]/g,
            U: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g,
            V: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g,
            VY: /[\uA760]/g,
            W: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g,
            X: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g,
            Y: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g,
            Z: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g,
            a: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g,
            aa: /[\uA733]/g,
            ae: /[\u00E6\u01FD\u01E3]/g,
            ao: /[\uA735]/g,
            au: /[\uA737]/g,
            av: /[\uA739\uA73B]/g,
            ay: /[\uA73D]/g,
            b: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g,
            c: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g,
            d: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g,
            dz: /[\u01F3\u01C6]/g,
            e: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g,
            f: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g,
            g: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g,
            h: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g,
            hv: /[\u0195]/g,
            i: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g,
            j: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g,
            k: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g,
            l: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g,
            lj: /[\u01C9]/g,
            m: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g,
            n: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g,
            nj: /[\u01CC]/g,
            o: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g,
            oi: /[\u01A3]/g,
            ou: /[\u0223]/g,
            oo: /[\uA74F]/g,
            p: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g,
            q: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g,
            r: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g,
            s: /[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g,
            ss: /[\u00DF]/g,
            t: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g,
            tz: /[\uA729]/g,
            u: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g,
            v: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g,
            vy: /[\uA761]/g,
            w: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g,
            x: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g,
            y: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g,
            z: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
        };
        for (var f in b) {
            a = a.replace(b[f], f)
        }
        return a
    }
    var c = function(a, b) {
        if (typeof a !== "string") {
            return a
        }
        if (!b) {
            b = "-"
        }
        return d(a.toLowerCase()).replace(/[^0-9a-zA-Z]/ig, " ").replace(/\s+/g, b)
    };
    String.prototype.make_slug = function(a) {
        return c(String(this), a)
    }
    ;
    return c
}
)();


function postPromise(url,form,headers){
    return new Promise(function(a,b){
        url.post(form,a);
    });
}




String.prototype.toNumber = function () { 
    return String(this).split('').map(char => char.charCodeAt(0)).reduce((current, previous) => previous + current)
};
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+parseInt(seconds,10);
};


Date.prototype.toHHMMSS = function () {
    var sec_num = (Date.now() - this.getTime())/1000;
    return (""+sec_num).toHHMMSS();
};



String.prototype.postPromise= function(data,headers,f){
    return postPromise(String(this),data,headers,f);
};

String.prototype.loadCSS= function(data,f){
    loadCSS(String(this),f||function(){});
};

String.prototype.loadJS= function(data,f){
    loadJS(String(this),f||function(){});
};

String.prototype.modules= function(f){
    loadCSS("https://f7.ahlupos.com/modules/"+String(this)+".core.css",function(){});
    loadJS("https://f7.ahlupos.com/modules/"+String(this)+".core.js",f||function(){});
};

function shortname(s,num){
    return s.shortname(num);
}
String.prototype.shortname= function(num){
    return String(this).split(" ").slice(0,num||2).map(function(v){return v[0];}).join("").toUpperCase();
};

String.prototype.form= function(options){
    
    var settings = $.extend({url:String(this),data:{},f:function(){}},options,true);

    return {
        url:function(url){
            settings.url = url;
            return this;
        },
        data:function(d){
            settings.data = d;
            return this;
        },
        post : function(f){
            f = f?f:settings.f;
            post(settings.url,settings.data,f,true);
            return this;
        }
    }
};
String.prototype.post= function(data,f){
    post(String(this),data||{},f||function(){},true);
};

String.prototype.postDebug= function(data,f){
    post(String(this),data||{},f||function(res){
        console.log(res);
    },true);
};

String.prototype.postForm= function(form,f){
    postForm(String(this),form,f,true);
};

HTMLElement.prototype.toggle = function () { 
    this.style.display = this.style.display == 'none' ? '' : 'none';
};





HTMLElement.prototype.post = function (f,url) { 
    if(this.nodeName=="FORM"){
        url = url?url:(this.action?this.action:document.location.href);
        postForm(url,this,f,true);
    }
};

String.prototype.Handlebars = function(data){
  var s = Handlebars.compile(String(this));
  return s(data);
};
HTMLElement.prototype.Handlebars = function (data) { 
    this.innerHTML = this.innerHTML.Handlebars(data);
};

String.prototype.clearStorage = function(){
    window.localStorage.removeItem(String(this));
};
String.prototype.setStorage = function(v){
    window.localStorage.setItem(String(this),JSON.stringify(v));
};
String.prototype.getStorage = function(k){

    try{
       return JSON.parse(window.localStorage.getItem(String(this)));
    }catch(e){} 

    return k;
};

String.prototype.getStorageLoader = function(k){

    try{
       return JSON.parse(window.localStorage.getItem(String(this)));
    }catch(e){
        window.showLoader();
    } 

    return k;
};
// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe' } };


  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    } },

  routes: routes,  
  vi: {
    placementId: 'pltd4o7ibb9rc653x14' } });
app.on('panelOpen', function (panel) {
          console.log('Panel ' + panel.side + ' opened');
        });

        app.on('connection', function (isOnline) {
          if (isOnline) {
            console.log('app is online now')
          } else {
            console.log('app is offline now')
          }
        });

        app.on('darkModeChange', function (isDark) {
          if (isDark) {
            console.log('color scheme changed to Dark')
          } else {
            console.log('color scheme changed to Light')
          }
        });
window.mainView = app.views.create('.view-main', {iosSwipeBack: true,
          on: {
            pageAfterIn: function (event) {
                // console.log(event);
              
              // window.rebuild($(event.el));
                

              $(document).trigger("onPage",[event]);
            },
            pageAfterOut: function (event) {
                // console.log(event);
              if(event.el){
                $(event.el).find('iframe,video,audio').each(function(v){
                  v.src = v.src;
                });
              } 
         
            },
            pageInit: function (event) {
              event.pageEl.f7Page= event.pageEl.dataset;
              window.ActivePage =event.pageEl; 
              $(document).trigger("onePage",[event.pageEl]).off("onePage");
              if(event.route.url.includes(pointer)){
                  event.$el.addClass("mainpointer");
                  $(".loader").fadeOut("fast",function(){
                          $(this).remove();
                  });

              }
            }
          }
        });

        if(window.history){
            window.history.pushState(null, null, window.location.href);
            window.onpopstate = function () {
                window.history.go(1);
                mainView.router.back();
            };    
        }
 function runmain(){
 
    var u = window.user.hasLogin();
    var forcelogin = "{{forcelogin}}";

    if(u&&u.session_id){
        $('[name="auth-token"]').attr("content",u.session_id);
    }
    
    if(forcelogin){
        mainView.router.navigate(u?pointer:"/user/login/", {});
    }else{
        mainView.router.navigate(pointer, {});
    }
    

  $.ajaxSetup({
  async: true,
  type: 'POST',
  beforeSend:function(xhr,options){
     
      var auth =$('[name="auth-token"]').attr("content");
      if(auth){
        xhr.setRequestHeader( 'auth-token',auth);
      }
       
      
  }
});
}


function getJsonFromUrl(url) {
  var regex = /[?&]([^=#]+)=([^&#]*)/g,
      url = url?url:window.location.href,
      params = {},
      match;
  while(match = regex.exec(url)) {
      params[match[1]] = match[2];
  }
  return params;
}
//var scripts = document.getElementsByTagName( 'script' );
//var me = scripts[ scripts.length - 1 ];

window.objparams = getJsonFromUrl(document.location.href);
console.log(objparams);

var pointer = objparams.gateway?objparams.gateway:"";
   if(pointer){
  if(pointer[0]!="/"){
     pointer = "/"+pointer;
  }


  if(pointer[pointer.length-1]!="/"){
     pointer =  pointer+"/";
  }
}else{
    pointer = "/home/";
} 
window.rebuild = function(el){
   ele = (el?el:$('body'));
   ele.find('[data-setbg]').each(function () {
        var me = $(this);
          var bg = me.attr('data-setbg');
          if(parseInt(this.style.height)<75 && window.innerWidth<1050){
                    me.css("height","125px");
          }

          if(this.nodeName=="IMG"){
            this.src=bg;
          }else{
             me.css('background-image', 'url(' + bg + ')');
          }
         me.removeAttr('data-setbg');
      });

   //find all link
   ele.find('a:not(.external)').each(function(){
      if(this.target=="_blank"){
         $(this).addClass("external");
      }
   });



   ele.find("[data-com-load]").each(function(i,v){
    var me = $(this);
      var js = me.attr('data-com-load');
      var name = me.attr('data-com-name');

      if(window.plugins&&window.plugins[name]){
          window.plugins[name](me);
      }else{
        var a = me;
        loadJS("https://f7.ahlupos.com/com/"+js+".js?t="+Date.now(),function(){
          if(window.plugins[name]){
            window.plugins[name](a);
          }
        });
      }


      
   });

   //user
   var u =  window.user?window.user.hasLogin():null;

   ele.find(".hasLogin").each(function(i,v){
    var me = $(this);
     if(!this.old_route){
      var href = me.attr("href");
       this.old_route = href?href:me.attr("data-router");
     }
     if(this.nodeName=="A"){
       this.href = u?this.old_route:"/user/login/";
     }else{
      me.attr("data-router",u?this.old_route:"/user/login/");
     } 
   });
   
};

window.current_tag = null;
window.paramsData = null;

window.showLoader = function(t){
  t =t?t:1.5;

  app.preloader.show();
  setTimeout(function(){
    app.preloader.hide();  
  },t*1000);
};
window.hideLoader = function(t){
  app.preloader.hide();
};


String.prototype.pageData = function(){
    var name = String(this); 
    return $.extend({},name.f7AppData(),name.f7Route(),true);
};


var handlers = {};
String.prototype.f7AppData  = function(){
    var name = String(this); 
    return handlers[name];
};
var handlers_route = {};
var handlers_route_=null;
String.prototype.navigate = function(data){
    handlers_route_ = data;
    $(document).on("onePage",function(v,page){
        var name = window.ActivePage.f7Page.name;
        console.log(name);
        handlers_route[name] = handlers_route_;
     });
    mainView.router.navigate(String(this));
};
String.prototype.navigateReplace=function(data){
    
    handlers_route_ = data;
    $(document).on("onePage",function(v,page){
        var name = window.ActivePage.f7Page.name;
        console.log(name);
        handlers_route[name] = handlers_route_;

        mainView.router.history[mainView.router.history.length-1] = mainView.router.url;    
     });
    mainView.router.navigate(String(this));
};
String.prototype.back=function(){
    
    var s = String(this);
    if(s)mainView.router.history = ["/home/",s]; 

    mainView.router.back();
};
String.prototype.navigateReset=function(data){
    
    handlers_route_ = data;
    $(document).on("onePage",function(v,page){
        var name = window.ActivePage.f7Page.name;
        console.log(name);
        handlers_route[name] = handlers_route_;

        mainView.router.history = ["/home/",mainView.router.url];    
     });
    mainView.router.navigate(String(this));
};
String.prototype.f7Route  = function(){
    var name = String(this); 
    return handlers_route[name];
};


$(document).on("page::back", function(e) {
 
  if($(".page-current").attr("id")=="home"){
    window.close();
  }
    
}).on("click","[data-frame]",function(e){
    e.preventDefault();
    var url = $(this).attr("data-frame");
    window.current_tag = $(this).data();
      $(document).on("onePage",function(v,page){
        var name = window.ActivePage.f7Page.name;
        //console.log(name);

        handlers[name] = window.current_tag;  
    });
     mainView.router.navigate("/webview/"+encodeURIComponent(url));

  }).on("click",".toolbar-inner .tab-link",function(){
    var parent = $(this).closest(".toolbar-inner");
    parent.scrollCenter(this, 300);

  }).on("click","ul.filter__controls li",function(){
    var parent = $(this).closest(".filter__controls");
    parent.scrollCenter(this, 300);

  }).on("click","[data-router]",function(){
   var url = $(this).attr("data-router");
   if($(this).attr("data-open")){
      window.open(url);
   }else{
     window.current_tag = $(this).data();


     $(document).on("onePage",function(v,page){
        var name = window.ActivePage.f7Page.name;
        console.log(name);

        handlers[name] = window.current_tag;  
     });
 
     mainView.router.navigate(url);
   }
}).on("click","[data-params]",function(){
   window.paramsData = {
    params: $(this).data('params'),
    ele: $(this)
   };
}).on("click","a",function(e){

  if(!$(this).hasClass("external") && !$(this).hasClass("back")){
    e.preventDefault();
    e.stopImmediatePropagation();

    var href=  this.href;
    if(href.includes("open=true")){
        window.open(href);
        return;
    }

    
      window.current_tag = $(this).data();
      $(document).on("onePage",function(v,page){
        var name = window.ActivePage.f7Page.name;
        console.log(name);

        handlers[name] = window.current_tag;  
     });
  }
}).on("click",".remove",function(){
    setTimeout(function(){
      $(this).remove();
    },100);
});

$(document).on("click",".closeapp",function(){
   window.close();
 }).on("scroll",function(){
    $("body").addClass("scrolling");
    delay(function(){
      $("body").removeClass("scrolling");
    },1000);
 }).on('touchmove', function(event) {
    $("body").addClass("scrolling");
    var distanceY = window.pageYOffset
    
        delay(function(){
        $("body").removeClass("scrolling");
      },1000);
   
});
 // Create another event bus
// const notificationEvents = new Framework7.Events();

// notificationEvents.on('notificationReceived', function (notification) {
//   // do something with notification
// })

// somewhere in the app send notification
// notificationEvents.emit('notificationReceived', {
//   title: 'New message',
//   from: 'John Doe',
// });