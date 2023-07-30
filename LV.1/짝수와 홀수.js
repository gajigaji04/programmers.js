// 문제 설명:
// 정수 num이 짝수일 경우 "Even"을 반환하고
// 홀수인 경우 "Odd"를 반환하는 함수,
// solution을 완성해주세요.

// 제한 조건:
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

// 입출력 예:
// num	return
// 3	"Odd"
// 4	"Even"

function solution(num) {
  var answer = "";
  return answer;
}

// solution(num) 명시
function solution(num) {
  // if 문으로 짝수 검증 (num % 2 === 0)
  if (num % 2 === 0) {
    // 짝수일 시 Even 반환
    return "Even";
  } else {
    // 홀수일 시 Odd 반환
    return "Odd";
  }
}

// num (3, 4) 입력
// 검증 (제한 조건: 0은 짝수입니다.)
console.log(solution(3));
console.log(solution(4));
console.log(solution(0));

// 오답노트
// 1. if문만 명시하고 function solution(num)을 먼저 선언하지 않음
// 2. 짝수를 검증하는 식을 알아냄 (num % 2 === 0), (num/2)
// 3. 명시 및 출력을 solution만이 아닌 입출력 예시를 신경써야 한다는 것을 깨달음
