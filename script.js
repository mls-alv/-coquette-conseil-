
function personnaliser() {
  const style = prompt(
    "Quelle ambiance préfères-tu : rose, lilas, fleurs ou rubans ?"
  );

  if (!style) return;

  document.getElementById("message").textContent =
    "Ton univers commence à se dessiner : " + style + " 💗";
}

function ajouterVetement() {
  const champ = document.getElementById("vetement");
  const nom = champ.value.trim();

  if (!nom) {
    alert("Écris le nom d'un vêtement !");
    return;
  }

  const element = document.createElement("li");
  element.textContent = nom;
  document.getElementById("liste").appendChild(element);
  champ.value = "";
}
