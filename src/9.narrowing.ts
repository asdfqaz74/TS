/* -------------------------------------------------------------------------- */
/*                                  narrowing                                 */
/* -------------------------------------------------------------------------- */

// 타입 좁히기

// parameter x에 무슨 값이 들어갈 지 모름
// x 에 들어갈 타입이 number 인지 string 인지 모르는데 어떻게 x.toUpperCase()를 실행시키겠어?
function func(x:number | string){
  x.toUpperCase();
}

type Cat = {
  name: string,
  age: 3
}

function func2(x:number | string | Date | Cat){
  
  // 타입 가드
  // 그동안 해왔던 validation 라고 보면 된다.
  if(typeof x === 'string'){
    x.toUpperCase();
  }

  else if(typeof x === 'number'){
    x.toFixed();
  }

  //  다음과 같은 validation은 굉장히 위험함. 
  //  null 이 들어가도 object 이기 때문
  // else if(typeof x === 'object'){
  //   x.getTime()
  // }

  else if(x instanceof Date){
    x.getTime()
  }

  // x 가 Cat 이면 콘솔에 3이 찍힘
  else if ('age' in x){
    console.log(x.age);
    
  }
}