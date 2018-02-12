function Carte(idcarteBis, carteBis, cheminImageBis) {

    this.idCarte = idcarteBis;
    this.carte = carteBis;
    this.cheminImage = cheminImageBis;
    this.estRetourne = false;

    this.getIdCarte = function() {
        return this.idCarte;
    }

    this.getCarte = function() {
        return this.carte;
    }

    this.getCheminImage = function() {
        return this.cheminImage;
    }

    this.setCheminImage = function(nouveauChemin) {
        this.cheminImage = nouveauChemin;
    }
}