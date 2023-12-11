let movement = 0;
let cardGroup = [["🦄", "🍦"], ["🌈", "👽"], ["👾", "🤖"]];
//🌈👽👾🤖👹👺
let levelActual = 0;
let levels = [
    {
        cards: cardGroup[0],
        movementMax: 4
    },
    {
        cards: cardGroup[0].concat(cardGroup[1]),
        movementMax: 10
    },
    {
        cards: cardGroup[0].concat(cardGroup[1], cardGroup[2]),
        movementMax: 14
    }
];