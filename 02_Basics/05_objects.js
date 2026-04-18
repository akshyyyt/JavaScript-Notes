const course = {
    courseName: "Complete JS",
    price: "999",
    courseInstructor: "Hitesh"
}

course.courseInstructor // Messy method

// Easy and efficient method for accessing
const {courseInstructor: instructor} = course // Here in {} we did object de-structuring which help when data comes from REACT
// console.log(instructor);

// {
//     "courseName": "Complete JS",
//     "price": "999",
//     "courseInstructor": "Hitesh"
// } // All this is JSON, it can either be in object or array ie {} or []. This basically provides data.

// ES6 Way
const bestCoder = {
    name: "Gyan",
    rating: 1000,
    city: "Banaras"
}

const {hobby = "Not Defined"} = bestCoder
// console.log(hobby) // This will give "Not Defined value" but if there is a value inside object it will give that.\

const score = [87, 97, 93]
const [t1, t2] = score
// console.log(t2) // 97