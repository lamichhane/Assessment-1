/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var timeElapsed = 0;
    var started=false;
    var intervalStart;

    btn1.addEventListener('click', function () {
        startStop();
    });
    btn2.addEventListener('click', function () {
        reset();
    });
    btn3.addEventListener('click', function () {
        recordTime();
    });
    
    document.addEventListener("keydown", function (event) {

        var startKey = "S";
        var resetKey = "R";
        var recordKey = "T";

        var key = event.key.toUpperCase();
        if (key === startKey) {
            startStop();
        } else if (key === resetKey) {
            reset();
        } else if (key === recordKey) {
            recordTime();
        }
    });

    function startStop() {
        if(started ===false){
           intervalStart= setInterval(function () {
            timeElapsed += 0.01;
            document.getElementById("timeElapsed").innerHTML = timeElapsed.toFixed(2);
        }, 10);
        started=true;
        }else{
            clearInterval(intervalStart);
            started=false;
        }
    }
    function reset() {
        clearInterval(intervalStart);
        timeElapsed = 0;
        document.getElementById("timeElapsed").innerHTML=timeElapsed;
        document.getElementById("recordedTime").innerHTML='';
        started = false;
    }
    function recordTime() {
        if(timeElapsed > 0){
                document.getElementById("recordedTime").innerHTML+=timeElapsed.toFixed(2) +"<br/>";
//                document.write("\n");
        }
  
        
    }
}


