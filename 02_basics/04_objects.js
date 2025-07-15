// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "abc123"
tinderUser.name = "Baqa"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Baqa",
            lastname: "ullah"
        }
    }
}

// console.log(regularUser.email)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "c", 6: "d"}
// const obj3 = Object.assign({}, obj1, obj2)

const obj4 ={...obj1, ...obj2, ...obj3}
// console.log(tinderUser.hasOwnProperty("isLoggedoff"));

const course = {
    coursename: "js in urdu",
    courseFee: "999",
    courseInstructor: "waqar"
}
const {courseInstructor: instructor} = course
// console.log(instructor);


