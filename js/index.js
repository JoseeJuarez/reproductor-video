const $video = document.querySelector('#video');
const $pause = document.querySelector('#pause');
const $play = document.querySelector('#play');
const $backward = document.querySelector('#backward');
const $frontward = document.querySelector('#frontward');
const $progress = document.querySelector('#progress');

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$backward.addEventListener('click',handleBacward)
$frontward.addEventListener('click',handleFrontbackward)

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
$video.addEventListener('loadedmetadata', handlerLoader)
$video.addEventListener('timeupdate', handlerTimeupdate)
$progress.addEventListener('input',handlerInput)
function handlerLoader(){
    $progress.max = $video.duration;
}
function handlerTimeupdate(){
    $progress.value = $video.currentTime;
}
function handlerInput(){
     $video.currentTime = $progress.value;
}