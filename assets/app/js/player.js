var player = document.getElementById("player");
var play = document.getElementById("play");

play.onclick=function(){
    if(play.className ==  "fa-solid fa-circle-play"){
        player.play();
        play.className = "fa-solid fa-circle-pause";
    }
    else if(play.className =="fa-solid fa-circle-pause"){
        player.pause();
        play.className = "fa-solid fa-circle-play";
    }
}


// progress_bar coding

player.ontimeupdate = function(){
    var t_duration = this.duration;
    var c_duration = this.currentTime;


    var sec = c_duration - parseInt(c_duration/60)*60;
    var t_sec = t_duration - parseInt(t_duration/60)*60;
    var time = document.getElementById("time");
    time.innerHTML= parseInt(c_duration/60) +":"+ parseInt(sec) +" / " + parseInt(t_duration/60) +":"+ parseInt(t_sec) ;

    var slide_bar = c_duration * 100/t_duration;
    var progress_bar = document.getElementById("progress_bar");
    progress_bar.style.width = slide_bar +"%";

}

//add playlist

var add_btn = document.getElementById("add_btn");
var add_box = document.getElementById("add_box");
add_btn.onclick = function(){
    if(add_btn.className == "fa-solid fa-circle-plus"){
        add_box.style.display ="block"
        debugger;
        add_btn.className = "fa-solid fa-circle-xmark";
    }
    else if(add_btn.className == "fa-solid fa-circle-xmark"){
        add_box.style.display="none";
        add_btn.className = "fa-solid fa-circle-plus";
    }
}