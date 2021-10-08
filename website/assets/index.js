import MediaPlayer from './mediaPlayer.js';

const video = document.querySelector('video');
const button = document.querySelector('button');

button.onclick = () => player.togglePlay();
const player = new MediaPlayer(video);