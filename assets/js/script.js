let sec = 40;

const countdown = setInterval(function(){
    if(sec > 49) {
        console.log(sec-60);
        if(sec === 60){
            console.log("BUON ANNO");
            clearInterval(countdown);
        }
    }

    console.log(sec);
    sec++;
}, 1000);

