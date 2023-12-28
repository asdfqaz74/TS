/* -------------------------------------------------------------------------- */
/*                                  enum type                                 */
/* -------------------------------------------------------------------------- */

// 타입스크립트에만 있음
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

// 코드량이 많아지면 뭐가 뭔지 헷갈림
const direction = {
  up: 1,
  down: 2,
  left: 3,
  right: 4
}

const direction2 = {
  up: Direction.UP,
  down: Direction.DOWN,
  left: Direction.LEFT,
  right: Direction.RIGHT
}

// 주의할 점
// ENUM 을 사용하면 tree-shaking(가지치기)이 안된다.
// 터미널에 다음 명령어를 쳐보자.
// $ tsx src/5.enum.ts
console.log(direction2);
