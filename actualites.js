fetch('actualites.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur lors du chargement des actualités.");
    }
    return response.json();
  })
  .then(data => {

    const container = document.getElementById("liste-actualites");

    if (!container) {
      console.error("Div liste-actualites introuvable.");
      return;
    }

    // Affiche les articles du plus récent au plus ancien
    data.reverse().forEach(article => {

      const card = document.createElement("div");
      card.classList.add("carte");

      card.innerHTML = `
        <h2>${article.titre}</h2>
        <p class="date">${article.date}</p>
        <p>${article.contenu}</p>
      `;

      container.appendChild(card);
    });

  })
  .catch(error => {
    console.error("Erreur :", error);

  });
