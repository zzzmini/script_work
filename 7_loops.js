// for loop 문법
// 자바와 동일
// #
// ##
// ###
// ####
// #####
// for(let i=0; i<=5; i++){}
for(let i=1; i<=5; i++){
  let star = ''
  for(let j=1; j<=i; j++){
    star = star + '#';
  }
  console.log(star)
}

// Java : advanced For 
// for(int x : data) {
// }

// Java Script
// for ~ in 구문 : 인덱스 기준
// for ~ of 구문 : Java의 advanced for랑 같음.

const ahn = {
  name : '안유진',
  year : 2003,
  group : 'ive'
}
