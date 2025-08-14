console.log('원본 수정하는 함수')
console.log('1) array 함수')
let iveMember = [
  '장원영',
  '안유진',
  '리즈',
];

console.log('for ~ of')
for(let x of iveMember){
  console.log(x)
}

// array에서 사용되는 함수 ---> 원본을 수정
// 1) push() : array 맨 끝에 추가
iveMember.push('가을');
console.log(iveMember.push('이서'));
console.log(iveMember);

// 2) pop() : array에서 맨 마지막자료 삭제
let removeMember = iveMember.pop()
console.log(removeMember);
console.log(iveMember);

// 3) unshift() : array 맨 앞에 추가하기
iveMember.unshift('홍길동');
console.log(iveMember);

// 4) shift() : array 맨 앞 자료 삭제하기
iveMember.shift();
console.log(iveMember);

// 5) splice(시작위치, 몇개) : 삭제할 건지...
iveMember.splice(2, 2)
console.log(iveMember);

let ive = [
  '장원영',
  '안유진',
  '리즈',
  '가을'
];

console.log('원본 수정 안하는 함수')
// 6) concat() : 새 아이템을 뒤에 삽입
console.log(ive.concat('홍길동'))
console.log(ive);

console.log('--------------------------')
// 7) slice(어디부터, 어디까지) : 검색
// 끝 위치 : 어디까지 - 1 
// ive.slice(0, 3) : 0 ~ 2까지 검색
console.log(ive.slice(0,3));

console.log(ive);

// 7) spread operator ******** "..."
// 배열의 내용을 펼쳐서 처리를 함.
// 하드카피 할 때 많이 사용
console.log('----------------------')
let ive2 = ive;  // 얕은 복사(주소 공유)
console.log(`ive : ${ive}`)
console.log(`ive2 : ${ive2}`)

// ive2 맨 앞에 홍길동 추가하기
ive2.unshift('홍길동')
console.log(`ive : ${ive}`)
console.log(`ive2 : ${ive2}`)

console.log('배열 또는 오브텍트 하드카피...')
let ive3 = [...ive];
ive3.unshift('이순신');
console.log(`ive : ${ive}`)
console.log(`ive3 : ${ive3}`)

let obj = {name : '아무개'};
let obj2 = {...obj};

// 8) join() 함수
// 배열 내 자료를 , 로 구분한 후 문자열로 반환
// ive를 iveMember로 하드카피하기
console.log('8) join() 함수')
let iveMembers = [...ive];
console.log(iveMembers.join('/'))

// 9) 정렬하기
console.log('9) 정렬하기 - sort() : 원본 수정 함.')
let sortIve = [...ive];
// 숫자와 문자 모두 문자로 바꾸어서 utf-8 로 비교
sortIve.sort();
console.log(sortIve);

// 10) 정렬하기
console.log('10) 역순정렬하기 - reverse() : 원본 수정 함.')
// 숫자와 문자 모두 문자로 바꾸어서 utf-8 로 비교
sortIve.reverse();
console.log(sortIve);

// 11) sort() 함수로 오름차순, 내림차순 정렬
console.log('11) sort Asc/Desc...')
let numbers = [1, 9, 7, 5, 3, ];
console.log(numbers);
// numbers.sort();
// console.log(numbers);

// 오름차순 정렬
// 반환값 규칙
// 양수(1) : a가 b 뒤로 가야 함.
// 음수(-1) : a가 b 앞으로 가야 함.
// 0 : 현재 순서 유지
numbers.sort((a, b) => {
  return a > b? 1 : -1;
})
// 9, 7 : 9 > 7 : 1 -> 7, 9 --> 오름차순
// 1, 9 : 1 < 9? 1 : -1; -> 9, 1 --> 내림차순
console.log(numbers);

// 12) 배열 중 기준잡아서 정렬하기
const k_group = [
  {
    group : '아이브',
    name : ['장원영','안유진', '이서'],
    count : 5
  },
  {
    group : '케플러',
    name : ['최유진', '샤오팅','마시로'],
    count : 9
  },
  {
    group : '에스파',
    name : ['카리나', '윈터','지젤','닝닝'],
    count : 4
  },
]
console.log('12) 그룹이름으로 오름차순 정렬하기')
// console.log(k_group);
// 그룹이름으로 오름차순 정렬하기

let copyGroup = k_group.map(item => ({ ...item, name: [...item.name] }));;
console.log('원래의 k_group')
console.log(k_group);
// 1. 아이브 -> ive
copyGroup[0].group = 'ive';
// 2. 아이브 그룹의 name 중 이서 -> 가을
copyGroup[0].name[2] = '가을';
console.log('복사한 copy_group')
console.log(copyGroup);
console.log('원래의 k_group')
console.log(k_group);
// copyGroup.sort((a, b)=>{
//   return a.group > b.group ? 1 : -1;
// })
// console.log(copyGroup);

// console.log('13) 그룹이름으로 내림차순 정렬하기')
// let reverseGroup = [... k_group];
// reverseGroup.sort((a, b)=>{
//   return a.group < b.group ? 1 : -1;
// })
// console.log(reverseGroup);