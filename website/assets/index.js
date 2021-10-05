class MediaPlayer{
    constructor(video){
        this.video = video
    }

    play(){
        this.video.play()
    }

    pause(){
        this.video.pause()
    }

    togglePlay(){
        if(this.video.paused){
            this.video.play()
        }else{
            this.video.pause()
        }
    }
}

const video = document.querySelector('video');
const button = document.querySelector('button');

button.onclick = () => player.togglePlay();
const player = new MediaPlayer(video);