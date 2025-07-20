const myObject = {
    JS: "JavaScript",
    cpp: "C++",
    Swift: "swift by apple"

}
for (const key in myObject) {
       // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["JS", "C++", "Python", "mongoDB"]

for (const key in programming) {
   console.log(programming[key])
}