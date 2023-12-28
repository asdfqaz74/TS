/* -------------------------------------------------------------------------- */
/*                                   generic                                  */
/* -------------------------------------------------------------------------- */

// 함수에 많이 쓰임
// sumFunc() 함수는 parameter 에 number 타입을 받고 number 타입을 반환한다.
function sumFunc(value:number):number{
  return value
}

let a = sumFunc(10)

// 근데 string 이나 boolean 을 받아야한다면?
let b = sumFunc2('10')
let c = sumFunc2(true)

// <T> 를 변수처럼 생각하면 됨.
// T 에 string값 이 들어갔다면 (value:string):string 이 됨.
// T 에 boolean값 이 들어갔다면 (value:boolean):boolean 이 됨.
function sumFunc2<T>(value:T):T{
  return value
}


/* -------------------------------------------------------------------------- */
/*                             parameter 가 여러개 라면?                        */
/* -------------------------------------------------------------------------- */

function swapAtoB(a:string,b:string):string[]{
  return [b,a]
}
swapAtoB('hello','bye')

// 그런데 'hello', 'bye' 대신에 서로 다른 타입의 값이 들어가게 된다면?
swapAtoB('a',1);
// 오류를 띄우게 된다.

// 이럴 땐 여러개의 generic을 하면 된다. T 와 U 자리는 아무 문자가 들어가도됨. 다만 대중적인 것은 T, U 등이다.
function swapAtoB2<T,U>(a:T,b:U):(T|U)[]{
  return [b,a]
}

/* -------------------------------------------------------------------------- */
/*                            이 친구의 타입은 뭐로 해줘야 하나?                   */
/* -------------------------------------------------------------------------- */
function getLength(data){

  return data.length;
}

const b1 = getLength([1,2,3])
const b2 = getLength('tiger')
const b3 = getLength({length:5})

// 이렇게 확장시키면 된다.
// data:T 에 {length:number} 라는 타입이 추가
function getLength2<T extends {length:number}>(data:T){

  return data.length;
}

const c1 = getLength([1,2,3])
const c2 = getLength('tiger')
const c3 = getLength({length:5})