// 01-variables.js:3 안녕하세요
// 01-variables.js:6 철수
// 01-variables.js:9 영희
// 01-variables.js:12 8
// 01-variables.js:18 2000
const classmate = ["철수", "영희"]
// undefined
classmate.length
// 2
const ages = [8, 9, 10]

// undefined
classmate.push("맹구")
// 3
classmate
// (3) ["철수", "영희", "맹구"]
classmate.pop()
// "맹구"
classmate
// (2) ["철수", "영희"]
classmate.includes("철수")
// true
classmate.includes("맹구")
// false