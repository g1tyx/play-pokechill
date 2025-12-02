


saved.theme = "dark"

document.getElementById("settings-theme").addEventListener("change", e => {
  saved.theme = document.getElementById(`settings-theme`).value
  changeTheme()

});


saved.version = 0.1

function updateGameVersion() {

  saved.version = 0.1
  document.getElementById(`game-version`).innerHTML = `v${saved.version}`

}


function changeTheme(){

    if (saved.theme === "dark"){
        document.documentElement.style.setProperty('--dark1', '#36342F');
        document.documentElement.style.setProperty('--dark2', '#444138');
        document.documentElement.style.setProperty('--light1', '#94886B');
        document.documentElement.style.setProperty('--light2', '#ECDEB7');
        saved
    }

    if (saved.theme === "verdant"){
        document.documentElement.style.setProperty('--dark1', '#32493dff');
        document.documentElement.style.setProperty('--dark2', '#475243ff');
        document.documentElement.style.setProperty('--light1', '#94886B');
        document.documentElement.style.setProperty('--light2', '#ECDEB7');
    }

    if (saved.theme === "lilac"){
        document.documentElement.style.setProperty('--dark1', '#454152ff');
        document.documentElement.style.setProperty('--dark2', '#4d5163ff');
        document.documentElement.style.setProperty('--light1', '#6b9486ff');
        document.documentElement.style.setProperty('--light2', '#b7ddecff');
    }

    if (saved.theme === "cherry"){
        document.documentElement.style.setProperty('--dark1', '#523a3eff');
        document.documentElement.style.setProperty('--dark2', '#6b4c4dff');
        document.documentElement.style.setProperty('--light1', '#a78b66ff');
        document.documentElement.style.setProperty('--light2', '#F9E7B2');
    }

    if (saved.theme === "onyx"){
        document.documentElement.style.setProperty('--dark1', '#212324');
        document.documentElement.style.setProperty('--dark2', '#282A2B');
        document.documentElement.style.setProperty('--light1', '#3F4144');
        document.documentElement.style.setProperty('--light2', '#D0D1D4');
    }

}

async function trimTransparent(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  ctx.drawImage(img, 0, 0);

  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  let top = null, bottom = null, left = null, right = null;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = data[(y * width + x) * 4 + 3];
      if (alpha !== 0) {
        if (top === null) top = y;
        bottom = y;
        if (left === null || x < left) left = x;
        if (right === null || x > right) right = x;
      }
    }
  }

  const trimmedW = right - left + 1;
  const trimmedH = bottom - top + 1;

  const trimmedCanvas = document.createElement('canvas');
  trimmedCanvas.width = trimmedW;
  trimmedCanvas.height = trimmedH;

  trimmedCanvas.getContext('2d').drawImage(
    canvas,
    left, top, trimmedW, trimmedH,
    0, 0, trimmedW, trimmedH
  );

  return trimmedCanvas.toDataURL();
}

async function processSprite(img) {
  if (!img.src) return;

  // Evita recortes repetidos del mismo contenido
  if (img.dataset.lastSrc === img.src) return;

  img.dataset.lastSrc = img.src;

  if (!img.complete) {
    await new Promise(resolve => img.onload = resolve);
  }

  try {
    const result = await trimTransparent(img);
    img.src = result;
  } catch (e) {
    console.error("Error trimming sprite:", e);
  }
}

// Procesar imágenes presentes
document.querySelectorAll("img.sprite-trim").forEach(processSprite);

// Observar nuevas imágenes Y cambios de atributos
const observer = new MutationObserver(mutations => {
  for (const m of mutations) {
    if (m.type === "childList") {
      for (const node of m.addedNodes) {
        if (node.tagName === "IMG" && node.classList.contains("sprite-trim")) {
          processSprite(node);
        }
        if (node.querySelectorAll) {
          node.querySelectorAll("img.sprite-trim").forEach(processSprite);
        }
      }
    }

    if (m.type === "attributes" && m.attributeName === "src") {
      const img = m.target;
      if (img.tagName === "IMG" && img.classList.contains("sprite-trim")) {
        processSprite(img);
      }
    }
  }
});

observer.observe(document.body, { 
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["src"]
});







function learnPkmnMove(id, level, mod) {
    while (true) {
        const types = pkmn[id].type;
        const knownMoves = pkmn[id].movepool || [];
        let tier = 1;
        if (level >= 10 && rng(0.25)) tier++;
        if (level >= 20 && rng(0.25)) tier++;
        if (level >= 30 && rng(0.25)) tier++;
        if (level >= 50 && rng(0.25)) tier++;
        if (level >= 60 && rng(0.25)) tier++;
        tier = Math.min(tier, 3);

        const allMoves = Object.keys(move).filter(m => {
            const data = move[m];
            const notKnown = mod !== "wild" ? !knownMoves.includes(m) : true;
            return data.rarity === tier && notKnown;
        });

        const typeMatch = [];
        const movesetMatch = [];
        const allTag = [];

        allMoves.forEach(m => {
            const data = move[m];
            if (types.includes(data.type)) typeMatch.push(m);
            else if (data.moveset.includes("all")) allTag.push(m);
            else if (types.some(t => data.moveset.includes(t))) movesetMatch.push(m);
        });

        const roll = Math.random();
        let chosenList;

        if (roll < 0.40) chosenList = typeMatch.length ? typeMatch : movesetMatch.length ? movesetMatch : allTag;
        else if (roll < 0.80) chosenList = movesetMatch.length ? movesetMatch : typeMatch.length ? typeMatch : allTag;
        else chosenList = allTag.length ? allTag : typeMatch.length ? typeMatch : movesetMatch;

        if (!chosenList.length) continue;

        const chosenMove = chosenList[Math.floor(Math.random() * chosenList.length)];

        if (level === 1 && move[chosenMove].power <= 0) continue;

        return move[chosenMove].id;
    }
}
