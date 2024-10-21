const sounds = ["applause", "boom", "gasp", "tudum", "level-up", "wrong"];
const buttonsContainer = document.getElementById("buttons");

// Parcours de chaque son pour créer les boutons correspondants
sounds.forEach((sound, index) => {
  if (index % 3 === 0) {
    const row = document.createElement("div");
    row.classList.add("buttons-row");
    buttonsContainer.appendChild(row);
  }

  // Création d'un bouton pour chaque son
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  buttonsContainer.lastElementChild.appendChild(btn);
});

// Fonction pour arrêter tous les sons en cours
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

/* Script.js */
