function Chronometre() {
    var debutChrono = Date.now();
    var minute = 0; var secondes = 0; var milisecondes = 0;
    var chrono;

    this.start = function() {
        chrono = setInterval(function() {
            milisecondes = Date.now() - debutChrono;
            if(milisecondes >= 1000) {
                secondes++
                debutChrono = Date.now();
            }
            if(secondes >= 60) {
                secondes = 0;
                minute++
                debutChrono = Date.now();
            }
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