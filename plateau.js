var plateau = document.getElementById("plateau_carte");
var taillePlateau = 4;
var tableauCarte = new Array("carte1/1", "carte2/2", "carte3/3", "carte4/4", "carte5/5", "carte6/6", "carte7/7", "carte8/8","carte9/1", "carte10/2", "carte11/3", "carte12/4", "carte13/5", "carte14/6", "carte15/7", "carte16/8");

/**
 * Fonction pour construire le plateau de jeu
 */
function construirePlateau() {
    this.carteTotal = "";
    melange(tableauCarte);
    for (i = 0; i < Math.pow(taillePlateau,2); i++) {
        if (i%taillePlateau == 0)
            carteTotal += " </br>";
        carteTotal += "<input onclick='afficherCarte(this.id)' type='image' src='src/carte/dos.png' height='200px' weight='100' id=" + tableauCarte[i] + ">";             
    }
    plateau.innerHTML = carteTotal;
}

/**
 * Fonction pour mélanger le plateau de carte
 * @param {*} carte 
 */
function melange(carte){
    for (var i=0; i<carte.length; i++){
        var alea=Math.floor(Math.random()*carte.length);
        temp=carte[i];
        carte[i]=carte[alea];
        carte[alea]=temp;
    }
}

construirePlateau();





