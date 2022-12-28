// read file from file
import fs from 'fs'

const lines:string[] = fs.readFileSync('input', {encoding: 'utf8'})
                              .trim()
                              .split('\n')

function part1() {
  const overlappingItems = []

  lines.forEach((item) => {
    const midIndex = Math.floor(item.length/2)
    const [firstHalf, secondHalf] = [item.slice(0, midIndex), item.slice(midIndex)]
  
    // see the day03b.ts solution where map is used instead
    for(const letter of firstHalf) {
      if(secondHalf.indexOf(letter) !== -1) {
        overlappingItems.push(letterToPriority(letter))
        break
      }
    }
  })
  console.log(overlappingItems.reduce((sum, num) => sum + num))
}

// see more readable implementation of this function day03b.ts 
function letterToPriority(letter: string) {
  const code = letter.charCodeAt(0)
  let priority = 0
  
  // a-z characters are represented by the numbers 97-122
  if(code >= 97 && code <= 122) {
    priority = code - 96
  // A-Z characters are represented by the numbers 65-90  
  } else if(code >= 65 && code <= 90) {
    priority = code - 64 + 26
  }
  return priority
}

function part2() {
  let badges = []
  for(let i = 0; i < lines.length; i+=3) {
    const backpacks = [lines[i], lines[i+1], lines[i+2]]

    for(let letter of new Set(backpacks[0])) {
      if(backpacks[1].includes(letter) && backpacks[2].includes(letter)) {
        badges.push(letterToPriority(letter))
      }
    }
  }
  console.log(badges.reduce((a, b) => a + b, 0))
}

part1()
part2()
