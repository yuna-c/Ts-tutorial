// //기본 타입
// let txt: string = "hello";
// let num: number = 0;
// let isFemale: boolean = false;
/*
const addPost = (data: Post) => {
  console.log(data);
};
*/
// const addPost = <t>(data: t) => {
//   console.log(data);
// };
// addPost<Post>({ tit: "a", con: "b"});
const addPost = (data) => {
    console.log(data);
};
addPost({ tit: "a", con: "b", name: "aa", age: 10 });
