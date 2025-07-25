console.log("welcome to spotify"); 
let songIndex =0;
let audioElement = new Audio(songs[0],filePath);
let masterPlay = document.getElementById('masterPlay');
let myPreogressBar=document.getElementById('myProgressBar')
let songs = [
    {songName: "Tere Layi", filePath:"songs/Tere Layi - Nirvair Pannu.mp3", coverPath:"cover.1.jpg"}
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
    }
})
myPreogressBar.addEventListener('timestamp',()=>{
    console.log('timeupdate');
})

