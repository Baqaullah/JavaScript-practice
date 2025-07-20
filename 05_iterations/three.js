// for of

// ["", "", ""] strings in array
// // [{}, {}, {}] objects in array

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr){
//     console.log(num)
// }
// const names = ["Wajid", "Zain", "Rizwan", "Najaf"]

// for (const nam of names){
//     console.log(`Here is the list of desired ${nam}`)
// }

// Map


const map = new Map()

map.set("PK", "Paksitan")
map.set("US", "United States of America")
// console.log(map)

for (const [key, value] of map){
    console.log(key, `:-`, value)
}
