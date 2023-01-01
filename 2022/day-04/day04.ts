// read file from file
import fs from 'fs'

const pairs:string[] = fs.readFileSync('input', {encoding: 'utf8'})
                              .trim()
                              .split('\n')

function part1() {
  let count = 0
  pairs.forEach((pair) => {
    const [interval1, interval2] = pair
    .split(',')
    .map((interval) => interval.split('-')
    .map(Number))

    const isInterval2InsideInterval1 = (interval2[0] >= interval1[0] && interval2[1] <= interval1[1])
    const isInterval1InsideInterval2 = (interval1[0] >= interval2[0] && interval1[1] <= interval2[1])

    if(isInterval1InsideInterval2 || isInterval2InsideInterval1) {
      count += 1
    }
  })
  console.log({count})
}

function part2() {
  let count = 0
  pairs.forEach((pair) => {
    const [interval1, interval2] = pair
    .split(',')
    .map((interval) => interval.split('-')
    .map(Number))

    const isIntervalOverlapping = (interval1[1] >= interval2[0] && interval2[1] >= interval1[0])

    if(isIntervalOverlapping) {
      count += 1
    }
  })
  console.log({count})

}

part1()
part2()
