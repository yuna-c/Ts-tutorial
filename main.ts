// //기본 타입
// let txt: string = "hello";
// let num: number = 0;
// let isFemale: boolean = false;

// //참조형타입
// let likes: string[] = ["game", "music", "movie"];
// let unlikes: Array<string> = ["study", "sports", "homework"];
// let odd: number[] = [1, 3, 5];
// let even: Array<number> = [2, 4, 6];
// //tuple: 배열의 들어갈 타입을 개별적으로 지정
// // 순서에 맞게
// let combined: [number, string, boolean] = [3, "homework", false];
// //유니온타입으로 들어갈수 있는 자료형을 복수개 지정
// // 이것도 들어가고 저것도 들어가고
// let random: Array<number | string> = [4, "5", "3", 7];

//Interface : 객체같이 복잡한 구조의 타입을 지정을 할때
//특정 경우에 대한 커스텀타입을 제작해서 재활용

// interface Student {
//   name: string;
//   age: number;
//   readonly isFemale: boolean; //특정 property를 수정불가하게 읽기 전용으로 지정
//   address?: string; //해당 property를 선택사항으로 지정
// }
// let student1: Student = {
//   name: "David",
//   age: 20,
//   isFemale: false,
//   address: "seoul",
// };

// let student2: Student = {
//   name: "Emily",
//   age: 30,
//   isFemale: true,
// };

// student2.isFemale = false;
// console.log(student2);
// student2.isFemale = true;
// console.log(student2);

//리턴값이 있는 함수면 파라미터뒤에 리턴값의 타입지정가능
//리턴값이 없으면 리턴값의 타입을 void지정
//일반적으로 인수가 제대로 전달되면 리턴값이 잘못나올리가 없고
//리턴으로 에러가 잡혀봤자 이미 에러가 난 상황이기 때문에 return에 타입지정이 무의미

//다른 로직의 함수라고 하더라도 전달되는 인수와 리턴값이 매번 같은 패턴이면 일일이 함수마다 타입지정이 번거로움
//함수로 인터페이스로 특정함수의 타입을 지정해서 재활용가능
// interface Calc {
//   // (...n: Array<string | number>): number | void;
//   // 파라미터로 전달되는 인수의 갯수를 특정할 수 없을 때 rest 파라미터 지정하고 배열ㄷ타입 설정
//   (...n: number[]): number | void;
// }

// const plus: Calc = (n1, n2) => {
//   // return n1 + n2;
//   console.log(n1);
//   console.log(n2);
// };

// plus(1, 2, 3, 5);

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
// const test = (n1: number, n2: number, n3?: number): number => {
//   const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
//   return result;
// };

// //위의 함수의 예외처리를 아래와 같이 간결하게 처리
// const test2 = (n1: number, n2: number, n3?: number): number => {
//   const result = n1 + n2 + (n3 || 0);
//   return result;
// };

// console.log(test2(1, 2));

// ||연산자로 예외처리했을때 문제가 발생할 수 있는 상황
// const introduce = (name: string, age: number) => {
//   console.log(`This is ${name}`);
//   console.log(`${name} is ${age ?? "default"} years old`);
// };

// //기존 ||연산자보다 null병합 연산자를 써야되는 이유
// // ||연산자는 빈문자나 0같이 실제적인 값조차도 false로 인식해서 예외처리하므로 예상치못한 문제발생 가능

// // ??연산자는 무조건 undefined, null같이 실제적으로 에러가 발생할만한 상황에서만 예외처리
// introduce("my Baby", 0);

/* */
//Generic
//공통된 규칙인데 호출할때 들어갈 자료형을 매번 산정하기 어려울때
//일일이 타입을 따로 지정하는것이 비효율적이므로 타입지정을 호출할떄 지정하는 틀

//아래같은 경우는 배열의 들어가는 자료값이 일정하지 않으므로 똑같은 구조임에도불구하고
//타입에 따른 함수를 여러개 복사해야 되는 번거로움
// const getLength = (arr: number[]) => {
//   return arr.length;
// };

// const getLength2 = (arr: string[]) => {
//   return arr.length;
// };

// //any타입으로 지정함으로서 위의 문제점 해결
// const getAnyLength = (arr: any[]) => {
//   return arr.length;
// };

// //any타입을 지정하면 정상적이지 못한 값이 들어와도 컴파일시 에러잡지 못함
// const numbers = [1, 2, 3, 4, 5];
// const letters = ["a", "b", "c"];
// const weired = [false, 3, "3"];
// getAnyLength(numbers);
// getAnyLength(letters);
// getAnyLength(weired);

// //generic으로 호출시 상세타입을 파라미터로 전달
// const getGenericLength = <t>(arr: t[]) => {
//   return arr.length;
// };

// //함수호출시 미리 지정한 경로 타입을 전달하는 구조
// getGenericLength<string>(["a", "b"]);
// getGenericLength<number>([1, 2]);
// getGenericLength<number | string>([1, "2"]);

// test(1, 2, 3, 4);
// function test(...arr) {
//   //전개연산자로 값을 꺼내오는것 이게 복사
//   console.log([...arr]);
// }

//객체로 구성된 배열의 타입

//개별객체의 타입인 interface지정
// interface Student {
//   name: string;
//   age: number;
//   isFemale: boolean;
//   address?: string;
// }

// //각각의 Interface로 구성된 타입을 지정 (실무에서 가장 많이 쓰이는 패턴 DB나 API에서 데이터 가져올떄)
// const classInfo: Student[] = [
//   { name: "David", age: 20, isFemale: false, address: "Seoul" },
//   { name: "Michael", age: 30, isFemale: false },
//   { name: "Jula", age: 32, isFemale: true },
// ];

// //단순 문자타입으로 구성된 배열
// const names: string[] = ["red", "green", "blue"];
// const names2: number[] = [1, 2, 3];

// const getArrayInfo = <t>(arr: t[]) => {
//   console.log(arr);
// };

// //제네릭으로 인터페이스도 타입으로 전달해서 호출 가능 (해당 패턴을 제일 많이 사용)
// getArrayInfo<Student>(classInfo);
// getArrayInfo<string>(names);
//아래처럼 우리 함수에서 의도한 값이랑 다른값이 들어올떄 generic을 해서 오류파악 가능
// getArrayInfo<string>(names2);
//제네릭에서 interface 확장하기
//이미 특정 interface가 파라미터로 적용되어 있는 상태에서
//특정 상황에서만 다른 interface의 기능을 빌려와서 임시로 타입을 확장해서 호출하고 싶을때 사용
//굳이 interface를 고치긴 번거롭고 확장해야 되는 기능이 복잡할때

// interface Student {
//   name: string;
//   age: number;
// }

// interface Abroad {
//   nation: string;
//   period: number;
// }

// const fetchData = <t>(info: t[]) => {
//   console.log(info);
// };

// //특정 interface형식으로 배열값이 전달될때 (DB, API data)
// const info1 = [
//   { name: "David", age: 30, period: 40 },
//   { name: "David", age: 30, period: 40 },
//   { name: "David", age: 30, period: 40 },
// ];

// //generic으로 인터페이스 활용하는 사례
// //범용적으로 배열로 묶여있는 객체데이터를 활용하는 (Component)
// //특정 데이터 카테고리 외의 값이 전달시 에러나게 할때 Generict 특정 데이터의 인터페이스 전달
// fetchData<Student>(info1);

interface Post {
  tit: string;
  con: string;
}
interface User {
  name: string;
  age: number;
}

/*
const addPost = (data: Post) => {
  console.log(data);
};
*/

// const addPost = <t>(data: t) => {
//   console.log(data);
// };
// addPost<Post>({ tit: "a", con: "b"});

const addPost = <t extends User>(data: t) => {
  console.log(data);
};

addPost({ tit: "a", con: "b", name: "aa", age: 10 });
