// Declaraciones
const $video = document.querySelector('#video');
const $pause = document.querySelector('#pause');
const $play = document.querySelector('#play');
const $backward = document.querySelector('#backward');
const $frontward = document.querySelector('#frontward');
const $progress = document.querySelector('#progress');
const $mute = document.querySelector('#mute');
const $unmute = document.querySelector('#unmute');
// Eventos
$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$mute.addEventListener('click',handleMute)
$unmute.addEventListener('click',handleUnmute)
$backward.addEventListener('click',handleBacward)
$frontward.addEventListener('click',handleFrontbackward)
$video.addEventListener('loadedmetadata', handlerLoader)
$video.addEventListener('timeupdate', handlerTimeupdate)
$progress.addEventListener('input',handlerInput)
window.onkeydown = function (event){
    if (event.keyCode == '32'){
       if($video.paused == true){
        handlePlay();
       } else {
        handlePause();
       }
    } else if(event.keyCode == '39'){
        handleFrontbackward();
    } else if(event.keyCode == '37'){
        handleBacward();
    }
 }

// Funciones
function handlePlay(){
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
}
function handlePause(){
    $video.pause()
    $play.hidden = false;
    $pause.hidden = true;
}
function handleFrontbackward(){
    $video.currentTime = $video.currentTime + 10;
}
function handleBacward(){
    $video.currentTime = $video.currentTime - 10;    
}
function handlerLoader(){
    $progress.max = $video.duration;
}
function handlerTimeupdate(){
    $progress.value = $video.currentTime;
}
function handlerInput(){
     $video.currentTime = $progress.value;
}
function handleMute(){
    $video.muted = true;
    $mute.hidden = true;
    $unmute.hidden = false;
}
function handleUnmute(){
    $video.muted = false;
    $mute.hidden = false;
    $unmute.hidden = true;
}