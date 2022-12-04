// read file from file
import fs from 'fs'

const elves:Array<string> = fs.readFileSync('input', {encoding: 'utf8'})
                              .trim()
                              .split('\n\n')

function part1() {
  const calories = elves.map((elf) => {
    const calories = elf.split('\n').map(Number)
    return calories.reduce((previous, current) => previous + current, 0)
  })
  console.log(`part 1: Highest calories an elf is carrying: ${Math.max(...calories)} `)
}

function part2() {
  const calories = elves.map((elf) => {
    const calories = elf.split('\n').map(Number)
    return calories.reduce((previous, current) => previous + current, 0)
  })
  calories.sort((a, b) => b - a)
  const sum = calories.slice(0, 3).reduce((sum, val) => sum + val)
  console.log(`part 2: Sum of highest 3 calories is ${sum}`)
}

part1()
part2()
