function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  if ( script.readyState ) {
    script.onreadystatechange = function() {
      if ( script.readyState === 'loaded' || script.readyState === 'complete' ) {
        script.onreadystatechange = null;
        callback();
      }
    }
  } else {
    script.onload = function() {
      callback();
    };
  };

  document.getElementsByTagName('head')[0].appendChild(script);
};

loadScript("https://code.jquery.com/jquery-3.3.1.min.js", function(){
  function set_cookie(){
    var Nowymdhms　=　new Date();
    var NowHour = Nowymdhms.getHours();
    var NowMin = Nowymdhms.getMinutes();
    var NowSec = Nowymdhms.getSeconds();
    if(NowHour < 10){
      NowHour = "0"+NowHour;
    }
    if(NowMin < 10){
      NowMin = "0"+NowMin;
    }
    var h = NowHour+":"+NowMin+":"+NowSec;

    console.log("==Media Sample Page== : " + h);
    document.cookie = "cv_tag_js=" + h;
    console.log(document.cookie);
    $('#cv').text(document.cookie);
  }
  setInterval(set_cookie, 2000)
});