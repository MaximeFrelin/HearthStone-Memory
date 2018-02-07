var plateau = document.getElementById("plateau_carte");
var taillePlateau = 4;
var tableauCarte = []

function construireTableauCarte(tailleGrille) {
    var carte = 1;
    for(var i=0 ; i <  tailleGrille;i++) {
        tableauCarte[i] = new Carte("carte"+i, "indice"+carte);
        if(carte == 8)
            carte = 1;
        else
            carte++;
    }
}

/**
 * Fonction pour construire le plateau de jeu
 */
function construirePlateau() {
    construireTableauCarte(16);
    melange(tableauCarte);
    this.carteTotal = "";
    for (i = 0; i < Math.pow(taillePlateau,2); i++) {
        if (i%taillePlateau == 0)
            carteTotal += " </br>";
        carteTotal += "<img src='src/carte/dos.png' indice='" + tableauCarte[i].getIdCarte() + "' height=175 width=120>";             
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





