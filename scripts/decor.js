




let currentDecorPokemon = pkmn.gengar.id
let currentDecor = item.googlySpecs.id

function openDecor(){


    currentDecorPokemon = currentEditedPkmn


    currentDecor = undefined


    if (pkmn[currentEditedPkmn].decor?.decor != undefined) currentDecor = pkmn[currentEditedPkmn].decor.decor


    document.getElementById('decor-menu').style.display = 'flex'

    document.getElementById("pkmn-decor-dress").src = `img/pkmn/sprite/${currentDecorPokemon}.png`
    if (pkmn[currentEditedPkmn].shiny && !pkmn.piloswine.shinyDisabled) document.getElementById("pkmn-decor-dress").src = `img/pkmn/shiny/${currentDecorPokemon}.png`

    document.getElementById("pkmn-decor-item").src = ``

    document.getElementById("decor-list").innerHTML = `
    <div onclick="pkmn.${currentEditedPkmn}.decor = undefined; document.getElementById('pkmn-decor-item').src = ''; document.getElementById('pkmn-edit-decor').src = ''; if (saved.currentArea==undefined){updatePreviewTeam();}  "><span>
    <svg style="color:red" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
    </span> Remove decor </div>

    ` 

    for (const i of pkmn[currentDecorPokemon].decorOwned){
        const div = document.createElement("div")
        div.innerHTML = `
        <span><img src="img/decor/${i}.png"> </span> ${format(i)}
        `

        document.getElementById("decor-list").appendChild(div)

            div.addEventListener("click", e => { 
                document.getElementById("pkmn-decor-item").src = `img/decor/${i}.png`
                currentDecor = i

            })
    }








}









const decorElement = document.querySelector('.sprite-decor');
const spriteBox = document.querySelector('.sprite-box');

let isDragging = false;
let startX, startY;

decorElement.style.position = 'absolute';
decorElement.style.cursor = 'move';
decorElement.style.left = '0px';
decorElement.style.top = '0px';

// calculate centered position
function getCenteredPosition() {
    const boxWidth = spriteBox.offsetWidth;
    const boxHeight = spriteBox.offsetHeight;
    
    const decorRect = decorElement.getBoundingClientRect();
    
    return {
        x: (boxWidth / 2) - (decorRect.width / 2),
        y: (boxHeight / 2) - (decorRect.height / 2)
    };
}

const initialPos = getCenteredPosition();
decorElement.style.left = initialPos.x + 'px';
decorElement.style.top = initialPos.y + 'px';

decorElement.addEventListener('mousedown', startDragDecor);
decorElement.addEventListener('touchstart', startDragDecor);

function startDragDecor(e) {
    e.preventDefault();
    isDragging = true;
    
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    
    const boxRect = spriteBox.getBoundingClientRect();
    
    // gt current left/top of the decoration
    const currentLeft = parseFloat(decorElement.style.left) || 0;
    const currentTop = parseFloat(decorElement.style.top) || 0;
    
    // store offset where we clicked relative to sprite-box minus current position
    startX = clientX - boxRect.left - currentLeft;
    startY = clientY - boxRect.top - currentTop;
    
    // add listeners only when dragging starts
    document.addEventListener('mousemove', dragDecor);
    document.addEventListener('mouseup', endDragDecor);
    document.addEventListener('touchmove', dragDecor);
    document.addEventListener('touchend', endDragDecor);
}

function dragDecor(e) {
    if (!isDragging) return;
    e.preventDefault();
    
    // get pointer position
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    
    // calculate position relative to sprite-box
    const boxRect = spriteBox.getBoundingClientRect();
    
    const newX = clientX - boxRect.left - startX;
    const newY = clientY - boxRect.top - startY;
    
    // apply new position
    decorElement.style.left = newX + 'px';
    decorElement.style.top = newY + 'px';
}

function endDragDecor(e) {
    if (!isDragging) return;
    isDragging = false;
    
    document.removeEventListener('mousemove', dragDecor);
    document.removeEventListener('mouseup', endDragDecor);
    document.removeEventListener('touchmove', dragDecor);
    document.removeEventListener('touchend', endDragDecor);
    
    const decorRect = decorElement.getBoundingClientRect();
    const boxRect = spriteBox.getBoundingClientRect();
    
    // check if decoration is completely outside the bounds (doesnt work very well)
    const isOutside = (
        decorRect.right < boxRect.left ||
        decorRect.left > boxRect.right ||
        decorRect.bottom < boxRect.top ||
        decorRect.top > boxRect.bottom
    );
    
    if (isOutside) {
        // rest to initial position if out of bounds 
        const resetPos = getCenteredPosition();
        decorElement.style.left = resetPos.x + 'px';
        decorElement.style.top = resetPos.y + 'px';
    } else {
        // get position in pixels
        const relativeX = parseFloat(decorElement.style.left);
        const relativeY = parseFloat(decorElement.style.top);
        

        // save decor info to the pokemon in pxls
        pkmn[currentDecorPokemon].decor = {
            decor: currentDecor, 
            x: relativeX, 
            y: relativeY
        }




        if (currentDecor!=undefined) {
        document.getElementById("pkmn-edit-decor").style.visibility = "visible"
        document.getElementById("pkmn-edit-decor").src = `img/decor/${currentDecor}.png`
        document.getElementById("pkmn-edit-decor").style = `position: absolute; left: ${relativeX}px; top: ${relativeY}px; pointer-events: none;`

        if (saved.currentArea==undefined) updatePreviewTeam()
        }



    }
}