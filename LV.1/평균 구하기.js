/*
문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, 
solution을 완성해보세요.

제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

입출력 예
arr	        return
[1,2,3,4]	2.5
[5,5]	    5
*/

function solution(arr) {
  // `reduce` 메소드를 사용 -> 배열 `arr`의 모든 요소들을 누적하여 합산
  // `sum`: 누적된 합계를 나타내는 변수
  // `current`: 배열 `arr`에서 현재 처리 중인 요소를 나타냄
  // `sum + current`: 각 요소를 합산하여 누적된 값을 계산
  return arr.reduce((sum, current) => sum + current) / arr.length;
}
// `/arr.length`:
// - 합산된 값에 배열 `arr`의 요소 개수를 나누어 평균을 구함
// - arr.length`는 배열 `arr`의 요소 개수를 나타냅
