/****************************************** EXERCICE 35 *******************************************/

var tabUtilisateurs = [
  ["Tya", "test1", "admin"],
  ["Milo", "test2", "User"],
  ["Lili", "test3", "user"],
];

afficherUtilisateurs(tabUtilisateurs);

function afficherUnUtilisateur(utilisateur) {
  console.log("*************************************************");
  console.log("*****************DÉBUT AFFICHAGE*****************");
  console.log("*************************************************");
  console.log("Identifiant de l'utilisateur : " + utilisateur[0]);
  console.log("Mot de passe de l'utilisateur : " + utilisateur[1]);
  console.log("Rôle de l'utilisateur : " + utilisateur[2]);
}

function afficherUtilisateurs(tabUtilisateurs) {
  for (var cpt = 0; cpt < tabUtilisateurs.length; cpt++) {
    if (cpt === tabUtilisateurs.length - 1) {
      afficherUnUtilisateur(tabUtilisateurs[cpt]);
      console.log("-----------------------FIN-----------------------");
    } else {
      afficherUnUtilisateur(tabUtilisateurs[cpt]);
    }
  }
}
