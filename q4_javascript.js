// 1 find the average of the marks 
// 2.then find the corresponding grades

marks = [80, 77, 88, 95, 68]

function findAverage() {
    let sum = 0
    for (let i=0; i<marks.length; i++) {
        sum = sum + marks[i]
    }
    return sum/marks.length
}

console.log("Average marks:", findAverage(marks))
const averageMarks = findAverage(marks)

if(averageMarks < 60) {
    console.log("F")
}
else if(averageMarks < 70) {
    console.log("D")
}
else if(averageMarks < 80) {
    console.log("C")
}
else if(averageMarks < 90) {
    console.log("B")
}
else {
    console.log("A")
}
