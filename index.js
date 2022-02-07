console.log("welcome to spotify");
let songIndex=0;
let stopsong;

let songs=[
{songName:"Let Her Go -passengers",filepath:"1.mp3",coverpath:"1.jpg"},
{songName:"Have The Fun-slan",filepath:"2.mp3",coverpath:"2.jpg"},
{songName:"Keep Up-Akon",filepath:"3.mp3",coverpath:"3.jpg"},
{songName:"Flare-Manek",filepath:"4.mp3",coverpath:"4.jpg"},
{songName:"sahiba-intense",filepath:"5.mp3",coverpath:"5.jpg"},
{songName:"Excuses-Ap Dhillion",filepath:"6.mp3",coverpath:"6.jpg"},
{songName:"Famous-Gill",filepath:"7.mp3",coverpath:"7.jpg"},
{songName:"Slowly Slowly-pitBull",filepath:"8.mp3",coverpath:"8.jpg"},
{songName:"Without You-Kid Laroi",filepath:"9.mp3",coverpath:"9.jpg"},
{songName:"Desires-intense",filepath:"10.mp3",coverpath:"10.jpg"}
]
let songitems=Array.from(document.getElementsByClassName('songitem'));
// initializing varibales
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let audioElement=new Audio('1.mp3');
let gif=document.getElementById('gif');



songitems.forEach((element,i)=>{
    console.log(element,i);
    element.querySelectorAll("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerHTML=songs[i].songName;
})
// initializing play button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    stopsong.classList.remove('fa-play-circle');
    stopsong.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        stopsong.classList.remove('fa-pause-circle');
        stopsong.classList.add('fa-play-circle');
    }
})
//initializing progress bar
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})
// if we want to seek the progressbar
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;

})

function makeALlPlay(){
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
      element.addEventListener('click',(e)=>{
          //e is representing pointer 
          // e.target if we do then it will give that elemnt which is pointing to the element which is clicked.
          if(audioElement.paused || audioElement.currentTime<=0){
          makeALlPlay();
           console.log(e);
           stopsong=e.target;
           songIndex=parseInt(e.target.id);
           e.target.classList.remove('fa-play-circle');
           e.target.classList.add('fa-pause-circle');
           audioElement.src=`${songIndex+1}.mp3`;
           audioElement.currentTime=0;
           audioElement.play();
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
           document.getElementById("presentname").innerHTML=songs[songIndex].songName;
           gif.style.opacity=1;
           }
           else{
               audioElement.pause();
               e.target.classList.remove('fa-pause-circle');
               e.target.classList.add('fa-play-circle');
               masterPlay.classList.remove('fa-pause-circle');
               masterPlay.classList.add('fa-play-circle');
               gif.style.opacity=0;
           }
      })
    })
    document.getElementById('next').addEventListener('click',()=>{
           if(songIndex>=9){
               songIndex=0;
           }
           else{
             songIndex+=1;
           }
           audioElement.src=`${songIndex+1}.mp3`;
           audioElement.currentTime=0;
           audioElement.play();
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
           document.getElementById("presentname").innerHTML=songs[songIndex].songName;
           gif.style.opacity=1;
        })
        document.getElementById('prev').addEventListener('click',()=>{
            if(songIndex<=0){
                songIndex=0;
            }
            else{
              songIndex-=1;
            }
            audioElement.src=`${songIndex+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            document.getElementById("presentname").innerHTML=songs[songIndex].songName;
            gif.style.opacity=1;
         })