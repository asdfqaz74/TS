/* -------------------------------------------------------------------------- */
/*                                 union type                                 */
/* -------------------------------------------------------------------------- */

let str:'name' | 'age' | 'address';

type CompanyA = {
  companyName: string;
  since: number
}

type CompanyB = {
  companyName: string;
  ceo: string
}

// CompanyA 또는 CompanyB
type Company = CompanyA | CompanyB;

let company1:Company = {
  companyName: 'like-lion',
  since: 2010
}

let company2:Company = {
  companyName: '8b-studio',
  ceo: '신석범',
  since: 2022
}

// 이렇게 되면 에러가 나온다.
let company3:Company = {
  ceo: '심선범',
  since: 2021,
}

// A 그리고 B 전부 받고 싶음
type Intersection = CompanyA & CompanyB;

let company4:Intersection = {
  companyName: 'MS',
  since: 1990,
  ceo: '사티아 나델라'
}