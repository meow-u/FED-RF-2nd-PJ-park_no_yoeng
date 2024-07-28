
/* 
[두수의 합] 

정수 배열 nums 과 정수가 주어지면 target, 
두 숫자의 인덱스를 반환하여 두 숫자의 합이target 이 되도록 합니다. 
각 입력에 대한 해답은 정확히 하나만 있다고 가정할 수 있으며 , 
같은 요소를 두 번 사용할 수 없습니다 .
 */

/* 
유효한 답은 오직 하나뿐입니다.

예시 1:
입력: nums = [2,7,11,15], target = 9
 출력: [0,1]
 설명: nums[0] + nums[1] == 9이므로 [0, 1]을 반환합니다.

예시 2:
입력: nums = [3,2,4], target = 6
 출력: [1,2]

예시 3:
입력: nums = [3,3], target = 6
 출력: [0,1]
  */

const twoSum = function (nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          result.push(i,j);``
        //   result.push(j);
          return result;
        }
      }
    }
};
 console.log( twoSum([3, 2, 4], 6));