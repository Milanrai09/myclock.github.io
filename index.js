function time() {
    var dnt = new Date();
    var hrs = dnt.getHours();
    var min = dnt.getMinutes();
    var sec = dnt.getSeconds();
    var session = 'AM';

    if(hrs >= 12){
        session = 'PM'
    }
    if(hrs > 12){
        hrs = hrs -12
    }

    if (hrs < 10){
       hrs =  "0" + hrs
    }
    if (min < 10){
       min =  "0" + min
    }
    if (sec < 10){
       sec =  "0" + sec
    }
    document.getElementById('clock').innerHTML =hrs + " " + ":" + " " + 
    min + " " + ":" + " " + sec + " " + session; 
}

setInterval(time,1000)