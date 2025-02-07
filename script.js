// Logique pour l'énigme (ex: juillet.html)
document.getElementById('enigme-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const reponse = document.getElementById('reponse').value.trim().toLowerCase();
  const message = document.getElementById('message');

  // Remplace "notre premier baiser" par la réponse attendue
  if (reponse === "le parc") {
    message.innerHTML = "Bravo ! Tu as trouvé la bonne réponse. <a href='../lettres/juillet.txt' target='_blank'>Lire la lettre de juillet</a>";
  } else {
    message.innerHTML = "Dommage, essaie encore !";
  }
});

// Logique pour la page de code secret (code.html)
document.getElementById('code-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const code = document.getElementById('code').value.trim();
  const message = document.getElementById('message');

  // Remplace "1234" par le vrai code secret
  if (code === "1234") {
    message.innerHTML = "Félicitations, tu as gagné ! 🎉";
  } else {
    message.innerHTML = "Ce n'est pas le bon code. Réessaie !";
  }
});
