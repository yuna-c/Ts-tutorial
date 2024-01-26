// //기본 타입
// let txt: string = "hello";
// let num: number = 0;
// let isFemale: boolean = false;
const fetchData = (info) => {
    console.log(info);
};
//특정 interface형식으로 배열값이 전달될때 (DB, API data)
const info1 = [
    { name: "David", age: 30, period: 40 },
    { name: "David", age: 30, period: 40 },
    { name: "David", age: 30, period: 40 },
];
//generic으로 인터페이스 활용하는 사례
//범용적으로 배열로 묶여있는 객체데이터를 활용하는 (Component)
//특정 데이터 카테고리 외의 값이 전달시 에러나게 할때 Generict 특정 데이터의 인터페이스 전달
fetchData(info1);
