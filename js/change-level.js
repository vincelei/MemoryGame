function levelup() {
    levelActual++;
}

function updateLevel() {
    let levelText = levelActual + 1;
    if(levelText < 10) {
        levelText = "0" + levelText;
    }
    document.querySelector("#level").innerText = levelText;
}

function loadNewLevel() {
    levelup();
    updateLevel();
    initial();
}