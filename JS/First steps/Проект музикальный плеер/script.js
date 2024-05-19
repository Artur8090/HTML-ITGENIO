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
    sliderContent = slider.querySelector('.slider__content'),
    sliderName = sliderContext.querySelector('.slider__name'),
    sliderTitle = sliderContext.querySelector('.slider__title'),
    sliderContentLength = playerPlayList.length - 1,
    progres = player.querySelector('.progres'),
    progresFilled = progres.querySelector('.progres__filled'),
    sliderWidth = 100;

const bgBody = ['#e5e7e9', '#ff4545', '#f8ded3', '#ffc382', '#f5eda6', '#ffcbdc', '#dcf3f3'];
let isPlay = false;

function openPlayer() {
    playerHeader.classList.add('open-header');
    playerControls.classList.add('move');
    slider.classList.add('open-slider');
}

function closedPlayer() {
    playerHeader.classList.remove('open-header');
    playerControls.classList.remove('move');
    slider.classList.remove('open-slider');
}

sliderContext.addEventListener('click', openPlayer);

playlistButton.addEventListener('click', closedPlayer);

function durationSongs() {
    let min = parseInt(this.duration / 60);
    if (min < 10) {
        min = '0' + min;
    }
    let sec = parseInt(this.duration % 60);
    if (sec < 10) {
        sec = '0' + sec;
    }
    let playerSongTime = `${min}:${sec}`;
    this.closest('.player__song').querySelector('.player__song-time').append(playerSongTime);

    this.addEventListener('timeupdate', progresUpdate);
}

let count = 0;
let song = playerSongs[count];
playerSongs.forEach((song) => {
    song.addEventListener('loadeddata', durationSongs);
});

playButton.addEventListener('click', () => {
    isPlay = true;
    playSong();
});

function playSong() {
    if (song.paused == true) {
        song.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        song.pause();
        isPlay = false;
        playIcon.style.display = '';
        pauseIcon.style.display = '';
    }
}

function progresUpdate() {
    let progresFilledWidth = (this.currentTime / this.duration) * 100 + '%';
    progresFilled.style.width = progresFilledWidth;
    if (isPlay == true && this.duration == this.currentTime) {
        next();
    }
    if (count == sliderContentLength || song.currentTime == song.duration) {
        playIcon.style.display = "block";
        pauseIcon.style.display = "";
        isPlay = false;
    }
}

let isMove = false;
progres.addEventListener('pointerdown', scurb);

document.addEventListener('pointermove', (e) => { // Changed 'move' to 'pointermove'
    if (isMove == true) {
        scurb(e);
        song.muted = true;
    }
});
document.addEventListener('pointerup', (e) => {
    isMove = false;
    song.muted = false;
});

function scurb(e) {
    isMove = true;
    const width = progres.offsetWidth;
    const clickX = e.offsetX;
    const duration = song.duration;
    song.currentTime = (clickX / width) * duration;
}

function changeSliderContext() {
    sliderContext.style.animationName = 'opacity';
    sliderName.textContent = playerPlayList[count].querySelector('.player__song-name').textContent;
    sliderTitle.textContent = playerPlayList[count].querySelector('.player__title').textContent;
    if (sliderName.textContent.length > 16) {
        let textWrap = document.createElement('span');
        textWrap.className = 'text-wrap';
        textWrap.innerHTML = sliderName.textContent + " " + sliderName.textContent;
        sliderName.innerHTML = "";
        sliderName.append(textWrap);
    }
    if (sliderTitle.textContent.length >= 18) {
        let textWrap = document.createElement('span');
        textWrap.className = 'text-wrap';
        textWrap.innerHTML = sliderTitle.textContent + " " + sliderTitle.textContent;
        sliderTitle.innerHTML = "";
        sliderTitle.append(textWrap); // Corrected 'appemd' to 'append'
    }
}
changeSliderContext();

function selectSongs() {
    song = playerSongs[count]; // Corrected the assignment of 'song'
    for (let i = 0; i < playerSongs.length; i++) { // Changed '<=' to '<'
        if (i !== count) { // Corrected condition to use 'count'
            playerSongs[i].pause(); // Corrected 'i' to 'playerSongs[i]'
            playerSongs[i].currentTime = 0; // Corrected 'i' to 'playerSongs[i]'
        }
    }
    if (isPlay == true) {
        song.play();
    }
}
function run() {
    changeSliderContext();
    selectSongs();
    changeBgBody();
}

nextButton.addEventListener('click', () => {
    next(0);
});
backButton.addEventListener('click', () => {
    back(0);
});

let left = 0;
function next(index) {
    count = index || count;
    if (count == sliderContentLength) {
        return;
    }
    left = (count + 1) * sliderWidth;
    sliderContent.style.transform = `translate3d(-${left}%,0,0)`;
    count++;
    run();
}

function back(index) {
    count = index || count;
    if (count == 0) {
        return;
    }
    left = (count - 1) * sliderWidth;
    sliderContent.style.transform = `translate3d(-${left}%,0,0)`;
    count--;
    run();
}

playerPlayList.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index > count) {
            next(index - 1);
            return;
        }
        if (index < count) {
            back(index + 1);
            return;
        }
    });
});

function changeBgBody() {
    body.style.backgroundColor = bgBody[count];
}