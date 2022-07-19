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


// const player1 = 'starfish'
// const player2 = 'sand dollar'
let starfishStarts = true

const boxclick = (e) =>{
    const listTurn = e.target.classList
    const location = listTurn[1]

    if (listTurn[2] === 'starfish' || listTurn[2] === 'sandDollar'){//this allows only one player to place in this square
        return
    }

    if (starfishStarts){
        listTurn.add('starfish'),
        starfishStarts = !starfishStarts //which means that is the other players turn
    }
    else{
        listTurn.add('sandDollar'),
        starfishStarts = !starfishStarts
    }
}
const winningArray = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]// these are the postions of where the player can win
 

//need to check who one the game

for(const gameBoxe of gameBoxes){
    gameBoxe.addEventListener('click', boxclick)
}



