//기본 타입
let txt = "hello";
let num = 0;
let isFemale = false;
//참조형타입
let likes = ["game", "music", "movie"];
let unlikes = ["study", "sports", "homework"];
let odd = [1, 3, 5];
let even = [2, 4, 6];
//tuple: 배열의 들어갈 타입을 개별적으로 지정
// 순서에 맞게
let combined = [3, "homework", false];
//유니온타입으로 들어갈수 있는 자료형을 복수개 지정
// 이것도 들어가고 저것도 들어가고
let random = [4, "5", "3", 7];
let student1 = {
    name: "David",
    age: 20,
    isFemale: false,
    address: "seoul",
};
let student2 = {
    name: "Emily",
    age: 30,
    isFemale: true,
};
student2.isFemale = false;
console.log(student2);
student2.isFemale = true;
console.log(student2);
const plus = (n1, n2) => {
    return n1 + n2;
};
const minus = (n1, n2) => {
    return n1 - n2;
};
const multiply = (n1, n2) => {
    console.log(n1 * n2);
};
const divider = (n1, n2) => {
    return n1 / n2;
};
plus(2, 3);
