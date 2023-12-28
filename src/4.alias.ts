/* -------------------------------------------------------------------------- */
/*                                     별칭                                     */
/* -------------------------------------------------------------------------- */

let user1 :{
  id:number;
  nickName:string;
  auth:string;
  isPayd:boolean
}={
  id:1,
  nickName:'tiger',
  auth:'admin',
  isPayd: true
}

let user2 :{
  id:number;
  nickName:string;
  auth:string;
  isPayd:boolean
}={
  id:1,
  nickName:'tiger',
  auth:'admin',
  isPayd: true
}

let user3 :{
  id:number;
  nickName:string;
  auth:string;
  isPayd:boolean
}={
  id:1,
  nickName:'tiger',
  auth:'admin',
  isPayd: true
}

// 객체 하나하나 타입을 지정하다보면 코드량이 많아진다.
// 코드를 간단하게 위해 alias 즉, 별칭을 쓰면 된다.

// alias 의 첫 문자는 대문자여야 한다.
type User = {
  id:number;
  nickName: string;
  auth: string;
  isPayd:boolean;
}

let user4:User = {
  id:1,
  nickName:'tiger',
  auth:'admin',
  isPayd: true
}

let user5:User = {
  id:1,
  nickName:'tiger',
  auth:'admin',
  isPayd: true
}

// 확장은 범쌤 노션을 참고하자

/* -------------------------------------------------------------------------- */
/*                               index signature                              */
/* -------------------------------------------------------------------------- */

// 다음 keyCode 의 타입이 모두 number 이다
let keyCode:{
  enter: number,
  backspace: number,
  tab: number,
} = {
  enter: 13,
  backspace:8,
  tab:9,
}

// 이럴 때 필요한, 인덱스 시그니처 index signature
let keyCode1:{
  [key:string] : number;
} = {
  enter: 13,
  backspace: 8,
  tab: 9,
}

// 인덕스 시그니처를 사용하면 다른 키도 받을 수 있음
let keyCode2:{
  [key:string] : number;
} = {
  enter: 13,
  backspace:8,
  tab:9,
  pageUp:33,
}