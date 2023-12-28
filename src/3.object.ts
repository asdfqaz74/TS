/* -------------------------------------------------------------------------- */
/*                                 object type                                */
/* -------------------------------------------------------------------------- */

// user 객체에게 타입을 명시를 하려고 한다. 
// 명시 해줄때는 열거해서 명시해줘야 한다.
// object literal type
let user = {
  id:1,
  nickName: 'tiger'
}

let user1:{
  id:number;
  nickName:string
} = {
  id:1,
  nickName: 'tiger'
}

// 없는 키 값을 추가하면 에러가 뜬다.
user1 = {
  id:10,
  nickName: 'kindtiger',
  asdf: 12
}
// 또는 있어야 할 키 값이 없으면 안된다.
user1 = {
  id: 12
}

// 만약에 id 를 넣기 싫다면?
// ? 를 넣으면 된다. 마치, 옵셔널 체이닝
let user2:{
  id?:number; // 선택적 프로퍼티
  nickName:string
} = {
  id:1,
  nickName: 'tiger'
}

user2 = {
  nickName: 'freshTiger'
}

// 읽기 전용으로 바꿔주고 싶을때는 readonly!
let config : {
  readonly apiKey:string
} = {
  apiKey: 'MY API KEY IS ...'
}