/*
문제 설명
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 
분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 <numer1, denom1, numer2, denom2 < 1,000

입출력 예
numer1	denom1	numer2	denom2	result
1	    2	    3	    4	    [5, 4]
9	    2	    1	    3	    [29, 6]

입출력 예 #1
1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.

입출력 예 #2
9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
*/

function solution(numer1, denom1, numer2, denom2) {
  var commonDenominator = denom1 * denom2;

  // 두 분수의 공통 분모를 곱하여 계산
  var commonNumer1 = numer1 * denom2;
  var commonNumer2 = numer2 * denom1;

  // 분수를 공통분모로 변환한 후 함수는 새 분자를 합산하여 분수의 합을 계산
  var sumNumer = commonNumer1 + commonNumer2;

  // 두 숫자 사이의 최대 공약수(GCD)를 계산
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // 분자의 합과 공통분모 사이의 최대 공통분모 찾기
  var greatestCommonDivisor = gcd(sumNumer, commonDenominator);
  // 함수는 단순화된 분수를 배열로 반환
  // simplifiedNumer = 분자
  var simplifiedNumer = sumNumer / greatestCommonDivisor;
  // simplifiedDenom = 분모
  var simplifiedDenom = commonDenominator / greatestCommonDivisor;

  return [simplifiedNumer, simplifiedDenom];
}

console.log(solution(1, 2, 3, 4));
