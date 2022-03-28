/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var addToArrayForm = function(num, k) {
  let result = [];
  let len = num.length;
  for (let i = len - 1; i >= 0; --i) {
    let sum = num[i] + k % 10;

    k = Math.floor(k / 10)

    if (sum >= 10) {
      k++
      sum -= 10
    }

    result.push(sum);
  }

  for (; k > 0; k = Math.floor(k / 10)) {
    result.push( k % 10)
  }

  return result.reverse()
};