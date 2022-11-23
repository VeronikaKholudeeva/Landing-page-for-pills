document.addEventListener('DOMContentLoaded', function() {
    let minute=29;
    let sec=59;
    let timerId = setInterval(function () {
        document.getElementById("min").innerHTML = minute.toString().padStart(2,'0');
        document.getElementById("sec").innerHTML = sec.toString().padStart(2,'0');
        sec--;
        if (sec == 00) {
           minute--;
           sec = 60;
           if (minute < 0) {
            document.getElementById("min").innerHTML = "00";
            document.getElementById("sec").innerHTML = "00";
            clearInterval(timerId)
           }
        }
     }, 1000);
})
