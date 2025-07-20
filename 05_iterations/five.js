// for each loop

const coding = ["JS", "HTML", "C++", "Python", "css"]

coding.forEach((items, index, arr) =>{
    // console.log(items, index, arr)
})

const myCoding = [
    {
        companyName: "Honda",
        headquarters: "Brazil"
    },
    {
        companyName: "Toyota",
        headquarters: "Japan"
    }
]

myCoding.forEach( (items)=>{
    console.log(items.companyName)
} )