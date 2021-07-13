function music(instrument)
{
  var audio_file="sounds/"+instrument+".wav";
  var audio=new Audio(audio_file);
  audio.play();
}
$("body").on("keypress",function(event){
  console.log(event.key);
  key(event.key);
});
$(".kbd").on("click",function(){
  var clicks=this.innerHTML;
  console.log(clicks);
  key(clicks)
});
function key(key)
{
  var pressed="."+key;
  setTimeout(function(){
    $(pressed).addClass("playing");
  },300);
  setTimeout(function(){
    $(pressed).removeClass("playing");
  },300);
  $(pressed).addClass("playing");
  switch(key)
  {
    case 'a':case 'A':
    var clap='clap';
    music(clap);
    break;

    case 's':case 'S':
    var clap='hihat';
    music(clap);
    break;

    case 'd':case 'D':
    var clap='kick';
    music(clap);
    break;

    case 'f':case 'F':
    var clap='openhat';
    music(clap);
    break;

    case 'g':case 'G':
    var clap='boom';
    music(clap);
    break;

    case 'h':case 'H':
    var clap='snare';
    music(clap);
    break;

    case 'k':case 'K':
    var clap='tom';
    music(clap);
    break;

    case 'l':case 'L':
    var clap='tink';
    music(clap);
    break;
  }
}
