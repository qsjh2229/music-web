let winW=$(window).innerWidth();
let winH=$(window).innerHeight();
let vidH=$('#mainVideo').innerHeight();
let vidW=$('#mainVideo').innerWidth();
let videoPlay = 'on';
let soundMuted='off';
$('#mainVideo').get(0).autoplay=true
$('#mainVideo').get(0).loop=0
$('#mainVideo').get(0).muted=true;


  
if(winW>vidW){
    $('#mainVideo').css({width:winW, height: 'auto'});
}

videoResizeFn()
$(window).resize(videoResizeFn);

function videoResizeFn(){
    winW=$(window).innerWidth();
    winH=$(window).innerHeight();
    vidH=$('#mainVideo').innerHeight();
    vidW=$('#mainVideo').innerWidth();


    $('.m-video').css({width:'100%', height: winH});
    if(winH>vidH){
        $('#mainVideo').css({width:'auto', height: winH});
    }if(winW>vidW){
        $('#mainVideo').css({width:winW, height: 'auto'});
    }
}
$(".m-again").hide();
$(".platpausebtn").on({
    click:function(){
        if(videoPlay == 'on'){
            videoPlay ="off";
            $("#mainVideo").get(0).pause()
            $(this).find("i").attr('class','fas fa-play')
            $(".m-again").show();

        }else{
            videoPlay="on"
              $("#mainVideo").get(0).play()
              $(this).find("i").attr('class','fas fa-pause')
              $(".m-again").hide()
        }   
    }})
    $(document).keypress(function(e) {
        if (e.keyCode === 32) { // 스페이스바의 keyCode는 32입니다.
          e.preventDefault();
          toggleVideoPlay();
        }
      });
      
      function toggleVideoPlay() {
        if (videoPlay === "on") {
          videoPlay = "off";
          $("#mainVideo").get(0).pause();
          $(".platpausebtn i").attr("class", "fas fa-play");
        } else {
          videoPlay = "on";
          $("#mainVideo").get(0).play();
          $(".platpausebtn i").attr("class", "fas fa-pause");
          $(".m-again").hide();
        }
      }

$(".mutedIcon").on({click:function(){
    if(soundMuted ==="off"){
        soundMuted = 'on'
        $("#mainVideo").get(0).muted=false;
        $(this).find("i").attr('class','fas fa-volume-up')

    }else{
        soundMuted = 'off'
        $("#mainVideo").get(0).muted=true;
        $(this).find("i").attr('class','fas fa-volume-mute')
    }
}})
$('.watchagin').on({click:function(){
    videoPlay="on"
    $("#mainVideo").get(0).play()
    $('.platpausebtn').find("i").attr('class','fas fa-pause')
    $(".m-again").hide()
}})


let setID= setInterval(videoTimeCountFn,100)
function videoTimeCountFn(){

    // console.log('비디오진행 시간:' + $("#mainVideo").get(0).currentTime)
    // console.log('전체비디오진행 시간:' + $("#mainVideo").get(0).duration)//37.44s
    // console.log('비디오 정지 여부:' + $("#mainVideo").get(0).ended)

    if($("#mainVideo").get(0).ended === true){

 $(".m-again").show()
 videoPlay = "off";
 $(".platpausebtn").find("i").attr('class','fas fa-play')
 clearInterval(setID)
    }
}