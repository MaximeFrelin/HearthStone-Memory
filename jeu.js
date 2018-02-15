var tableauCarte = [];
var duoCarte = [];
var duoImg = [];
var AffichageVieRestante = document.getElementById("nombre_vie");
var vieRestante = 5;
var essai = 0;
var peutJouer = true;
var chronometre = new Chronometre();
var chronoLance = false;

function afficherCarte(imageCarte) {
    var indiceCarte = imageCarte.dataset.indice;
    for(i of tableauCarte) {
        if (indiceCarte == i.idCarte) {
            imageCarte.src = i.cheminImage;
            i.estRetourne = true;
        }
    }
}

function cacherCarte(carteImg1, carte1, carteImg2, carte2) {
    carte1.estRetourne = false;
    carteImg1.src = "src/carte/dos.png";
    carte2.estRetourne = false;
    carteImg2.src = "src/carte/dos.png";
    renitialiserTableau();
}

function renitialiserTableau() {
    duoCarte = [];
    duoImg = [];
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

function comparerCarte(imageCarte) {
    if(!chronoLance) {
        chronometre.start();
        console.log("chrono");
        chronoLance = true;
    }

    if(!peutJouer)
        return -1;
    var indiceCarte = imageCarte.dataset.indice;
    var carteAcomparer;
    for(i of tableauCarte) {
        if (indiceCarte == i.idCarte) {
            carteAcomparer = i;
        }
    }
     if(carteAcomparer.estRetourne)
        return -1;
    if(duoCarte[0] == null) {
        duoCarte[0] = carteAcomparer;
        duoImg[0] = imageCarte;
    }
    else if(duoCarte[1] == null) {
        duoCarte[1] = carteAcomparer;
        duoImg[1] = imageCarte;
    }
    if(duoCarte[0] != null && duoCarte[1] != null) {
        if(duoCarte[0].carte == duoCarte[1].carte) {
            renitialiserTableau();
        }
        else {
            vieRestante--;
            AffichageVieRestante.innerHTML = vieRestante;
            setTimeout(function() {
                cacherCarte(duoImg[0], duoCarte[0], duoImg[1], duoCarte[1]);
            }, 400);
        }
        essai++;
    }
    afficherCarte(imageCarte);
    verifierGagnant();
}

function verifierGagnant() {
    if(vieRestante <= 0) {
        alert("Désolé, vous avez perdu, cliquez sur nouvelle partie pour recommencer une nouvelle partie");
        peutJouer = false;
        chronometre.stop()
    }

    for(i of tableauCarte) {
        if(!i.estRetourne)
            return;
    }
    chronometre.stop()
    finDePartie();
}

 function passerTableauJeux(tableauCarteBis) {
     tableauCarte = tableauCarteBis;
 }

 function nouvellePartie() {
     window.location.reload();
 }

 function finDePartie() {
    var chrono = chronometre.getChrono();
    var nomPersonne = prompt("Félicitation, vous avez gagné en " + essai + " coups et en " + chrono + + "secondes" + "\n\n Veuillez rentrer un nom pour le nouveau score : ", "Harry Potter");
    if (nomPersonne == null || nomPersonne == "") {
        txt = "UserX";
    } else {
        // Renplir base de données
    }
 }