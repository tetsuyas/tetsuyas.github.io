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
  }

  document.getElementsByTagName('head')[0].appendChild(script);
}

function gethour(){
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
  return h;
}

loadScript("https://code.jquery.com/jquery-3.3.1.min.js", function(){
  console.log("document.cookie="+JSON.stringify(document.cookie));
  $('body').append("<iframe src='https://tetsuyas.github.io/iframe.html' frameborder='0' style='height:0px; width:0px; visibility:hidden;'></iframe>");
/*

  document.cookie.split(';').forEach(function(c) {
    var key = c.trim().split('=')[0];
    console.log("key="+key);
    if (key === "media_com_cv"){
      var t = "広告効果を測定しました。" + c.trim().split('=')[1] +"にクリックした広告です。";
    }else{
      var t = "広告効果は測定できません。";
    }
    alert(t);
    console.log(t);
  });
*/
  function set_cookie(){
/*    h = gethour();
    console.log("==Media Sample Page== : " + h);
    document.cookie = "cv_tag_js=" + h;
    console.log(document.cookie);*/
    $('#cv').text(document.cookie);
  }
  setInterval(set_cookie, 10000)
});
