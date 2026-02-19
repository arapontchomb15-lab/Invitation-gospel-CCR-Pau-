document.getElementById("gospelForm").addEventListener("submit", function(event) {
    const nom = document.getElementById("nom").value;
    const btn = document.getElementById("btnEnvoyer");

    // On prévient l'utilisateur
    alert("Merci " + nom + " ! Votre inscription est en cours d'envoi...");
    
    // On change le bouton pour éviter les doubles clics
    btn.innerText = "ENVOI EN COURS...";
    btn.style.opacity = "0.7";
});
