// read file from file
import fs from 'fs'

const lines:string[] = fs.readFileSync('input', {encoding: 'utf8'})
                              .trim()
                              .split('\n')

function letterToPriority(letter: string) {
  if(/[a-z]/.test(letter)) {
    return letter.charCodeAt(0) - 96
  } else {
    return letter.charCodeAt(0) - 65 + 27
  }
}

function part1() {
  const res = lines.map((line) => {
    const [part1, part2] = [[...line.slice(0, line.length/2)], [...line.slice(line.length/2)]]

    const part1Set = new Set(part1)
    const intersection = part2.filter((x) => part1Set.has(x))
    const dedup = [...new Set(intersection)]

    return letterToPriority(dedup[0])
  })
  console.log(res.reduce((a, b) => a + b, 0))
}

function part2() {
  let badgesSum = 0
  for(let i = 0; i < lines.length; i+=3) {
    const backpacks = [[...lines[i]], [...lines[i+1]], [...lines[i+2]]]

    let set = new Set(backpacks[0])
    let intersection = backpacks[1].filter((x) => set.has(x))

    set = new Set(intersection)
    intersection = backpacks[2].filter((x) => set.has(x))

    const dedup = [...new Set(intersection)]
    badgesSum += letterToPriority(dedup[0]) 
  }
  console.log(badgesSum)
}

part1()
part2()
