const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros)

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [ 6, 7, [4, 5]]]

const oldArr = anotherArr.flat(Infinity)
// console.log(oldArr)
let score1 = [200]
let score2 = [500]
let score3 = [700]
let score4 = [900]

const allNum = [...score1, ...score2, ...score3, ...score4]
// console.log(allNum)