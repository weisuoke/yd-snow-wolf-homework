// https://leetcode-cn.com/problems/shortest-distance-to-a-character/

var shortestToCar = function(s, c) {
  let cPositions = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      cPositions.push(i)
    }
  }

  var res = Array(s.length).fill(Infinity);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      res[i] = 0;
      continue
    }

    for (const cPosition of cPositions) {
      const dist = Math.abs(cPosition - i);

      if (dist >= res[i]) break;

      res[i] = dist;
    }
  }

  return res;
}