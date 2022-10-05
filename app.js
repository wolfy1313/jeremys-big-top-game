const playerTally = document.getElementById('playerScoreBoard')
const dealerTally = document.getElementById('dealerScoreBoard')
const pushTally = document.getElementById('pushScoreBoard')
const playerCards = document.querySelector('pcards')

const dealButton = document.getElementById('deal')
const hitButton = document.getElementById('hit')
const stayButton = document.getElementById('stay')
const resetButton = document.getElementById('reset')

let playerWins = 0
let dealerWins = 0
let pushWins = 0

let playerScore = 0
let dealerScore = 0

let isPlayerTurn = true
let isDealerTurn = false
let isWinner = false
let isPush = false
let isActiveGame = false

let playerHand = []
let dealerHand = []

// const playerBlackJack = () => {
//   if (playerScore === 21){
//     alert("PLAYER HAS BLACKJACK")
//     dealerPlay()
//   } else if (dealerScore === 21) {
//     alert("DEALER HAS BLACKJACK")
//     isActiveGame = false
//   } else if (playerScore === 21 && dealerScore === 21){
//     alert("DOUBLE BLACKJACK! IT'S A PUSH!")
//     isActiveGame = false
//   }
// }

const checkWin = () => {
  if (playerScore > 0 && dealerScore === 0) {
    return
  } 
  else if (playerScore === 21){
    // alert("PLAYER HAS BLACKJACK")
    dealerPlay()
  }
  else if (playerScore <= 21 && dealerScore >21){
    console.log("checkWintest11")
    alert("PLAYER WINS!")
    // console.log("PLAYER WINS!");
    playerWins++
    playerTally.innerText = playerWins
    isActiveGame = false
    return
} else if (playerScore > 21 && dealerScore <= 21){
  console.log("checkWintest11")
    alert ("DEALER WINS!")
    // console.log("DEALER WINS!");
    dealerWins++;
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
} else if (playerScore === 21 && dealerScore === 21){
  console.log("checkWintest11")
    alert("IT'S A PUSH!")
    // console.log("IT'S A PUSH!")
    pushWins++;
    pushTally.innerText = pushWins
    isActiveGame = false
    return
}
  else if (playerScore < 21 && dealerScore === 21) {
    console.log("checkWintest11")
    alert("DEALER HAS BLACKJACK")
    dealerWins++
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
  }  else if (playerScore > 21) {
    console.log("checkWintest11")
    alert("PLAYER BUSTED AND GAME IS OVER CLICK PLAY AGAIN");
    dealerWins++
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
  } else if (dealerScore > 21) {
    console.log("checkWintest11")
    alert("DEALER BUSTS, PLAYER WINS")
    playerWins++
    playerTally.innerText = playerWins
    isActiveGame = false
    return
  } else if (playerScore > dealerScore && dealerScore >= 17) {
    console.log("checkWintest11")
    alert("PLAYER WINS!");
    playerWins++
    playerTally.innerText = playerWins
    isActiveGame = false
    return
  } else if (!isPlayerTurn && playerScore < dealerScore && dealerScore >= 17 && dealerScore <= 21){
    alert ("DEALER WINS!");
    dealerWins++
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
  }
}


// const checkBust = () => {
//   if (playerScore > 21) {
//     alert("PLAYER BUSTED AND GAME IS OVER CLICK PLAY AGAIN");
//     isActiveGame = false
//   } else if (dealerScore > 21) {
//     alert("DEALER BUSTS, PLAYER WINS")
//     isActiveGame = false
//   }
// }

const checkAce = () => {
  if (playerScore >=11) {
    for (card of deck) {
      if (card.name === 'Ace'){
        card.value === 1
      }
    }
  }
  return
}

const deck =[
  {
    name: 'Ace',
    value: 11,
    suit: 'spades',
    // id: placeholder,
    // art: placeholder,
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'clubs'
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'hearts'
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'diamonds'
  },
  {
    name: 'King',
    value: 10,
    suit: 'clubs'
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'clubs'
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'clubs'
  },
  {
    name: '10',
    value: 10,
    suit: 'clubs'
  },
  {
    name: '9',
    value: 9,
    suit: 'clubs'
  },
  {
    name: '8',
    value: 8,
    suit: 'clubs'
  },
  {
    name: '7',
    value: 7,
    suit: 'clubs'
  },
  {
    name: '6',
    value: 6,
    suit: 'clubs'
  },
  {
    name: '5',
    value: 5,
    suit: 'clubs'
  },
  {
    name: '4',
    value: 4,
    suit: 'clubs'
  },
  {
    name: '3',
    value: 3,
    suit: 'clubs'
  },
  {
    name: '2',
    value: 2,
    suit: 'clubs'
  },
  {
    name: 'King',
    value: 10,
    suit: 'spades'
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'spades'
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'spades'
  },
  {
    name: '10',
    value: 10,
    suit: 'spades'
  },
  {
    name: '9',
    value: 9,
    suit: 'spades'
  },
  {
    name: '8',
    value: 8,
    suit: 'spades'
  },
  {
    name: '7',
    value: 7,
    suit: 'spades'
  },
  {
    name: '6',
    value: 6,
    suit: 'spades'
  },
  {
    name: '5',
    value: 5,
    suit: 'spades'
  },
  {
    name: '4',
    value: 4,
    suit: 'spades'
  },
  {
    name: '3',
    value: 3,
    suit: 'spades'
  },
  {
    name: '2',
    value: 2,
    suit: 'spades'
  },
  {
    name: 'King',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: '10',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: '9',
    value: 9,
    suit: 'diamonds'
  },
  {
    name: '8',
    value: 8,
    suit: 'diamonds'
  },
  {
    name: '7',
    value: 7,
    suit: 'diamonds'
  },
  {
    name: '6',
    value: 6,
    suit: 'diamonds'
  },
  {
    name: '5',
    value: 5,
    suit: 'diamonds'
  },
  {
    name: '4',
    value: 4,
    suit: 'diamonds'
  },
  {
    name: '3',
    value: 3,
    suit: 'diamonds'
  },
  {
    name: '2',
    value: 2,
    suit: 'diamonds'
  },
  {
    name: 'King',
    value: 10,
    suit: 'hearts'
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'hearts'
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'hearts'
  },
  {
    name: '10',
    value: 10,
    suit: 'hearts'
  },
  {
    name: '9',
    value: 9,
    suit: 'hearts'
  },
  {
    name: '8',
    value: 8,
    suit: 'hearts'
  },
  {
    name: '7',
    value: 7,
    suit: 'hearts'
  },
  {
    name: '6',
    value: 6,
    suit: 'hearts'
  },
  {
    name: '5',
    value: 5,
    suit: 'hearts'
  },
  {
    name: '4',
    value: 4,
    suit: 'hearts'
  },
  {
    name: '3',
    value: 3,
    suit: 'hearts'
  },
  {
    name: '2',
    value: 2,
    suit: 'hearts'
  },
]

const shuffleDeck = () => {
  for (let i = deck.length-1; i>0; i--){
    const randomDeck = Math.floor(Math.random()* (i+1));
    [deck[i], deck[randomDeck]] = [deck[randomDeck], deck[i]]
  } //updated Fisher-Yeats algorithm for shuffling an array
}

const countCards = () => {
  playerScore = 0
  playerHand.forEach(pCard => {
    playerScore += pCard.value
  });
  dealerScore = 0
  dealerHand.forEach(dCard => {
    dealerScore += dCard.value
  })
  checkWin()
}

const dealGame = () => {
  console.log("inside dealGame", isActiveGame)
  if (isActiveGame){
    return
  }
    shuffleDeck();
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());
    countCards()
    // checkBust()
    console.log("playerScore", playerScore)
    console.log("playerHand", playerHand)

    dealerHand.push(deck.pop())
    dealerHand.push(deck.pop())
    countCards()
    console.log("dealerScore", dealerScore)
    console.log("dealerHand", dealerHand)

    isActiveGame = true
  // console.log(dealerHand)
}

// countCards()

const playerHit = () => {
  dealButton.removeEventListener('click', dealGame)
  if (!isPlayerTurn) {
    return
  }
  checkAce()
  playerHand.push(deck.pop())
  countCards()
  // checkBust()
  console.log("playerHit, playerScore", playerScore)
  console.log("playerHitHand, playerHand", playerHand)
}


// const playerStay = () => {
//   isPlayerTurn = false;
//   isActiveGame = true
//   console.log(isDealerTurn)
// }

const dealerPlay = () => {
  dealButton.removeEventListener('click', dealGame)
  isPlayerTurn = false
  isActiveGame = true
  console.log("dealerPlay, playerScore", playerScore)
  console.log("dealerPlay, dealerScore", dealerScore)
  if (playerScore < dealerScore && dealerScore <= 21){
    alert("DEALER WINS HIT PLAY AGAIN TO PLAY...AGAIN")
    dealerWins++
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
  }
  else if (playerScore <= 21 && dealerScore <17) {
    dealerHand.push(deck.pop())
    countCards()
    dealerPlay()
    // checkBust()
    console.log("dealerHand", dealerHand)
  } else if (playerScore > dealerScore && dealerScore <17) {
    dealerHand.push(deck.pop())
    countCards()
    dealerPlay()
  }
  // else {
  //   checkWin()
  // }
}

const resetGame = () => {
  dealButton.addEventListener('click', dealGame)
  isActiveGame = false
  playerScore = 0
  dealerScore = 0
  isPlayerTurn = true
  isDealerTurn = false
  isWinner = false
  isPush = false
  playerHand = []
  dealerHand= []
}


dealButton.addEventListener('click', dealGame)
hitButton.addEventListener('click', playerHit)
stayButton.addEventListener('click', dealerPlay)
resetButton.addEventListener('click', resetGame)


// put event listeners in a function and run them when you start the game, don't add event listeners until you start the game. this way I can put in the once:true
// dealButton.removeEventListener