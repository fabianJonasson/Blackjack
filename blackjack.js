cards = [
    {"value": 2, "color": "diamonds", "points": 2},
    {"value": 3, "color": "diamonds", "points": 3},
    {"value": 4, "color": "diamonds", "points": 4},
    {"value": 5, "color": "diamonds", "points": 5},
    {"value": 6, "color": "diamonds", "points": 6},
    {"value": 7, "color": "diamonds", "points": 7},
    {"value": 8, "color": "diamonds", "points": 8},
    {"value": 9, "color": "diamonds", "points": 9},
    {"value": 10, "color": "diamonds", "points": 10},
    {"value": "J", "color": "diamonds", "points": 10},
    {"value": "Q", "color": "diamonds", "points": 10},
    {"value": "K", "color": "diamonds", "points": 10},
    {"value": "A", "color": "diamonds", "points": 11, "pointsAlt": 1},
    {"value": 2, "color": "hearts", "points": 2},
    {"value": 3, "color": "hearts", "points": 3},
    {"value": 4, "color": "hearts", "points": 4},
    {"value": 5, "color": "hearts", "points": 5},
    {"value": 6, "color": "hearts", "points": 6},
    {"value": 7, "color": "hearts", "points": 7},
    {"value": 8, "color": "hearts", "points": 8},
    {"value": 9, "color": "hearts", "points": 9},
    {"value": 10, "color": "hearts", "points": 10},
    {"value": "J", "color": "hearts", "points": 10},
    {"value": "Q", "color": "hearts", "points": 10},
    {"value": "K", "color": "hearts", "points": 10},
    {"value": "A", "color": "hearts", "points": 11, "pointsAlt": 1},
    {"value": 2, "color": "clubs", "points": 2},
    {"value": 3, "color": "clubs", "points": 3},
    {"value": 4, "color": "clubs", "points": 4},
    {"value": 5, "color": "clubs", "points": 5},
    {"value": 6, "color": "clubs", "points": 6},
    {"value": 7, "color": "clubs", "points": 7},
    {"value": 8, "color": "clubs", "points": 8},
    {"value": 9, "color": "clubs", "points": 9},
    {"value": 10, "color": "clubs", "points": 10},
    {"value": "J", "color": "clubs", "points": 10},
    {"value": "Q", "color": "clubs", "points": 10},
    {"value": "K", "color": "clubs", "points": 10},
    {"value": "A", "color": "clubs", "points": 11, "pointsAlt": 1},
    {"value": 2, "color": "spades", "points": 2},
    {"value": 3, "color": "spades", "points": 3},
    {"value": 4, "color": "spades", "points": 4},
    {"value": 5, "color": "spades", "points": 5},
    {"value": 6, "color": "spades", "points": 6},
    {"value": 7, "color": "spades", "points": 7},
    {"value": 8, "color": "spades", "points": 8},
    {"value": 9, "color": "spades", "points": 9},
    {"value": 10, "color": "spades", "points": 10},
    {"value": "J", "color": "spades", "points": 10},
    {"value": "Q", "color": "spades", "points": 10},
    {"value": "K", "color": "spades", "points": 10},
    {"value": "A", "color": "spades", "points": 11, "pointsAlt": 1}
];

let playerCards = [];
let dealerCards = [];

playerCards.push(getRandomCard());
playerCards.push(getRandomCard());
dealerCards.push(getRandomCard());

let choice = prompt(`Your cards: 
${printPlayer()}

Dealer cards:
${dealerCards[0].value} of ${dealerCards[0].color}

Hit or Stand? (h/s)`);


playerAction(choice);



function getRandomCard() {
    let randNum = Math.floor(Math.random() * cards.length)
    let randomCard = cards[randNum];
    cards.splice(randNum, 1);
    return randomCard;
};

function printPlayer() {
    let toPrint = [];
    playerCards.forEach(card => {
        toPrint.push(`${card.value} of ${card.color} `);
    });
    return toPrint;
}

function getPoints() {
    let playerPoints = 0;
    let dealerPoints = 0;
    playerCards.forEach(card => {
        if(card.value !== "A") {
            playerPoints += card.points;
        } else if(playerPoints < 11) {
            playerPoints += card.points;
        } else {
            playerPoints += card.pointsAlt;
        };
    });
    dealerCards.forEach(card => {
        if(card.value !== "A") {
            dealerPoints += card.points;
        } else if(dealerPoints < 11) {
            dealerPoints += card.points;
        } else {
            dealerPoints += card.pointsAlt;
        };
    });
    return [playerPoints, dealerPoints];
};

function playerAction(choice) {
    switch (choice) {
        case "s":
            while (getPoints()[1] < 17) {
                dealerCards.push(getRandomCard());
            };

            let points = getPoints();

            if(points[1] > 21 || points[1] < points[0]) alert("You won!");
            else if(points[0] == points[1]) alert("Draw!");
            else alert("You lost!");
            break;

        case "h":
            playerCards.push(getRandomCard());

            if(getPoints()[0] > 21) {
                alert("You lost!");
            } else {
                
            }

        default:
    };
};