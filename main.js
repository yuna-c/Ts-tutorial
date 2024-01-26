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
const plus = (n1, n2) => {
    // return n1 + n2;
    console.log(n1);
    console.log(n2);
};
plus(1, 2, 3, 5);
// 메모리 할당
//type 특정 커스터마이징된 자료형을 새로 선언할때
//type vs interface차이점
//interface는 객체에만 적용가능
//type은 자료형 상관없이 모두 적용가능
// type Grade = "A" | "B" | "C" | "D" | "F";
/*
interface Student {
  name: string;
  age: number;
  readonly isFemale: boolean; //특정 property를 수정불가하게 읽기 전용으로 지정
  // address?: string; //해당 property를 선택사항으로 지정
  score: Grade;
}
*/
// 인터페이스 객체를 타입 형식으로 만든 것
//Interface 대신 type으로도 객체타입 선언가능
// type Student = {
//   name: string;
//   age: number;
//   readonly isFemale: boolean; //특정 property를 수정불가하게 읽기 전용으로 지정
//   // address?: string; //해당 property를 선택사항으로 지정
//   score: Grade;
// };
// let student1: Student = {
//   name: "David",
//   age: 20,
//   isFemale: false,
//   // address: "seoul",
//   score: "F",
// };
// student1.score = "F";
//interface는 객체의 property 확장에 따른 구조변경이 편함(추가할때)
// interface Student {
//   name: string;
//   age: number;
// }
// interface Student {
//   name: string;
//   age: number;
//   isFemale: boolean;
// }
// let student1: Student = {
//   name: "David",
//   age: 30,
//   isFemale: false,
// };
// type
// type Student = {
//   name: string;
//   age: number;
// };
// type Student = {
//   name: string;
//   age: number;
//   isFemale: boolean;
// };
// let student1: Student = {
//   name: "David",
//   age: 30,
//   isFemale: false,
// };
//type 주로 쓰는 경우
//1. 기존 객체타입의 property의 추가가 아닌, 서로 다른 객체를 합쳐서 새로운 타입을 만들때
//2. 객체가 아닌 일반 자료형인데
// interface StudentA {
//   name: string;
//   age: number;
// }
// interface StudentB {
//   name: string;
//   isFemale: boolean;
// }
// //type이용해서 두개의 인터페이스에서 Intersection으로 &&로 합쳐서 새로타입지정
// type StudentTotal = StudentA & StudentB;
// let student1: StudentTotal = {
//   name: "Emily",
//   age: 30,
//   isFemale: true,
// };
// //객체는 아니지만 특정 커스터마이징된 타입을 재활용해야 될떄 type으로 지정
// type commonType = string | null;
// const test = (info: commonType) => {
//   console.log(info);
// };
//특정 파라미터값을 optional처리시 type의 오류는 넘어갈 수 있지만
//optional처리한 값을 코드 내부적으로 예외처리하지 않으면 에러가 발생
const test = (n1, n2, n3) => {
    const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
    return result;
};
//위의 함수의 예외처리를 아래와 같이 간결하게 처리
const test2 = (n1, n2, n3) => {
    const result = n1 + n2 + (n3 || 0);
    return result;
};
console.log(test2(1, 2));
