function discover() {
    let discovery;
    let pendinCards;
    let totalDiscovered = document.querySelectorAll(".discovered:not(.successful)");

    if (totalDiscovered.length > 1) {
        return;
    }
    
    this.classList.add("discovered");

    document.querySelector("#sound-flip").cloneNode().play();

    discovery = document.querySelectorAll(".discovered:not(.successful)");
    if (discovery.length < 2) {
        return;
    }

    compare(discovery);
    startCounter();
    pendinCards = document.querySelectorAll(".card:not(.successful)");
    if(pendinCards.length === 0) {
        setTimeout(finish, 1000);
    }
}

function compare(cardsToCompare) {
    if(
        cardsToCompare[0].dataset.value === cardsToCompare[1].dataset.value
        ) {
        success(cardsToCompare);
    } else{
        error(cardsToCompare);
    }
}