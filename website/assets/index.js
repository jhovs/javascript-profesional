import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPuse from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video, 
    plugins: [
     new AutoPlay(),
     new AutoPuse()
    ]});

const button = document.querySelector('#buttonPlay');
button.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('#buttonMute');
buttonMute.onclick = () => player.toggleMute();