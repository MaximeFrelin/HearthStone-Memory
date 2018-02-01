var plateau = document.getElementById("plateau_carte");
var taillePlateau = 4;
var tableauCarte = new Array("carte1", "carte2", "carte3", "carte4", "carte5", "carte6", "carte7", "carte8","carte1", "carte2", "carte3", "carte4", "carte5", "carte6", "carte7", "carte8");

/**
 * Fonction pour construire le plateau de jeu
 */
function construirePlateau() {
    this.carteTotal = "";
    melange(tableauCarte);
    console.log(tableauCarte);
    for (i = 0; i < Math.pow(taillePlateau,2); i++) {
        if (i%taillePlateau == 0)
            carteTotal += " </br>";
        carteTotal += "<input type='image' src='src/carte/" + tableauCarte[i] + ".png' height='200px' weight='100' id='carte" + i + "'>";             
    }
    plateau.innerHTML = carteTotal;
}

function melange(carte){
    for (var i=0; i<carte.length; i++){
        var alea=Math.floor(Math.random()*carte.length);
        temp=carte[i];
        carte[i]=carte[alea];
        carte[alea]=temp;
    }
}

construirePlateau();





