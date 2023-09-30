var minutes = 25;
var seconds = "00";
var repeats = 4;
var isBreak = false;

var break_done = new Audio("break_done_bell.wav");
var work_done = new Audio("work_done_bell.wav");

function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

async function start() {
    await runTimerAsync(24, 59);
    work_done.play();
    displayMessage("Session completed! Take a break!", 5000); // 5000 milliseconds (5 seconds)

    for (var i = 0; i <= repeats - 2; i++) {
        await runTimerAsync(4, 59);
        break_done.play();
        displayMessage("Break done. Back to work!", 5000); // 5000 milliseconds (5 seconds)

        await runTimerAsync(24, 59);
        work_done.play();
        displayMessage("Session completed! Take a break!", 5000); // 5000 milliseconds (5 seconds)

    }
    displayMessage("Time for a long break. Great work!", 5000); // 5000 milliseconds (5 seconds)
    await runTimerAsync(29, 59);
    break_done.play();

    function runTimerAsync(min, sec) {
        return new Promise((resolve) => {
            runTimer(min, sec);
            setTimeout(resolve, (min * 60 + sec) * 1000);
        });
    }

    function displayMessage(message, duration) {
        const doneElement = document.getElementById("done");
        doneElement.innerHTML = message;
        doneElement.classList.add("show_message");
        
        setTimeout(() => {
            doneElement.innerHTML = ""; // Clear the message after the specified duration
            doneElement.classList.remove("show_message");
        }, duration);
    }

    

    function runTimer(input_minutes, input_seconds){
        minutes = input_minutes;
        seconds = input_seconds;

        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        var minutes_interval = setInterval(minutesTimer, 60000);
        var seconds_interval = setInterval(secondsTimer, 1000);

        function minutesTimer(){
            minutes = minutes - 1;
            document.getElementById("minutes").innerHTML = minutes;
        }

        function secondsTimer(){
            seconds = seconds - 1;
            document.getElementById("seconds").innerHTML = seconds;
            if(seconds <= 0){
                if(minutes <= 0){
                    clearInterval(minutes_interval);
                    clearInterval(seconds_interval);

                }
                seconds = 60;
            }
        }
        
    }
    

}