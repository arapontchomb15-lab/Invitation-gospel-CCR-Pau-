// 1. On "écoute" le formulaire : quand l'utilisateur clique sur le bouton ENVOYER
document.getElementById("gospelForm").addEventListener("submit", function (event) {
    
    // 2. On récupère les valeurs saisies par l'utilisateur dans le DOM
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;

    // 3. LA VÉRIFICATION (Logique)
    // On vérifie si les champs obligatoires ne sont pas vides
    if (nom.trim() === "" || email.trim() === "") {
        // Si c'est vide, on bloque l'envoi vers Formspree
        event.preventDefault(); 
        alert("Oups ! Merci de remplir votre nom et votre email.");
    } else {
        // 4. LE REMERCIEMENT
        // Si tout est bon, on affiche un message avant que la page ne change
        alert("Merci " + nom + " ! Votre inscription pour le Gospel a bien été envoyée. À bientôt !");
        
        // Le formulaire continuera ensuite son chemin vers Formspree automatiquement
    }
});
