const body = document.body,
    player = document.querySelector('.player'),
    playerHeader = player.querySelector('.player__header'),
    playerControls = player.querySelector('.player__controls'),
    slider = player.querySelector('.slider'),
    sliderContext = player.querySelector('.slider__context'),
    playlistButton = player.querySelector('.playlist'),
    playerPlayList = document.querySelectorAll('.player__song'),
    playerSongs = document.querySelectorAll('.audio'),
    playButton = document.querySelector('.play'),
    nextButton = document.querySelector('.next'),
    backButton = document.querySelector('.back'),
    playIcon = playButton.querySelector('img[alt="play-icon"]'),
    pauseIcon = playButton.querySelector('img[alt="pause-icon"]'),
    sliderContent =slider.querySelector('.slider__content'),
    sliderName = sliderContext.querySelector('.slider__name'),
    sliderTitle = sliderContext.querySelector('.slider__title'),
    sliderContentLength = playerPlayList - 1,
    progres = player.querySelector('.progres'),
    progresFilled = progres.querySelector('.progres__filled'),
    sliderWidth = 100;
    let isPlay = false;



function openPlayer(){
    playerHeader.classList.add('open-header') 
    playerControls.classList.add('move')
    slider.classList.add('open-slider')
}

function closedPlayer(){
    playerHeader.classList.remove('open-header') 
    playerControls.classList.remove('move') 
    slider.classList.remove('open-slider') 
}

sliderContext.addEventListener('click',openPlayer)

playlistButton.addEventListener('click',closedPlayer)

function durationSongs(){
    let min = parseInt(this.duration/60)
    if(min < 10){
        min = '0' + min; 
    }
    let sec = parseInt(this.duration%60)
    if(sec < 10){
        sec = '0' + sec;
    }
    let playerSongTime = `${min}:${sec}`;
    this.closest('.player__song').querySelector('.player__song-time').append(playerSongTime)

    song.addEventListener('timeupdate',progresUpdate)
}

let count = 0;
let song = playerSongs[count]
playerSongs.forEach((song) =>{
    song.addEventListener('loadeddata',durationSongs)
})


playButton.addEventListener('click',() => {
    isPlay = true;
    playSong();
})

function playSong(){
    if(song.paused == true){
        song.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else{
        song.pause();
        isPlay = false;
        playIcon.style.display = '';
        pauseIcon.style.display = '';
    }
}

function progresUpdate(){
    let progresFilledWidth = (this.currentTime/this.duration)   * 100 + '%'
    progresFilled.style.width = progresFilledWidth
}

let isMove = false;
progres.addEventListener('pointerdown', scurb(e){
    isMove = true;
})