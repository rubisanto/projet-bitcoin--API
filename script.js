// entrer url de l'api
function recupererLePrix() {
  const url = "https://blockchain.info/ticker";

  let requete = new XMLHttpRequest(); //créer un objet

  requete.open("GET", url); //premier parametre = GET ou POST, deuxieme para URL
  requete.responseType = "json"; // nous attendons du json
  requete.send(); //envoyer la requete

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        console.log(reponse.EUR.last);
        let prixEnEuro = document.querySelector("#price_label");
        prixEnEuro.textContent = reponse.EUR.last;
      } else {
        alert("un problème est survenu, merci de revenir plus tard");
      }
    }
  };
  console.log("prix actualisé");
}

setInterval(recupererLePrix, 1000);
