// read file from file
import fs from 'fs'

const games:Array<Array<string>> = fs.readFileSync('input', {encoding: 'utf8'})
                              .trim()
                              .split('\n')
                              .map(line => line.split(' '))


const move = {
  rock: 1,
  paper: 2,
  scissor: 3
}

const mapInput = {
  A: move.rock,
  B: move.paper,
  C: move.scissor,
  X: move.rock,
  Y: move.paper,
  Z: move.scissor
}


function score(opponentMove, myMove) {
  if(opponentMove === myMove){
    return myMove + 3
  } else if((opponentMove === move.paper && myMove === move.scissor) ||
            (opponentMove === move.rock && myMove === move.paper) ||
            (opponentMove === move.scissor && myMove === move.rock)) {
    return myMove + 6
  }
  return myMove
}

function part1() {
   console.log(games.map(line => {
      const oponentMove = mapInput[line[0]]
      const myMove = mapInput[line[1]]
      return score(oponentMove, myMove)
  }).reduce((sum, val) => sum + val, 0))
}

const solution = {
  A: { // rock
    X: move.scissor,  // loss
    Y: move.rock, // draw
    Z: move.paper, // win
  },
  B: { // paper
    X: move.rock,
    Y: move.paper,
    Z: move.scissor
  },
  C: { // scissor
    X: move.paper,
    Y: move.scissor,
    Z: move.rock
  }
}

function part2() {
   console.log(games.map(line => {
      const oponentMove = mapInput[line[0]]
      return score(oponentMove, solution[line[0]][line[1]])
  }).reduce((sum, val) => sum + val, 0))

}

part1()
part2()
