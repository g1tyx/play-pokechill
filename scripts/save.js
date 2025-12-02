saved.firstTimePlaying = true

function newGameIntro(){
  document.getElementById('disclaimer-menu').style.display = "flex"
  setTimeout(() => {
    document.getElementById('disclaimer-menu').style.opacity = "0"
    document.getElementById('starter-menu').style.display = "flex"
  }, 5000);
    setTimeout(() => {
    document.getElementById('disclaimer-menu').style.display = "none"
    
  }, 6000);

  
}

function saveGame() {
  let data = {};

  // Variable suelta
  data.saved = saved;
  data.team = team;

  // Items
  for (const i in item) {
    data[i] = {};
    data[i].got = item[i].got;
    data[i].newItem = item[i].newItem;
  }

  // Areas
  for (const i in areas) {
    data[i] = {};
    data[i].defeated = areas[i].defeated;
  }

  // Pokémon
  for (const i in pkmn) {
    if (!data[i]) data[i] = {};
    data[i].caught = pkmn[i].caught;
    data[i].movepool = pkmn[i].movepool;
    data[i].level = pkmn[i].level;
    data[i].moves = pkmn[i].moves;
    data[i].newmoves = pkmn[i].newmoves;
    data[i].ivs = pkmn[i].ivs;
    data[i].exp = pkmn[i].exp;
    data[i].newEvolution = pkmn[i].newEvolution;
  }

  localStorage.setItem("gameData", JSON.stringify(data));
}

// ---- CARGAR ----
function loadGame() {
  const raw = localStorage.getItem("gameData");
  if (!raw) {
    return;
  } 

  const data = JSON.parse(raw);

  if (data.saved !== undefined) saved = data.saved;
  if (data.team !== undefined) team = data.team;

  for (const i in item) {
    if (data[i]) {
      item[i].got = data[i].got;
      item[i].newItem = data[i].newItem;
    }
  }

  for (const i in areas) {
    if (data[i]) {
      areas[i].defeated = data[i].defeated;
    }
  }

  for (const i in pkmn) {
    if (data[i]) {
      pkmn[i].caught = data[i].caught;
      pkmn[i].movepool = data[i].movepool;
      pkmn[i].level = data[i].level;
      pkmn[i].moves = data[i].moves;
      pkmn[i].newmoves = data[i].newmoves;
      pkmn[i].ivs = data[i].ivs;
      pkmn[i].exp = data[i].exp;
      pkmn[i].newEvolution = data[i].newEvolution;
    }
  }

}


function exportData() {
  const raw = localStorage.getItem("gameData");
  if (!raw) return;

  const blob = new Blob([raw], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `Idlemon-${new Date().toISOString().split("T")[0]}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

function importData() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";

  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);

        localStorage.setItem("gameData", JSON.stringify(data));

        loadGame();
      } catch (err) {
        alert("Error loading data.");
      }
    };

    reader.readAsText(file);
    window.location.reload();
  };

  input.click();
  
}




setInterval(saveGame, 1 * 60 * 1000); 

document.addEventListener("keydown", (ev) => {
  if (ev.key.toLowerCase() === "s") {
    saveGame();
  }
});

function clearData() {
  localStorage.clear();
  window.location.reload();
}