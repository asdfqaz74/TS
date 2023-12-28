/* -------------------------------------------------------------------------- */
/*                                  void type                                 */
/* -------------------------------------------------------------------------- */

// 비어있는

// sayHi()는 string을 return한다.
function sayHi() : string{
  return 'hello'
}

// printHi()는 반환값이 없음
// return 값이 없으면 자바스크립트에서는 undefined, 타입스크립트에서는 void을 반환
// void 대신 undefined 를 쓰면 진짜로 undefined 를 반환해 줘야함
// 함수 안의 return 의 주석을 해제하면 undefined를 반환.
function printHi(): void{
  console.log('Hello');
  
  // return
}

/* -------------------------------------------------------------------------- */
/*                                 never type                                 */
/* -------------------------------------------------------------------------- */

// 존재하지 않는 / 불가능한 타입
// 어떤 값도 정의할 수 없는

// 이 함수가 나오는 순간 사이트가 터져버림, 어떠한 값으로 정의할 수가 없음
function showError(message:string):never{
  throw new Error(message)
}

showError('에러가 발생했습니다!!')