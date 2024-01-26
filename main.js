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
//각각의 Interface로 구성된 타입을 지정 (실무에서 가장 많이 쓰이는 패턴 DB나 API에서 데이터 가져올떄)
const classInfo = [
    { name: "David", age: 20, isFemale: false, address: "Seoul" },
    { name: "Michael", age: 30, isFemale: false },
    { name: "Jula", age: 32, isFemale: true },
];
//단순 문자타입으로 구성된 배열
const names = ["red", "green", "blue"];
const names2 = [1, 2, 3];
const getArrayInfo = (arr) => {
    console.log(arr);
};
//제네릭으로 인터페이스도 타입으로 전달해서 호출 가능 (해당 패턴을 제일 많이 사용)
getArrayInfo(classInfo);
getArrayInfo(names);
//아래처럼 우리 함수에서 의도한 값이랑 다른값이 들어올떄 generic을 해서 오류파악 가능
getArrayInfo(names2);
