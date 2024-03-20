let centi = 0;
let mili = 0;
let sec = 0;
let sec_;

let afficher;
let compteur;

document.getElementById('time').innerHTML = "0" + sec + ":" + "0" + mili;



function chrono() {
    setInterval(function (){
        mili++;
            if (mili > 9) {
                mili = 0;
            }
    }, 1);
    centi++;
    centi*10;
    if (centi > 9) {
        centi = 0;
        sec++;
    }  
    if (sec < 10) {
        sec_ = "0" + sec;
    }
    else {
        sec_ = sec;
    }
        
    afficher = sec_ + ":" + centi + mili;
    document.getElementById("time").innerHTML = afficher;
    
    reglage = window.setTimeout("chrono();",100);
} 

function reset(){
  centi = 0;
  mili = 0;
  sec = 0;
}

function arret() 
    {	
            window.clearTimeout(reglage);
            reset();
    }



    function getTimestampInSeconds () {
      return Math.floor(Date.now() / 1000)
    }
    console.log(getTimestampInSeconds ());