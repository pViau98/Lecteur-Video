const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const augmenter = document.querySelector('.augmenter');
const diminuer = document.querySelector('.diminuer');
const video = document.querySelector('.video');
const progres = document.querySelector('.progres');
let volume = 0.5;

video.volume = volume;

play.addEventListener('click', function() {
    video.play();
})

pause.addEventListener('click', function() {
    video.pause();
})

augmenter.addEventListener('click', function() {
    volume += 0.1;
    if (volume > 1) {
      volume = 1;
    }
    video.volume = volume;
});

diminuer.addEventListener('click', function() {
    volume -= 0.1;
    if (volume < 0) {
      volume = 0;
    }
    video.volume = volume;
});

video.addEventListener('timeupdate', function() {
  const barrePos = video.currentTime / video.duration;
  progres.style.width = barrePos * 100 + "%";
});

