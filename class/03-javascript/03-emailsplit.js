const classmates = ["철수", "영희", "훈이"]
// undefined
classmates[0]
// "철수"
classmates[1]
// "영희"
const email = "codecamp@gmail.com"
// undefined
email.length
// 18
email[1]
// "o"
email.includes("@")
// true
email.split("@")
// (2) ["codecamp", "gmail.com"]
email.split("@")[0]
// "codecamp"
email.split("@")[1]
// "gmail.com"
const front = email.split("@")[0]
// undefined
const back = email.split("@")[1]
// undefined
front
// "codecamp"
back
// "gmail.com"
const newFront = []
// undefinedd
newFront.push(front[0])
// 1
newFront
// ["c"]
newFront.push(front[1])
// 2
newFront.push(front[2])
// 3
newFront.push(front[3])
// 4
newFront
// (4) ["c", "o", "d", "e"]0: "c"1: "o"2: "d"3: "e"length: 4__proto__: Array(0)
newFront.push("*")
// 5
newFront.push("*")
// 6
newFront.push("*")
// 7
newFront.push("*")
// 8
newFront
// (8) ["c", "o", "d", "e", "*", "*", "*", "*"]
newFront.join("")
// "code****"
newFront.join("") + @ + back
// VM1032:1 Uncaught SyntaxError: Invalid or unexpected token
newFront.join("") + "@" + back
// "code****@gmail.com"
const result = newFront.join("") + "@" + back
// undefined
result
// "code****@gmail.com"