//create a game of tic tac toe
//theme will be under the sea
//use different shapes instead of x's and o's. decided to go with starfishes and sand dollars
//board color a dark blue
//under water background

//player1 and player2 or computer(need to decided which one)
//player 1 picks first
//player 1 is the starfish
//the round will keep going until either one wins or it is a tie


const gameBoxes = document.querySelectorAll('.box')
const statusDiv = document.querySelector('.status')
const resetDiv = document.querySelector('.reset')

const player1 = 'StarFish'
const player2 ='SandDollar'

let gameLive = true
let starfishStarts = true

//Button to restart the whole game
const fullReset = (e) => {
    starfishStarts =true
    statusDiv.innerHTML = `${player1} turn`
    for(const gameBox of gameBoxes){
        gameBox.classList.remove('starfish')
        gameBox.classList.remove('sandDollar')
    }
}
//Create a function that updates the Status bar

const playerStatus = (team) => team === 'StarFish' ? player1 : player2

const whoWon = (team) => {
    gameLive = false
    if (team === 'StarFish'){
        statusDiv.innerText = `${playerStatus(team)} has won`
    }else {
        statusDiv.innerText = `${playerStatus(team)} has won!`;
        }
    }


// this will check the postions of where the player can win
const statusCheck = () => {
    const topL = gameBoxes[0].classList[2]
    const topM = gameBoxes[1].classList[2]
    const topR = gameBoxes[2].classList[2]
    const midL = gameBoxes[3].classList[2]
    const midM = gameBoxes[4].classList[2]
    const midR = gameBoxes[5].classList[2]
    const bottomL = gameBoxes[6].classList[2]
    const bottomM = gameBoxes[7].classList[2]
    const bottomR = gameBoxes[8].classList[2]
    // check for the winner
    if(topL && topL === topM && topL === topR){//top row
    whoWon(topL)

    }else if(midL && midL === midM && midL === midR){//Middle row
        whoWon(midL)

    } else if( bottomL && bottomL === bottomM && bottomL === bottomR){//Bottom row
        whoWon(bottomL)

    }else if(topL && topL === midL && topL === bottomL){//left column
        whoWon(topL)

    }else if(topM && topM === midM && topM === bottomM ){//Middle Column
        whoWon(topM)

    }else if(topR && topR === midR && topR === bottomR){//Right Column
        whoWon(topR)

    }else if(topL && topL === midM && topL === bottomR){//Left to Right Diagonal
        whoWon(topL)

    }else if(topR && topR === midM && topR === bottomL){//Right to Left Diagonal
        whoWon(topR)
        
    }else if(topL && topM && topR && midL && midM && midR && bottomL && bottomM && bottomR){
        gameLive = false
        statusDiv.innerHTML = "It's a Draw!"
    } else{
        starfishStarts = !starfishStarts
        if(starfishStarts){
        statusDiv.innerHTML = `${player1} turn`
    }else{
        statusDiv.innerHTML = `${player2} turn`
        }
    }    
}
//create a function to click in the squares
const boxclick = (e) =>{
    const listTurn = e.target.classList


    if (listTurn[2] === 'starfish' || listTurn[2] === 'sandDollar'){//this allows only one player to place in this square
        return
    }

    if (starfishStarts){
        listTurn.add('starfish'),
         //which means that is the other players turn
        statusCheck()
    }
    else{
        listTurn.add('sandDollar'),
        
        statusCheck()
    }
}

for(const gameBoxe of gameBoxes){
    gameBoxe.addEventListener('click', boxclick)
}

resetDiv.addEventListener('click',fullReset)

// these are the postions of where the player can win

