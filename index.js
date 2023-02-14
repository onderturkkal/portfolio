let player = {
    name: "Onder",
    chips: 200
}
let firstCard
let secondCard
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")

function renderPlayer(){
    playerEL.textContent = player.name + ": £" + player.chips
}

renderPlayer()

function getRandomCard(){
    let randomNumber = Math.floor ( Math.random() * 13 ) + 1
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else{
        return randomNumber
    }
}

function startGame () {
    isAlive = true
    hasBlackJack = false
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    renderPlayer()
}

function renderGame () {
    cardsEl.textContent= "Cards: "
    sumEl.textContent = "Sum: " + sum
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 40
        renderPlayer()
    } else {
        message = "You're busted"
        isAlive = false
        player.chips -= 20
        renderPlayer()
    }

    messageEl.textContent = message
    
}

function newCard () {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }    
}


let course = {
    name: "Onder",
    lessons: 13,
    age: 21,
    length: 63,
    level: 0-3,
    isFree: true,
    tags: ["html", "css"]
}