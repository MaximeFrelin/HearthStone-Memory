var plateau = document.getElementById("plateau_carte");
var taillePlateau = 4;

/**
 * Fonction pour construire le plateau de jeu
 */
function construirePlateau() {
    this.carteTotal = "";
    for (i = 0; i < Math.pow(taillePlateau,2); i++) {
        if (i%taillePlateau == 0)
            carteTotal += " </br>";
        carteTotal += "<input type='image' src='src/carte/carte1.png' height='200px' weight='100' id='carte" + i + "'>";             
    }
    plateau.innerHTML = carteTotal;
}

construirePlateau();





