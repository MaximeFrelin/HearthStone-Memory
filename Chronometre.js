var Chronometre = function() {
    var startTime = Date.now();
    var minute = 0; var secondes = 0; var milisecondes = 0;

    this.start = function() {
        var interval = setInterval(function() {
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
            document.getElementById("timer").innerHTML = (milisecondes / 1000).toFixed(3);
        }, 10);
    }

    this.getChrono = function() {
        return minute + ":" + secondes + ":" + milisecondes;
    }
}