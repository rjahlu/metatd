var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    minifyCss  = require('gulp-minify-css'),
    browserSync = require('browser-sync');
    var argv = require('yargs').argv;

  const fs = require("fs");
const path = require("path");
var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

/**
 * Look ma, it's cp -R.
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
var copyRecursiveSync = function(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

    // Recursive function to get files
function getFiles(dir, regex,files = []) {
  // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir);
  // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, regex,files);
    } else {
      if(regex){
         let a = regex(name);
         if(a){
            files.push(name);
         }
      }else{
         // If it is a file, push the full path to the files array
         files.push(name);
      }
      
    }
  }
  return files;
}

function readFromFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function (err, data) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        });
    });
}


var exec = require('child_process').exec;


//////////////////////////////
gulp.task('js', function () {
   return gulp.src(['./src/view/**/*.js','./src/view/**/**/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      
      .pipe(uglify())
      .pipe(concat('app.beta.js'))
      .pipe(gulp.dest('./src/build/'));
});




gulp.task('css', function () {
   return gulp.src(['./src/app.css','./src/view/**/*.css','./src/view/**/**/*.css'])  
      .pipe(minifyCss({ compatibility: 'ie8' }))
      .pipe(concat('app.beta.css'))
      .pipe(gulp.dest('./src/build/'));
});

gulp.task('clean', () => {
   // return del.sync('build');
});


gulp.task('buildall', function (done) {
    //css
    //js
    //html
    let html = getFiles('./src/view',function(f){
       return f.includes(".html");
    });
    // console.log(html);

    html = html.map(v=>{
       return readFromFile(v)
    });
   //build pages
   Promise.all(html).then(result => {
      console.log("Pages's saved!");
       
       html = {};
       result.map(v=>{
          var a = v.match(/data-name=[\'\"]?([a-z0-9\-]+)[\"\']?/)
          html[a[1]] = v; 
       });

       // console.log(html);
       
       //now buil all
          //js
          var str=`
          //Author :ABC
          //Date : ${new Date().toJSON().split("T")[0]}
          (function(){
             var globalPages = ${JSON.stringify(html)};
             ${fs.readFileSync('./src/router.js', 'utf8')}
             ${fs.readFileSync('./src/mockdata.js', 'utf8')}
             ${fs.readFileSync('./src/build/app.beta.js', 'utf8')}
            
          })();
           ${fs.readFileSync('./src/f7.js', 'utf8')}
           `;


      //build js file
      let jslib= getFiles('./src/js',function(f){
       return f.includes(".js");
      });
      jslib = jslib.map(v=>{
       return readFromFile(v)
      });

      Promise.all(jslib).then(result => {
          fs.writeFile('./src/build/app.min.js', result.join("\n")+str, { flag: 'w' }, function (err) {
             if (err) throw err;
             console.log("JS's saved!");
 
         });  
      });
  
      //css file
      let csslib = getFiles('./src/css',function(f){
       return f.includes(".css");
      });
      csslib = csslib.map(v=>{
       return readFromFile(v)
      });
      csslib= csslib.concat([
         readFromFile('./src/app.css'),
         readFromFile('./src/build/app.beta.css')
      ]);

      Promise.all(csslib).then(result => {
         fs.writeFile('./src/build/app.min.css', result.join("\n"), { flag: 'w' }, function (err) {
             if (err) throw err;
             console.log("CSS 's saved!");

             fs.rmSync('./src/dist/', { recursive: true, force: true });

            fs.cpSync('./src/build/', './src/dist/build/', {recursive: true});
            fs.cpSync('./src/view/', './src/dist/view/', {recursive: true});

            fs.copyFileSync('./src/index.build', './src/dist/index.html');

            fs.unlinkSync('./src/dist/build/app.beta.js');
            fs.unlinkSync('./src/dist/build/app.beta.css');

         });  
      });

      done();
   });
    

    
    
  
});

gulp.task('deploy', function (done) {

    var config = {
        user: "f7@ahlupos.com",                   // NOTE that this was username in 1.x 
        password: "@ahlupos.com",           // optional, prompted if none given
        host: "ahlupos.com",
        port: 21,
        localRoot: __dirname + '/src/dist/',
        remoteRoot: '/users/demo/mt/dist/',
        include: ['*', '**/*'],      // this would upload everything except dot files
        //include: ['*.php', 'dist/*'],
        //exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
        deleteRemote: false,              // delete ALL existing files at destination before uploading, if true
        forcePasv: true                 // Passive mode is forced (EPSV command is not sent)
    }
     
    // use with promises
    // ftpDeploy.deploy(config)
    //     .then(res => console.log('finished:', res))
    //     .catch(err => console.log(err))
        
    // use with callback
    ftpDeploy.deploy(config, function(err, res) {
        if (err){
             console.log(err)
        }
        else{
             console.log('finished:', res);
             exec('open https://f7.ahlupos.com/users/demo/mt/dist/index.html');
        }

    });

    done()

});

//gulp f7 --demo/test
gulp.task('f7', function(done) {
    var argv = process.argv.slice(3);
    console.log(argv);

    let name = argv[0].replace("--","/");
    let namepage = name.replace(/[\/]/g,"");

    var dir = path.dirname(`./src/view/${name}`);
    if(dir&&!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(`./src/view/${name}.js`, `

(function(){
    var namemodal = "${namepage}";
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


    ` , { flag: 'w' }); 
    fs.writeFileSync(`./src/view/${name}.html`, `
<!-- Router
addRoute({
    path: '${name}/',
    url: site_url('${name}.html'),
    on: AEventPage("${namepage}")
}).then((page)=>{

});
!-->
<div class="page ${namepage}" data-name="${namepage}">
      <!-- Top Navbar -->
      <div class="navbar webviewnewsbars">
         <div class="navbar-bg"></div>
 <div class="navbar-inner sliding">
   <div class="left">
     <a href="#" class="link back">
       <i class="icon icon-back"></i>
       <span class="if-not-md"></span>
     </a>
   </div>
   <div class="title">--</div>
   
 </div>
</div>

          
          <!-- Scrollable page content -->
           <div class="page-content">
              
          </div>
    </div>
    `, { flag: 'w' }); 
    fs.writeFileSync(`./src/view/${name}.css`, `.${namepage}{}`, { flag: 'w' }); 

    //append text

    fs.appendFileSync('./src/router.js', `addRoute({
    path: '${name}/',
    url: site_url('${name}.html'),
    on: AEventPage("${namepage}")
}).then((page)=>{

});`+"\n");
    console.log("Page "+name+" created");

    done();
});
 
//////////////////////////////

gulp.task('watch', function() {
  var watcherjs = gulp.watch('./src/view/**/*.js', gulp.series('js'));
   watcherjs.on('change', function (event) {
      // cp.execFile('gulp js');

      console.log('Event type: ' + event.type); // added, changed, or deleted
      console.log('Event path: ' + event.path); // The path of the modified file
   });

   var watchercss = gulp.watch('./src/view/**/*.css', gulp.series('css'));
   watchercss.on('change', function (event) {
      // cp.execFile('gulp css');
      
      console.log('Event type: ' + event.type); // added, changed, or deleted
      console.log('Event path: ' + event.path); // The path of the modified file
   });

   gulp.watch('./src/app.css', gulp.series('css'));


   var files = [
      
      'src/**/*.css',
      'src/**/*.html',
      'src/**/*.js',
   
   ];

   browserSync.init(files, {
      server: {
         baseDir: './src',
         // index: "beta.html"
      }
   });
});
 


gulp.task('default', gulp.series('watch'));
