function Chronometre() {
    var startTime = Date.now();
    var minute = 0; var secondes = 0; var milisecondes = 0;
    var chrono;

    this.start = function() {
        chrono = setInterval(function() {
            milisecondes = Date.now() - startTime;
            if(milisecondes >= 1000) {
                secondes++
                startTime = Date.now();
            }
            if(secondes >= 60) {
                secondes = 0;
                minute++
                startTime = Date.now();
            }
            console.log(minute + ":" + secondes + ":" + milisecondes);
            document.getElementById("chronometre").innerHTML = minute + ":" + secondes + ":" + milisecondes;
        }, 10);
    }

    this.stop = function() {
        clearInterval(chrono);
    }

    this.getChrono = function() {
        return minute + ":" + secondes + ":" + milisecondes;
    }
}