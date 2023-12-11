function CountDown() {
    let seconds = 10;
    let minutes = 0;
    let secondsText;
    let minutesText;
    let stopwatch;

    function startCounter() {
        console.log(seconds);
        seconds--;
        if (seconds < 0){
            seconds = 59;
            minutes--;
        }
        if (minutes < 0){
            seconds = 0;
            minutes = 0;
            clearInterval(stopwatch)
        }
        secondsText = seconds;
        minutesText = minutesText;
        if (seconds < 10) {
            secondsText = "0" + seconds;
        }
        if (minutes < 10) {
            minutesText = "0" + minutes;
        }

        document.querySelector("#minutes").innerText = minutesText;
        document.querySelector("#seconds").innerText = secondsText;
    }
    
    stopwatch = setInterval(startCounter, 1000);
}