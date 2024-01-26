//기본 타입
let txt: string = "hello";
let num: number = 0;
let isFemale: boolean = false;

//참조형타입
let likes: string[] = ["game", "music", "movie"];
let unlikes: Array<string> = ["study", "sports", "homework"];
let odd: number[] = [1, 3, 5];
let even: Array<number> = [2, 4, 6];
//tuple: 배열의 들어갈 타입을 개별적으로 지정
// 순서에 맞게
let combined: [number, string, boolean] = [3, "homework", false];
//유니온타입으로 들어갈수 있는 자료형을 복수개 지정
// 이것도 들어가고 저것도 들어가고
let random: Array<number | string> = [4, "5", "3", 7];

//Interface : 객체같이 복잡한 구조의 타입을 지정을 할때
//특정 경우에 대한 커스텀타입을 제작해서 재활용
interface Student {
  name: string;
  age: number;
  readonly isFemale: boolean; //특정 property를 수정불가하게 읽기 전용으로 지정
  address?: string; //해당 property를 선택사항으로 지정
}
let student1: Student = {
  name: "David",
  age: 20,
  isFemale: false,
  address: "seoul",
};

let student2: Student = {
  name: "Emily",
  age: 30,
  isFemale: true,
};

student2.isFemale = false;
console.log(student2);
student2.isFemale = true;
console.log(student2);

//리턴값이 있는 함수면 파라미터뒤에 리턴값의 타입지정가능
//리턴값이 없으면 리턴값의 타입을 void지정
//일반적으로 인수가 제대로 전달되면 리턴값이 잘못나올리가 없고
//리턴으로 에러가 잡혀봤자 이미 에러가 난 상황이기 때문에 return에 타입지정이 무의미

//다른 로직의 함수라고 하더라도 전달되는 인수와 리턴값이 매번 같은 패턴이면 일일이 함수마다 타입지정이 번거로움
//함수로 인터페이스로 특정함수의 타입을 지정해서 재활용가능
interface Calc {
  (n1: number, n2: number): number | void;
}

const plus: Calc = (n1, n2) => {
  return n1 + n2;
};

const minus: Calc = (n1, n2) => {
  return n1 - n2;
};

const multiply: Calc = (n1, n2) => {
  console.log(n1 * n2);
};

const divider: Calc = (n1, n2) => {
  return n1 / n2;
};

plus(2, 3);
