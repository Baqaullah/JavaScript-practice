// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter( (nums)=> nums > 6)

// const newNums = myNums.filter( (num)=>{
//     return num >4
// } )
// // console.log(newNums)

const books = [
    {
        title: 'Book one', genere: 'Science', publish: '1981'
    },
    {
        title: 'Book two', genere: 'Non Fiction', publish: '1992'
    },
    {
        title: 'Book three', genere: 'history', publish: '1999'
    },
    {
        title: 'Book four', genere: 'Non Fiction', publish: '1992'
    },
    {
        title: 'Book five', genere: 'Science', publish: '2009'
    },
    {
        title: 'Book six', genere: 'Fiction', publish: '1987'
    },
]

// const userBooks = books.filter( (bk)=>bk.publish>1980)
// const userBooks = books.filter( (bk)=>bk.genere ==="Science")
// const userBooks = books.filter( (bk)=>bk.title ==="Book five")
// const userBooks = books.filter( (bk)=>bk.publish < 1990 && bk.genere === "Science")

// // console.log(userBooks)

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newNum = myNumbers.map( (num)=> num+` is Your Lucky Number` )

// const newNum = myNumbers.map( (num)=> num*10 ).map( (num)=>num+1 ).filter( (num)=> num >29 )

// console.log(newNum)

// const myNums = [1, 2, 3]


// const myTotal = myNums.reduce(function (acc, currval){
//    console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// }, 0)
// console.log(myTotal)

const shoppingCard =[
    {
        courseName: "Python",
        price: 2999
    },
    {
        courseName: "JS",
        price: 4999
    },
    {
        courseName: "mongoDB",
        price: 3599
    },
    {
        courseName: "Full stack developer",
        price: 9999
    },
    {
        courseName: "HTML CSS",
        price: 2999
    },
]

const totalBill = shoppingCard.reduce( (acc, currval) => acc+currval.price, 0)
console.log(totalBill)