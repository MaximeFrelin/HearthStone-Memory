var tableauCarte = [];

function afficherCarte(id) {
    var indiceCarte = trouverIndiceCarte(id);
    var src = constructionSrc(indiceCarte);
    var carteARetourner = document.getElementById(id).src = src;
    comparerCarte(id);
}

function cacherCarte(id) {
    var carteARetourner = document.getElementById(id).src = "src/carte/dos.png";
}

function trouverCarte(nomComplet) {
    var indiceCarte = nomComplet.split("/");
    return indiceCarte[1];
}

function constructionSrc(indiceCarte) {
    var src = "src/carte/carte";
    if(indiceCarte == 1) 
        return src+="1.png";
    else if(indiceCarte == 2)
        return src+="2.png";
    else if(indiceCarte == 3)
        return src+="3.png";
    else if(indiceCarte == 4)
        return src+="4.png";
    else if(indiceCarte == 5)
        return src+="5.png";
    else if(indiceCarte == 6)
        return src+="6.png";
    else if(indiceCarte == 7)
        return src+="7.png";
    else if(indiceCarte == 8)
        return src+="8.png";
}

function comparerCarte(indiceCarte) {
    if(duoCarte[0] == null)
        duoCarte[0] = indiceCarte;
    else if(duoCarte[1] == null)
        duoCarte[1] = indiceCarte;
    if(duoCarte[0] != null && duoCarte[1] != null) {
        if(duoCarte[0] != duoCarte[1]) {
            var indiceCarte1 = trouverIndiceCarte(duoCarte[0]);
            var indiceCarte2 = trouverIndiceCarte(duoCarte[1]);
            if (indiceCarte1 == indiceCarte2) {
                console.log("Ta gagné");
            }else {
                setTimeout(function(){cacherCarte(duoCarte[0]); cacherCarte(duoCarte[1]);}, 500);
            }
                
        }
        duoCarte[0] = null;
        duoCarte[1] = null;
    }
}

function attendre(milisecondes) {
    var currentTime = new Date().getTime();
 
    while (currentTime + milisecondes >= new Date().getTime()) {
    }
 }

 function passerTableauJeux(tableauCarteBis) {
     tableauCarte = tableauCarteBis;
     console.log(tableauCarte);
 }